const makeUsersTableHeader = () => {
  const header = [
    {
      Header: "Nome",
      accessor: "first_name", // accessor is the "key" in the data
    },
    {
      Header: "Sobrenome",
      accessor: "last_name",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Perfil",
      accessor: "profile",
    },
  ];
  return header;
};

export const UserDataFactory = {
  makeUsersTableHeader,
};
