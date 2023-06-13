import { DataType } from "@/models/components/Page/dataPage";
import { RowStandardContainer } from "./styles";

export const makeTableHeaders = (dataType: DataType) => {
  // type Header = {
  //   Header: string;
  //   accessor: string;
  //   Cell: ({ value }: { value: any }) => JSX.Element;
  // };
  let header: any = null;
  switch (dataType) {
    case "users":
      header = [
        {
          Header: "Nome",
          accessor: "first_name", // accessor is the "key" in the data

          Cell: ({ value }: { value: any }) => (
            <RowStandardContainer>{value}</RowStandardContainer>
          ),
          width: 120,
          minWidth: 80,
        },
        {
          Header: "Sobrenome",
          accessor: "last_name",

          Cell: ({ value }: { value: any }) => (
            <RowStandardContainer>{value}</RowStandardContainer>
          ),
          width: 120,
          minWidth: 80,
        },
        {
          Header: "Email",
          accessor: "email",
          Cell: ({ value }: { value: any }) => (
            <RowStandardContainer>{value}</RowStandardContainer>
          ),
          width: 200,
          minWidth: 120,
        },
        {
          Header: "Perfil",
          accessor: "profile",
          Cell: ({ value }: { value: any }) => (
            <RowStandardContainer>{value}</RowStandardContainer>
          ),
          width: 60,
          minWidth: 60,
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
