import {useState,useContext} from "react";
import BookContext from "../context/book";

export default function BookEdit({book,onSubmit}){

const [title,setTitle]=useState(book.title)
    const {editBookById}=useContext(BookContext)


    const handleChange=(event)=>{
    setTitle(event.target.value)
    }

    const handleSubmit=(event)=>{
    event.preventDefault()
        // console.log("new title",title)

        onSubmit()
        editBookById(book.id,title)
    }

    return(
        <form onSubmit={handleSubmit} className="book-edit">
        <label>Title</label>
            <input className="input" value={title} onChange={handleChange}/>
            <button className="button is-primary">save</button>
        </form>
    )
}


