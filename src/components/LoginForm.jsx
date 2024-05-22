import React from "react";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import Button from "./Button";
import { LoginValidation } from "../utils/FieldValidation";
import Logo from "../assets/trans-logo.png";
import { HiOutlineMail } from "react-icons/hi";
import { GoLock } from "react-icons/go";

const initialValues = {
  email: "",
  password: "",
};

function LoginForm({ bgImage, signupLink, className }) {
  return (
    <div
      className={`flex flex-col text-white xxs:px-7 xs:px-12 sm:px-16 lg:px-28 xl:px-64 justify-center ${className}`}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="rounded-lg xxs:px-10 md:px-14 xxs:py-3 xs:py-5 md:py-5 lg:py-7 xl:py-8 animate-fadeIn bg-[#05050599]">
        <div className="flex items-center justify-center">
          <img src={Logo} alt="" className="xxs:h-14 lg:h-20" />
          <h1 className="text-5xl xxs:text-3xl lg:text-5xl font-semibold font-signature gradient-bg">
            MeloVibe
          </h1>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={LoginValidation}
        >
          {({ errors, touched }) => (
            <Form className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <div>
                  <label
                    htmlFor="email"
                    className="block font-bold mb-2 text-gray-500"
                  >
                    Email
                  </label>
                  <div className="flex items-center bg-transparent border-2 border-gray-500 rounded">
                  <HiOutlineMail className="text-gray-500 mx-1"/>
                  <Field
                    type="email"
                    name="email"
                    className="bg-transparent w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 border-l-2 border-gray-500"
                  />
                  </div>
                </div>
                {touched.email && errors.email && (
                  <small className="text-red-400">{errors.email}</small>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <div>
                  <label
                    htmlFor="password"
                    className="block font-bold mb-2 text-gray-500"
                  >
                    Password
                  </label>
                  <div className="flex items-center bg-transparent border-2 border-gray-500 rounded">
                  <GoLock className="text-gray-500 mx-1"/>
                  <Field
                    type="password"
                    name="password"
                    className="bg-transparent w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 border-l-2 border-gray-500"
                  />
                  </div>
                </div>
                {touched.password && errors.password && (
                  <small className="text-red-400">{errors.password}</small>
                )}
              </div>
              <Link to={'/'}>
              <Button
                type="submit"
                classname="w-full mt-2 py-3 px-6 bg-gradient-to-r from-pink-500 to-blue-900"
              >
                Login
              </Button>
              </Link>
            </Form>
          )}
        </Formik>
        <h4 className="text-center mt-4 text-gray-500 hover:text-gray-400">Forgot Password ?</h4>
        <div className="text-center mt-4 text-gray-400 xxs:text-sm xs:text-base">
          New to MeloVibe ?
          <Link to={signupLink}>
            <span className="font-bold text-blue-800 hover:text-pink-500 duration-150 cursor-pointer ml-1">
              Signup
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
