//@ts-nocheck
import React, { useEffect, useState } from "react";
import { Button, Container, Spinner } from "react-bootstrap";
import {
  useTable,
  useResizeColumns,
  useFlexLayout,
  useRowSelect,
  usePagination,
} from "react-table";
import { useRouter } from "next/router";
import LoadingModalSpinner from "../Loading/LoadingModalSpinner";
import { makeEditData } from "./functions";
import { HeaderContainer, TableGridContainer } from "./styles";
interface TableComponentProps {
  header: any;
  remoteData: any[];
  handleNewClicked: any;
  setEditData: any;
  isLoading?: boolean;
}
// {first_name: 'Fabricio', last_name: 'Chiaradia', email: 'fabricioxc@gmail.com'}

const TableComponent: React.FC<TableComponentProps> = ({
  header,
  remoteData,
  handleNewClicked,
  setEditData,
  isLoading,
}) => {
  //   console.log("Header: ", header);
  console.log("remoteData: ", remoteData);
  const router = useRouter();

  const data = React.useMemo(() => remoteData, [remoteData]);

  const columns = React.useMemo(() => header, [header]);

  const defaultColumn = React.useMemo(
    () => ({
      // When using the useFlexLayout:
      // minWidth: 30, // minWidth is only used as a limit for resizing
      // width: 200, // width is used for both the flex-basis and flex-grow
      // maxWidth: 200, // maxWidth is only used as a limit for resizing
    }),
    []
  );
  //   const [isLoading, setIsLoading] = useState(true);
  //   useEffect(() => {
  //     if (remoteData && remoteData.length) {
  //       setIsLoading(false);
  //     }
  //   }, [remoteData]);
  //   Spinner
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    // canPreviousPage,
    // canNextPage,
    // pageOptions,
    // pageCount,
    // gotoPage,
    // nextPage,
    // previousPage,
    // setPageSize,
    // selectedFlatRows,

    // state: { selectedRowIds, pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      // manualPagination: true,
      defaultColumn,
    },
    useFlexLayout,
    useResizeColumns,
    usePagination,
    useRowSelect
    // (hooks) => {
    //   hooks.visibleColumns.push((columns) => [
    //     {
    //       id: "selection",
    //       disableResizing: true,
    //       width: 50,
    //       minWidth: 50,
    //       maxWidth: 50,

    //       // The header can use the table's getToggleAllRowsSelectedProps method
    //       // to render a checkbox
    //       Header: ({ getToggleAllRowsSelectedProps }) => (
    //         <Checkbox {...getToggleAllRowsSelectedProps()} />
    //       ),

    //       // The cell can use the individual row's getToggleRowSelectedProps method
    //       // to the render a checkbox
    //       Cell: ({ row }) => (
    //         <div
    //           style={{
    //             height: "100%",
    //             display: "flex",
    //             alignItems: "center",
    //             borderTop: "1px solid #e5eaee",
    //           }}
    //         >
    //           <Checkbox {...row.getToggleRowSelectedProps()} />
    //         </div>
    //       ),
    //     },
    //     ...columns,
    //   ]);
    //   hooks.useInstanceBeforeDimensions.push(({ headerGroups }) => {
    //     // fix the parent group of the selection button to not be resizable
    //     const selectionGroupHeader = headerGroups[0].headers[0];
    //     selectionGroupHeader.canResize = false;
    //   });
    // }
  );
  //   const [newPressed, setNewPressed] = useState(false);

  //   const handleNewClick = () => {
  //     if (!newPressed) {
  //       setNewPressed(true);
  //     }
  //   };
  //   case "users":
  //     title = "Usuário";
  //     path = "users";
  //     gen = "o";
  //     break;
  //   case "departments":
  //     title = "Departamento";
  //     path = "departments";
  //     gen = "o";
  //     break;
  //   case "tasks":
  //     title = "Tarefa";
  //     path = "tasks";
  //     gen = "a";
  //     break;
  //   case "status":
  //     title = "Status";
  //     path = "status";
  //     gen = "o";
  //     break;
  //   case "priorities":
  //     title = "Prioridade";
  //     path = "priorities";
  //     gen = "a";

  const buttonSet = () => {
    let btnNewMsg: any;
    switch (router.pathname) {
      case "/users":
        btnNewMsg = "Novo Usuário";
        break;
      case "/tasks":
        btnNewMsg = "Nova Tarefa";
        break;
      case "/departments":
        btnNewMsg = "Novo Departamento";
        break;
      case "/status":
        btnNewMsg = "Novo Status";
        break;
      case "/priorities":
        btnNewMsg = "Nova Prioridade";
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

          {!remoteData.length ? (
            <div
              style={{
                width: "550px",
                height: "200px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "30px",
              }}
            >
              {" "}
              {"Nenhum dado encontrado"}
            </div>
          ) : (
            <TableGridContainer
              {...getTableProps()}
              // style={{ border: "solid 1px blue" }}
            >
              <HeaderContainer>
                {headerGroups.map((headerGroup, headerIndex) => (
                  <div key={headerIndex} {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column, columnIndex) => (
                      <div key={columnIndex} {...column.getHeaderProps()}>
                        {column.render("Header")}
                        {column.canResize && (
                          <div
                            {...column.getResizerProps()}
                            className={`resizer ${
                              column.isResizing ? "isResizing" : ""
                            }`}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </HeaderContainer>
              <div {...getTableBodyProps()}>
                {rows.map((row, rowIndex) => {
                  prepareRow(row);
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <div
                      key={rowIndex}
                      {...row.getRowProps()}
                      style={{
                        cursor: "pointer",
                        // border: "solid 1px gray",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                      }}
                      onClick={() => {
                        setEditData(makeEditData(row, router.pathname));
                      }}
                    >
                      {row.cells.map((cell, rowIndex) => {
                        return (
                          // eslint-disable-next-line react/jsx-key
                          <div
                            style={{
                              width: "100%",
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "center",
                            }}
                            key={rowIndex}
                            {...cell.getCellProps()}
                            // style={{
                            //   padding: "10px",
                            //   border: "solid 1px gray",
                            //   background: "papayawhip",
                            // }}
                          >
                            {cell.render("Cell")}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </TableGridContainer>
          )}
        </div>
      )}
    </Container>
  );
};
export default TableComponent;
