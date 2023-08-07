import { v4 as createUuid } from "uuid";
import { Tweet } from "./tweet";
import allTweets from "../data/tweets";

 export default class User {
  private userId: string;
  private name: string;
  private email: string;
  public username: string;
  private password: string;
  private following: string[];
   constructor(name: string, email: string, username: string, password: string) {
    this.userId = createUuid();
    this.name = name;
    this.email = email;
    this.username = username;
    this.password = password;
    this.following = [];
  }
  public addTweet(tweet: Tweet) {
    tweet.setUser(this.userId);
    allTweets.push(tweet);
  }
   public getName(): string {
    return this.name;
  }

   public getDetails(){
    return {
      userId: this.userId,
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password,
      following: this.getFollowing(),
      Tweet: allTweets.map((tweeet) => tweeet.getDetails())
    };
  }
  public Follow(user: User) { 
    if (user !== this && !this.following.includes(user.getFollowing())) { 
      this.following.push(user.getDetails().userId);
      console.log(`${this.name} começou a seguir ${user.getName()}`); 
    } else { 
      console.log("Você não pode seguir a si mesmo ou usuários duplicados."); 
    } 
  }
  public getFollowing(){
    return this.following.join("")
  }
  public getReplys() {
    return allTweets.map((tweet) => tweet.getDetails().text);
  }
  
}