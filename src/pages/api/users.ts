import User from "../../database/models/user";
// import logger from "../../services/logger";

export default async function handler(req: any, res: any) {
  console.log("REQ: ", req.method);
  switch (req.method) {
    case "GET":
      try {
        // const task = await Task.findOne();
        // if (task) {
        //   console.log('User for the task', await task.getUser());
        // }

        const users = await User.findAll({
          attributes: ["id", "first_name", "last_name", "email", "profile"],
          //   include: "tasks",
          limit: 100,
        });
        res.status(200).json({ users });
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
        //   check data has already been created
        const checkData = await User.findAll({
          where: {
            email: req.body.email,
          },
        });
        if (checkData.length > 0) {
          res.status(409).json({
            message: "Já existe um usuário cadastrado com este email!",
          });
        } else {
          await User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            profile: req.body.profile,
          }).then((result) => {
            res.status(201).json({
              message: `Usuário ${req.body.first_name} criado com sucesso!`,
            });
          });
        }
      } catch (error) {
        res.status(404).json({ message: error });
      }
      //
      //   const users = await User.create({
      //     first_name: req.body.first_name,
      //     last_name: req.body.last_name,
      //     email: req.body.email,
      //     profile: req.body.profile,
      //   });
      //   res.status(200).json({ users });
      // } catch (e: any) {
      //   // logger.error(e.stack);
      //   res.status(400).json({
      //     error_code: "post_users",
      //     message: e.message,
      //   });
      // }
      break;
    case "PUT":
      try {
        await User.findAll({ where: { id: req.body.id } }).then(
          async (result) => {
            if (result.length > 0) {
              await User.update(
                {
                  first_name: req.body.first_name,
                  last_name: req.body.last_name,
                  email: req.body.email,
                  profile: req.body.profile,
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

  // console.log("RES: ", res);
}
