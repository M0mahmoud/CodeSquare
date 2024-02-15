import { listPosts } from "@/app/server/PostServer";
import React from "react";
import Post from "./Post";

const ListPosts = async () => {
  const data = await listPosts();
  return (
    <div className="flex justify-between items-start gap-10 flex-col">
      {data.posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default ListPosts;
