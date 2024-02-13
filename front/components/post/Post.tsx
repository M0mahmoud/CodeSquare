import { Post } from "@/types";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const PostCard = ({ post }: { post: Post }) => {
  return (
    <div className="border-b py-2 w-full">
      <div className="flex gap-1  mb-2  justify-between items-start">
        <Link href={`p/${post.id}`} className="text-xl text-primary font-bold">
          {post.title}
        </Link>

        <Button variant={"outline"} className="h-8 py-1 px-2">
          105 Comments
        </Button>
      </div>
      <div className="flex gap-4">
        <Link
          href={post.id}
          className="text-sm text-secondary-foreground font-bold"
        >
          mahmoud05
        </Link>
        <Link href={post.url} className="text-sm text-muted">
          {post.postedAt}
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
