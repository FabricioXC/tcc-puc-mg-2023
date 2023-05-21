/* eslint-disable react-hooks/exhaustive-deps */

import React from "react";
import TextInput from "@/components/TextInput";
import Select from "@/components/Select";

interface TaskFieldsProps {
  fieldDisabled: boolean;
  firstClick: boolean;
  breakPoint: number;
  formik: any;
  blockEdition: boolean;
  externalData?: any;
}
const TaskFields: React.FC<TaskFieldsProps> = ({
  fieldDisabled,
  firstClick,
  breakPoint,
  formik,
  blockEdition,
  externalData,
}) => {
  externalData = ["Sim", "Não"];
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: breakPoint ? "column" : "row",
          columnGap: "18px",
        }}
      >
        <TextInput
          disabled={fieldDisabled}
          showError={firstClick}
          formik={formik}
          maxWidth="250px"
          label={"Usuário"}
          name={"user"}
        />
        <TextInput
          disabled={fieldDisabled}
          showError={firstClick}
          formik={formik}
          maxWidth="250px"
          label={"Título"}
          name={"title"}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: breakPoint ? "column" : "row",
          columnGap: "18px",
        }}
      >
        <TextInput
          disabled={fieldDisabled}
          showError={firstClick}
          formik={formik}
          maxWidth="500px"
          label={"Descrição"}
          name={"description"}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: breakPoint ? "column" : "row",
          columnGap: "18px",
        }}
      >
        <Select
          disabled={fieldDisabled}
          showError={firstClick}
          formik={formik}
          maxWidth="250px"
          label={"Finalizada"}
          name={"completed"}
          options={externalData}
        />

        <TextInput
          disabled={fieldDisabled}
          showError={firstClick}
          formik={formik}
          maxWidth="250px"
          label={"Expira em"}
          name={"expires_at"}
        />
      </div>
    </>
  );
};

export default TaskFields;
