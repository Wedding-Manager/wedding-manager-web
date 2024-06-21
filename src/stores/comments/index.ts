import { getTimeFromNow } from "@/utils/date";
import { fetchUsersByQuery } from "../global";
import { MyWeddingData, Comment } from "@/types/weddings";
import { getAuthCookie } from "@/utils/cookies";
import api from "@/utils/api";

export const fetchUserMentions = async (searchInput: any, callBack: any) => {
  try {
    const users = await fetchUsersByQuery({ searchInput });
    const userSuggestions = users.map((user) => {
      return { id: user?._id, display: `${user?.surname} ${user?.name}` };
    });
    return callBack(userSuggestions);
  } catch (err) {
    console.log("ERROR", err);
    return callBack([]);
  }
};

export const formatCommentDate = (commentDate: string) => {
  const diff = getTimeFromNow(commentDate);
  const formatedTime = Object.entries(diff)?.reduce((time, [unit, t]) => {
    if (t) return time + ` ${t}${unit}`;
    return time;
  }, " ");

  return formatedTime + " ago";
};
export const fetchWeedingComments = async (args: {
  weddingId: string;
}): Promise<Comment[]> => {
  const { weddingId } = args;
  const authCookie = getAuthCookie();
  const commentsEndpoint = `/v1/comments/wedding/${weddingId}`;

  try {
    const commentsReq = await api({ authCookie }).get(commentsEndpoint);
    return commentsReq?.data;
  } catch (err) {
    console.log("ERROR", err);
    throw [];
  }
};

export const saveComment = async (params: {
  weddingId: string;
  payload: Comment;
}) => {
  const { weddingId, payload } = params;
  const authCookie = getAuthCookie();
  const commentsEndpoint = `/v1/comments/wedding/${weddingId}`;
  const commentPayload = {
    ...payload,
    mentions: payload?.mentions?.map((ele) => ele?.id) || [],
  };

  try {
    const commentsReq = await api({ authCookie }).post(
      commentsEndpoint,
      commentPayload
    );
    return commentsReq?.data;
  } catch (err) {
    console.log("ERROR", err);
    throw err;
  }
};

export const getCommentsTotal = (args: { comments: Comment[] }): number => {
  const { comments } = args;
  const totalComments = comments?.reduce(
    (totalCount, comment) => totalCount + 1 + (comment?.replies?.length || 0),
    0
  );
  return totalComments;
};
