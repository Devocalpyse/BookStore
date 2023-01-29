import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import BookList from './BookList';
import Navi from './Navi';
import Title from './Title';
import SelectedTitle from './SelectedTitle';

function App() {
  return (
    <BrowserRouter>
      <Navi />
      <Container className='mt-4'>
        <Routes>
          <Route path='/' element={<h1>Hello!</h1>} />
          <Route path='books' element={<BookList />} />
          <Route path='title' element={<Title />}>
            <Route index element={<p>No title selected</p>} />
            <Route path=':titleId' element={<SelectedTitle />} />
            <Route path=':titleId/edit' element={<h1>Title id</h1>} />
          </Route>
          <Route path='new' element={<h1>New Book</h1>} />
          <Route path='about' element={<h1>About Page</h1>} />
          <Route path='*' element={<h1>Page not found</h1>} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;