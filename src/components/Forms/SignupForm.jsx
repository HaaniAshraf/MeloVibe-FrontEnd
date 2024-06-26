import React from "react";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import Button from "../Buttons/Button";
import {
  SignupValidation,
  ArtistValidation,
  AdminValidation,
} from "../../utils/FieldValidation";
import Logo from "../../assets/trans-logo.png";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { GoLock } from "react-icons/go";
import { IoKeyOutline } from "react-icons/io5";

const initialValues = {
  userName: "",
  name: "",
  email: "",
  password: "",
  profileImg: null,
  secretKey: "",
};

const SignupForm = ({
  bgImage,
  loginLink,
  className,
  handleSubmit,
  type,
  error,
}) => {
  const getValidationSchema = () => {
    switch (type) {
      case "user":
        return SignupValidation;
      case "artist":
        return ArtistValidation;
      case "admin":
        return AdminValidation;
    }
  };
  const validationSchema = getValidationSchema();
  return (
    <div
      className={`flex text-white xxs:px-7 xs:px-12 sm:px-20 lg:px-28 xl:px-64 xxs:py-2 xxs:gap-7 md:gap-10 lg:gap-12 xl:gap-14 items-center ${className}`}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="rounded-lg xxs:px-10 md:px-14 xxs:py-3 md:py-5 lg:py-7 xl:py-8 animate-fadeIn bg-[#050505df]">
        <div className="flex items-center justify-center">
          <img src={Logo} alt="" className="xxs:h-14 lg:h-20" />
          <h1 className="text-5xl xxs:text-3xl lg:text-5xl font-semibold font-signature gradient-bg">
            MeloVibe
          </h1>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, setFieldValue }) => (
            <Form className="flex flex-col gap-5 mt-3">
              {type === "artist" && (
                <div className="flex flex-col gap-1">
                  <label htmlFor="profileImg" className="text-gray-400">
                    Profile Image:
                  </label>
                  <input
                    id="profileImg"
                    name="profileImg"
                    type="file"
                    accept="image/*"
                    className="p-1 w-full bg-transparent border-2 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                    onChange={(event) => {
                      setFieldValue("profileImg", event.currentTarget.files[0]);
                    }}
                  />
                  {touched.profileImg && errors.profileImg && (
                    <small className="text-red-400">{errors.profileImg}</small>
                  )}
                </div>
              )}
              <div className="flex flex-col gap-1">
                <div>
                  <div className="flex items-center bg-transparent border-2 border-gray-300 rounded">
                    <AiOutlineUser className="text-gray-300 mx-1 text-lg" />
                    <Field
                      type="text"
                      placeholder={type === "artist" ? "Name" : "Username"}
                      name={type === "artist" ? "name" : "userName"}
                      className="p-1 bg-transparent w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 border-l-2 border-gray-300 placeholder:text-gray-500"
                    />
                  </div>
                </div>
                {touched[type === "artist" ? "name" : "userName"] &&
                  errors[type === "artist" ? "name" : "userName"] && (
                    <small className="text-red-400">
                      {errors[type === "artist" ? "name" : "userName"]}
                    </small>
                  )}
              </div>
              <div className="flex flex-col gap-1">
                <div>
                  <div className="flex items-center bg-transparent border-2 border-gray-300 rounded">
                    <HiOutlineMail className="text-gray-300 mx-1 text-lg" />
                    <Field
                      placeholder="Email"
                      type="email"
                      name="email"
                      className="p-1 bg-transparent w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 border-l-2 border-gray-300 placeholder:text-gray-500"
                    />
                  </div>
                </div>
                {touched.email && errors.email && (
                  <small className="text-red-400">{errors.email}</small>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <div>
                  <div className="flex items-center bg-transparent border-2 border-gray-300 rounded">
                    <GoLock className="text-gray-300 mx-1 text-lg" />
                    <Field
                      placeholder="Password"
                      type="password"
                      name="password"
                      className="p-1 bg-transparent w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 border-l-2 border-gray-300 placeholder:text-gray-500"
                    />
                  </div>
                </div>
                {touched.password && errors.password && (
                  <small className="text-red-400">{errors.password}</small>
                )}
              </div>
              {type === "admin" && (
                <div className="flex flex-col gap-1">
                  <div>
                    <div className="flex items-center bg-transparent border-2 border-gray-300 rounded">
                      <IoKeyOutline className="text-gray-300 mx-1 text-lg" />
                      <Field
                        placeholder="Secret Key"
                        type="password"
                        name="secretKey"
                        className="p-1 bg-transparent w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 border-l-2 border-gray-300 placeholder:text-gray-500"
                      />
                    </div>
                  </div>
                  {touched.secretKey && errors.secretKey && (
                    <small className="text-red-400">{errors.secretKey}</small>
                  )}
                </div>
              )}
              {error && (
                <div className="text-red-400 text-sm mb-2">{error}</div>
              )}
              <Button
                type="submit"
                classname="mt-4 py-3 px-6 bg-gradient-to-r from-pink-500 to-blue-900"
              >
                Signup
              </Button>
            </Form>
          )}
        </Formik>
        <div className="text-center mt-5 text-gray-400">
          Already Signed Up?
          <Link to={loginLink}>
            <span className="font-bold text-blue-800 hover:text-pink-500 duration-150 cursor-pointer ml-1">
              Login
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
