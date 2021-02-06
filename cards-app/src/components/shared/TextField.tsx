import TextField from "@material-ui/core/TextField";
import IErrorField from "models/ErrorField";
import React from "react";

export interface ICustomTextField {
  id: string;
  required?: boolean;
  name: string;
  label: string;
  value: string;
  errorFields?: IErrorField[];
  onValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomTextField: React.FC<ICustomTextField> = ({
  id,
  required,
  name,
  label,
  value,
  errorFields,
  onValueChange,
}: ICustomTextField) => {
  const hasError = errorFields && errorFields.some((x) => x.fieldName === name && x.hasError);

  return (
    <TextField
      required={required}
      error={hasError}
      margin="dense"
      id={id}
      name={name}
      label={label}
      fullWidth
      value={value}
      onChange={onValueChange}
    />
  );
};

export default CustomTextField;
