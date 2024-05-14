import React, { useState } from "react";
import BgImg from "../../assets/login-bg.jpg";
import Logo from '../../assets/trans-logo.png'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div
      className="flex flex-col text-white xxs:px-2 xxs:py-2 xxs:gap-7 md:gap-10 lg:gap-12 xl:gap-14 items-center justify-center"
      style={{
        backgroundImage: `url(${BgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="z-10 xxs:py-3 xxs:px-3 md:px-5 lg:px-8 md:py-5 lg:py-7 xl:py-8 bg-[#05050599] rounded-lg">
        <div className="px-8 py-2 rounded-lg shadow-md max-w-md w-full animate-fadeIn">
            <div className="flex items-center justify-center">
                <img src={Logo} alt="" className="xxs:h-14 lg:h-20" />
                <h1 className="text-5xl xxs:text-3xl lg:text-5xl font-semibold font-signature">MeloVibe</h1>     
            </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label
                htmlFor="email"
                className="block font-bold mb-2 text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
                className="w-full p-2 bg-transparent border-2 border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block font-bold mb-2 text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
                className="w-full p-2 bg-transparent border-2 border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
              />
            </div>
            <button
              type="submit"
              className="w-full mt-4 py-3 px-6 text-white rounded-md font-semibold transition duration-300 transform hover:scale-105 shadow-md bg-gradient-to-r from-pink-500 to-blue-900 cursor-pointer"
            >
              Login
            </button>
          </form>
          <h4 className="text-center mt-4 text-gray-500">Forgot Password ?</h4>
          <div className="text-center mt-4">New to MeloVibe ? <span className="font-bold text-blue-800 hover:text-pink-500 duration-150 cursor-pointer">Signup</span></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
