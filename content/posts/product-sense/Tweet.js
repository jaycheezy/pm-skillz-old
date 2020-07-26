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
  const linkArrow = (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="60px" height="80px" viewBox="0 -15 30 100" xmlSpace="preserve">
        <polyline fill="none" stroke="#3BA9EE" strokeWidth={10} strokeLinecap="round" strokeLinejoin="round" points="
	0.375,0.375 45.63,38.087 0.375,75.8 " />
      </svg>
);
  
  return (
    <div className="tweet">
        <h1><span>“</span>{props.tweetText}”</h1>
        <p><a href={props.tweetLink} target="_blank" rel="noreferrer">{twitterIcon}{props.tweeter}{linkArrow}</a></p>
    </div>
  )
}