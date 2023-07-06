import { useEffect, useContext} from "react";
import BookCreate from "./components/BookCreate";
import BookEdit from "./components/BookEdit";
import BookList from "./components/BookList";
import BookContext from "./context/book";


export default function App() {

    const {fetchBooks} = useContext(BookContext)

    useEffect(() => {
        fetchBooks()
    }, [])

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList/>
            <BookCreate/>
        </div>
    )
}


