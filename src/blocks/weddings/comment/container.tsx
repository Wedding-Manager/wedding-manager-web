/* eslint-disable react-hooks/exhaustive-deps */
import { CloseCircle, Send } from "iconsax-react";
import React, { useEffect, useRef, useState } from "react";
import CommentBox from "../comment-box";
import { MyWeddingData, Comment } from "@/types/weddings";
import { isLogedIn } from "@/utils/run-time";
import webSocket from "@/utils/websocket";
import Comments from "./comment";
import { getCommentsTotal } from "@/stores/comments";

function CommentsContainer(props: {
  wedding: MyWeddingData;
  updateTotalCommentsCount: (count: number) => void;
  popConfig: { close: () => void };
}) {
  const { wedding, popConfig, updateTotalCommentsCount } = props;
  const { close } = popConfig;
  const [comments, setComments] = useState<Comment[]>();
  const [newComment, setNewComment] = useState<Comment>();
  const webSocketRef = useRef<any>();

  const handleCommentChange = (newValue: any, mentions: any) => {
    setNewComment((comment) => ({
      ...comment,
      message: newValue,
      mentions: mentions,
    }));
  };

  const handleSaveComment = async (params: {
    weddingId?: string;
    payload: Comment;
  }) => {
    if (!isLogedIn()) return;
    const { payload } = params;
    const commentPayload = {
      ...payload,
      mentions: payload?.mentions?.map((ele) => ele?.id) || [],
    };

    try {
      webSocketRef.current.send(JSON.stringify(commentPayload));
    } catch (err) {
      console.log("ERROR", err);
    }
  };

  useEffect(() => {
    const ws = webSocket({
      query: {
        type: "comment",
        weddingId: wedding?._id,
      },
      url: "/ws/comment",
    });
    webSocketRef.current = ws;
    ws.onopen = () => {
      console.log("WebSocket connected");
    };

    ws.onmessage = (event) => {
      const comments = JSON.parse(event.data);
      updateTotalCommentsCount(getCommentsTotal({ comments }));
      setComments(comments);
    };

    ws.onclose = () => {
      console.log("WebSocket disconnected");
    };

    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, []);

  return (
    <>
      {" "}
      <div className=" bg-white w-[80%] h-[80%] overflow-auto m-auto py-10 px-2 rounded-lg shadow-lg">
        <div className="w-full flex justify-end mr-4 ">
          <CloseCircle
            size="32"
            color={"black"}
            onClick={close}
            className={`cursor-pointer`}
          />
        </div>
        <div className="w-full text-center py-5 text-2xl font-bold text-gray-800">
          {wedding?.title}
        </div>
        <div className="border min-h-[200px] w-full p-6">
          {comments?.map((comment) => (
            <div key={comment?._id} className="mb-4">
              <Comments comment={comment} handleSave={handleSaveComment} />
            </div>
          ))}
        </div>
        <div className="w-full flex items-center">
          <div className="w-[90%]">
            <CommentBox
              message={newComment!}
              handleCommentChange={handleCommentChange}
              placeholder="Add comment"
              style={{ height: "100px" }}
              disabled={!isLogedIn()}
              title=""
            />
          </div>
          <Send
            size="32"
            color="#3B82F6"
            variant="Bold"
            onClick={() => {
              handleSaveComment({
                payload: newComment!,
              });
              setNewComment(undefined);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default CommentsContainer;
