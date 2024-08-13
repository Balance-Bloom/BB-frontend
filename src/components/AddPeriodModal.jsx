import React from "react";
import BasicForm from "./BasicForm";

const AddPeriodModal = ({
  modalButtonAction,
  buttonText,
  modalHeading,
  submitButton,
}) => {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="px-4 bg-deepPink hover:text-white text-base py-1  self-center rounded-full font-medium "
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        {buttonText || "Open Modal"}
      </button>

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-5">{modalHeading}</h3>
          <div className="py-4">
            <form action="" className="flex flex-col">
              <BasicForm labelName={<p>Start Date</p>} inputType="date" />
              <BasicForm labelName={<p>End Date</p>} inputType="date" />
            </form>
          </div>
          <div className="modal-action flex justify-between">
            <button
              className="btn w-32"
              onClick={() => document.getElementById("my_modal_5").close()}
            >
              Cancel
            </button>
            <button className="btn bg-deepPink w-32">
              {submitButton || "Add new"}
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AddPeriodModal;
