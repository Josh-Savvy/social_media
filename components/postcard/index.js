import Link from "next/link";
import React from "react";

const PostCard = ({
  poster,
  imageUrl,
  postCaption,
  relevantCommentName,
  relevantComment,
}) => {
  return (
    <div>
      <div className="mt-3 flex flex-col">
        <div className="bg-white mt-3 rounded-lg">
          <div className="border border-b-2 py-2">
            <Link href="/user">
              <span className="text-xl relative font-bold m-4 hover:cursor-pointer">
                <span className="absolute">
                  <img
                    className="h-7 w-7 rounded-full"
                    src="/static/images/person-placeholder.jpg"
                    alt=""
                  />
                </span>
                <span className="ml-10">{poster}</span>
              </span>
            </Link>
          </div>
          <img
            className={
              imageUrl
                ? "border rounded-b-lg hover:shadow-lg shadow hover:cursor-pointer w-full duration-300 mb-3"
                : ""
            }
            src={imageUrl}
          />
          <div className="bg-white p-5">
            <span className="text-lg text-gray-700 font-semibold">
              {postCaption}
            </span>
          </div>
          <div className="bg-white p-1 border shadow flex flex-row flex-wrap rounded-b-lg">
            <div className="w-1/3 hover:bg-gray-200 text-center text-xl text-gray-700 font-semibold hover:cursor-pointer hover:text-red-600">
              <i className="fa fa-heart md:mx-2"></i> Like
            </div>
            <div className="w-1/3 hover:bg-gray-200 border-l-4 border-r- text-center text-xl text-gray-700 font-semibold hover:text-blue-600 hover:cursor-pointer">
              <i className="fa fa-share-alt md:mx-2"></i> Share
            </div>
            <div className="w-1/3 hover:bg-gray-200 border-l-4 hover:text-green-600 text-center text-lg md:text-xl text-gray-700 font-semibold hover:cursor-pointer">
              <i className="fa fa-comment md:mx-2"></i> Comment
            </div>
          </div>
          <div className="hidden">
            <div className="bg-white border-4 bg-green-100 border-white rounded shadow p-5 text-xl text-gray-700 content-center font-semibold flex flex-row flex-wrap">
              <div className="w-full">
                <div className="w-full text-left text-xl text-gray-600">
                  {relevantCommentName}
                </div>
                {relevantComment}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
