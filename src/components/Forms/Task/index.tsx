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
          label={"Tarefa"}
          name={"title"}
        />
        <TextInput
          disabled={fieldDisabled}
          showError={firstClick}
          formik={formik}
          maxWidth="250px"
          label={"Usuário"}
          name={"user"}
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
          label={"Status"}
          name={"status"}
          options={externalData}
        />

        <Select
          disabled={fieldDisabled}
          showError={firstClick}
          formik={formik}
          maxWidth="250px"
          label={"Prioridade"}
          name={"priority"}
          options={externalData}
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
          label={"Departamento"}
          name={"department"}
          options={externalData}
        />
      </div>
    </>
  );
};

export default TaskFields;
