import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { user, setUser } = useContext(UserContext);
  console.log("Context_user: ", user);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ name, email });
  };
  return (
    <div className="flex flex-col justify-center items-center gap-2 w-screen h-screen ">
      <form
        onSubmit={handleSubmit}
        className="border p-8 shadow-2xl flex flex-col rounded-xl bg-gradient-to-t from-indigo-400 via-purple-200 to-pink-400"
      >
        <h1 className="text-3xl font-semibold text-violet-700 mb-6 rounded-md">
          Log In
        </h1>
        <div>
          <label htmlFor="name" className="font-semibold">
            Username
          </label>
          <input
            type="text"
            required
            name="name"
            id="name"
            placeholder="dummy1u"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-green-200 rounded-md p-2 mt-1 mb-4 "
          />
        </div>

        <div>
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            type="email"
            required
            name="email"
            id="email"
            value={email}
            placeholder="dummy@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-green-200 rounded-md p-2 mt-1 mb-4"
          />
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="mx-auto bg-yellow-500 p-2 rounded-md hover:bg-yellow-600 font-semibold"
        >
          summit
        </button>
      </form>
    </div>
  );
}

export default Login;
