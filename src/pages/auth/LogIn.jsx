import React, { useState } from "react";
import "../../App.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo/original-removebg-preview.png";
import { apiLogin } from "../../services/auth";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { Loader } from "lucide-react";
import InputForm from "../../components/InputForm";

const LogIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  console.log(isSubmitting);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ reValidateMode: "onBlur", mode: "all" });

  const addToLocalStorage = (accessToken, user) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("firstName", user.firstName);
    localStorage.setItem("lastName", user.lastName);
    localStorage.setItem("username", user.username);
  };

  const onSubmit = async (data) => {
    console.log(data);
    setIsSubmitting(true);

    try {
      const res = await apiLogin({
        email: data.email,
        password: data.password,
      });
      console.log(res.data);

      addToLocalStorage(res.data.accessToken, res.data.user);
      toast.success("Login successful");
      setTimeout(() => {
        navigate("/user-page");
      }, 500);
    } catch (error) {
      console.log(error);
      toast.error("An error occured");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center h-screen items-center bg-daisy">
      <div className="w-[450px] p-8 bg-pink rounded-lg shadow-lg flex flex-col items-center gap-8">
        <h1 className="font-bold text-lg">Welcome back!</h1>
        <div className="w-24">
          <img src={Logo} alt="heart-image" />
        </div>
        <form
          className="flex flex-col box-border gap-5 w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="relative w-full">
            <InputForm
              type="email"
              placeholder="Email or Username"
              {...register("email", {
                required: true,
              })}
            />
            {errors.email && <p>Email is required</p>}
          </div>
          <div className="relative w-full">
            <InputForm
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.password && <p>Password is required</p>}
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
  );
};

export default LogIn;
