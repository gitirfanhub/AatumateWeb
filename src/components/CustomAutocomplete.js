import React from "react";
import styled from "styled-components";
import { toTitleCase } from "../utils/utilsfunction";
import { TextField, Autocomplete } from "@mui/material";
import CustomCheckbox from "./CustomCheckbox";
const CustomAutocompletestyle = styled.div`
  .MuiAutocomplete-root .MuiOutlinedInput-root {
    padding: 5px;
  }
  .MuiFormLabel-root.Mui-focused {
    color: ${({ theme }) => theme.colors.primary};
  }
  .MuiFormLabel-root {
    font: ${({ theme }) => theme.fontAppearance.contentLight};
  }
  .MuiInputBase-input.MuiOutlinedInput-input {
    padding: 8px 10px;
  }
  .MuiFormLabel-root.MuiInputLabel-root {
    transform: translate(14px, 13px);
  }
  .MuiInputLabel-shrink.MuiInputLabel-outlined {
    transform: translate(14px, -5px) scale(0.75);
  }
  .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.colors.primary};
    border-radius: 4px;
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.colors.primary};
  }
  .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.colors.primary};
  }
  .MuiInputBase-root {
    /* background-color: ${({ theme }) => theme.colors.footer}; */
    border-radius: 0;
    &:hover {
      outline: none;
      border: none;
    }
  }
  .MuiOutlinedInput-inputAdornedEnd {
    font: ${({ theme }) => theme.fontAppearance.defaultMedium};
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.colors.primary};
  }
  .MuiOutlinedInput-input {
    padding: 4px 4px 4px 6px !important;
  }
`;

const OptionMenuList = styled.div`
  display: flex;
  align-items: center;
  font: ${({ theme }) => theme.fontAppearance.defaultMedium};
`;

const ShowImage = (props) => {
  const { optionPic } = props;
  return (
    <img
      src={optionPic}
      alt="Img"
      className="option-image"
      width="5%"
      style={{ marginRight: 15 }}
    />
  );
};
const ShowCheckbox = (props) => {
  const { selected } = props;
  return (
    <CustomCheckbox
      size="small"
      checked={selected}
      style={{ marginRight: 2 }}
    />
  );
};

const CustomAutocomplete = ({
  style,
  label,
  disabled,
  shape,
  variant,
  optionPic,
  className,
  optionLabel,
  optionImage,
  optionCheck,
  inputValue,
  onInputChange,
  options,
  noOptionsText,
  onChange,
  value,
  placeholder,
  getOptionDisabled,
  renderOption,
  canvasBg,
  error = false,
  helperText = false,
  ...props
}) => {
  return (
    <CustomAutocompletestyle
      className={className}
      shape={shape}
      canvasBg={canvasBg}
    >
      <Autocomplete
        style={style}
        renderOption={(props, option, { selected }) => (
          <OptionMenuList {...props}>
            {optionCheck && <ShowCheckbox selected={selected} />}
            {optionImage && <ShowImage optionPic={option[optionPic]} />}
            {toTitleCase(option[optionLabel])}
          </OptionMenuList>
        )}
        inputValue={inputValue}
        onInputChange={onInputChange}
        onChange={onChange}
        options={options ?? []}
        noOptionsText={noOptionsText}
        value={value}
        getOptionLabel={(option) => option[optionLabel] || ""}
        getOptionDisabled={getOptionDisabled}
        isOptionEqualToValue={(option, value) => {
          if (
            value === "" ||
            value[optionLabel] === "" ||
            value[optionLabel] === undefined ||
            value[optionLabel] === option[optionLabel]
          ) {
            return true;
          }
        }}
        {...props}
        renderInput={(params) => (
          <TextField
            {...params}
            disabled={disabled}
            label={label}
            placeholder={placeholder}
            variant={variant}
            error={error}
            helperText={helperText}
          />
        )}
      />
    </CustomAutocompletestyle>
  );
};
export default CustomAutocomplete;
