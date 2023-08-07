
import { v4 as createUuid } from "uuid";
import { Type } from "../types/typesTweet";
import users from "../data/users";
import { Reply } from "./replay";

export class Tweet {
  private tweetId: string;
  private text: string;
  private type: Type;
  private user: string;
  private likes: string[];
  private replies: Reply[];

  constructor(text: string, type: Type, userId: string) {
    this.user = this.setUser(userId);
    this.tweetId = createUuid();
    this.text = text;
    this.type = type;
    this.likes = [];
    this.replies = [];
    this.setUser(userId);
  }

  public getDetails() {
    return {
      tweetId: this.tweetId,
      text: this.text,
      type: this.type,
      user: this.user,
      likes: this.likes,
      replies: this.replies,
    };
  }

  public addReply(reply: Reply) {
    this.replies.push(reply);
    return reply;
  }

  public likeTweet(userId: string): void {
    if (!this.likes.includes(userId)) {
      this.likes.push(userId);
    }
  }

  public unlikeTweet(userId: string): void {
    const index = this.likes.indexOf(userId);
    if (index !== -1) {
      this.likes.splice(index, 1);
    }
  }

  public getNumberlikes(): number {
    return this.likes.length;
  }

  public setUser(userId: string){
    const user = users.find((user) => user.getDetails().userId === userId);
    if (user) {
      return this.user = user.getDetails().userId;
    } else {
      throw new Error("User not found");
    }
  }
}
