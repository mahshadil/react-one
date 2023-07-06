import {useState,useContext} from "react";
import BookContext from "../context/book";


export default function BookCreate(){
 const [title,setTitle]=useState("")
    const {createBook}=useContext(BookContext)
    const handleChange=(event)=>{
            setTitle(event.target.value)
    }

    // Your browser wants to automatically submit this form by essentially reloading the page.
    //
    // That is not desirable behavior.We do not want that.So we're going to prevent that behavior by calling events prevent default.
    const handleSubmit=(event)=>{
     event.preventDefault()
        createBook(title)
        setTitle("")
    }
    return(
        <div className="book-create">
            <h3>Add a book</h3>
        <form onSubmit={handleSubmit}>
            <label>Title </label>
           <input  className="input" value={title} onChange={handleChange} />

        <button className="button">
            create
        </button>
        </form>
        </div>
    )
}