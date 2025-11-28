import React from "react";
import styled from "styled-components";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { colors } from "../templates/theme/variables";

const DatePickerStyle = styled.div`
  .MuiFormLabel-root.Mui-focused {
    color: ${({ theme }) => theme.colors.primary} !important;
  }
  .MuiInput-root {
    margin-top: 0.7rem;
  }
  .MuiInputBase-root.MuiInput-root::before {
    border-bottom: 1px solid rgba(0, 0, 0, 0.42);
  }
  .MuiFormLabel-root.MuiInputLabel-root {
    transform: translate(14px, 13px);
  }
  .MuiFormHelperText-root {
    margin-top: 3px;
    margin-left: 0;
  }
  .MuiInputLabel-shrink.MuiInputLabel-outlined {
    transform: translate(14px, -5px) scale(0.75);
  }

  .MuiFormLabel-root,
  .MuiInputBase-root {
    font: ${({ theme }) => theme.fontAppearance.contentLight};
    &::placeholder {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  .MuiInputBase-input {
    padding: 5px 0;
    height: 1.1875em;
    color: rgba(0, 0, 0, 0.6);
  }
  .MuiIconButton-root {
    padding: 0;
  }
  .MuiFormHelperText-root.Mui-error {
    font: ${({ theme }) => theme.fontAppearance.defaultMedium};
    color: ${({ theme }) => theme.colors.red};
  }
  .MuiInputAdornment-positionEnd {
    padding-right: 12px;
    color: ${(props) => props.theme.colors.grey};
    .MuiSvgIcon-root {
      font-size: 1rem;
    }
  }
  .MuiFilledInput-root {
    background-color: #fff !important;
    border-radius: ${({ shape }) => (shape === "rounded" ? "0.3rem" : "1rem")};
    .MuiInputBase-input {
      padding: 6px 15px;
    }
    &:hover {
      background-color: #fff !important;
    }
  }
  .MuiFilledInput-input {
    font: ${({ theme }) => theme.fontAppearance.defaultMedium};
  }
  .MuiFilledInput-underline:before,
  .MuiFilledInput-underline:after {
    border-bottom: none !important;
  }
  .MuiAutocomplete-inputRoot[class*="MuiFilledInput-root"]
    .MuiAutocomplete-input {
    width: 100%;
    padding: 8px 15px;
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.colors.primary};
  }
  .MuiOutlinedInput-input {
    padding: 12.5px 14px;
    padding-right: 0;
  }
  .MuiInputBase-root-MuiOutlinedInput-root.Mui-error
    .MuiOutlinedInput-notchedOutline {
    border-color: #d32f2f !important;
  }
`;
const materialTheme = createTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: colors.primary
      }
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        color: colors.primary,
        backgroundColor: colors.secondary
      }
    },
    MuiPickersDay: {
      day: {
        color: colors.primary
      },
      daySelected: {
        backgroundColor: colors.primary,
        "&:hover": {
          backgroundColor: colors.primaryLite
        }
      },
      dayDisabled: {
        color: colors.primary
      },
      current: {
        color: colors.primary
      }
    },
    MuiButton: {
      textPrimary: {
        color: colors.primary
      }
    },
    MuiPickersClock: {
      pin: {
        backgroundColor: colors.primary
      }
    },
    MuiPickersClockPointer: {
      pointer: {
        backgroundColor: colors.primary
      },
      thumb: {
        backgroundColor: colors.secondary,
        borderColor: colors.primary
      },
      noPoint: {
        backgroundColor: colors.secondary
      }
    }
  }
});

export const DateTimePickerWrapper = ({ children }) => {
  return (
    <DatePickerStyle>
      <ThemeProvider theme={materialTheme}>{children}</ThemeProvider>
    </DatePickerStyle>
  );
};

export default DateTimePickerWrapper;
