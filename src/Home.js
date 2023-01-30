import React, { useContext } from 'react';
import { Button, Card, CardGroup, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BookContext } from './BookContext';

export default function Home() {
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

  function genCards() {
    if (books === null) return;
    let slicedBooks = books.slice(0, 3);
    return slicedBooks.map((book) => (
      <Card bg='light' text='dark' key={book.id} className='noSides mx-1'>
        <Card.Img variant='top' src={filterImage(book.id, book.image)} />
        <Card.Body className='d-flex flex-column'>
          <Card.Title className='mb-0'>
            <h4>{book.title}</h4>
          </Card.Title>

          {seriesCheck(book)}

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
    <div className='text-center'>
      <hgroup>
        <h1>
          Welcome to <b>Voss Books</b>
        </h1>
        <h5>A book store...where you can add your own books!</h5>
      </hgroup>

      <hr />

      <Row className='mb-3'>
        <Col sm={3} className='d-flex align-items-center'>
          <h3>Our top-selling novels by author <b>Johann Voss</b></h3>
        </Col>
        <Col sm={9}>
          <CardGroup>{genCards()}</CardGroup>
        </Col>
      </Row>
    </div>
  );
}
