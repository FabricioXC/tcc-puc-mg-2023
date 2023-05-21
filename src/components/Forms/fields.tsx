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

  console.log("Enrou no fileds");
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
      fields = (
        <DepartmentFields
          fieldDisabled={fieldDisabled}
          firstClick={firstClick}
          breakPoint={breakPoint}
          formik={formik}
          blockEdition={blockEdition}
          externalData={externalData}
        />
      );
      break;
    case "tasks":
      fields = (
        <TaskFields
          fieldDisabled={fieldDisabled}
          firstClick={firstClick}
          breakPoint={breakPoint}
          formik={formik}
          blockEdition={blockEdition}
          externalData={externalData}
        />
      );
      break;
    case "status":
      fields = (
        <StatusFields
          fieldDisabled={fieldDisabled}
          firstClick={firstClick}
          breakPoint={breakPoint}
          formik={formik}
          blockEdition={blockEdition}
          externalData={externalData}
        />
      );
      break;
    case "priorities":
      fields = (
        <PriorityFields
          fieldDisabled={fieldDisabled}
          firstClick={firstClick}
          breakPoint={breakPoint}
          formik={formik}
          blockEdition={blockEdition}
          externalData={externalData}
        />
      );
      break;
    default:
      break;
  }
  return fields;
};
