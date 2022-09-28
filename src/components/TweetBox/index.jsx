import React from 'react'

const TweetBox = ({text, image, likes, retweets}) => {
  return (
    <div>
        <p>{text}</p>
        {image && <img src={image} />}
        <div>{likes} likes {retweets} Retweets </div>
    </div>
  )
}

export default TweetBox