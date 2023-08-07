export class Reply {
    userId: string;
    replyText: string;
  
    constructor(userId: string, replyText: string) {
      this.userId = userId;
      this.replyText = replyText;
    }
  }
