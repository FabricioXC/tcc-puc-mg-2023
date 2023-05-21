/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { UserData } from "@/models/pages/user/user-data";
import { ErrorFieldMessage } from "@/helper/presentation/constants";
import { Button, InputGroup } from "react-bootstrap";
import useWindowDimensions from "@/helper/get-dimensions";
import axios from "axios";
import ConfirmationModal from "@/components/Modal/ConfirmationModal";
import StandardModal from "@/components/Modal/StandardModal";
import LoadingModalSpinner from "@/components/Loading/LoadingModalSpinner";
import { makeInitialValues, validateForm } from "./functions";
import { makeFormFields } from "./fields";
interface BaseFormProps {
  handleNewClicked: any;
  editData?: UserData | null;
  newClicked: boolean;
  setEditData: any;
  externalData: string[];
  reloadData: any;
  dataType: "users" | "departments" | "tasks" | "status" | "priorities";
}
const BaseForm: React.FC<BaseFormProps> = ({
  handleNewClicked,
  newClicked,
  editData,
  setEditData,
  externalData, // profiles string[]
  reloadData,
  dataType,
}) => {
  const [dataConfig, setDataConfig] = useState({
    title: "",
    path: "",
    gen: "",
  });
  useEffect(() => {
    if (dataType) {
      let title = "";
      let path = "";
      let gen = "";

      switch (dataType) {
        case "users":
          title = "Usuário";
          path = "users";
          gen = "o";
          break;
        case "departments":
          title = "Departamento";
          path = "departments";
          gen = "o";
          break;
        case "tasks":
          title = "Tarefa";
          path = "tasks";
          gen = "a";
          break;
        case "status":
          title = "Status";
          path = "status";
          gen = "o";
          break;
        case "priorities":
          title = "Prioridade";
          path = "priorities";
          gen = "a";
        default:
          break;
      }

      setDataConfig({ title: title, path: path, gen: gen });
    }
  }, [dataType]);
  const error = ErrorFieldMessage;
  const [actionType, setActionType] = useState<
    "PUT" | "POST" | "DELETE" | null
  >(null);
  const handleActionType = (action: "PUT" | "POST" | "DELETE" | null) => {
    setActionType(action);
  };
  const { width } = useWindowDimensions();
  const [firstClick, setFirstClick] = useState(false);

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

  const [isLoading, setIsLoading] = useState(false);
  const handleFinishSuccess = () => {
    handleActionType(null);
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
  };
  const handleDeleteData = () => {
    console.log("Edit Data no delete: ", editData?.id);
    setIsLoading(true);
    axios
      .delete(`/api/${dataConfig.path}?id=${editData?.id}`)
      .then(({ data }) => {
        console.log("Data: ", data);
        const message = data.message;
        setConfirmationModalInfo({
          msg: message,
          title: `${dataConfig.title} deletad${dataConfig.gen}`,
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
        msg: `${dataConfig.gen.toUpperCase()} ${dataConfig.title.toLowerCase()} ${
          formik.values.first_name
        } será deletad${dataConfig.gen}. Deseja continuar?`,
        title: `Deletar ${dataConfig.title.toLowerCase()}`,
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
        .post(`/api/${dataConfig.path}`, params)
        .then(({ data }) => {
          console.log("Data: ", data);
          const message = data.message;
          setConfirmationModalInfo({
            msg: message,
            title: `${dataConfig.title} criad${dataConfig.gen}`,
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
            title: `Erro ao criar ${dataConfig.title.toLowerCase()}`,
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
        .put(`/api/${dataConfig.path}`, params)
        .then(({ data }) => {
          console.log("Data: ", data);
          const message = data.message;
          setConfirmationModalInfo({
            msg: message,
            title: `${dataConfig.title} alterad${dataConfig.gen}`,
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
            title: `Erro ao alterar ${dataConfig.title.toLowerCase()}`,
            icon: "",
          });
          setShowStandardModal(true);

          console.log("Users Error: ", message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const validate = (values: UserData) => {
    return validateForm(values, dataType, actionType);
  };
  useEffect(() => {
    if (newClicked) {
      formik.resetForm();
      handleActionType("POST");
    }
  }, [newClicked]);

  const [fieldDisabled, setFieldDisabled] = useState(false);
  const [blockEdition, setBlockEdition] = useState(false);
  useEffect(() => {
    if (!editMode && !newClicked) {
      setFieldDisabled(true);
    } else {
      setFieldDisabled(false);
    }
    if (editMode) {
      setBlockEdition(true);
    } else {
      setBlockEdition(false);
    }
  }, [editMode, newClicked]);
  const formik = useFormik<UserData>({
    initialValues: makeInitialValues(dataType, editData),

    validate,
    onSubmit: (values, { resetForm }) => {
      const params = values;
      console.log("Values no final: ", params);
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
      handleActionType(null);
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

      {buttonSet()}
      {makeFormFields(
        dataType,
        fieldDisabled,
        firstClick,
        breakPoint as number,
        formik,
        blockEdition,
        externalData
      )}
    </>
  );
};

export default BaseForm;

// BaseForm.getLayout = function getLayout(page) {
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
