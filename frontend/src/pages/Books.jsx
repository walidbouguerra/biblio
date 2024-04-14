import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';


const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const res = await axios.get("http://localhost:8080/books");
                setBooks(res.data);
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllBooks();
    }, [])

    const handleDelete = async (id) => {
        try {
            await axios.delete("http://localhost:8080/book/"+id);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }

    return (
    <div className='home'>
        <h1><FontAwesomeIcon icon={faBook}/> Biblio</h1>
        <div className="books">
            <Carousel>
                {books.map((book) => (
                    <Paper key={book.id}>
                        <div className="book">
                            {book.pictureUrl && <img className="mb-3" src={book.pictureUrl} alt={book.title} />}
                            <h2 className="mb-3">{book.title}</h2>
                            <h3><small>Auteur :</small> {book.author}</h3>
                            <h3><small>Éditeur :</small> {book.publisher}</h3>
                            <h3><small>Publication :</small> {book.publicationYear}</h3>
                            <h3 className='mb-4'><small>Pages :</small> {book.pages}</h3>
                            <button className='delete btn btn-danger btn-sm me-2' onClick={()=>{handleDelete(book.id)}}><FontAwesomeIcon icon={faTrash} /> Supprimer</button>
                            <button className='update btn btn-success btn-sm'><Link to={`/update/${book.id}`} style={{ textDecoration: 'none', color: 'white' }}><FontAwesomeIcon icon={faEdit} /> Modifier</Link></button>
                        </div>
                    </Paper>
                ))}
            </Carousel>
        </div>
        <div className="d-grid gap-2 col-4 mx-auto">
            <button className="btn btn-primary btn-lg" type="button"><Link to="/add" style={{ textDecoration: 'none', color: 'white' }}><FontAwesomeIcon icon={faPlus} /> Ajouter un livre</Link></button>
        </div>
    </div>
    );
}

export default Books