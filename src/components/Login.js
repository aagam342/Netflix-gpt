import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const toggleSignIn = () => {
    setisSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg"
          alt="bg"
        />
      </div>
      <form className="p-12 mx-auto my-28 w-4/12 absolute bg-black left-0 right-0 text-white rounded-lg bg-opacity-85">
        <h1 className="text-2xl font-bold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full rounded-sm bg-gray-800"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full rounded-sm bg-gray-800"
        />

        <input
          type="text"
          placeholder="Password"
          className="p-4 my-2 w-full rounded-sm bg-gray-800"
        />
        <button className=" p-2 my-4 bg-red-700 w-full rounded-sm">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p onClick={toggleSignIn} className="cursor-pointer">
          {isSignInForm
            ? "New to Netflix? Sign Up now."
            : "Already a member? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
