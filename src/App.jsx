import React from 'react';
import { useState } from 'react';
import PostForm from './components/PostForm'
import Feed from './components/Feed';

function App(){ 
  let [feedData, setFeedData] = useState([])
  let handleNewSubmission = (data) =>{
    setFeedData([...feedData,data])
  }
  return(
    <div>
      <h1>Fakebook!</h1>
      
        {/* CreatePostForm */}
        
        {/* Feed */}
        <PostForm onNewSubmit={handleNewSubmission}/>
        <Feed posts={feedData} />
    
    </div>
  )
}
export default App