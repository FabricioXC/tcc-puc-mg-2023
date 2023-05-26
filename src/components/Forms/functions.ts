import { ErrorFieldMessage } from "@/helper/presentation/constants";
import { DataType } from "@/models/components/Page/dataPage";
import {
  AllData,
  DepartmentData,
  PriorityData,
  StatusData,
  TaskData,
  UserData,
} from "@/models/pages/data";

export const validateForm = (
  values: AllData,
  dataType: DataType,
  actionType: "PUT" | "POST" | "DELETE" | null
): any => {
  const error = ErrorFieldMessage;
  let response = null;
  switch (dataType) {
    case "users":
      const uErrors: UserData = {} as UserData;

      if (!values.first_name) {
        uErrors.first_name = error.REQUIRED_FIELD;
      }
      if (!values.last_name) {
        uErrors.last_name = error.REQUIRED_FIELD;
      }

      if (!values.email) {
        uErrors.email = error.REQUIRED_FIELD;
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        uErrors.email = error.IVALID_EMAIL_FORMAT;
      }

      if (!values.profile) {
        uErrors.profile = error.REQUIRED_FIELD as any;
      }
      console.log("Errors: ", uErrors);
      if (actionType !== "DELETE") response = uErrors;
      break;
    case "departments":
      const dErrors: DepartmentData = {} as DepartmentData;

      if (!values.department) {
        dErrors.department = error.REQUIRED_FIELD;
      }
      if (actionType !== "DELETE") response = dErrors;
      break;
    case "tasks":
      const tErrors: TaskData = {} as TaskData;

      if (!values.title) {
        tErrors.title = error.REQUIRED_FIELD;
      }
      if (!values.description) {
        tErrors.description = error.REQUIRED_FIELD;
      }

      if (!values.user) {
        tErrors.user = error.REQUIRED_FIELD as any;
      }

      if (!values.department) {
        tErrors.department = error.REQUIRED_FIELD as any;
      }

      if (!values.priority) {
        tErrors.priority = error.REQUIRED_FIELD as any;
      }

      if (!values.status) {
        tErrors.status = error.REQUIRED_FIELD as any;
      }
      console.log("Errors: ", tErrors);
      if (actionType !== "DELETE") response = tErrors;
      break;
    case "status":
      const sErrors: StatusData = {} as StatusData;

      if (!values.status) {
        sErrors.status = error.REQUIRED_FIELD;
      }
      if (actionType !== "DELETE") response = sErrors;
      break;
    case "priorities":
      const pErrors: PriorityData = {} as PriorityData;

      if (!values.priority) {
        pErrors.priority = error.REQUIRED_FIELD;
      }
      if (actionType !== "DELETE") response = pErrors;
      break;
    default:
      break;
  }
  return response;
};

export const makeInitialValues = (dataType: string, editData: AllData): any => {
  let response = null;
  switch (dataType) {
    case "users":
      if (editData) {
        response = {
          first_name: editData?.first_name,
          last_name: editData?.last_name,
          email: editData?.email,
          profile: editData?.profile,
        };
      } else {
        response = {
          first_name: "",
          last_name: "",
          email: "",
          profile: "",
        };
      }
      break;
    case "departments":
      if (editData) {
        response = {
          department: editData?.department,
        };
      } else {
        response = {
          department: "",
        };
      }
      break;
    case "tasks":
      if (editData) {
        response = {
          title: editData?.title,
          description: editData?.description,
          user: editData?.user,
          department: editData?.department,
          priority: editData?.priority,
          status: editData?.status,
        };
      } else {
        response = {
          first_name: "",
          last_name: "",
          email: "",
          profile: "",
        };
      }
      break;
    case "status":
      if (editData) {
        response = {
          status: editData?.status,
        };
      } else {
        response = {
          status: "",
        };
      }
      break;
    case "priorities":
      if (editData) {
        response = {
          priority: editData?.priority,
        };
      } else {
        response = {
          priority: "",
        };
      }
      break;
    default:
      break;
  }
  return response;
};

export const makeInfoGender = (dataType: DataType) => {
  let title = "";
  let path = "";
  let gen = "";
  if (dataType) {
    // let title = "";
    // let path = "";
    // let gen = "";

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
  }
  return { title: title, path: path, gen: gen };
};
