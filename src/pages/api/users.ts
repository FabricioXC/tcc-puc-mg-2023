import { Profile } from "@/database/models";
import User from "../../database/models/user";
import { userProfileGetData, userProfileSendData } from "@/helper/api/users";

export default async function handler(req: any, res: any) {
  switch (req.method) {
    case "GET":
      try {
        const users = await User.findAll({
          include: [
            {
              // Notice `include` takes an ARRAY
              model: Profile,
              // foreignKey: "ProfileId",
              // as: "rem_profile",
            },
          ],
        });

        const sendUsers = userProfileGetData(users);
        // console.log("SEND USERS: ", sendUsers);

        res.status(200).json({ users: sendUsers });
      } catch (e: any) {
        // logger.error(e.stack);
        res.status(400).json({
          error_code: "get_users",
          message: e.message,
        });
      }
      break;
    case "POST":
      console.log("REQU POST: ", req.body);
      try {
        const checkData = await User.findAll({
          where: {
            email: req.body.email,
          },
        });

        const profiles = await Profile.findAll({
          attributes: ["id", "profile"],
        });
        const dataToSend = userProfileSendData(req.body, profiles);
        if (dataToSend.error) {
          res.status(409).json({
            message: dataToSend?.error,
          });
        } else if (checkData.length > 0) {
          res.status(409).json({
            message: "Já existe um usuário cadastrado com este email!",
          });
        } else {
          console.log("Data to send: ", dataToSend);
          await User.create({
            ...dataToSend?.data,
          }).then((result) => {
            res.status(201).json({
              message: `Usuário ${req.body.first_name} criado com sucesso!`,
            });
          });
        }
      } catch (error) {
        res.status(404).json({ message: error });
      }

      break;
    case "PUT":
      try {
        const profiles = await Profile.findAll({
          attributes: ["id", "profile"],
        });
        const dataToSend = userProfileSendData(req.body, profiles);
        await User.findAll({ where: { id: req.body.id } }).then(
          async (result) => {
            if (dataToSend.error) {
              res.status(409).json({
                message: dataToSend.error,
              });
            } else if (result.length > 0) {
              await User.update(
                {
                  ...dataToSend.data,
                  // first_name: req.body.first_name,
                  // last_name: req.body.last_name,
                  // email: req.body.email,
                  // profile: req.body.profile,
                },
                { where: { id: req.body.id } }
              );
              res.status(200).json({
                message: `Usuário ${req.body.first_name} atualizado com sucesso!`,
              });
            } else {
              res.status(404).json({ message: "Erro ao atualizar o usuário!" });
            }
          }
        );
      } catch (error) {
        res.status(404).json({ message: error });
      }

      break;
    case "DELETE":
      try {
        await User.findAll({ where: { id: req.query.id } }).then(
          async (result) => {
            if (result.length > 0) {
              await User.destroy({ where: { id: req.query.id } });
              res
                .status(200)
                .json({ message: "Usuário deletado com sucesso!" });
            } else {
              res
                .status(404)
                .json({ message: "Id do usuário não encontrada." });
            }
          }
        );
      } catch (error) {
        res.status(404).json({ message: error });
      }
      break;

    default:
      break;
  }
}
