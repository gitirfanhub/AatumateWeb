import React from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";

const DatePickers = ({
  views,
  label,
  value,
  onChange,
  placeholder,
  variant,
  helperText,
  inputFormat,
  minDate,
  maxDate,
  onError,
  error = false,
  defaultCalendarMonth
}) => {
  const today = new Date();
  return (
    <DatePicker
      views={views}
      label={label}
      value={value}
      onChange={onChange}
      inputFormat={inputFormat}
      minDate={today}
      maxDate={maxDate}
      defaultCalendarMonth={defaultCalendarMonth}
      renderInput={(params) => (
        <TextField
          {...params}
          variant={variant}
          helperText={helperText}
          fullWidth
          error={error}
          inputProps={{
            ...params.inputProps,
            placeholder: placeholder
          }}
        />
      )}
    />
  );
};

export default DatePickers;
