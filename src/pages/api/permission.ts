import { Profile } from "@/database/models";
import User from "../../database/models/user";
import { apiGetData, apiSendData } from "@/helper/api";
import { makeInfoGender } from "@/components/Forms/functions";
import { refreshToken } from "firebase-admin/app";
import { verifyIdToken } from "@/firebase/firebaseAdmin";
// import { headers } from "next/headers";
export default async function handler(req: any, res: any) {
  const info = makeInfoGender("users");

  const response = await verifyIdToken(req.headers.authorization)
    .then((res) => {
      console.log("RES: ", res);
      return res;
    })
    .catch((err) => {
      return err;
    });
  console.log("RESPONSE: ", response);
  switch (req.method) {
    case "GET":
      // if (req.query.register) {
      try {
        // console.log("QUERY: ", req.query);
        const user = await User.findAll({
          include: [
            {
              model: Profile,
            },
          ],
          where: {
            uuid: response.user_id,
          },
        });
        const users = await User.findAll({
          include: [
            {
              model: Profile,
            },
          ],
        });
        // const sendUsers = apiGetData(users, "users");

        // const permissions = {
        //   endPoints: [],

        // }
        // res.status(200).json({ users: sendUsers });
      } catch (e: any) {
        res.status(400).json({
          error_code: "get_users",
          message: e.message,
        });
      }

      // try {
      //   const users = await User.findAll({
      //     include: [
      //       {
      //         model: Profile,
      //       },
      //     ],
      //   });

      //   const sendUsers = apiGetData(users, "users");

      //   res.status(200).json({ users: sendUsers });
      // } catch (e: any) {
      //   res.status(400).json({
      //     error_code: "get_users",
      //     message: e.message,
      //   });
      // }

      break;
    // case "POST":
    //   console.log("REQU POST: ", req.body);
    //   try {
    //     const checkData = await User.findAll({
    //       where: {
    //         email: req.body.email,
    //       },
    //     });

    //     const profiles = await Profile.findAll({
    //       attributes: ["id", "profile"],
    //     });
    //     const dataToSend = apiSendData(req.body, profiles, "users");
    //     if (dataToSend.error) {
    //       res.status(409).json({
    //         message: dataToSend?.error,
    //       });
    //     } else if (checkData.length > 0) {
    //       res.status(409).json({
    //         message: `Já existe um${
    //           info?.gen === "a" ? info.gen : ""
    //         } ${info?.title.toLowerCase()} cadastrad${info?.gen} com este ${
    //           info?.title === "Usuário" ? "email" : "nome!"
    //         }`,
    //       });
    //     } else {
    //       console.log("Data to send: ", dataToSend);
    //       await User.create({
    //         ...dataToSend?.data,
    //       }).then((result) => {
    //         res.status(201).json({
    //           message: `${info?.title}${
    //             info?.title === "Usuário" ? ` ${req?.body.first_name}` : ""
    //           } criad${info?.gen} com sucesso!`,
    //         });
    //       });
    //     }
    //   } catch (error) {
    //     res.status(404).json({ message: error });
    //   }

    //   break;
    // case "PUT":
    //   try {
    //     const profiles = await Profile.findAll({
    //       attributes: ["id", "profile"],
    //     });
    //     const dataToSend = apiSendData(req.body, profiles, "users");
    //     await User.findAll({ where: { id: req.body.id } }).then(
    //       async (result) => {
    //         if (dataToSend.error) {
    //           res.status(409).json({
    //             message: dataToSend.error,
    //           });
    //         } else if (result.length > 0) {
    //           await User.update(
    //             {
    //               ...dataToSend.data,
    //             },
    //             { where: { id: req.body.id } }
    //           );
    //           res.status(200).json({
    //             message: `${info?.title}${
    //               info?.title === "Usuário" ? ` ${req?.body.first_name}` : ""
    //             } atualizad${info?.gen} com sucesso!`,
    //           });
    //         } else {
    //           res.status(404).json({
    //             message: `Erro ao atualizar ${
    //               info?.gen
    //             } ${info?.title.toLowerCase()}!`,
    //           });
    //         }
    //       }
    //     );
    //   } catch (error) {
    //     res.status(404).json({ message: error });
    //   }

    //   break;
    // case "DELETE":
    //   try {
    //     await User.findAll({ where: { id: req.query.id } }).then(
    //       async (result) => {
    //         if (result.length > 0) {
    //           await User.destroy({ where: { id: req.query.id } });
    //           res.status(200).json({
    //             message: `${info?.title} deletad${info?.gen} com sucesso!`,
    //           });
    //         } else {
    //           res.status(404).json({
    //             message: `Id d${
    //               info?.gen
    //             } ${info?.title.toLowerCase()} não encontrad${info?.gen}.`,
    //           });
    //         }
    //       }
    //     );
    //   } catch (error) {
    //     res.status(404).json({ message: error });
    //   }
    //   break;

    default:
      break;
  }
}
