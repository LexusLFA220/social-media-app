import React from 'react';
import Post from './Post';
function Feed(props){ 
    let renderPosts =props.posts.map((data) =>{
        return(
          <div>
          <Post author ={data.author} content ={data.content} />
          </div>
      
        )
      })
  return(
    <div>
      
        {renderPosts}
       
    
    </div>
  )
}
export default Feed

