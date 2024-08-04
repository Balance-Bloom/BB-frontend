import React, { useState } from "react";
import InputForm from "../../components/InputForm";
import { useForm } from "react-hook-form";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div className="flex justify-center h-screen items-center bg-daisy">
        <div className="w-[450px] p-8 bg-pink rounded-lg shadow-lg flex flex-col items-center gap-8">
          <h1 className="font-bold uppercase text-lg">Reset password</h1>
          <form
            action=""
            className="flex flex-col box-border gap-5 w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <InputForm
                type="text"
                placeholder="Email Address"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>

            <div>
              <InputForm
                type="text"
                placeholder="Verification Code"
                {...register("code", { required: true })}
              />
              {errors.code && (
                <span className="text-red-600">
                  Verification code is required
                </span>
              )}
            </div>

            <div>
              <InputForm
                type="text"
                placeholder="New Password"
                {...register("newPassword", { required: true })}
              />
              {errors.newPassword && (
                <span className="text-red-600">New password is required</span>
              )}
            </div>

            <div>
              <InputForm
                type="text"
                placeholder="Confirm New Password"
                {...register("confirmPassword", { required: true })}
              />
              {errors.newPassword && (
                <span className="text-red-600">Confirm new password</span>
              )}
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-4 py-1 border-2 w-24 border-black bg-lilac/50 rounded-lg uppercase text-xs tracking-wide transition-all hover:bg-black hover:text-white"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
