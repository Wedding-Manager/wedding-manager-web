/* eslint-disable react-hooks/exhaustive-deps */
import CommentBox from "@/components/comment-box";
import { formatCommentDate } from "@/stores/comments";
import { fetchComments, saveComment } from "@/stores/weddings";
import { MyWeddingData, Comment } from "@/types/weddings";
import { CloseCircle, Messages2, Send } from "iconsax-react";
import React, { useEffect, useRef, useState } from "react";
import { Mention, MentionsInput } from "react-mentions";
import Popup from "reactjs-popup";
import Comments from "./comment";
import { isLogedIn } from "@/utils/run-time";
import webSocket from "@/utils/websocket";
import { getAuthCookie } from "@/utils/cookies";

function CommentsBox(props: { wedding: MyWeddingData }) {
  const { wedding } = props;
  const [comments, setComments] = useState<Comment[]>();
  const [newComment, setNewComment] = useState<Comment>();
  const webSocketRef = useRef<any>();

  const totalComments = comments?.reduce(
    (totalCount, comment) => totalCount + 1 + (comment?.replies?.length || 0),
    0
  );

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
    // Establish WebSocket connection when component mounts
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
      // setSocket(ws);
    };

    ws.onmessage = (event) => {
      // setMessage(event.data);
      setComments(JSON.parse(event.data));
    };

    ws.onclose = () => {
      console.log("WebSocket disconnected");
      // setSocket(null);
    };

    // Clean up WebSocket connection when component unmounts
    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, []);

  return (
    <div>
      <Popup
        trigger={
          <div className="flex items-center gap-2">
            <Messages2 size="32" color={"black"} variant={"Outline"} />
            <div>{totalComments}</div>
          </div>
        }
        contentStyle={{
          width: "100%",
          height: "100%",
          marginTop: "8%",
        }}
        overlayStyle={{
          background: "rgba(0, 0, 0, 0.5)", // Add overlay blur effect
        }}
        nested
        offsetX={100}
        offsetY={500}
        lockScroll
        modal
      >
        {/* @ts-ignore */}
        {(close: any) => {
          return (
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
                    <Comments
                      comment={comment}
                      handleSave={handleSaveComment}
                    />
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
          );
        }}
      </Popup>
    </div>
  );
}

export default CommentsBox;
