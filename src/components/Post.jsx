import React, { useState } from 'react';
import Comment from './Comment';
function Post(props){
 /* let renderPosts = () => {
    //turn array of data into JSX components

    return Fdata.map((data)=>{
        return<Post author ={data.author} content={data.content}/>
    })
}
*/

    const [likes, setLikes] = useState(0);
    function handleLike(){
        setLikes(likes +1);
      }

  return(
    <div>
      
      <h2>{props.author}</h2>
      <h3>{props.content}</h3>
      <p></p>
      <p>Likes: {likes}</p>
      <button onClick={handleLike}>Like</button>
      <p>Comments:</p>
      <Comment content="This is a test comment!"  />
      <Comment content="This is another test comment!"  />
      <Comment content="This is yet another test comment!"  />
    
    </div>
  )
}
export default Post