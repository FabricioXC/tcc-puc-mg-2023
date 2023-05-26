import { DataType } from "@/models/components/Page/dataPage";

export const makeTableHeaders = (dataType: DataType) => {
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
      header = [
        {
          Header: "Departamento",
          accessor: "department", // accessor is the "key" in the data
        },
      ];
      break;
    case "tasks":
    case "users":
      header = [
        {
          Header: "Tarefa",
          accessor: "title", // accessor is the "key" in the data
        },
        {
          Header: "Descrição",
          accessor: "description",
        },
        {
          Header: "Solicitante",
          accessor: "user",
        },
        {
          Header: "Departamento",
          accessor: "department",
        },
        {
          Header: "Prioridade",
          accessor: "priority",
        },
        {
          Header: "Status",
          accessor: "status",
        },
      ];
      break;
    case "status":
      header = [
        {
          Header: "Status",
          accessor: "status", // accessor is the "key" in the data
        },
      ];
      break;
    case "priorities":
      header = [
        {
          Header: "Prioridade",
          accessor: "priority", // accessor is the "key" in the data
        },
      ];

      break;
    default:
      break;
  }

  return header;
};
