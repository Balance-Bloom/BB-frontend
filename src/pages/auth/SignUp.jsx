import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import InputForm from "../../components/InputForm";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex justify-center items-center bg-daisy">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[10px] bg-pink p-7 w-[450px] rounded-2xl"
      >
        <div className="relative w-60">
          <InputForm
            type="text"
            placeholder="First Name"
            {...register("firstName", { required: true })}
          />
          {errors.firstName && (
            <span className="text-red-600">First Name is required</span>
          )}
        </div>

        <div className="flex-column">
          <InputForm
            type="text"
            placeholder="Other Names"
            {...register("otherNames")}
          />
        </div>
        <div className="flex-column">
          <InputForm
            type="text"
            placeholder="Last Name"
            {...register("lastName", { required: true })}
          />
          {errors.firstName && (
            <span className="text-red-600">Last Name is required</span>
          )}
        </div>

        <div className="">
          <InputForm
            type="text"
            placeholder="Username"
            {...register("userName")}
          />
        </div>

        <div className="flex-column">
          <InputForm
            type="text"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-600">Email is required</span>
          )}
        </div>

        <div className="flex-column">
          <InputForm
            type="text"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-red-600">Password is required</span>
          )}
        </div>

        <div className="flex-column">
          <InputForm
            type="password"
            placeholder="Confirm password"
            {...register("confirm", { required: true })}
          />
          {errors.confirm && (
            <span className="text-red-600">Confirm password is required</span>
          )}
        </div>

        <div className="flex flex-row items-center gap-2 justify-between">
          <div>
            <input type="checkbox" />
            <label className="text-sm text-black font-normal">
              Remember me
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="px-4 py-1 border-2 w-24 self-center border-black bg-lilac/50 rounded-lg uppercase text-xs tracking-wide transition-all hover:bg-black hover:text-white"
        >
          SUBMIT
        </button>
        <p className="text-center text-black text-sm mx-0 my-1">
          Already have an account?
          <Link to="/login">
            <span className="text-sm ml-1 text-[#2d79f3] font-medium cursor-pointer">
              Sign In
            </span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
