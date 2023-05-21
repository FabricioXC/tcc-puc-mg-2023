export const makeTableHeaders = (
  dataType: "users" | "departments" | "tasks" | "status" | "priorities"
) => {
  let header = null;
  switch (dataType) {
    case "users":
      header = [
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

  return header;
};
