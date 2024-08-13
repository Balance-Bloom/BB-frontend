import React from "react";

const BasicForm = ({
  divStyles,
  labelStyles,
  labelName,
  inputType,
  inputStyles,
}) => {
  return (
    <div className={`${divStyles}`}>
      <label htmlFor="" className={`${labelStyles}`}>
        {labelName}
      </label>
      <input
        type={inputType}
        className={`border-[0.5px] w-60 rounded-md p-2 ${inputStyles}`}
      />
    </div>
  );
};

export default BasicForm;
