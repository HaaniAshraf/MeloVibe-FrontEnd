import React, { useState, useEffect } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../instance/axiosInstance";

function OTPForm() {
  const [inputs, setInputs] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const [resendDisabled, setResendDisabled] = useState(true);
  const [timer, setTimer] = useState(30);
  const navigate = useNavigate();

  useEffect(() => {
    let countdown;
    if (resendDisabled) {
      countdown = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            clearInterval(countdown);
            setResendDisabled(false);
            return 30;
          }
          return prevTimer - 1;
        });
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [resendDisabled]);

  const handleKeyDown = (e, index) => {
    if (
      !/^[0-9]$/.test(e.key) &&
      e.key !== "Backspace" &&
      e.key !== "Delete" &&
      e.key !== "Tab" &&
      !e.metaKey
    ) {
      e.preventDefault();
    }
    if (e.key === "Backspace") {
      if (index > 0 && !inputs[index]) {
        document.getElementById(`otp-input-${index - 1}`).focus();
      }
    }
  };

  const handleChange = (e, index) => {
    const newInputs = [...inputs];
    newInputs[index] = e.target.value;
    setInputs(newInputs);
    if (e.target.value && index < inputs.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otp = inputs.join("");
    try {
      const response = await axiosInstance.post("/otp", {
        otp,
        action: "verify",
      });
      if (response.data.success) {
        navigate("/login");
      } else {
        setError(response.data.error);
      }
    } catch (error) {
      console.error("There was an error!", error);
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  const handleResendOTP = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/otp", { action: "resend" });
      setResendDisabled(true);
      setTimer(30);
    } catch (error) {
      console.error("There was an error resending the OTP!", error);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <form
        id="otp-form"
        className="border-2 p-7 border-gray-400 rounded-2xl text-center bg-gray-950"
        onSubmit={handleSubmit}
      >
        <h1 className="text-white font-bold text-2xl">Email Verification</h1>
        <h3 className="text-gray-400 mt-1">
          Enter the 4-digit verification code that was sent to your email.
        </h3>
        <div className="flex items-center justify-center gap-3 mt-5">
          {inputs.map((value, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              className="w-14 h-14 text-center text-2xl font-extrabold text-gray-300 bg-gray-900 appearance-none rounded p-4 outline-none focus:bg-gray-800"
              value={value}
              maxLength="1"
              onKeyDown={(e) => handleKeyDown(e, index)}
              onChange={(e) => handleChange(e, index)}
            />
          ))}
        </div>
        {error && <p className="text-red-400 mt-3">{error}</p>}
        <div className="mt-6">
          <Button
            classname="w-full mt-4 py-3 px-6 bg-gradient-to-r from-pink-500 to-blue-900"
            type="submit"
          >
            Verify
          </Button>
        </div>
        <p
          className={`text-gray-400 mt-4 cursor-pointer ${
            !resendDisabled ? "hover:text-pink-500" : ""
          }`}
          onClick={!resendDisabled ? handleResendOTP : null}
        >
          {resendDisabled ? `Resend OTP in ${timer}s` : "Resend OTP"}
        </p>
      </form>
    </div>
  );
}

export default OTPForm;
