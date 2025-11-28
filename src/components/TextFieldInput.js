import React from "react";
import styled from "styled-components";
import { TextField, InputAdornment } from "@mui/material";

export const Inputstyle = styled.div`
  .MuiFormLabel-root.Mui-focused {
    color: ${({ theme }) => theme.colors.primary} !important;
  }
  .MuiFormLabel-root {
    font: ${({ theme }) => theme.fontAppearance.contentLight};
    color: rgb(151 151 151 / 87%);
  }
  .MuiInputBase-input.MuiOutlinedInput-input {
    padding: 9px 10px;
  }
  .MuiFormLabel-root.MuiInputLabel-root {
    transform: translate(14px, 13px);
  }
  .MuiInputLabel-shrink.MuiInputLabel-outlined {
    transform: translate(14px, -5px) scale(0.75);
  }
  /* .MuiInputLabel-outlined {
    transform: translate(14px, 12px);
  } */
  .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.colors.primary};
    border-width: 1px;
  }
  .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.colors.primary};
  }
  .MuiInputBase-root {
    background-color: ${({ theme }) => theme.colors.footer};
    border-radius: 0;
    &:hover {
      outline: none;
      border: none;
    }
  }
  .MuiOutlinedInput-root {
    background-color: transparent;
    /* border: 1px solid ${({ theme }) => theme.colors.tertiary}; */
    &:hover {
      outline: none;
      /* border: 1px solid ${({ theme }) => theme.colors.primary}; */
    }
  }
  .MuiOutlinedInput-inputAdornedEnd {
    font: ${({ theme }) => theme.fontAppearance.defaultMedium};
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.colors.primary};
  }
  .MuiFormHelperText-root {
    font: ${({ theme }) => theme.fontAppearance.defaultMedium};
    margin-left: 0;
  }
  .MuiFormHelperText-root {
    margin-right: 0;
  }
  .MuiFormHelperText-root.Mui-error {
  }
`;

const TextFieldInput = ({
  variant,
  className,
  disabled,
  InputProps = "",
  readOnly = false,
  shape,
  textCenter,
  setLength,
  value,
  minRows,
  rows,
  ...props
}) => {
  return (
    <Inputstyle className={className} shape={shape} textCenter={textCenter}>
      <TextField
        disabled={disabled}
        variant={variant}
        fullWidth
        autoComplete="off"
        minRows={minRows}
        rows={rows}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">{InputProps}</InputAdornment>
          )
        }}
        value={value ? value : ""}
        {...props}
      />
    </Inputstyle>
  );
};

export default TextFieldInput;
