import React from 'react';
import './blog.css';
import { Article } from '../../components';
import blog01 from '../../assets/blog01.png';
import blog02 from '../../assets/blog02.png';
import blog03 from '../../assets/blog03.png';
import blog04 from '../../assets/blog04.png';
import blog05 from '../../assets/blog05.png';

const Blog = () => {
  return (
    <div className='gpt3-blog' id='blog'>
      <div className="gpt3-blog-heading">
        <h1 className="gradient-text">A lot is happening, We are blogging about it.</h1>
      </div>
      <div className="gp3-blog-container">
        <div className="gp3-blog-container-gpA">
          <Article imgUrl={blog01} date='sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
        </div>
        <div className="gp3-blog-container-gpB">
          <Article imgUrl={blog02} date='sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
          <Article imgUrl={blog03} date='sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
          <Article imgUrl={blog04} date='sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
          <Article imgUrl={blog05} date='sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
        </div>
      </div>
    </div>
  )
}

export default Blog