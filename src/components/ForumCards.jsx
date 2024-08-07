import { EllipsisVertical } from "lucide-react";
import React from "react";

const ForumCards = ({ headerText, avatar, styles, children }) => {
  return (
    <div className={`${styles} w-2/3`}>
      <p className="flex justify-between ">
        <p className="flex gap-4">
          {avatar}
          {headerText}
        </p>
        <EllipsisVertical />
      </p>
      <div className="forum-image">
        <div className="flex overlay-forum items-center justify-center">
          {children}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ForumCards;
