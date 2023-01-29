import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Spinner, Stack } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { BookContext } from './BookContext';

export default function SelectedTitle() {
  let [book, setBook] = useState();
  const [error, setError] = useState();

  let { titleId } = useParams();
  let { readBook, deleteBook } = useContext(BookContext);

  useEffect(() => {
    setError(null);
    async function fetch() {
      await readBook(titleId).then((book) => setBook(book));
    }
    fetch();
  }, [titleId, readBook]);

  function loading() {
    return (
      <div className='w-25 text-center'>
        <Spinner animation='border' />
      </div>
    );
  }

  function titleCard() {
    let { id, title, series, description, price, image, genre } = book;
    return (
      <>
        <Card border='light'>
          <div className='row'>
            <div className='col-4'>
              <Card.Img src={require(`./bookCovers/${id}.jpg`)} />
            </div>
            <div className='col-8'>
              <Card.Body className='d-flex flex-column h-100'>
                <Card.Text>{description}</Card.Text>

                <Button className='mt-auto col-6' variant='primary'>
                  Go somewhere
                </Button>
              </Card.Body>
            </div>
          </div>
        </Card>
      </>
    );
  }

  if (book === undefined) return loading();
  return book.id !== parseInt(titleId) ? loading() : titleCard();
}