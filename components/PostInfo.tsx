import Heading from "./Heading";
import React, { FC } from "react";
import { postType } from "../types";

type postInfoProps = {
  post: postType;
};

const PostInfo: FC<postInfoProps> = ({ post }) => {
  const { title, body } = post || {};

  if (!post) {
    return <Heading tag="h3" text="Тут ничего нет :(" />;
  }

  return (
    <>
      <Heading tag="h3" text={title} />
      <div>
        <strong>{title}</strong>
      </div>
      <div>{body}</div>
    </>
  );
};

export default PostInfo;
