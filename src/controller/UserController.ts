import users from "../data/users";
import userMiddlewares from "../middlewares/userMiddlewares";
import User from "../models/user";

 class UserController {
  public createUser(name: string, email: string, username: string, password: string) {
    
    const userTrue = userMiddlewares.validateUser(username);
    if (userTrue) {
      console.log('The username is already in use. Please choose another one.');
      return;
    }
     // Criando usuário no data users
    const newUser = new User(name, email, username, password);
    users.push(newUser);
    console.log('Successfully registered user!');
    return newUser;
  }
   getUserById(id: string) {
    const user = users.find(user => user.getDetails().userId === id);
    if (user) {
      return user.getDetails();
    }
  }
  
  
  public userFollowing(followerId: string, userId: string) {
    const follower = users.find((user) => user.getDetails().userId === followerId);
    const User = users.find((user) => user.getDetails().userId === userId);
  
    if (!follower || !User) {
      console.log("User not found.");
      return;
    }
  
    if (follower === User) {
      console.log("You cannot follow yourself.");
      return;
    }
  
    return follower.Follow(User);
  }
}

 export default new UserController();
