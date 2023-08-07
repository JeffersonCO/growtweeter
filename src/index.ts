

import FeedController from "./controller/FeddController";
import TwetsController from "./controller/TweetsControler";
import UserController from "./controller/UserController";

//criando usuario//

 const user1 = UserController.createUser("Matheus","matheus@teste.com","matheus123","teste");
 const user2 = UserController.createUser("Eduardo","Eduardo@teste.com","Edu456","teste");
 const user3 = UserController.createUser("Caio","caiooficial@teste.com","CaioCampeao","teste");

// salvando o id do usuario//

 const userId= user1!.getDetails().userId;
 const userId2= user2!.getDetails().userId;
 const userId3= user3!.getDetails().userId;

/// Criando tweet//

 TwetsController.newTweet(userId,"hello w0rd!","once")
 TwetsController.newTweet(userId,"Meu ipe florido","replay")
 TwetsController.newTweet(userId,"Faça chuva faça sol","once")

 TwetsController.newTweet(userId2,"i am user2","once")
 TwetsController.newTweet(userId2,"i liked car","replay")
 TwetsController.newTweet(userId2,"My god","replay")

 TwetsController.newTweet(userId3,"meu nome nao e jonny e Jeff","once")
 TwetsController.newTweet(userId3,"nao gostei disso","once")
 TwetsController.newTweet(userId3,"barbaridade tche","replay")

 // Salvado o id do tweet//

 const userTweetId = user1!.getDetails().Tweet[0].tweetId
 const userTweetId2 = user2!.getDetails().Tweet[0].tweetId
 const userTweetId3 = user3!.getDetails().Tweet[0].tweetId

 // mostrando tweets atraves do id do tweet//
    


// usuario seguindo o outro atraves do Id//
    
UserController.userFollowing(userId,userId2)
UserController.userFollowing(userId,userId3)

UserController.userFollowing(userId3,userId)
UserController.userFollowing(userId3,userId2)

UserController.userFollowing(userId2,userId)
UserController.userFollowing(userId2,userId3)


// dando like no Tweet pelo ID do tweet//

TwetsController.likeTweet(userTweetId,userId2);
TwetsController.likeTweet(userTweetId,userId3);
TwetsController.likeTweet(userTweetId,userId);// validação de like no proprio tweet


// Mostrando a quantidade de like no Tweet pelo ID do tweet//



// dando deslike no Tweet pelo ID do tweet//


TwetsController.unlikeTweet(userTweetId,userId3);

// Respondendo um tweet ultilizando um reply//

TwetsController.responderTweet(userId2,userTweetId,"Fazer oque ne!")

TwetsController.responderTweet(userId2,userTweetId2,"o loco meu essa fera ai bicho kkkkk")

TwetsController.responderTweet(userId,userTweetId3,"muito bem meus parabens")

//Mostrando o feed de tweets de um usuario//

FeedController.showFeed(userId)




  