import { ErrorFieldMessage } from "@/helper/presentation/constants";
import {
  AllData,
  DepartmentData,
  PriorityData,
  StatusData,
  TaskData,
  UserData,
} from "@/models/pages/data";

export const validateForm = (
  values: UserData,
  dataType: "users" | "departments" | "tasks" | "status" | "priorities",
  actionType: "PUT" | "POST" | "DELETE" | null
): any => {
  const error = ErrorFieldMessage;
  let response = null;
  switch (dataType) {
    case "users":
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
        errors.profile = error.REQUIRED_FIELD as any;
      }
      console.log("Errors: ", errors);
      if (actionType !== "DELETE") response = errors;
      break;
    case "departments":
      break;
    case "tasks":
      break;
    case "status":
      break;
    case "priorities":
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
