import {CommentInterface} from "./comment.interface";
import {UserInterface} from "./user.interface";

export interface BlogInterface {
  author: {id: number, username: 'string'},
  comments: Array<CommentInterface>,
  date: string,
  description: string,
  id: number,
  title: string,
  views: Array<UserInterface>,
  fontStyle: string,
  fontSize: string,
  backgroundColor: string,
  fontColor: string
}

export interface BlogListInterface {
  blogs: Array<BlogInterface>
}
