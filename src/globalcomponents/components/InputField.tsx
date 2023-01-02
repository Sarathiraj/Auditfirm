import React from "react";
import { Stack, TextField, Typography } from "@mui/material";
import { useField } from "formik";

const InputField = ({ name, customlabel, required, ...otherProps }: any) => {
  const [field, mata] = useField(name);

  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: "outlined",
    size: "medium",
  };

  if (mata && mata.touched && mata.error) {
    configTextfield.error = true;
    configTextfield.helperText = mata.error;
  }

  return (
    <Stack>
      <Typography color="primary" gutterBottom variant={"h4"}>
        {customlabel}
        {required && "*"}
      </Typography>
      <TextField {...configTextfield} />
    </Stack>
  );
};

export default InputField;
