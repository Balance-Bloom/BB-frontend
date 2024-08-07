import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";
import { EllipsisVertical } from "lucide-react";
import React from "react";
import CommentSection from "./CommentSection";

const ForumCards = ({
  headerText,
  avatar,
  styles,
  postHeading,
  comments,
  likes,
  children,
  saves,
}) => {
  return (
    <>
      <div className={`${styles} w-2/3`}>
        <div className="flex justify-between">
          <div className="flex gap-4">
            {avatar}
            {headerText}
          </div>
          <EllipsisVertical />
        </div>
        <div className="forum-image">
          <div className="flex overlay-forum items-center justify-center">
            <p className="text-lg text-white"> {postHeading}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between w-2/3 mt-2">
        <div className=" flex gap-3">
          <div className="flex gap-1">
            <HeartIcon width={20} className="inline" />
            <p>{likes}</p>
          </div>
          <div className="flex">
            <ChatBubbleBottomCenterTextIcon width={20} className="inline" />
            <p>{comments}</p>
          </div>
        </div>
        <div className="flex items-center">
          <BookmarkIcon width={20} />
          <p>{saves}</p>
        </div>
      </div>
      <CommentSection />
    </>
  );
};

export default ForumCards;
