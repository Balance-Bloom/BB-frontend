import React, { useState } from "react";
import BasicForm from "./BasicForm";
import { useForm } from "react-hook-form";
import { apiAddCycle } from "../services/cycles";
import { toast } from "react-toastify";
import { Loader } from "lucide-react";

const AddPeriodModal = ({
  modalButtonAction,
  buttonText,
  modalHeading,
  submitButton,
}) => {
  const handleOpen = () => document.getElementById("my_modal_5").showModal();
  const handleClose = () => document.getElementById("my_modal_5").close();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Your form submit handler
  const handleFormSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true);
    try {
      const res = await apiAddCycle({
        startDate: data.startDate,
        endDate: data.endDate,
        flow: data.flow,
        symptoms: data.symptoms,
        notes: data.notes,
      });

      console.log(res.data);
      toast.success(res.data.message);
      // Optionally close the modal on success
      handleClose();
    } catch (error) {
      console.log(error);
      toast.error("Could not add new period");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <button
        className="px-4 bg-deepPink hover:text-white text-base py-1 self-center rounded-full font-medium"
        onClick={handleOpen}
      >
        {buttonText || "Open Modal"}
      </button>

      <dialog
        id="my_modal_5"
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
                  onClick={handleClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn bg-deepPink w-32"
                  // disabled={isSubmitting}
                >
                  {isSubmitting ? <Loader /> : "Add new"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AddPeriodModal;
