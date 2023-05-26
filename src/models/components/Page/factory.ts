import axios from "axios";
import { DataType } from "./dataPage";

const makeExternalData = (
  dataType: DataType,
  setExternalData: any,
  setErrorMessage: any
) => {
  switch (dataType) {
    case "users":
      axios
        .get("/api/profiles")
        .then(({ data }) => {
          let arr: string[] = [];
          data.profiles.forEach((e: { profile: any }) => {
            arr.push(e.profile);
          });
          setExternalData(arr);
        })
        .catch((error) => {
          let message;
          if (error.response) {
            message = error.response.data.message;
          } else {
            message = error.message;
          }
          setErrorMessage(message);
          console.log("Profile Error: ", error);
        });
      break;

    default:
      break;
  }
};

export const PageFactory = {
  makeExternalData,
};
