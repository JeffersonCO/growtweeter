import allTweets from "../data/tweets";
import users from "../data/users";
import { Reply } from "../models/replay";
import { Tweet } from "../models/tweet";
import { Type } from "../types/typesTweet";
import UserController from "./UserController";
class TweetController {
  public newTweet(userId: string, text: string, type: Type) {
    const user = users.find((user) => user.getDetails().userId === userId);
    if (!user) {
      console.log("User not found");
      return;
    }
    const novoTweet = new Tweet(text, type, user.getDetails().userId);
    user.addTweet(novoTweet);
    return novoTweet;
  }
  public getTweetById(id: string) {
    const tweet = this.getAll().find((tweet) => tweet.getDetails().tweetId === id);
    if (!tweet) {
      console.log("Tweet not found");
      return;
    }
    const user = UserController.getUserById(tweet.getDetails().user)!.username;
    const numLikes = tweet.getNumberlikes();
    let showlikes = "";
    if (numLikes === 0) {
      showlikes = "";
    } else if (numLikes === 1) {
      showlikes = `@${user} like`;
    } else {
      const otherUsers = numLikes - 1;
      showlikes = `@${user} and email ${otherUsers} Users likes`;
    }
    console.log(`@${user}: ${tweet.getDetails().text}`);
    console.log(showlikes);
    return showlikes;
  }
  public getAll() {
    return allTweets;
  }
  public getUser(userId: string) {
    return this.getAll().find((tweet) => tweet.getDetails().tweetId === userId);

  }
  public likeTweet(id: string, userId: string): void {
    const tweet = this.getAll().find((tweet) => tweet.getDetails().tweetId === id);
    if (!tweet) {
      console.log("Tweet not found");
      return;
    }
    if (userId === tweet.getDetails().user) {
      console.log("Voce não pode dar like no seu tweet");
      return;
    }
    tweet.likeTweet(userId);
  }
  public unlikeTweet(id: string, userId: string): void {
    const tweet = this.getAll().find((tweet) => tweet.getDetails().tweetId === id);
    if (!tweet) {
      console.log("Tweet not found");
      return;
    }
    tweet.unlikeTweet(userId);
  }

  public getTweetInstanceById(id: string): Tweet | undefined {
    return this.getAll().find((tweet) => tweet.getDetails().tweetId === id);
  }


  public responderTweet(userId: string, idTweet: string, text: string) {
    const user = users.find((user) => user.getDetails().userId === userId);
    if (!user) {
      console.log("Usuário not found");
      return;
    }

    const tweet = this.getTweetInstanceById(idTweet);
    if (!tweet) {
      console.log("Tweet not found");
      return;
    }

    const novaReply = new Reply(user.getDetails().userId, text);

    tweet.addReply(novaReply);
    return tweet
  }
}
export default new TweetController();
