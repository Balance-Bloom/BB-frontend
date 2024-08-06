import React from "react";
import CardImage from "../../assets/images/new-uterus.jpeg";
import { useNavigate } from "react-router-dom";
import BigButton from "../../components/BigButton";

const WelcomeMessage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex justify-center items-center w-[420px] flex-col gap-5">
        <img
          src={CardImage}
          alt="hand holding a card with the saying changing the world one cycle at a time"
          className="mask mask-circle"
        />
        <div className="mb-4">
          <p className=" text-lg text-center text-[#00000099]">
            Hello Naa, Welcome to Balance & Bloom ! We'll ask you a few
            questions about your health, to enable us ............
          </p>
        </div>
        <BigButton
          buttonText="Yes, fine by me"
          onClick={() => navigate("/next")}
        />
        <button onClick={() => navigate("/dashboard")}>No, thanks</button>
      </div>
    </div>
  );
};

export default WelcomeMessage;
