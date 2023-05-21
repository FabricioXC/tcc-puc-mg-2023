import UserFields from "./User";

export const makeFormFields = (
  dataType: "users" | "departments" | "tasks" | "status" | "priorities",
  fieldDisabled: boolean,
  firstClick: boolean,
  breakPoint: number,
  formik: any,
  blockEdition: boolean,
  externalData: any
) => {
  let fields = null;
  switch (dataType) {
    case "users":
      fields = (
        <UserFields
          fieldDisabled={fieldDisabled}
          firstClick={firstClick}
          breakPoint={breakPoint}
          formik={formik}
          blockEdition={blockEdition}
          externalData={externalData}
        />
      );
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
  return fields;
};
