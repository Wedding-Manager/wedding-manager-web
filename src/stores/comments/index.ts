import { getTimeFromNow } from "@/utils/date";
import { fetchUsersByQuery } from "../global";

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
