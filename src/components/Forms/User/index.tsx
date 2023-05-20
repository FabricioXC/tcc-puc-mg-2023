/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";

import { useFormik } from "formik";

import { useRouter } from "next/router";
import React from "react";

import { UserData } from "@/models/pages/user/user-data";
import { ErrorFieldMessage } from "@/helper/presentation/constants";
import { Button, InputGroup } from "react-bootstrap";
import TextInput from "../TextInput";
import useWindowDimensions from "@/helper/get-dimensions";
import Select from "../Select";
import axios from "axios";
import user from "@/database/models/user";
import ConfirmationModal from "@/components/Modal/ConfirmationModal";
import StandardModal from "@/components/Modal/StandardModal";
import LoadingModalSpinner from "@/components/Loading/LoadingModalSpinner";
interface UsersManagementProps {
  handleNewClicked: any;
  editData?: UserData | null;
  newClicked: boolean;
  setEditData: any;
  profiles: string[];
  reloadData: any;
}
const UsersManagement: React.FC<UsersManagementProps> = ({
  handleNewClicked,
  newClicked,
  editData,
  setEditData,
  profiles,
  reloadData,
}) => {
  const error = ErrorFieldMessage;
  const [actionType, setActionType] = useState("");
  const handleActionType = (action: string) => {
    setActionType(action);
  };
  const { width, height } = useWindowDimensions();
  const [firstClick, setFirstClick] = useState(false);
  console.log("New Clicked: ", newClicked);
  console.log("Edit Data: ", editData);
  const [editMode, setEditMode] = useState(false);
  console.log("Width: ", width);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [confirmationModalInfo, setConfirmationModalInfo] = useState({
    msg: "",
    title: "",
    icon: "",
    firstBtnMessage: "",
    secondBtnMessage: "",
    btnRoute: "",
    actionFunction: null,
    actionFunctionParams: null,
  });
  const [showStandardModal, setShowStandardModal] = useState(false);
  const [standardModalInfo, setStandardModalInfo] = useState({
    msg: "",
    title: "",
    icon: "",
  });
  console.log("Profilessss: ", profiles);
  const [isLoading, setIsLoading] = useState(false);
  const handleFinishSuccess = () => {
    handleActionType("");
    if (newClicked) {
      formik.resetForm();
      handleNewClicked(false);
    }
    if (editData) {
      if (editMode) {
        setEditMode(false);
      }
      setEditData(null);
    }

    reloadData();
    //   setEditData(null);
  };
  const handleDeleteData = () => {
    console.log("Edit Data no delete: ", editData?.id);
    setIsLoading(true);
    axios
      .delete(`/api/users?id=${editData?.id}`)
      .then(({ data }) => {
        console.log("Data: ", data);
        const message = data.message;
        setConfirmationModalInfo({
          msg: message,
          title: "Usuário deletado",
          icon: "",
          firstBtnMessage: "",
          secondBtnMessage: "Fechar",
          btnRoute: "",
          actionFunction: handleFinishSuccess as any,
          actionFunctionParams: null,
        });
        setShowConfirmationModal(true);
      })
      .catch((error) => {
        let message;
        if (error.response) {
          message = error.response.data.message;
        } else {
          message = error.message;
        }
        setStandardModalInfo({
          msg: message,
          title: "Erro ao deletar",
          icon: "",
        });
        setShowStandardModal(true);

        console.log("Users Error: ", message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const sendUsersData = async (
    method: string,
    params: UserData | { id: number }
  ) => {
    console.log("Method: ", method);
    if (method === "DELETE") {
      setConfirmationModalInfo({
        msg: `O usuário ${formik.values.first_name} será deletado. Deseja continuar?`,
        title: "Deletar usuário",
        icon: "",
        firstBtnMessage: "Cancelar",
        secondBtnMessage: "Continuar",
        btnRoute: "",
        actionFunction: handleDeleteData as any,
        actionFunctionParams: null,
      });
      setShowConfirmationModal(true);
    } else if (method === "POST") {
      setIsLoading(true);
      axios
        .post("/api/users", params)
        .then(({ data }) => {
          console.log("Data: ", data);
          const message = data.message;
          setConfirmationModalInfo({
            msg: message,
            title: "Usuário criado",
            icon: "",
            firstBtnMessage: "",
            secondBtnMessage: "Fechar",
            btnRoute: "",
            actionFunction: handleFinishSuccess as any,
            actionFunctionParams: null,
          });
          setShowConfirmationModal(true);
        })
        .catch((error) => {
          let message;
          if (error.response) {
            message = error.response.data.message;
          } else {
            message = error.message;
          }
          setStandardModalInfo({
            msg: message,
            title: "Erro ao criar usuário",
            icon: "",
          });
          setShowStandardModal(true);

          console.log("Users Error: ", message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else if (method === "PUT") {
      setIsLoading(true);
      axios
        .put("/api/users", params)
        .then(({ data }) => {
          console.log("Data: ", data);
          const message = data.message;
          setConfirmationModalInfo({
            msg: message,
            title: "Usuário alterado",
            icon: "",
            firstBtnMessage: "",
            secondBtnMessage: "Fechar",
            btnRoute: "",
            actionFunction: handleFinishSuccess as any,
            actionFunctionParams: null,
          });
          setShowConfirmationModal(true);
        })
        .catch((error) => {
          let message;
          if (error.response) {
            message = error.response.data.message;
          } else {
            message = error.message;
          }
          setStandardModalInfo({
            msg: message,
            title: "Erro ao alterar usuário",
            icon: "",
          });
          setShowStandardModal(true);

          console.log("Users Error: ", message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
    // const response = await axios({
    //   method: method,
    //   url: "/api/users",
    //   data: params,
    // })
    //   .then((response) => {
    //     console.log("Response: ", response);
    //     handleNewClicked(!newClicked);
    //     formik.resetForm();
    //     setEditData(null);
    //   })
    //   .catch((error) => {
    //     console.log("Error: ", error);
    //   });
  };
  //   useEffect(() => {
  //     handleNewClicked(false);
  //     setEditMode(true);cancel
  //   }, [editData]);
  const validate = (values: UserData) => {
    const errors: UserData = {} as UserData;

    if (!values.first_name) {
      errors.first_name = error.REQUIRED_FIELD;
    }
    if (!values.last_name) {
      errors.last_name = error.REQUIRED_FIELD;
    }

    if (!values.email) {
      errors.email = error.REQUIRED_FIELD;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = error.IVALID_EMAIL_FORMAT;
    }

    if (!values.profile) {
      errors.profile = error.REQUIRED_FIELD;
    }
    console.log("Errors: ", errors);
    if (actionType !== "DELETE") return errors;
  };
  useEffect(() => {
    if (newClicked) {
      formik.resetForm();
      handleActionType("POST");
    }
  }, [newClicked]);

  const [fieldDisabled, setFieldDisabled] = useState(false);
  useEffect(() => {
    if (!editMode && !newClicked) {
      setFieldDisabled(true);
    } else {
      setFieldDisabled(false);
    }
  }, [editMode, newClicked]);
  const formik = useFormik<UserData>({
    initialValues: editData
      ? {
          first_name: editData.first_name,
          last_name: editData.last_name,
          email: editData.email,
          profile: editData.profile,
        }
      : { first_name: "", last_name: "", email: "", profile: "" },

    validate,
    onSubmit: (values, { resetForm }) => {
      console.log("Valuesjjjj: ", values);
      console.log("Action Type: ", actionType);
      console.log("New Clicked: ", newClicked);
      const params = formik.values;

      switch (actionType) {
        case "POST":
          sendUsersData("POST", params);
          break;

        case "PUT":
          sendUsersData("PUT", { ...params, id: editData?.id });
          break;

        case "DELETE":
          sendUsersData("DELETE", { id: editData?.id as number });
          break;

        default:
          break;
      }
    },
  });

  const buttonSet = () => {
    const handleCancel = () => {
      handleActionType("");
      if (newClicked) {
        formik.resetForm();
        handleNewClicked(false);
      }
      if (editData) {
        if (editMode) {
          setEditMode(false);
          formik.setValues(editData);
        } else {
          setEditData(null);
        }
      }

      //   setEditData(null);
    };
    console.log("Action Type: ", actionType);
    const handleEdit = () => {
      handleActionType("PUT");
      setEditMode(true);
      // libera os campos do formulário para edição
    };

    const handleSave = () => {
      //   setEditMode(false);
      formik.handleSubmit();
      setFirstClick(true);
      // libera os campos do formulário para edição
    };
    const handleDelete = () => {
      handleActionType("DELETE");
      // deletar user
      formik.handleSubmit();
      // libera os campos do formulário para edição
    };
    const cancelBtn = (
      <Button className="mb-3" variant="primary" onClick={handleCancel}>
        {"Cancelar"}
      </Button>
    );

    const editBtn = (
      <Button
        className="mb-3"
        style={{ backgroundColor: "yellow" }}
        variant="primary"
        onClick={handleEdit}
      >
        {"Editar"}
      </Button>
    );
    const saveBtn = (
      <Button
        className="mb-3"
        style={{ backgroundColor: "green" }}
        variant="primary"
        onClick={handleSave}
      >
        {"Salvar"}
      </Button>
    );

    const deleteBtn = (
      <Button
        className="mb-3"
        style={{ backgroundColor: "red" }}
        variant="primary"
        onClick={handleDelete}
      >
        {"Deletar"}
      </Button>
    );

    return (
      <div
        className="mb-3"
        style={{ display: "flex", flexDirection: "row", columnGap: "12px" }}
      >
        {editMode || newClicked ? saveBtn : <>{editBtn}</>}
        {cancelBtn}
        {!editMode && !newClicked && editData && deleteBtn}
      </div>
    );
  };
  // useEffect(() => {
  //   if (profile && profile) {
  console.log("Values: ", formik.values);
  console.log("Errors: ", formik.errors);
  const breakPoint = width && width < 617;
  return (
    <>
      <ConfirmationModal
        modalConfig={confirmationModalInfo}
        setShowModal={setShowConfirmationModal}
        showModal={showConfirmationModal}
      />
      <StandardModal
        title={standardModalInfo.title}
        showModal={showStandardModal}
        setShowModal={setShowStandardModal}
        icon={standardModalInfo.icon}
        // msg={setStandardModalMessage}
        msg={standardModalInfo.msg}
      />
      <LoadingModalSpinner showModal={isLoading} />
      {/* {!isLoading && ( */}
      <>
        {buttonSet()}
        {/* <div
          style={{
            display: "flex",
            flexDirection: "row",
            // maxWidth: "600px",
            columnGap: "12px",
          }}
        > */}
        <div
          style={{
            display: "flex",
            flexDirection: breakPoint ? "column" : "row",
            columnGap: "18px",
          }}
        >
          <TextInput
            disabled={fieldDisabled}
            showError={firstClick}
            formik={formik}
            maxWidth="250px"
            label={"Nome"}
            name={"first_name"}
          />
          <TextInput
            disabled={fieldDisabled}
            showError={firstClick}
            formik={formik}
            maxWidth="250px"
            label={"Sobrenome"}
            name={"last_name"}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: breakPoint ? "column" : "row",
            columnGap: "18px",
          }}
        >
          <TextInput
            disabled={fieldDisabled}
            showError={firstClick}
            formik={formik}
            maxWidth="250px"
            label={"Email"}
            name={"email"}
          />
          <Select
            disabled={fieldDisabled}
            showError={firstClick}
            formik={formik}
            maxWidth="250px"
            label={"Perfil"}
            name={"profile"}
            options={profiles}
          />
        </div>
        {/* </div> */}
      </>
      {/* )} */}
    </>
  );
};

export default UsersManagement;

// UsersManagement.getLayout = function getLayout(page) {
//   return <StrandardLayout>{page}</StrandardLayout>;
// };

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const apiClient = getApiClient(ctx);
//   const { ["nextauth-token"]: token } = parseCookies(ctx);

//   if (!token) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: { data: [] },
//   };
// };
