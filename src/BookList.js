import { React, useContext, useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BookContext } from './BookContext';
import GenreFilter from './GenreFilter';

export default function BookList() {
  let { books, filterImage } = useContext(BookContext);

  function seriesCheck(book) {
    if (book.series === null) {
      return <hr />;
    } else {
      return (
        <>
          <Card.Subtitle>{book.series}</Card.Subtitle>
          <hr className='mt-0.5' />
        </>
      );
    }
  }

  function bookList(books) {
    if (books === null) return;
    return books.map((book) => (
      <Card bg='dark' text='light' key={book.id} className='col-md-3 m-3 noSides text-center'>
        <Card.Img variant='top' src={filterImage(book.id, book.image)} />
        <Card.Body className='d-flex flex-column'>
          <Card.Title className='mb-0'>
            <h4>{book.title}</h4>
          </Card.Title>

          {seriesCheck(book)}

          <Card.Text>
            <h5>${book.price}</h5>
          </Card.Text>
          <Card.Text>
            Genre: <b>{book.genre}</b>
          </Card.Text>

          <Button className='mt-auto' variant='secondary'>
            <Link to={`/title/${book.id}`} className='nav-link'>
              View
            </Link>
          </Button>
        </Card.Body>
      </Card>
    ));
  }

  return (
    <>
      <h1 className='text-center'>Books for Sale</h1>
      <hr />
      <div className='d-flex justify-content-around'>
        <Button variant='primary'>
          <Link to='/new' className='nav-link'>
            Add a Book of Your Own
          </Link>
        </Button>
        <GenreFilter />
      </div>

      <div className='row justify-content-center'>{bookList(books)}</div>
    </>
  );
}
