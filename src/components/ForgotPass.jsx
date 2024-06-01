import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import axiosInstance from "../instance/axiosInstance";
import { HiOutlineMail } from "react-icons/hi";
import Button from "./Button";
import Logo from "../assets/trans-logo.png";
import { useNavigate } from "react-router-dom";
import { ForgotPassValidation } from "../utils/FieldValidation";

const ForgotPassword = ({type}) => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleForgotPassword = async (values) => {
    try {
      const response = await axiosInstance.post(`/${type}/inputEmail`, values);
      navigate(`/${type}/otp`, { state: { context: "forgotPassword" } });
    } catch (error) {
      console.error("There was an error!", error);
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="flex flex-col text-white justify-center items-center h-screen px-8">
      <div className="rounded-lg px-10 py-8 animate-fadeIn bg-[#05050599]">
        <div className="flex items-center justify-center mb-4">
          <img src={Logo} alt="" className="h-14" />
          <h1 className="text-3xl font-semibold font-signature gradient-bg">
            MeloVibe
          </h1>
        </div>
        <h2 className="text-center mb-4 text-lg font-semibold text-gray-400">
          Forgot Password
        </h2>
        <Formik
          initialValues={{ email: "" }}
          validationSchema={ForgotPassValidation}
          onSubmit={handleForgotPassword}
        >
          {({ errors, touched }) => (
            <Form className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <div className="flex items-center bg-transparent border-2 border-gray-300 rounded">
                  <HiOutlineMail className="text-gray-300 mx-1 text-lg" />
                  <Field
                    placeholder="Email"
                    type="email"
                    name="email"
                    className="p-1 bg-transparent w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 border-l-2 border-gray-300 placeholder:text-gray-500"
                  />
                </div>
                {touched.email && errors.email && (
                  <small className="text-red-400">{errors.email}</small>
                )}
              </div>
              {error && (
                <div className="text-red-400 text-sm mb-2">{error}</div>
              )}
              <Button
                type="submit"
                classname="w-full mt-2 py-3 px-6 bg-gradient-to-r from-pink-500 to-blue-900"
              >
                Send OTP
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ForgotPassword;
