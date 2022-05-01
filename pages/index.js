import React, { useState } from "react";
import Layout from "../components/layout";
import PostCard from "../components/postcard";
import PostMaker from "../components/postmaker";

const Home = () => {
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
      imageUrl: "",
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
        <div class="py-4 w-full flex flex-row flex-wrap justify-center ">
          <div class="w-full md:w-3/4 lg:w-4/5 p-5 md:px-12 lg:24 h-full antialiased">
            <PostMaker />
            {posts &&
              posts.map((post, i) => (
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
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
