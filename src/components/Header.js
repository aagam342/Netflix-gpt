import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import {
  NETFLIX_LOGO,
  SUPPORTED_LANGUAGE,
  USER_AVATAR,
} from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";
import { addSelectedMovieId } from "../utils/moviesSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  const handleGptSearchClick = () => {
    dispatch(addSelectedMovieId(null));
  };
  const handleHomePageClick = () => {
    dispatch(addSelectedMovieId(null));
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );

        // navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <Link to={"/browse"}>
        <img
          className="w-44 mx-auto md:mx-0 hover:scale-110"
          src={NETFLIX_LOGO}
          alt="logo"
          onClick={handleHomePageClick}
        />
      </Link>
      {user && (
        <div className="flex p-2 justify-between">
          {showGptSearch && (
            <select
              className="py-2 px-0 md:px-4 mr-4 my-2 bg-gray-900 text-white hover:scale-110"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGE.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <Link to={"/browse"}>
            <button
              className="py-2 px-3 md:px-6 mr-4 my-2 bg-purple-800 hover:scale-110 text-white rounded-lg"
              onClick={handleHomePageClick}
            >
              Home
            </button>
          </Link>
          <Link to={"/gptSearch"}>
            <button
              className="py-2 px-3 md:px-7 mr-4 my-2 bg-purple-800 hover:scale-110 text-white rounded-lg"
              onClick={handleGptSearchClick}
            >
              GPT
            </button>
          </Link>
          <img
            className="hidden md:block w-10 m-auto hover:scale-110"
            src={USER_AVATAR}
            alt="usericon"
          />
          <button
            className="font-bold text-white mx-2 hover:scale-110"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
