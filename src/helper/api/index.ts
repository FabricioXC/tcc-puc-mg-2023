import { DataType } from "@/models/components/Page/dataPage";

export const apiGetData = (users: any, dataType: DataType): any => {
  let returnData: any = [];
  switch (dataType) {
    case "users":
      users.forEach((user: any) => {
        user.dataValues["profile"] = user.dataValues.Profile.profile;
        returnData.push(user.dataValues);
      });

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

  return returnData;
};

export const apiSendData = (
  remoteDataType: any,
  remoteData: any,
  dataType: DataType
): any => {
  let error = null;
  let sendData: any = {};

  switch (dataType) {
    case "users":
      const profile = remoteData.find(
        (p: any) => p.profile === remoteDataType.profile
      );

      if (!profile) {
        error = "O perfil selecionado para o usuário 'inválido";
      } else {
        sendData = {
          first_name: remoteDataType.first_name,
          last_name: remoteDataType.last_name,
          email: remoteDataType.email,
          ProfileId: profile.id,
        };
      }

      break;
    case "departments":
      // const department = remoteData.find(
      //   (p: any) => p.department === remoteDataType.department
      // );
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
  //   console.log("SAVE USER: ", saveUser);
  return { data: sendData, error: error };
};
