import React from "react";
import { useState } from "react";
import { createUser } from "../../appwrite";
import { useNavigate } from "react-router";

const SignUp = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  function signUpUser(e) {
    // const query = formData.get("email");
    e.preventDefault();
    createUser(email, password);
    navigate("/");
  }

  console.log("Email", email);
  return (
    <form
      noValidate
      onSubmit={signUpUser}
      className="text-white px-6 h-screen flex flex-col"
    >
      <section className="p-8 border-amber-100 border-2 rounded-lg h-fit my-auto mx-0">
        <h1 className="text-left text-4xl">Sign up</h1>
        <fieldset className="my-4">
          <label htmlFor="" className="opacity-70">
            Email
          </label>
          <input
            className="block w-full border-2 my-2 px-2 py-1 rounded-lg"
            type="email"
            name="email"
            id="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </fieldset>
        <fieldset className="my-4">
          <label htmlFor="" className="opacity-70">
            Password
          </label>
          <input
            className="block w-full border-2 my-2 px-2 py-1 rounded-lg"
            type="password"
            placeholder="******"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </fieldset>

        <button className="bg-white text-black w-full py-1 px-2 rounded-lg mb-6">
          Sign up
        </button>

        <div className="text-center ">
          <a href="">Forgot your password?</a>
          <p>or</p>
        </div>

        <button
          type="submit"
          className=" text-white border-white border-2 w-full py-1 px-2 rounded-lg my-6"
        >
          Sign up with Google
        </button>
        <div className="text-center">
          <p>
            Have an account?{" "}
            <a href="" className="underline">
              Sign in
            </a>
          </p>
        </div>
      </section>
    </form>
  );
};

export default SignUp;
