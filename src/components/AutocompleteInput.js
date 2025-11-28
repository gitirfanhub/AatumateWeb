import React from "react";
import styled from "styled-components";
import { toTitleCase } from "../utils/utilsfunction";
import CustomCheckbox from "./CustomCheckbox";
import { TextField, Autocomplete } from "@mui/material";

const Autocompletestyle = styled.div`
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
  .MuiFormHelperText-root {
    margin-left: 0;
  }
  .MuiFormHelperText-root.Mui-error {
    font: ${({ theme }) => theme.fontAppearance.defaultMedium};
    color: ${({ theme }) => theme.colors.red};
  }
`;

const OptionMenuList = styled.li`
  display: flex;
  align-items: center;
  padding: 6px 16px;
  font: ${({ theme }) => theme.fontAppearance.defaultMedium};
  background-color: #ffffff;
  .MuiListSubheader-root {
    color: ${({ theme }) => theme.colors.primary};
    font: ${({ theme }) => theme.fontAppearance.contentRegular};
  }
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

const AutocompleteInput = ({
  style,
  label,
  disabled,
  shape,
  variant,
  optionPic,
  className,
  optionImage,
  optionCheck,
  inputValue,
  onInputChange,
  onChange,
  getOptionDisabled,
  options,
  noOptionsText,
  value,
  placeholder,
  renderOption,
  canvasBg,
  error = false,
  helperText = false,
  ...props
}) => {
  return (
    <Autocompletestyle className={className} shape={shape} canvasBg={canvasBg}>
      <Autocomplete
        style={style}
        renderOption={(props, option, { selected }) => {
          return (
            <OptionMenuList {...props}>
              {optionCheck && <ShowCheckbox selected={selected} />}
              {optionImage && <ShowImage optionPic={option[optionPic]} />}
              {toTitleCase(option)}
            </OptionMenuList>
          );
        }}
        inputValue={inputValue}
        onInputChange={onInputChange}
        options={options}
        noOptionsText={noOptionsText}
        value={value}
        onChange={onChange}
        getOptionLabel={(option) => option || ""}
        getOptionDisabled={getOptionDisabled}
        isOptionEqualToValue={(option, value) => {
          if (value === "" || value === option) {
            return true;
          }
        }}
        {...props}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            disabled={disabled}
            placeholder={placeholder}
            variant={variant}
            error={error}
            helperText={helperText}
          />
        )}
      />
    </Autocompletestyle>
  );
};
export default AutocompleteInput;
