import Router from "next/router";
import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Layout from "../../../components/layout";
import NotificationCard from "../../../components/notificationcard";
import { isAuth } from "../../../helpers/auth";

const Notifications = () => {
  const [notificationState, setNotificationState] = useState(true);
  useEffect(() => {
    !isAuth() && Router.push("/login");
  }, []);

  const userData = {
    imgSrc: "/static/images/person-placeholder.jpg",
    alt: "",
    name: "User 1 ",
    message: `liked your
comment: "What?! ❤🔥".`,
    time: "an hour ago",
    id: nanoid(),
  };

  const userData2 = {
    imgSrc: "/static/images/person-placeholder.jpg",
    alt: "",
    name: "User 2",
    message: `liked your
photo: "♥img".`,
    time: "an hour ago",
    id: nanoid(),
  };

  const userData3 = {
    imgSrc: "/static/images/person-placeholder.jpg",
    alt: "",
    name: "Joshua DC ",
    message: `liked your
photo: "♥img".`,
    time: "an hour ago",
    id: nanoid(),
  };

  return (
    <>
      <Layout>
        {isAuth() && (
          <div className="mt-2">
            <div className="justify-center flex">
              <span
                onClick={() => {
                  setNotificationState(false);
                  notificationState &&
                    document
                      .getElementById("notificationCardWrapper")
                      .classList.add("hidden");
                }}
                className="bg-green-400 hover:bg-green-500 select-none duration-300 whitespace-nowrap text-white p-2 justify-center rounded-md border shadow flex hover:cursor-pointer font-semibold"
              >
                Clear All Notifications
              </span>
            </div>
            {notificationState && (
              <div id="notificationCardWrapper">
                <NotificationCard {...userData} />
                <NotificationCard {...userData2} />
                <NotificationCard {...userData3} />
              </div>
            )}
            {!notificationState && (
              <div className="p-5">
                <span className="flex mt-16 uppercase justify-center font-semibold rounded">
                  No Notifications to show.
                </span>
              </div>
            )}
          </div>
        )}
      </Layout>
    </>
  );
};

export default Notifications;
