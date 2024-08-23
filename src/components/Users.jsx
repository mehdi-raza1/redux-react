import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeUser, currentUser } from "../features/users/userSlice";

export default function Users() {
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  return (
    <>
      <div>Users</div>
      <ul className="list-none">
        {/* {console.log(users)} */}
        {users &&
          users.map((user) => (
            <li
              key={user.id}
              className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            >
              <div className="flex">
                <div className="text-white me-4">Name: {user.userName}</div>
                <div className="text-white">Email: {user.userEmail}</div>
              </div>
              <div>
                <button
                  className="text-white bg-red-500 border-0 py-1 me-4 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                  onClick={() => dispatch(removeUser(user.id))}
                >
                  X
                </button>
                <button
                  onClick={() => dispatch(currentUser(user))}
                  className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
                >
                  Update
                </button>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}
