import React from "react"
import "./tweet.css"

export default function Tweet(props) {
  
  const twitterIcon = (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="328 355 335 276">
      <path
        fill="#3BA9EE"
        d="M630 425a195 195 0 01-299 175 142 142 0 0097-30 70 70 0 01-58-47 70 70 0 0031-2 70 70 0 01-57-66 70 70 0 0028 5 70 70 0 01-18-90 195 195 0 00141 72 67 67 0 01116-62 117 117 0 0043-17 65 65 0 01-31 38 117 117 0 0039-11 65 65 0 01-32 35z"
      ></path>
      </svg>
  );
  
  return (
    <div className="tweet">
        <h1><span>“</span>{props.tweetText}”</h1>
        <a href={props.tweetLink} target="_blank" rel="noreferrer"><p>{twitterIcon}{props.tweeter}</p></a>
    </div>
  )
}