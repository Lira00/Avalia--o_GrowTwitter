class Tweet {
  id: number;
  user: User;
  content: string;
  type: string;
  likes: User[];
  replies: Tweet[];

  constructor(user: User, content: string, type: string = "Normal") {
    this.id = Math.random();
    this.user = user;
    this.content = content;
    this.type = type;
    this.likes = [];
    this.replies = [];
  }

  addLike(user: User) {
    this.likes.push(user);
  }

  addReply(reply: Tweet) {
    this.replies.push(reply);
  }
}
