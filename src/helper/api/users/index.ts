export const userProfileGetData = (users: any): any => {
  //   let sendUsers: any = [];
  users.forEach((user: any) => {
    user.dataValues["profile"] = user.dataValues.Profile.profile;
    // console.log("USERSSSSSSS: ", user.dataValues);
    // if (user.ProfileId) {
    //   console.log("USER: ", users);
    //   const profile = profiles.find((p: any) => p.id === user.ProfileId);
    //   sendUser.id = user["id"];
    //   sendUser["first_name"] = user["first_name"];
    //   sendUser["last_name"] = user["last_name"];
    //   sendUser["email"] = user["email"];
    //   sendUser["profile"] = profile?.profile || null;
    //   sendUsers.push(sendUser);
    // }
  });

  return users;
};

export const userProfileSendData = (user: any, profiles: any): any => {
  let error = null;
  let saveUser: any = {};
  const profile = profiles.find((p: any) => p.profile === user.profile);

  if (!profile) {
    error = "O perfil selecionado para o usuário 'inválido";
  } else {
    saveUser = {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      ProfileId: profile.id,
    };
  }
  //   console.log("SAVE USER: ", saveUser);
  return { data: saveUser, error: error };
};
