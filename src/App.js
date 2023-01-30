import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookList from './BookList';
import Navi from './Navi';
import Title from './Title';
import SelectedTitle from './SelectedTitle';
import BookForm from './BookForm';
import Home from './Home';
import './BookList.css';
import About from './About';

function App() {
  return (
    <BrowserRouter>
      <Navi />
      <Container className='mt-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='books' element={<BookList />} />
          <Route path='title' element={<Title />}>
            <Route index element={<p>No title selected</p>} />
            <Route path=':titleId' element={<SelectedTitle />} />
            <Route path=':titleId/edit' element={<BookForm />} />
          </Route>
          <Route path='new' element={<BookForm />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<h1>Page not found</h1>} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;