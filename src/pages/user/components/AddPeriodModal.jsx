import React from "react";

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
        className="px-1 text-sm py-3 w-24 self-center bg-lilac/50 rounded-lg uppercase font-medium tracking-wide transition-all hover:bg-black hover:text-white"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        {buttonText || "Open Modal"}
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{modalHeading}</h3>
          <p className="py-4">
            <form action="" className="flex flex-col items-center">
              <label htmlFor="date" className="sr-only">
                Select Date
              </label>
              <input
                type="date"
                id="date"
                className="border-[0.5px] w-60 rounded-md p-2"
              />
            </form>
          </p>
          <div className="modal-action flex justify-between">
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_5").close()}
            >
              Cancel
            </button>
            <button className="btn">{submitButton || "Add new"}</button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AddPeriodModal;
