import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import Link from "next/link";
import { API } from "../config";
import { authenticate, isAuth } from "../helpers/auth";
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

  useEffect(() => isAuth() && Router.push("/"), []);

  const handleChange = (name) => (e) => {
    setState({
      ...state,
      [name]: e.target.value,
      error: "",
      success: "",
      buttonText: "Login",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({
      ...state,
      buttonText: (
        <div className="flex justify-center">
          <i className="fa fa-spinner fa-spin text-3xl"></i>
          <span className="ml-2 mt-1">Please wait..</span>
        </div>
      ),
    });
    try {
    } catch (error) {
      //
    }
  };

  return (
    <Layout pageTitle="Register">
      <div className="flex flex-wrap justify-center">
        <form
          data-multi-step
          className="md:mt-12 mt-10 p-3 md:p-0"
          onSubmit={(e) => handleSubmit(e)}
        >
          {error && errorAlert(error)}
          {success && successAlert(success)}
          <div
            data-step="1"
            id="data_step_1"
            className="bg-white border border border-gray-300 rounded-md px-16 py-12 relative"
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
                className="px-20 block w-full appearance-none focus:outline-none bg-tranparent"
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
                  className="bg-green-700 hover:bg-green-600 hover:cursor-pointer select-none rounded px-5 duration-300 py-1 text-xl text-white font-semibold ml-3"
                >
                  Next
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
