import React, { useRef } from "react";

//components
import Button from "./Button";
import HorizontalSpace from "../Utils/HorizentalSpace";

const SelectFile = ({
  selectFile,
  title,
  required = false,
  hint,
  accept = ".zip,.rar",
  error,
  value,
  fileName,
  fileSize,
  clearFile,
}) => {
  const select = useRef();

  const handleFileChange = (e) => {
    if (e.target) {
      if (e.target.files[0]) {
        const file = e.target.files[0];
        console.log(e.target.files[0]);
        selectFile(file);
      }
    }
  };
  const triggerSelectFile = () => {
    select.current.click();
  };
  return (
    <div className="select-file-box">
      <input
        type="file"
        accept={accept}
        onChange={handleFileChange}
        onChangeCapture={handleFileChange}
        className="hidden"
        ref={select}
        value={value}
      />
      <div className="input-title">
        {title}
        {required ? <span className="input-required-sign">*</span> : ""}
      </div>
      <div className="select-file-field">
        {fileName ? (
          <div>
            <span className="select-file-name">{fileName}</span>
            <span className="select-file-size">( {fileSize} )</span>
          </div>
        ) : (
          <span></span>
        )}
        <div className="select-file-left">
          {fileName ? (
            <img
              src={process.env.PUBLIC_URL + `/statics/images/close.svg`}
              className="clear-file-img pointer hover-opacity"
              alt="حذف"
              onClick={clearFile}
            />
          ) : (
            ""
          )}
          <HorizontalSpace />
          <Button
            title="انتخاب فایل"
            onClick={triggerSelectFile}
            borderColor="#000"
            height={36}
            width={112}
          />
        </div>
      </div>
      {error ? (
        <span className="input-error-text">{error}</span>
      ) : (
        <span className="input-hint-text">{hint}</span>
      )}
    </div>
  );
};

export default SelectFile;