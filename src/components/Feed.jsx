import React from 'react';
import Post from './Post';
function Feed(){ 
    const Sample_Data = [
        {author: 'Alex', content: 'Whats up homie?'},
        {author: 'Erick', content: 'I am playing pokemon'}
    ]
    let renderPosts = () => {
        //turn array of data into JSX components

        return Sample_Data.map((data)=>{
            return<Post author ={data.author} content={data.content}/>
        })
    }
  return(
    <div>
      
        {renderPosts()}
        <Post content="This is a test post!"/>
        <Post content="This is another test post!"/>
    
    </div>
  )
}
export default Feed

