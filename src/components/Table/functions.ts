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
      break;
    case "/tasks":
      break;
    case "/status":
      break;
    case "/priorities":
      break;
    default:
      break;
  }
  return response;
};
