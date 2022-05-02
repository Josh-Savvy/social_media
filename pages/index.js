import React, { useState } from "react";
import Layout from "../components/layout";
import PostCard from "../components/postcard";

const Home = () => {
  const [postMakerState, setPostMakerState] = useState("");

  const [posts, setPosts] = useState([
    {
      name: "Daniel Mirlea",
      imageUrl:
        "https://images.unsplash.com/photo-1572817519612-d8fadd929b00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      postCaption:
        "A Pretty Cool photo from the mountains. Image credit to @danielmirlea on Unsplash.",
      relevantCommentName: "@Some Person",
      relevantComment:
        " A Pretty Cool photo from the mountains. Image credit to",
    },

    {
      name: "John Doe",
      imageUrl:
        "https://assets.imgix.net/hp/snowshoe.jpg?__hstc=158051173.19b41a4c8738011fb3c0375e558a31dc.1651197574286.1651197574286.1651197574286.1&__hssc=158051173.2.1651197574287&__hsfp=3821211013",
      postCaption:
        "A Pretty Cool photo from the mountains. Image credit to @johndoe on Unsplash.",
      relevantCommentName: "@Some Person",
      relevantComment:
        "@danielmirlea on Unsplash. A Pretty Cool photo from the",
    },
    {
      name: "Daniel Mirlea",
      imageUrl:
        "https://images.unsplash.com/photo-1572817519612-d8fadd929b00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      postCaption:
        "A Pretty Cool photo from the mountains. Image credit to @danielmirlea on Unsplash.",
      relevantCommentName: " @Some Person",
      relevantComment: "mountains. Image credit to @danielmirlea on Unsplash.",
    },
    {
      name: "Daniel Mirlea",
      imageUrl: `https://random.imagecdn.app/500/15${Math.ceil(
        Math.random(1) * 4 + 4
      )}`,
      postCaption:
        "A Pretty Cool photo from the mountains. Image credit to @danielmirlea on Unsplash.",
      relevantCommentName: "@Some Person",
      relevantComment:
        " A Pretty Cool photo from the mountains. Image credit to",
    },
  ]);
  return (
    <Layout pageTitle="Newsfeed">
      <div className="">
        <div className="py-4 w-full flex flex-row flex-wrap justify-center">
          <div className="w-full md:w-3/4 lg:w-4/5 p-5 md:px-12 lg:24 h-full antialiased">
            <div className="">
              <div className="bg-green-400 w-full shadow-lg rounded-lg p-5">
                <textarea
                  value={postMakerState}
                  maxLength="150"
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
                        postMakerState &&
                          posts.push({
                            name: "User",
                            imageUrl: `https://random.imagecdn.app/500/1${Math.floor(
                              Math.random() * 100
                            )}`,
                            postCaption: postMakerState,
                            relevantComment: "",
                          });
                        setPostMakerState("");
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
            {posts &&
              posts
                .map((post, i) => (
                  <>
                    {posts ? (
                      <PostCard
                        poster={post.name}
                        imageUrl={post.imageUrl}
                        postCaption={post.postCaption}
                      />
                    ) : (
                      ""
                    )}
                  </>
                ))
                .reverse()}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
