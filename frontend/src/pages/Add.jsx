import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const [book, setBook] = useState({
      title: "",
      author: "",
      publisher: "",
      publicationYear: "",
      pages: null,
      pictureUrl: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev)=>({ ...prev, [e.target.name]: e.target.value}));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
        await axios.post("http://localhost:8080/books", book);
        navigate("/");
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div className='form col-6 mx-auto'>
      <h1>Nouveau livre</h1>
      <input type="text" className="form-control" placeholder='titre' onChange={handleChange} name='title'/>
      <input type="text" className="form-control" placeholder='auteur' onChange={handleChange} name='author'/>
      <input type="text" className="form-control" placeholder='éditeur' onChange={handleChange} name='publisher'/>
      <input type="text" className="form-control" placeholder='année de publication' onChange={handleChange} name='publicationYear'/>
      <input type="number" className="form-control" placeholder='nombre de pages' onChange={handleChange} name='pages'/>
      <input type="text" className="form-control" placeholder='url de l&apos;image' onChange={handleChange} name='pictureUrl'/>
      <button className="btn btn-primary"onClick={handleClick}>Ajouter le livre</button>
    </div>
  )
}

export default Add