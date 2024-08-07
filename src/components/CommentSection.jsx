import React from "react";
import { Link } from "react-router-dom";

const CommentSection = ({ comment }) => {
  return (
    <div className="bg-bgColor h-52">
      <p>{comment}</p>
      <Link>View all comments</Link>
    </div>
  );
};

export default CommentSection;
