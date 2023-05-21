export const makeEditData = (row: any, path: string) => {
  let response = null;
  switch (path) {
    case "/users":
      response = {
        id: row.cells[0]?.row?.original?.id,
        first_name: row?.cells[0]?.row?.original?.first_name,
        last_name: row?.cells[0]?.row?.original?.last_name,
        email: row?.cells[0]?.row?.original?.email,
        profile: row?.cells[0]?.row?.original?.profile,
      };
      break;
    case "/departments":
      response = {
        id: row.cells[0]?.row?.original?.id,
        department: row?.cells[0]?.row?.original?.department,
      };
      break;
    case "/tasks":
      response = {
        id: row.cells[0]?.row?.original?.id,
        title: row?.cells[0]?.row?.original?.title,
        description: row?.cells[0]?.row?.original?.description,
        user: row?.cells[0]?.row?.original?.user,
        department: row?.cells[0]?.row?.original?.department,
        priority: row?.cells[0]?.row?.original?.priority,
        status: row?.cells[0]?.row?.original?.status,
      };
      break;
    case "/status":
      response = {
        id: row.cells[0]?.row?.original?.id,
        status: row?.cells[0]?.row?.original?.status,
      };
      break;
    case "/priorities":
      response = {
        id: row.cells[0]?.row?.original?.id,
        priority: row?.cells[0]?.row?.original?.priority,
      };
      break;
    default:
      break;
  }
  return response;
};
