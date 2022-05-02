import React, { useState } from "react";

const PostMaker = ({}) => {
  const [postMakerState, setPostMakerState] = useState([]);
  return (
    <div className="">
      <div className="bg-green-400 w-full shadow-lg rounded-lg p-5">
        <textarea
          value={postMakerState}
          onChange={(e) => setPostMakerState(e.target.value)}
          className="bg-green-200 w-full rounded-lg text-black shadow border p-2 resize-none outline-none"
          rows="3"
          placeholder="Speak your mind. . ."
        ></textarea>

        <div className="w-full flex flex-row flex-wrap mt-3">
          <div className="md:w-2/3 w-2/3 relative mt-2">
            <span className="absolute bottom-11 text-sm italic">
              Set post audience:
            </span>
            <select className="w-1/2 p-2 rounded-lg bg-indigo-400 focus:outline-none text-white z-10 shadow float-left hover:cursor-pointer">
              <option value="Friends only">Friends only</option>
              <option value="Public">Public</option>
              <option value="Private">Private</option>
            </select>
          </div>
          <div className="w-1/3">
            <button
              onClick={() => {
                postMakerState && console.log(postMakerState);
              }}
              type="button"
              className="float-right bg-white hover:bg-green-700 duration-300 hover:text-white font-bold text-green-500 px-4 p-2 rounded-lg"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostMaker;
