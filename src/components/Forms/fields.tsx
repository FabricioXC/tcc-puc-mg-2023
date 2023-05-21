import DepartmentFields from "./Department";
import PriorityFields from "./Priority";
import StatusFields from "./Status";
import TaskFields from "./Task";
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
      <DepartmentFields
        fieldDisabled={fieldDisabled}
        firstClick={firstClick}
        breakPoint={breakPoint}
        formik={formik}
        blockEdition={blockEdition}
        externalData={externalData}
      />;
      break;
    case "tasks":
      <TaskFields
        fieldDisabled={fieldDisabled}
        firstClick={firstClick}
        breakPoint={breakPoint}
        formik={formik}
        blockEdition={blockEdition}
        externalData={externalData}
      />;
      break;
    case "status":
      <StatusFields
        fieldDisabled={fieldDisabled}
        firstClick={firstClick}
        breakPoint={breakPoint}
        formik={formik}
        blockEdition={blockEdition}
        externalData={externalData}
      />;
      break;
    case "priorities":
      <PriorityFields
        fieldDisabled={fieldDisabled}
        firstClick={firstClick}
        breakPoint={breakPoint}
        formik={formik}
        blockEdition={blockEdition}
        externalData={externalData}
      />;
      break;
    default:
      break;
  }
  return fields;
};
