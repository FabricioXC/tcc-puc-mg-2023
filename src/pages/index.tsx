import React, { useEffect, useState } from "react";
import Router from "next/router";
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import useWindowDimensions from "@/helper/get-dimensions";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
// import { initFirebase } from "@/firebase/firebaseApp";
import { Auth } from "@/services/auth";
import { useFormik } from "formik";
import { decryptId, encryptId } from "@/encryption";
import StandardModal from "@/components/Modal/StandardModal";

// import GoogleButton from "@/components/Button/GoogleButton";

function Home() {
  // initFirebase();
  const { height } = useWindowDimensions();
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const [showStandardModal, setShowStandardModal] = useState(false);
  const [standardModalInfo, setStandardModalInfo] = useState({
    msg: "",
    title: "",
    icon: "",
  });
  const [forgotPass, setForgotPass] = useState(false);
  const [saveData, setSaveData] = useState(false);
  const [loginMode, setLoginMode] = useState(true);
  const [isloading, setIsLoading] = useState(false);
  const handleIsLoading = () => {
    setIsLoading(false);
  };
  useEffect(() => {
    if (user) {
      Router.push("/dashboard");
    }
  }, [user]);

  const handleGoogleSignin = () => {
    Auth.googleSignIn(auth, handleIsLoading);
  };

  const persistData = (email: string, pass: string) => {
    if (email && pass) {
      localStorage.setItem("email", email);
      localStorage.setItem("pass", encryptId(pass));
    }
  };

  const removeData = () => {
    localStorage.setItem("email", "");
    localStorage.setItem("pass", "");
  };

  const handleEmailSignin = (
    email: string,
    pass: string,
    handleIsLoading: any,
    handleFirstRegister: any
  ) => {
    if (saveData) {
      persistData(email, pass);
    } else {
      removeData();
    }
    Auth.emailSignIn(
      auth,
      email,
      pass,
      handleIsLoading,
      setShowStandardModal,
      setStandardModalInfo,
      handleFirstRegister
    );
  };
  console.log("TEST .env: ", process.env.APP_ENCRYPT_KEY);
  const handleEmailSignup = (
    email: string,
    pass: string,
    handleIsLoading: any,
    handleFirstRegister: any
  ) => {
    if (saveData) {
      persistData(email, pass);
    } else {
      removeData();
    }
    Auth.emailSignUp(
      auth,
      email,
      pass,
      handleIsLoading,
      setShowStandardModal,
      setStandardModalInfo,
      handleFirstRegister
    );
  };

  const handleLoginMode = (e: any) => {
    e.preventDefault();
    setLoginMode(!loginMode);
  };

  // const handleSignout = (e: any) => {
  //   e.preventDefault();
  //   auth.signOut();
  // };
  const handleForgotPass = (e: any) => {
    e.preventDefault();
    setForgotPass(!forgotPass);
  };

  const validate = (values: any) => {
    const errors: any = {};

    if (!values.email) {
      errors.email = "Required";
      errors.email = `O campo email deve ser preenchido.`;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Endereço de email inválido";
    }
    if (!forgotPass) {
      if (!values.pass) {
        errors.pass = `O campo senha deve ser preenchido.`;
      } else if (values.pass.length < 8) {
        errors.pass = "A senha deve conter pelo menos 8 caracteres.";
      }
    }
    return errors;
  };
  const handleFirstRegister = (query: string) => {
    Router.push(`"/register?registeruser=${query}`);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      pass: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      const params = {
        email: values.email,
        password: values.pass,
      };
      setIsLoading(true);

      if (forgotPass) {
        Auth.resetPassword(
          auth,
          params.email,
          handleIsLoading,
          setShowStandardModal,
          setStandardModalInfo
        );
      } else if (loginMode) {
        handleEmailSignin(
          params.email,
          params.password,
          handleIsLoading,
          handleFirstRegister
        );
      } else {
        handleEmailSignup(
          params.email,
          params.password,
          handleIsLoading,
          handleFirstRegister
        );
      }
    },
  });

  // const [initialValues, setInitialValues] = useState({ email: "", pass: "" });
  useEffect(() => {
    const email = localStorage.getItem("email");
    const pass = localStorage.getItem("pass");

    console.log(email, pass);
    if (email && pass) {
      formik.setFieldValue("email", email);
      formik.setFieldValue("pass", decryptId(pass));
      setSaveData(true);
    }
  }, []);
  console.log("FORMIK", formik.values);

  useEffect(() => {
    if (forgotPass) {
      // setSaveData(false);
    }
    console.log("Passou aqui");
  }, [forgotPass]);
  const handleSaveData = () => {
    setSaveData(!saveData);
  };
  const [firstClick, setFirstClick] = useState(false);
  return (
    <>
      <StandardModal
        title={standardModalInfo.title}
        showModal={showStandardModal}
        setShowModal={setShowStandardModal}
        icon={standardModalInfo.icon}
        // msg={setStandardModalMessage}
        msg={standardModalInfo.msg}
      />

      <MDBContainer
        className="d-flex flex-column"
        style={{
          maxWidth: "500px",
          height: height,
          paddingTop: `${(height as number) * 0.2}px`,
        }}
      >
        <div className="d-flex justify-content-center mb-3 fs-1 pb-5">
          <p>TCC PUC-MG</p>
        </div>
        <div className="mb-4">
          <MDBInput
            name="email"
            // wrapperClass="mb-4"
            label="Email"
            id="form1"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <p
            style={{
              margin: 0,
              fontSize: "10px",
              paddingTop: "5px",
              color: "red",
              height: "15px",
            }}
          >
            {formik?.errors?.email && firstClick && `*${formik?.errors?.email}`}
          </p>
        </div>
        {!forgotPass && (
          <div className="mb-4">
            <MDBInput
              name="pass"
              label="Senha"
              id="form2"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.pass}
            />
            <p
              style={{
                margin: 0,
                fontSize: "10px",
                paddingTop: "5px",
                color: "red",
                height: "15px",
              }}
            >
              {formik?.errors?.pass && firstClick && `*${formik?.errors?.pass}`}
            </p>
          </div>
        )}
        <div
          className={`d-flex justify-content-${
            !forgotPass ? "between" : "end"
          } mx-3 mb-4`}
        >
          {!forgotPass && (
            <MDBCheckbox
              name="flexCheck"
              type="checkbox"
              checked={saveData}
              id="flexCheckDefault"
              label="Salvar email e senha"
              onChange={handleSaveData}
            />
          )}

          <a href="#!" onClick={handleForgotPass}>
            {forgotPass ? "Voltar" : " Esqueceu a sua senha?"}
          </a>
        </div>

        <MDBBtn
          className="mb-4"
          onClick={() => {
            setFirstClick(true);
            formik.handleSubmit();
          }}
        >
          {forgotPass
            ? "Recuperar senha"
            : loginMode
            ? "Logar"
            : "Registrar-se"}
        </MDBBtn>

        <div className="text-center">
          {!forgotPass && (
            <p>
              {loginMode ? "Não possui cadastro?" : "Já possui cadastro?"}{" "}
              <a href="#!" onClick={handleLoginMode}>
                {loginMode ? "Registre-se" : "Login"}
              </a>
            </p>
          )}

          {loginMode && !forgotPass && (
            <>
              <p>ou acesse com:</p>

              <div
                className="d-flex justify-content-center mx-auto"
                // style={{ width: "40%" }}
              >
                <MDBBtn
                  tag="a"
                  color="none"
                  className="m-1"
                  style={{ color: "#1266f1" }}
                  onClick={handleGoogleSignin}
                >
                  <MDBIcon fab icon="google" size="sm" />
                </MDBBtn>
              </div>
            </>
          )}
        </div>
      </MDBContainer>
    </>
  );
}

export default Home;
