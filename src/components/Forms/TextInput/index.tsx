import { FormikProps } from "formik";

interface TextInputProps {
  formik: any;
  label: string;
  name: string;
  maxWidth?: string;
  showError: boolean;
  disabled?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  formik,
  name,
  maxWidth,
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
      <input
        disabled={disabled}
        {...formik.getFieldProps(name)}
        type="text"
        style={{
          border: "1px solid silver",
          borderRadius: "4px",
          padding: "5px",
        }}
      />
      <p style={{ margin: 0, fontSize: "10px", color: "red", height: "15px" }}>
        {showError && formik?.errors[name] ? `*${formik?.errors[name]}` : ""}
      </p>
    </div>
  );
};

export default TextInput;

// style={{
//     display: "flex",
//     flexDirection: "column",
//     maxWidth: "200px",
//     rowGap: "7px",
//     width: "100%",
//   }}
// >
