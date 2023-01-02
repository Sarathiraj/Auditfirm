import React, { useEffect } from "react";
import {
  TextField,
  MenuItem,
  Typography,
  FormControl,
  InputLabel,
  Select,
  formControlClasses,
  FormHelperText,
} from "@mui/material";
import { useField, useFormikContext } from "formik";
import { Stack } from "@mui/system";
import { Label } from "@mui/icons-material";

const DropDown = ({
  name,
  options,
  required,
  customlabel,
  placeholder,
  labelfield = "label",
  valuefield = "value",
  selectedfieldcb = () => {},
  ...otherProps
}: any) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (evt: any) => {
    const { value } = evt.target;
    console.log(value);

    setFieldValue(name, value);
  };

  const configSelect = {
    ...field,
    ...otherProps,
    select: true,
    variant: "outlined",
    fullWidth: true,
    // onChange: handleChange,
    labelId: "demo-select-small",
    id: "demo-select-small",
    displayEmpty: true,
    onChange: handleChange,
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }

  useEffect(() => {
    selectedfieldcb(meta.value);
  }, [meta.value]);

  return (
    <Stack spacing={0.5}>
      <Typography color="primary" gutterBottom variant={"h4"}>
        {customlabel}
        {required && "*"}
      </Typography>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="medium">
        <InputLabel id="demo-select-small">{otherProps[labelfield]}</InputLabel>
        <Select {...configSelect}>
          {placeholder && (
            <MenuItem value="" disabled>
              <em>{placeholder}</em>
            </MenuItem>
          )}
          {options.map((item: any, ind: any) => (
            <MenuItem value={item[valuefield]} key={ind}>
              {item[labelfield]}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText error={true}>{configSelect.helperText}</FormHelperText>
      </FormControl>
    </Stack>
  );
};

export default DropDown;
