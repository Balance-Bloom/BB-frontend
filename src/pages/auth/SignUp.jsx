import React, { useEffect, useState } from "react";
import "../../App.css";
import { Link, useNavigate } from "react-router-dom";
import InputForm from "../../components/InputForm";
import Logo from "../../assets/logo/original-removebg-preview.png";
import { useForm } from "react-hook-form";
import { apiCheckUserNameExists, apiSignUp } from "../../services/auth";
import { debounce } from "lodash";
import { toast } from "react-toastify";
import { Loader } from "lucide-react";

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userNameAvailable, setUserNameAvailable] = useState(false);
  const [userNameNotAvailable, setUserNameNotAvailable] = useState(false);
  const navigate = useNavigate();
  const [isUserNameLoading, setIsUserNameLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ reValidateMode: "onBlur", mode: "all" });

  const checkUsername = async (username) => {
    setIsUserNameLoading(true);

    try {
      const res = await apiCheckUserNameExists(username);
      console.log(res.data);
      const user = res.data.user;
      if (user) {
        setUserNameNotAvailable(true);
        setUserNameAvailable(false);
      } else {
        setUserNameAvailable(true);
        setUserNameNotAvailable(false);
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occured");
    } finally {
      setIsUserNameLoading(false);
    }
  };

  const userNameWatch = watch("username");

  useEffect(() => {
    const debouncedSearch = debounce(async () => {
      if (userNameWatch) checkUsername(userNameWatch);
    }, 1000);

    debouncedSearch();
  }, [userNameWatch]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    console.log(data);
    let payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      username: data.username,
      email: data.email,
      password: data.password,
      password2: data.password2,
    };

    try {
      const res = await apiSignUp(payload);
      console.log(res.data);
      toast.success(res.data);

      setTimeout(() => {
        navigate("/login");
      }, 5000);
    } catch (error) {
      console.log(error);
      toast.error("An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center bg-daisy h-screen">
      <div className="p-8 w-[800px] bg-pink rounded-lg shadow-lg flex flex-col items-center gap-6">
        <h1 className="font-bold text-2xl">Register</h1>
        <div className="w-24">
          <img src={Logo} alt="heart-image" />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 w-full"
        >
          <div className="flex flex-wrap gap-4">
            <div className="w-full sm:w-[calc(50%-8px)]">
              <InputForm
                type="text"
                placeholder="First Name"
                {...register("firstName", { required: true })}
              />
              {errors.firstName && (
                <span className="text-red-600 text-sm">
                  First Name is required
                </span>
              )}
            </div>

            <div className="w-full sm:w-[calc(50%-8px)]">
              <InputForm
                type="text"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-600 text-sm">Email is required</span>
              )}
            </div>

            <div className="w-full sm:w-[calc(50%-8px)]">
              <InputForm
                type="text"
                placeholder="Last Name"
                {...register("lastName", { required: true })}
              />
              {errors.lastName && (
                <span className="text-red-600 text-sm">
                  Last Name is required
                </span>
              )}
            </div>

            <div className="w-full sm:w-[calc(50%-8px)]">
              <InputForm
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-600 text-sm">
                  Password is required
                </span>
              )}
            </div>

            <div className="w-full sm:w-[calc(50%-8px)]">
              {isUserNameLoading && <Loader />}
              {userNameAvailable && (
                <p className="text-green-500 text-sm">Username is available</p>
              )}

              {userNameNotAvailable && (
                <p className="text-red-500">Username already exists</p>
              )}

              <InputForm
                type="text"
                placeholder="Username"
                {...register("username", {
                  required: true,
                  minLength: {
                    value: 3,
                    message: "Length ,ust be more than 3 characters",
                  },
                })}
              />
              {errors.username && (
                <p className="text-sm text-red-600">Username is required</p>
              )}
            </div>

            <div className="w-full sm:w-[calc(50%-8px)]">
              <InputForm
                type="password"
                placeholder="Confirm password"
                {...register("password2", { required: true })}
              />
              {errors.password2 && (
                <span className="text-red-600 text-sm">
                  Confirm password is required
                </span>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="px-6 py-2 border-2 w-full sm:w-auto self-center border-black bg-deepPink rounded-lg uppercase text-xs tracking-wide transition-all hover:bg-black hover:text-white"
          >
            {isSubmitting ? <Loader /> : "SUBMIT"}
          </button>
          <p className="text-center text-black text-sm">
            Already have an account?{" "}
            <Link to="/login">
              <span className="text-sm ml-1 text-[#2d79f3] font-medium cursor-pointer">
                Sign In
              </span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
