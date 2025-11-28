import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import styled from "styled-components";

const CheckboxWrapper = styled.div`
  .MuiCheckbox-colorPrimary.Mui-checked,
  .MuiCheckbox-colorSecondary.Mui-checked,
  .MuiIconButton-colorSecondary {
    color: ${({ theme }) => theme.colors.primary};
    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }
  .MuiCheckbox-root {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
  }
  .MuiSvgIcon-root {
    font-size: 2.3rem;
    height: 1.3rem;
    width: 1.3rem;
  }
  input[type="checkbox" i] {
    display: none;
  }
  .MuiFormControlLabel-root {
    margin-left: 0;
    margin-right: 0;
  }
  .PrivateSwitchBase-root-1,
  .MuiIconButton-root {
    padding: 0rem;
  }
  .MuiTypography-body1 {
    margin-right: 0.5rem;
    text-transform: capitalize;
    font: ${({ theme }) => theme.fontAppearance.defaultMedium};
  }
  .Mui-disabled {
    color: ${({ theme }) => theme.colors.grey};
  }
`;
const CustomCheckbox = ({ label, labelPlacement, className, ...props }) => {
  return (
    <CheckboxWrapper className={className}>
      <FormControlLabel
        aria-label="position"
        label={label}
        labelPlacement={labelPlacement}
        control={<Checkbox {...props} />}
      />
    </CheckboxWrapper>
  );
};

export default CustomCheckbox;
