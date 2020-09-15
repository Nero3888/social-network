import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  
  
  return(
    <div className= {s.item}>
      <img src='https://images.theconversation.com/files/290710/original/file-20190903-175663-lqb3z6.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'/>
     { props.message }
      <div>
      <span>like</span> {props.likesCount}
      </div>
    </div> 
   
  )
}
export default Post;