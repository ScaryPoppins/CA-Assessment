import React from "react";
import "./Home.css";
import thinkBoard from '../Images/thinkBoard.JPG'
import codeAuthority from '../Images/codeAuthority.JPG'

function BlogCard(props) {

  return (
  <div className='blogStuff'>


        <img src={props.blogtItem.image} id="picture" alt='blogPic'></img>
        <p className = 'blogText'> {props.blogItem.blogText}</p>
     
   
  </div>
  );
}
 
export default BlogCard;
