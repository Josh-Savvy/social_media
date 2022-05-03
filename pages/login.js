import Link from "next/link";
import jwt from "jsonwebtoken";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import { API, JWT_SIGN_KEY } from "../config";
import { authenticate, isAuth } from "../helpers/auth";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    error: "",
    success: "",
    buttonText: "Login",
  });
  const { password, email, success, error, buttonText } = state;

  // useEffect(() => isAuth() && Router.push("/"), []);

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
    console.table(name, email, password);
    setState({
      ...state,
      buttonText: (
        <div className="flex justify-center">
          <div className="md:text-3xl">
            <i className="fa fa-spinner fa-spin"></i>
          </div>
          <span className="md:ml-2 md:mt-1 ml-2 whitespace-nowrap md:whitespace-nowrap">
            Logging in
          </span>
        </div>
      ),
    });
    try {
      const response = {
        data: {
          token: `${jwt.sign({ email, password }, JWT_SIGN_KEY)}`,
          user: {
            _id: function uuidv4() {
              return "xxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(
                /[xy]/g,
                function (c) {
                  var r = (Math.random() * 16) | 0,
                    v = c == "x" ? r : (r & 0x3) | 0x8;
                  return v.toString(16);
                }
              );
            },
            name: "UserName",
            email: email,
            role: "user",
          },
        },
      };
      authenticate(response, () =>
        isAuth() && isAuth().role === "admin"
          ? Router.push("/admin")
          : Router.push("/user")
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout pageTitle="Login">
      <div
        className="flex flex-wrap justify-center"
        style={{ overflowX: "hidden" }}
      >
        <form
          className="md:mt-24 mt-20 p-3 md:p-0"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="bg-white border border border-gray-300 rounded-md px-20 p-5 py-11 relative shadow-xl">
            <div className="mb-10 text-center ">
              <h1 className="font-semibold tracking-widest uppercase text-xl">
                Log in to your account
              </h1>
            </div>
            <div className="relative my-8 border-b-2 focus-within:border-green-400 ">
              <input
                type="email"
                placeholder=" "
                name="email"
                id="email"
                value={email}
                onChange={handleChange("email")}
                className="block w-full appearance-none w-full focus:outline-none bg-tranparent"
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
                className="block w-full appearance-none focus:outline-none bg-tranparent"
              />
              <label
                htmlFor="password"
                className="registration_labels absolute top-0 left-0  duration-300 origin-0 text-md"
              >
                Password
              </label>
            </div>
            <div className="flex flex-wrap justify-center hover:cursor-pointer">
              <button className="bg-green-700 hover:bg-green-600 rounded p-2 text-xl text-white font-semibold">
                {buttonText}
              </button>
            </div>
            <div className="flex flex-wrap justify-between mt-6 ">
              <Link href="/">
                <span className="absolute left-32 md:left-48 md:right-48 right-32 bottom-28 whitespace-nowrap text-red-500 hover:bg-gray-50 hover:cursor-pointer p-1 rounded font-semibold text-md italic">
                  Forgot Password?
                </span>
              </Link>
            </div>
            <br />
            <hr />
            <Link href="/register">
              <div className="flex flex-wrap justify-center hover:cursor-pointer mt-5">
                <span className="bg-green-700 bg-indigo-500 text-white text-center hover:bg-indigo-600 rounded w-3/4 py-2 text-xl text-white font-semibold">
                  Sign up
                </span>
              </div>
            </Link>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
