import React from "react";
import Layout from "../../components/layout";
import userMiddleware from "../../middlewares/userMiddlware";

const UserProfile = () => {
  return (
    <Layout>
      <div>User Profile</div>
    </Layout>
  );
};

export default userMiddleware(UserProfile);
