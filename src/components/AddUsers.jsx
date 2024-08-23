import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addUser,
  clearCurrentUser,
  updateUser,
} from "../features/users/userSlice";

export default function AddUsers() {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  const currentUser = useSelector((state) => state.user.currentUser);
  // console.log(currentUser)
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      setInputName(currentUser.userName || "");
      setInputEmail(currentUser.userEmail || "");
    }
  }, [currentUser]);

  function addUserHandler(e) {
    e.preventDefault();
    if (currentUser) {
      console.log(currentUser.id)
      console.log(inputName)
      console.log(inputEmail)

      dispatch(
        updateUser({
          id: currentUser.id,
          name: inputName,
          email: inputEmail,
        })
      );
      setInputName("");
      setInputEmail("");
      dispatch(clearCurrentUser());
    } else {
      dispatch(
        addUser({
          name: inputName,
          email: inputEmail,
        })
      );
      setInputName("");
      setInputEmail("");
    }
  }

  return (
    <div>
      <form className="space-x-3 mt-12" onSubmit={addUserHandler}>
        <input
          type="text"
          required
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Name..."
          value={inputName}
          onChange={(e) => {
            setInputName(e.target.value);
          }}
        />
        <input
          type="email"
          required
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Email..."
          value={inputEmail}
          onChange={(e) => {
            setInputEmail(e.target.value);
          }}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          {currentUser ? "Update a User" : "Add a User"}
        </button>
      </form>
    </div>
  );
}
