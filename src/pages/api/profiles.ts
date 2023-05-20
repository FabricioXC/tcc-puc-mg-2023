import Profile from "../../database/models/profile";
// import logger from "../../services/logger";

export default async function handler(req: any, res: any) {
  console.log("REQ: ", req);
  try {
    // const task = await Task.findOne();
    // if (task) {
    //   console.log('Profile for the task', await task.getProfile());
    // }

    const profiles = await Profile.findAll({
      attributes: ["profile"],
      //   include: "tasks",
      limit: 100,
    });
    res.status(200).json({ profiles });
  } catch (e: any) {
    // logger.error(e.stack);
    res.status(400).json({
      error_code: "get_profile",
      message: e.message,
    });
  }
  // console.log("RES: ", res);
}
