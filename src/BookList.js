import { React, useContext } from 'react';
import { Button, ButtonGroup, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BookContext } from './BookContext';
import './BookList.css';

export default function BookList() {
  let { deleteBook, books } = useContext(BookContext);

  function seriesCheck(book) {
    if (book.series === null) return;
    if (book.series) return <Card.Subtitle>{book.series}</Card.Subtitle>;
  }

  function handleDelete(id) {
    deleteBook(id);
  }

  function bookList(books) {
    if (books === null) return;
    return books.map((book) => (
      <Card bg='dark' text='light' key={book.id} className='col-3 m-3 noSides text-center'>
        <Card.Img variant='top' src={require(`./bookCovers/${book.id}.jpg`)} />
        <Card.Body>
          <Card.Title>
            <h4>{book.title}</h4>
          </Card.Title>

          {seriesCheck(book)}

          <hr />
          <Card.Text>
            <h5>${book.price}</h5>
          </Card.Text>
          <Card.Text>
            Genre: <b>{book.genre}</b>
          </Card.Text>

            <Button variant='secondary w-100'>
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
      <div className='row justify-content-center'>
        {bookList(books)}
      </div>
    </>
  );
}
