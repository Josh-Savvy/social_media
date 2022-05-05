import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import Router from "next/router";
import Link from "next/link";
import { API } from "../config";
import { authenticate, getCookie, isAuth } from "../helpers/auth";
import { errorAlert, successAlert } from "../components/alerts";

const Register = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    country: "",
    city: "",
    address: "",
    error: "",
    success: "",
    buttonText: "Submit",
  });
  const {
    phone,
    country,
    address,
    city,
    name,
    password,
    confirmPassword,
    email,
    success,
    error,
    buttonText,
  } = state;

  isAuth() &&
    setTimeout(() => {
      Router.push("/");
    }, 0);


  const handleChange = (name) => (e) => {
    setState({
      ...state,
      [name]: e.target.value,
      error: "",
      success: "",
      buttonText: "Submit",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({
      ...state,
      buttonText: (
        <div className="flex justify-center">
          <svg
            role="status"
            className="w-8 h-8 mr-2 text-transparent animate-spin fill-white"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="mt-1">Please wait..</span>
        </div>
      ),
    });
    try {
      // http://localhost:5000/api/register
    } catch (error) {
      //
    }
  };

  return (
    <Layout pageTitle="Register">
      <div className="flex flex-wrap justify-center">
        <form
          className="md:mt-12 mt-10 p-3 md:p-0"
          onSubmit={(e) => handleSubmit(e)}
        >
          {error && errorAlert(error)}
          {success && successAlert(success)}
          <div
            data-step="1"
            id="data_step_1"
            className="bg-white border border border-gray-300 rounded-md px-5 py-12 relative"
          >
            <div className="mb-10 text-center ">
              <h1 className="font-semibold tracking-widest uppercase text-lg">
                Create new account
              </h1>
              <span className="italic">Step 1 of 2</span>
            </div>
            <div className="relative my-4 border-b-2 focus-within:border-green-400">
              <input
                type="text"
                placeholder=" "
                name="name"
                id="name"
                value={name}
                onChange={handleChange("name")}
                className="px-20 block w-full text-black focus:outline-none bg-tranparent w-full"
              />
              <label
                htmlFor="name"
                className="registration_labels absolute top-0 left-0 duration-300 origin-0 text-md"
              >
                Name
              </label>
            </div>
            <div className="relative my-8 border-b-2 focus-within:border-green-400">
              <input
                type="email"
                placeholder=" "
                name="email"
                id="email"
                value={email}
                onChange={handleChange("email")}
                className="px-20 block w-full appearance-none focus:outline-none bg-tranparent"
              />
              <label
                htmlFor="email"
                className="registration_labels absolute top-0 left-0  duration-300 origin-0 text-md"
              >
                Email
              </label>
            </div>
            <div className="relative my-4 border-b-2 focus-within:border-green-400">
              <input
                type="password"
                placeholder=" "
                name="password"
                id="password"
                value={password}
                onChange={handleChange("password")}
                className="px-20 block w-full appearance-none focus:outline-none bg-tranparent"
              />
              <label
                htmlFor="password"
                className="registration_labels absolute top-0 left-0  duration-300 origin-0 text-md"
              >
                Password
              </label>
            </div>
            <div className="relative my-8 border-b-2 focus-within:border-green-400">
              <input
                type="confirmPassword"
                placeholder=" "
                name="confirmPassword"
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleChange("confirmPassword")}
                className="px-20 block w-full appearance-none focus:outline-none bg-tranparent"
              />
              <label
                htmlFor="confirmPassword"
                className="registration_labels absolute top-0 left-0  duration-300 origin-0 text-md"
              >
                Confirm Password
              </label>
            </div>
            <div className="flex flex-wrap justify-between mt-6 ">
              <div className="absolute left-4">
                <span
                  onClick={() => {
                    if (error === "") {
                      if (
                        name !== "" &&
                        email !== "" &&
                        password !== "" &&
                        confirmPassword !== ""
                      ) {
                        document
                          .getElementById("data_step_2")
                          .classList.remove("hidden");
                        document
                          .getElementById("data_step_1")
                          .classList.add("hidden");
                        document
                          .getElementById("submit_btn")
                          .classList.remove("hidden");
                      }
                    }
                  }}
                  className={
                    name.length > 10 && email.length > 15
                      ? "bg-green-700 hover:bg-green-600 hover:cursor-pointer select-none rounded px-5 duration-300 py-1 text-xl text-white font-semibold ml-3"
                      : "bg-green-700 hover:bg-green-600 hover:cursor-pointer select-none rounded px-5 duration-300 py-1 text-xl text-white font-semibold ml-3 duration-300 hidden"
                  }
                >
                  Next
                </span>
              </div>
              <span className="absolute right-2">
                <span className="text-sm md:visible invisible">
                  Already a User?{" "}
                </span>
                <Link href="/login">
                  <span className="text-white bg-indigo-500 font-semibold hover:cursor-pointer hover:bg-indigo-600 duration-300 p-2 px-4 rounded">
                    Sign in
                  </span>
                </Link>
              </span>
            </div>
          </div>

          <div
            data-step="2"
            id="data_step_2"
            className="hidden translate-x-[] hover:-transform-none duration-500 bg-white border border border-gray-300 rounded-t-md px-10 py-14 relative"
          >
            <div className="mb-10 text-center ">
              <h1 className="font-semibold tracking-widest uppercase text-lg">
                Create new account
              </h1>
              <span className="italic">Step 2 of 2</span>
            </div>
            <div className="relative my-8 border-b-2 focus-within:border-green-400">
              <input
                type="address"
                placeholder=" "
                name="address"
                id="address"
                value={address}
                onChange={handleChange("address")}
                className="px-20 block w-full appearance-none focus:outline-none bg-tranparent"
              />
              <label
                htmlFor="address"
                className="registration_labels absolute top-0 left-0  duration-300 origin-0 text-md"
              >
                Address
              </label>
            </div>
            <div className="relative my-4 mb-9 border-b-2 focus-within:border-green-400">
              <input
                type="text"
                placeholder=" "
                name="city"
                id="city"
                value={city}
                onChange={handleChange("city")}
                className="px-20 block w-full appearance-none focus:outline-none bg-tranparent"
              />
              <label
                htmlFor="city"
                className="registration_labels absolute top-0 left-0 duration-300 origin-0 text-md"
              >
                City
              </label>
            </div>

            <div className="relative my-9 border-b-2 focus-within:border-green-400">
              <input
                type="country"
                placeholder=" "
                name="country"
                id="country"
                value={country}
                onChange={handleChange("country")}
                className="px-20 block w-full appearance-none focus:outline-none bg-tranparent"
              />
              <label
                htmlFor="country"
                className="registration_labels absolute top-0 left-0  duration-300 origin-0 text-md"
              >
                Country
              </label>
            </div>
            <div className="relative my-4 mb-9 border-b-2 focus-within:border-green-400">
              <input
                type="text"
                placeholder=" "
                name="phone"
                id="phone"
                value={phone}
                onChange={handleChange("phone")}
                className="px-20 block w-full appearance-none focus:outline-none bg-tranparent"
              />
              <label
                htmlFor="phone"
                className="registration_labels absolute top-0 left-0 duration-300 origin-0 text-md"
              >
                Phone
              </label>
            </div>
            <div className="flex flex-wrap justify-between mt-9 ">
              <div className="absolute left-4">
                <span
                  onClick={() => {
                    document
                      .getElementById("data_step_2")
                      .classList.add("hidden");
                    document
                      .getElementById("data_step_1")
                      .classList.remove("hidden");
                    document
                      .getElementById("submit_btn")
                      .classList.add("hidden");
                  }}
                  className="bg-green-500 select-none duration-300 hover:bg-gray-400 hover:cursor-pointer rounded px-5 py-1 text-xl text-white font-semibold"
                >
                  Prev
                </span>
              </div>
              <span className="absolute right-2">
                <span className="text-sm">Already a User? </span>
                <Link href="/login">
                  <span className="text-white bg-indigo-500 font-semibold hover:cursor-pointer hover:bg-indigo-600 duration-300 p-2 px-4 rounded">
                    Sign in
                  </span>
                </Link>
              </span>
            </div>
          </div>
          <div className="flex flex-wrap hidden" id="submit_btn">
            <button className="bg-green-700 w-full outline-none hover:bg-green-600 duration-300 select-none hover:cursor-pointer rounded-b px-5 py-1 text-xl text-white font-semibold">
              {buttonText}
            </button>
          </div>
        </form>
      </div>
      {/* {JSON.stringify(state)} */}
    </Layout>
  );
};

export default Register;
