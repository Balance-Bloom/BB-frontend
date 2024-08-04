import React, { useState } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import Heart from "../../assets/svg/love2.svg";
import NavBar from "../../components/NavBar";
import InputForm from "../../components/InputForm";
import { useForm } from "react-hook-form";
import { Loader } from "lucide-react";

const LogIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <NavBar />
      <div className="flex justify-center h-screen items-center bg-daisy">
        <div className="w-[450px] p-8 bg-pink rounded-lg shadow-lg flex flex-col items-center gap-8">
          <h1 className="font-bold text-lg">Welcome back!</h1>
          <div className="w-24">
            <img src={Heart} alt="heart-image" />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col box-border gap-5 w-full"
          >
            <div className="relative w-full">
              <InputForm type="text" placeholder="Email or Username" />
            </div>
            <div className="relative w-full">
              <InputForm type="text" placeholder="Password" />
            </div>
            <Link
              to="/recovery"
              className="text-sm text-[#2d79f3] text-center font-medium cursor-pointer"
            >
              Forgot password?
            </Link>
            <p className="text-center text-black text-sm">
              Don't have an account?
              <Link to="/sign-up">
                <span className="text-sm ml-1 text-[#2d79f3] font-medium cursor-pointer">
                  Register
                </span>
              </Link>
            </p>
            <button
              type="submit"
              className="px-4 py-1 border-2 w-24 self-center border-black bg-lilac/50 rounded-lg uppercase text-xs tracking-wide transition-all hover:bg-black hover:text-white"
            >
              {isSubmitting ? <Loader /> : "SUBMIT"}
            </button>
            <div className="flex w-full flex-col border-opacity-50">
              <div className="divider">OR</div>
              <div className="card rounded-box grid h-10 place-items-center">
                Google
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogIn;
