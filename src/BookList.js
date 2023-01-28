import { React, useContext } from 'react';
import {
  Button,
  ButtonGroup,
  Card,
  Container,
  ListGroup,
  ListGroupItem,
  Stack,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BookContext } from './BookContext';
import { Outlet } from 'react-router-dom';
import './BookList.css';

export default function BookList() {

  function seriesCheck(book) {
    if (book.series === null) return;
    if (book.series)
      return (
        <Card.Subtitle>{book.series}</Card.Subtitle>
      );
  }

  function bookList(books) {
    if (books === null) return;
    return books.map((book) => (
      <Card bg='dark' text='light' key={book.id} className='col-3 m-3 noSides text-center'>
        <Card.Img variant='top' src={require(`./bookCovers/${book.id}.jpg`)} />
        <Container className='p-3'>
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

          <ButtonGroup className='d-flex'>
            <Button variant='secondary'>View</Button>
            <Button variant='warning'>Edit</Button>
            <Button variant='danger'>Delete</Button>
          </ButtonGroup>
        </Container>
      </Card>
    ));
  }

  return (
    <>
      <h1 className='text-center'>Books for Sale</h1>
      <div className='row justify-content-center'>
        <BookContext.Consumer>{({ books }) => bookList(books)}</BookContext.Consumer>
      </div>
    </>
  );
}
