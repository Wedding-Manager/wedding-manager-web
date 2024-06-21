import { CSSRuleObject } from "tailwindcss/types/config";
import { Comment } from "./weddings";

export type CommentBoxProps = {
  message: Comment;
  handleCommentChange: (newValue: string, mentions: string[]) => void;
  placeholder?: string;
  style?: React.CSSProperties;
  title?: string;
} & any;
