import React, { useState } from 'react';
import Comment from './Comment';

function ReplyForm(props){
  const [reply, setReply] = useState("")
return(
  <form onSubmit ={(event)=>{
    event.preventDefault()
    props.onNewReply(reply)
  } } >
    <textarea placeholder='Add your comment!' onChange={(event) =>{
      setReply(event.target.value)
    
    }} value={reply}/>
  <input type="submit" />

  </form>
)
}

function ReplyList(props){
let renderList = () =>{
  return props.data.map((data) =>{
    return <p> {data} </p>
         })
}
return(
  <div>
    {renderList()}
  </div>
)

}

function Post(props){

  let [replies,setReplies] = useState([])

    const [likes, setLikes] = useState(0);
    function handleLike(){
        setLikes(likes +1);
      }
  let handleReply = (reply) => {
    setReplies([...replies,reply])
  }

  return(
    <div>
      
      <h2>{props.author}</h2>
      <h3>{props.content}</h3>
      <p></p>
      <p>Likes: {likes}</p>
      <button onClick={handleLike}>Like</button>
      
    <div>
      <h4>Comments:</h4>
      <ReplyForm onNewReply={handleReply}/>
      <ReplyList data = {replies}/>
     <Comment/>
    </div>

    </div>
  )
}
export default Post