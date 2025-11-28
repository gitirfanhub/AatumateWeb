import React from "react";
import SubHeaderLabel from "./SubheaderLabel";
import { Avatar } from "@mui/material";
import { IoIosImages } from "react-icons/io";
import styled, { css } from "styled-components";
import clsx from "clsx";

const FileUploadStyleWrapper = styled.div`
  .contained-button-file {
    cursor: pointer;
    text-align: center;
    border-radius: 0.1rem;
    svg {
      width: 1.5em;
      height: 1.5em;
      fill: ${({ theme }) => theme.colors.primary};
    }
    p {
      margin: 0;
      color: ${({ theme }) => theme.colors.primary};
      font: ${({ theme }) => theme.fontAppearance.defaultMedium};
    }
    .MuiAvatar-root {
      border: 1px solid ${({ theme }) => theme.colors.primary};
      ${({ isImage }) =>
        isImage &&
        css`
          border: 1px solid ${({ theme }) => theme.colors.primary};
          padding: 5px;
        `};

      width: 6em;
      height: 5em;
      .MuiAvatar-img {
        object-fit: contain;
      }
    }
    .MuiAvatar-colorDefault {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }
  .fileName-btn {
    ${({ theme }) =>
      theme.gridLayout.grid({
        rows: 1,
        rHeight: "0vh",
        minCol: "50px",
        alignItems: "center"
      })}
    .fileName-label {
      color: ${({ theme }) => theme.colors.primary};
      grid-column: 1 / span 2;
      margin: 2rem 0 0.5rem;
    }
    .remove-btn {
      justify-self: flex-end;
      margin: 2rem 0 0.5rem;
      padding: 3px 7px;
      font: 500 0.5rem/1 "Neurial Grotesk Regular";
      color: ${({ theme }) => theme.colors.red};
      background-color: ${({ theme }) => theme.colors.secondary};
      border: 1px solid ${({ theme }) => theme.colors.primary};
      border-radius: 10px;
      outline: none;
      cursor: pointer;
    }
  }
`;

const CustomFileUpload = ({
  isImage,
  onChange,
  fileName,
  onRemove,
  fileIndex,
  name,
  errorText,
  previewUrl,
  uploadType,
  className,
  id,
  ...props
}) => {
  return (
    <FileUploadStyleWrapper isImage={isImage}>
      <input
        hidden
        name={name}
        multiple
        type="file"
        accept="image/*"
        onChange={onChange}
        id={`contained-button-file-${fileIndex}`}
        {...props}
      />
      <label
        htmlFor={`contained-button-file-${fileIndex}`}
        className="contained-button-file"
      >
        <Avatar
          variant="rounded"
          alt="Product Image"
          src={previewUrl}
          className={className}
          id={id}
        >
          <IoIosImages />
          <p>Upload {uploadType}</p>
        </Avatar>
      </label>
      <div className="fileName-btn">
        <SubHeaderLabel
          className={clsx({
            "fileName-label": fileName,
            "error-text": errorText
          })}
          margin
          textappear="normal"
        >
          {fileName || errorText}
        </SubHeaderLabel>
        {fileName && (
          <button className="remove-btn" onClick={onRemove}>
            Remove
          </button>
        )}
      </div>
    </FileUploadStyleWrapper>
  );
};

export default CustomFileUpload;
