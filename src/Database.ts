class Database {
  users: User[];
  tweets: Tweet[];

  constructor() {
    this.users = [];
    this.tweets = [];
  }

  addUser(user: User) {
    this.users.push(user);
  }

  addTweet(tweet: Tweet) {
    this.tweets.push(tweet);
  }
}

const database = new Database();
