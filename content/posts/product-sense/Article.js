import React from "react"
import "./article.css"

export default function Article(props) {
  
  return (
    <div className="article">
        <p className="article-title">Excerpt from<br/><span>{props.articleTitle}</span></p>
        <div className="article-content">
            <p className="article-above">{props.articleAbove}</p>
            <h1>{props.articleText}</h1>
            <p className="article-below">{props.articleBelow}</p>
            <p className="article-link"><a href={props.articleLink} target="_blank" rel="noreferrer">View Article</a>by {props.author}<br/><span>{props.publisher}</span></p>
        </div>
    </div>
  )
}