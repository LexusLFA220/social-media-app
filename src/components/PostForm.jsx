import { useState } from 'react';
function PostForm(props){

    const[author,setAuthor] =useState("")
    const[content,setContent] =useState("")

    let handleSubmit = (event) => {
        event.preventDefault()

        if(author ==="" || content === ""){
            alert("An author and Content are required for Post")

        }
        else{
            //props.onNewSubmit((author,content))
            props.onNewSubmit({author,content})
            setAuthor("")
            setContent("")

        }
    }
    let handleAuthorChange=(event) => {
        setAuthor(event.target.value)
    }
    let handleContentChange=(event) => {
        setContent(event.target.value)
    }
    return(
        <form onSubmit={handleSubmit}>
           <label for="authorName">Author Name:</label>
            <input type ="text" name="authorName" onChange={handleAuthorChange} value={author}/>
            <br/>
            <label for="contentInfo">Content Info:</label>
            <input type ="text" name="contentInfo" onChange={handleContentChange} value={content}/>
            <br/>
            <br/>
            <input type= "submit" disabled= {author === "" || content ==="" } />

        </form>
    )
}
export default PostForm