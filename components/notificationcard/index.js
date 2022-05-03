import { useEffect, useState } from "react";

const NotificationCard = ({ ...userData }) => {
  const [user, setUser] = useState({
    name: "",
    message: "",
    time: "",
    imgSrc: "",
    id: "",
  });
  const { id, name, message, time, imgSrc } = user;

  useEffect(() => {
    setUser({
      ...user,
      name: userData.name,
      message: userData.message,
      time: userData.time,
      imgSrc: userData.imgSrc,
      id: userData.id,
    });
  }, []);

  return (
    name && (
      <div
        className="mt-2 p-2 relative select-none hover:cursor-pointer"
        id={id}
      >
        <div className="grid rounded p-3 md:px-10 bg-green-100 border border-gray-300 shadow duration-400">
          <div className="flex">
            {name && imgSrc ? (
              <img
                src={imgSrc}
                className="rounded-full bg-gray-200 w-12 p-1 md:mr-4 absolute md:top-5"
              />
            ) : (
              name && (
                <span className="rounded-full bg-gray-200 p-5 w-12 mr-4 "></span>
              )
            )}
            <div className="grid ml-16 p-1 md:ml-20">
              <div>
                <span className="font-semibold text-md">{name} </span>
                {message}
              </div>
              <div className="text-blue-800 text-sm">{time}</div>
            </div>
          </div>
        </div>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3 ">
          <svg
            onClick={() => {
              document.getElementById(id).classList.add("hidden");
            }}
            className="fill-current h-6 w-6 text-red-500 hover:scale-125 duration-300"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Clear</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      </div>
    )
  );
};

export default NotificationCard;
