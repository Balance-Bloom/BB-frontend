import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Loader } from "lucide-react";
import BasicForm from "./BasicForm";

const AddPeriodModal = ({
  buttonText,
  modalHeading,
  updatePeriodDetails,
  initialData = {},
  closeModal,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialData,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State for modal visibility

  const handleFormSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      updatePeriodDetails(data); // Update period details locally
      toast.success("Period details updated successfully");
    } catch (error) {
      console.log(error);
      toast.error("Could not update period details");
    } finally {
      setIsSubmitting(false);
      setIsOpen(false); // Close the modal
      closeModal(); // Notify parent to close modal
    }
  };

  return (
    <div>
      <button
        className="bg-deepPink text-white w-60 py-3 px-6 rounded-full hover:bg-red-600 transition-colors shadow-md"
        onClick={() => setIsOpen(true)}
      >
        {buttonText || "Open Modal"}
      </button>

      {isOpen && (
        <dialog
          open={isOpen}
          className="modal modal-bottom sm:modal-middle"
          aria-labelledby="modalHeading"
          aria-modal="true"
        >
          <div className="modal-box">
            <h3 id="modalHeading" className="font-bold text-lg mb-5">
              {modalHeading}
            </h3>
            <div className="py-4">
              <form
                onSubmit={handleSubmit(handleFormSubmit)}
                className="flex flex-col"
              >
                <BasicForm
                  labelName={<p>Start Date</p>}
                  inputType="date"
                  {...register("startDate", { required: true })}
                />
                <BasicForm
                  labelName={<p>End Date</p>}
                  inputType="date"
                  {...register("endDate", { required: true })}
                />
                <BasicForm
                  labelName={<p>Flow</p>}
                  inputType="text"
                  {...register("flow")}
                />
                <BasicForm
                  labelName={<p>Symptoms</p>}
                  inputType="text"
                  {...register("symptoms")}
                />
                <textarea
                  className="border rounded p-2"
                  placeholder="Notes"
                  {...register("notes")}
                />
                <div className="modal-action flex justify-between mt-4">
                  <button
                    type="button"
                    className="btn w-32"
                    onClick={() => setIsOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className={`btn bg-deepPink w-32 text-white ${
                      isSubmitting ? "btn-disabled" : ""
                    }`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <Loader className="animate-spin" />
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default AddPeriodModal;
