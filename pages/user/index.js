import Router from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import { getCookieFromBrowser, isAuth } from "../../helpers/auth";

const UserProfile = () => {
  const [userData, setUserData] = useState([]);
  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "",
  });
  const { name, email, role } = user;

  useEffect(() => {
    isAuth()
      ? setUserData(localStorage.getItem("user"))
      : Router.push("/login");
    isAuth() && setUser({ ...user, name: isAuth().name.split(" ")[0] });
  }, []);

  return (
    <Layout>{name ? <div>User: {name && name}</div> : "No user found"}</Layout>
  );
};

export default UserProfile;
