import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout";
import axios from "axios";
import { API } from "../../../config";

const Friends = () => {
  const [apiResult, setApiResult] = useState("");
  useEffect(() => {
    axios
      .get(`${API}`)
      .then((result) => {
        console.log(result);
        setApiResult(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Layout pageTitle="Friends">
      {apiResult
        ? `>>>[server response]: ${apiResult}`
        : ">>>[server response]: No response from server"}
    </Layout>
  );
};

export default Friends;
