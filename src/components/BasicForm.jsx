import React, { forwardRef } from "react";

const BasicForm = forwardRef(
  (
    { divStyles, labelStyles, labelName, inputType, inputStyles, ...rest },
    ref
  ) => {
    return (
      <div className={`${divStyles}`}>
        <label htmlFor={labelName} className={`${labelStyles}`}>
          {labelName}
        </label>
        <input
          type={inputType}
          className={`border-[0.5px] w-60 rounded-md p-2 ${inputStyles}`}
          ref={ref} // Attach the ref to the input element
          {...rest} // Spread the remaining props (without ref) into the input
        />
      </div>
    );
  }
);

export default BasicForm;
