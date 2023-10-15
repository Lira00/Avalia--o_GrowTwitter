const user1 = new User(
  1,
  "user1",
  "User One",
  "user1@example.com",
  "password1"
);
const user2 = new User(
  2,
  "user2",
  "User Two",
  "user2@example.com",
  "password2"
);
const user3 = new User(
  3,
  "user3",
  "User Three",
  "user3@example.com",
  "password3"
);

const tweet1 = new Tweet(user1, "Hello, World!");
const tweet2 = new Tweet(user2, "This is a reply!", "Reply");
const tweet3 = new Tweet(user3, "Another tweet.");

user1.createTweet("My first tweet!");
user2.likeTweet(tweet1);
user3.replyToTweet(tweet1, "Great tweet!");

user1.follow(user2);
user1.follow(user3);

console.log("User 1 Feed:");
user1.viewFeed();
