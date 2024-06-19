import React, { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import {  USER_AVATAR } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import LOGIN_PAGE_BG from "../images/LOGIN_PAGE_BACKGROUND.jpg"

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const toggleSignIn = () => {
    setisSignInForm(!isSignInForm);
  };
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();

  const handleBtnClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          // eslint-disable-next-line no-unused-vars
          const user = userCredential.user;
          // console.log(user);
          // ...
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div>
      <div>
        <img
          className="absolute top-0 left-0 object-cover w-full  "
          src={LOGIN_PAGE_BG}
          alt="bg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-12 mx-auto my-28 w-full md:w-4/12 absolute bg-black left-0 right-0 text-white rounded-lg bg-opacity-85"
      >
        <h1 className="text-3xl font-bold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full rounded-sm bg-gray-800"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full rounded-sm bg-gray-800"
        />

        <input
          ref={password}
          type="text"
          placeholder="Password"
          className="p-4 my-2 w-full rounded-sm bg-gray-800"
        />
        <p className="font-bold text-lg text-red-500 p-2">{errorMessage}</p>
        <button
          className=" p-2 my-4 bg-red-700 w-full rounded-sm"
          onClick={handleBtnClick}
        >
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
