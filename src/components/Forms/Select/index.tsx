import { FormikProps } from "formik";

interface TextInputProps {
  formik: any;
  label: string;
  name: string;
  maxWidth?: string;
  options: string[];
  showError: boolean;
  disabled?: boolean;
}

const Select: React.FC<TextInputProps> = ({
  label,
  formik,
  name,
  maxWidth,
  options,
  showError,
  disabled,
}: TextInputProps) => {
  return (
    <div
      className="flex flex-col"
      style={{
        // rowGap: "8px",
        maxWidth: maxWidth ? maxWidth : "100%",
        width: "100%",
      }}
    >
      <label>{label}</label>
      <select
        {...formik.getFieldProps(name)}
        // value={formik.values[name]}
        disabled={disabled}
        type="text"
        style={{
          border: "1px solid silver",
          borderRadius: "4px",
          padding: "7px",
        }}
      >
        <option disabled value="">
          {"Selecione uma opção"}
        </option>
        {options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      <p style={{ margin: 0, fontSize: "10px", color: "red" }}>
        {showError && formik?.errors[name] ? `*${formik?.errors[name]}` : ""}
      </p>
    </div>
  );
};

export default Select;

// style={{
//     display: "flex",
//     flexDirection: "column",
//     maxWidth: "200px",
//     rowGap: "7px",
//     width: "100%",
//   }}
// >
