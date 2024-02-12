import React from "react";

type Props = {
  params: { id: string };
};

const PostPage = ({ params }: Props) => {
  return <div>POST | ID={params.id}</div>;
};

export default PostPage;
