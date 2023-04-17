import './article.css';
import React from 'react';

const Article = ({ imgUrl, date, title }) => {
  return (
    <div className='gpt3-article'>
      <div className="gpt3-article-img">
        <img src={imgUrl} alt="" />
      </div>
      <div className="gpt3-article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article

