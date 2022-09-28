import React from "react";
import TweetBox from "../components/TweetBox";

const tweets = [
  {
    text: "Hello",
  },
  {
    text: "Hello",
  },
];

const TweetPage = () => {
  return (
    <div>
      {tweets.map((tweet) => (
        <TweetBox text={tweet.text} />
      ))}
    </div>
  );
};

export default TweetPage;
