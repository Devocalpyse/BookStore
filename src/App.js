import React from 'react';
import { Container, Stack } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navi from './Navi';

function App() {
  return (
    <BrowserRouter>
      <Navi />
      <Container className='mt-4'>
        <Routes>
          <Route path='/' element={<h1>Home Route</h1>} />
          <Route path='books' element={<h1>Book List</h1>}>
            <Route index element={<h1>Index page</h1>} />
            <Route path='new' element={<h1>New Book</h1>} />
            <Route path=':bookId' element={<h1>Book id</h1>} />
            <Route path=':bookId/edit' element={<h1>Book id</h1>} />
            <Route path='*' element={<p>Book not found</p>} />
          </Route>
          <Route path='about' element={<h1>About Page</h1>} />
          <Route path='*' element={<h1>Page not found</h1>} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
