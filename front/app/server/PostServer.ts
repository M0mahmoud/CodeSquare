"use server";

import { ListPostRes } from "@/api";
import { HOST } from "@/client";

export const listPosts = async (): Promise<ListPostRes> => {
  const res = await fetch(`${HOST}/v1/posts`);
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  const data = await res.json();
  return data;
};
