import React, { useEffect, useState } from "react";
import { Button, Container, Spinner } from "react-bootstrap";
import { useTable } from "react-table";
import { useRouter } from "next/router";
import LoadingModalSpinner from "../Loading/LoadingModalSpinner";
interface TableComponentProps {
  header: any;
  remoteData: any[];
  handleNewClicked: any;
  setEditData: any;
}
// {first_name: 'Fabricio', last_name: 'Chiaradia', email: 'fabricioxc@gmail.com'}

const TableComponent: React.FC<TableComponentProps> = ({
  header,
  remoteData,
  handleNewClicked,
  setEditData,
}) => {
  //   console.log("Header: ", header);
  console.log("remoteData: ", remoteData);
  const router = useRouter();

  const data = React.useMemo(() => remoteData, [remoteData]);

  const columns = React.useMemo(() => header, [header]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (remoteData && remoteData.length) {
      setIsLoading(false);
    }
  }, [remoteData]);
  //   Spinner
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    // eslint-disable-next-line
    useTable({ columns, data });
  //   const [newPressed, setNewPressed] = useState(false);

  //   const handleNewClick = () => {
  //     if (!newPressed) {
  //       setNewPressed(true);
  //     }
  //   };

  const buttonSet = () => {
    let btnNewMsg: any;
    switch (router.pathname) {
      case "/users":
        btnNewMsg = "Novo Usuário";
        break;
      case "/tasks":
        btnNewMsg = "Nova Tarefa";
        break;
      default:
        btnNewMsg = "Novo";
        break;
    }
    const newBtn = (
      <Button className="mb-3" variant="primary" onClick={handleNewClicked}>
        {btnNewMsg}
      </Button>
    );
    return newBtn;
    // const backBtn = (
    //   <Button className="mb-3" variant="primary" onClick={handleNewClick}>
    //     {"Voltar"}
    //   </Button>
    // );
    // const saveButton = (
    //   <Button className="mb-3" variant="primary" onClick={handleNewClick}>
    //     {"Salvar"}
    //   </Button>
    // );
  };
  const handleRowClicked = (row: any) => {
    setEditData(row);
  };
  return (
    <Container>
      <div className="text-center">
        <LoadingModalSpinner showModal={isLoading} />
        {/* <Spinner animation="border" role="status" /> */}
      </div>
      {!isLoading && (
        <div>
          {buttonSet()}
          <table {...getTableProps()} style={{ border: "solid 1px blue" }}>
            <thead>
              {headerGroups.map((headerGroup, i) => (
                // eslint-disable-next-line react/jsx-key
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    // eslint-disable-next-line react/jsx-key
                    <th
                      {...column.getHeaderProps()}
                      style={{
                        borderBottom: "solid 3px red",
                        background: "aliceblue",
                        color: "black",
                        fontWeight: "bold",
                      }}
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, i) => {
                prepareRow(row);
                return (
                  // eslint-disable-next-line react/jsx-key
                  <tr
                    {...row.getRowProps()}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      switch (router.pathname) {
                        case "/users":
                          setEditData({
                            id: row.cells[0]?.row?.original?.id,
                            first_name:
                              row?.cells[0]?.row?.original?.first_name,
                            last_name: row?.cells[0]?.row?.original?.last_name,
                            email: row?.cells[0]?.row?.original?.email,
                            profile: row?.cells[0]?.row?.original?.profile,
                          });
                          //   console.log("Teste: ", row.cells[i].row.original.id);
                          break;
                        case "/tasks":
                          setEditData({
                            //   id: row.cells[i].row.original.id,
                            //   first_name: row.cells[i].row.original.first_name,
                            //   last_name: row.cells[i].row.original.last_name,
                            //   email: row.cells[i].row.original.email,
                          });
                          //   console.log("Teste: ", row.cells[i].row.original.id);
                          break;

                        default:
                          break;
                      }
                    }}
                  >
                    {row.cells.map((cell) => {
                      return (
                        // eslint-disable-next-line react/jsx-key
                        <td
                          {...cell.getCellProps()}
                          style={{
                            padding: "10px",
                            border: "solid 1px gray",
                            background: "papayawhip",
                          }}
                        >
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </Container>
  );
};
export default TableComponent;
