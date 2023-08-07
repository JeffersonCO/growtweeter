import allTweets from "../data/tweets";
import users from "../data/users";

class FeedController {
  public showFeed(userId: string) {
    const user = users.find(
      (user) => user.getDetails().userId === userId
    );
    if (!user) {
      console.log("User not foud.");
      return;
    }
  
    const tweets = allTweets.filter(
      (tweet) => tweet.getDetails().user === userId || user.getFollowing().includes(tweet.getDetails().user)
    );
  
    tweets.forEach((tweet) => {
      const tweetUser = users.find(
        (user) => user.getDetails().userId === tweet.getDetails().user
      );
      console.log(`@${tweetUser!.getDetails().username}: ${tweet.getDetails().text}`);
      
      if (tweet.getDetails().likes.length > 0) {
        
        const firstName = tweetUser!.getName();
        console.log(`@${firstName} and more ${tweet.getDetails().likes.length - 1} users like`);
        
        
      }
  
      if (tweet.getDetails().replies.length > 0) {
        console.log("replies:");
        tweet.getDetails().replies.forEach((reply) => {
          const replyUser = users.find(
            (user) => user.getDetails().userId === reply.userId
          );
          console.log(`>@${replyUser?.getDetails().username}: ${reply.replyText}`);
        });
      }
  
      console.log("---------------------------");
    });
  }
}

export default new FeedController();
