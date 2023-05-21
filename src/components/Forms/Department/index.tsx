/* eslint-disable react-hooks/exhaustive-deps */

import React from "react";
import TextInput from "@/components/TextInput";
import Select from "@/components/Select";

interface DepartmentFieldsProps {
  fieldDisabled: boolean;
  firstClick: boolean;
  breakPoint: number;
  formik: any;
  blockEdition: boolean;
  externalData?: any;
}
const DepartmentFields: React.FC<DepartmentFieldsProps> = ({
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
          label={"Departamento"}
          name={"department"}
        />
      </div>
    </>
  );
};

export default DepartmentFields;
