import React from "react";
import Clock from "../../assets/svg/clock.svg";
import BigButton from "../../components/BigButton";

const FirstPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <img src={Clock} alt="" className="w-1/4" />
      <p>
        The survey does not take long. Your answers will let Flo take better
        care of you. ❤
      </p>
      <BigButton buttonText="Let's go" />
    </div>
  );
};

export default FirstPage;
