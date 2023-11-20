import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectComments, addComment } from "../utils/commentSlice";

const CommentSection = ({ postId }) => {
  const dispath = useDispatch();
  const comments = useSelector((state) => selectComments(state, postId));

  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      dispath(addComment({ postId, comment: newComment }));
      setNewComment("");
    }
  };

  return (
    <div className="Comment bg-gray-100 font-bold w-[28rem] m-4 p-2 h-96 ml-20 mt-10 border  border-black rounded-md flex flex-col  ">
      {/* Display existing comments */}
      <div className="flex-grow">
        {comments.map((comment, index) => (
          <div className="border p-0.5 " key={index}>
            {comment}
          </div>
        ))}
      </div>
      {/* Input field to add new comment */}
      <form className="" onSubmit={handleAddComment}>
        <input
          className="inputBox p-2 border-2 rounded-md border-black m-2 py-2 w-[70%] "
          type="text"
          placeholder="Add Beautiful Comments....🌻"
          value={newComment}
          onChange={handleCommentChange}
        />

        <button
          className="ml-4 px-3 py-2 bg-blue-500 rounded-md text-white text-md"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default CommentSection;
