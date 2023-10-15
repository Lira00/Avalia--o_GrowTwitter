class User {
  id: number;
  username: string;
  name: string;
  email: string;
  password: string;
  tweets: Tweet[];
  followers: User[];

  constructor(
    id: number,
    username: string,
    name: string,
    email: string,
    password: string
  ) {
    this.id = id;
    this.username = username;
    this.name = name;
    this.email = email;
    this.password = password;
    this.tweets = [];
    this.followers = [];
  }

  createTweet(content: string) {
    const tweet = new Tweet(this, content);
    this.tweets.push(tweet);
  }

  follow(user: User) {
    this.followers.push(user);
  }

  likeTweet(tweet: Tweet) {
    tweet.addLike(this);
  }

  replyToTweet(tweet: Tweet, content: string) {
    const reply = new Tweet(this, content, "Reply");
    tweet.addReply(reply);
  }

  viewFeed() {
    const feed = this.followers.reduce(
      (tweets, follower) => tweets.concat(follower.tweets),
      this.tweets
    );
    feed.forEach((tweet) =>
      console.log(
        `@${tweet.user.username}: ${tweet.content}\nLikes: ${tweet.likes.length}\nReplies: ${tweet.replies.length}\n`
      )
    );
  }
}
