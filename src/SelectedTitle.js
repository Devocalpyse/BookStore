import React, { useContext, useEffect, useState } from 'react';
import { Button, ButtonGroup, Card, ListGroup, Spinner } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BookContext } from './BookContext';

export default function SelectedTitle() {
  let [book, setBook] = useState();
  const [error, setError] = useState();

  let { titleId } = useParams();
  let navigate = useNavigate();
  let { readBook, deleteBook, filterImage } = useContext(BookContext);

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

  function handleDelete(id) {
    deleteBook(id);
    navigate('/books');
  }

  function titleCard() {
    let { id, description, price, image, genre } = book;
    return (
      <>
        <Card border='light' className='mb-2'>
          <div className='row'>
            <div className='col-4'>
              <Card.Img src={filterImage(id, image)} />
            </div>
            <div className='col-8'>
              <Card.Body className='d-flex flex-column h-100'>
                <Card.Text className='lead'>{description}</Card.Text>

                <ListGroup variant='flush'>
                  <ListGroup.Item>Genre: <b>{genre}</b></ListGroup.Item>
                  <ListGroup.Item>Price: <b>${price}</b></ListGroup.Item>
                </ListGroup>

                <ButtonGroup className='mt-auto'>
                  <Button className='mt-auto' variant='primary'>
                    <Link className='nav-link' to={`/title/${id}/edit`}>
                      Edit
                    </Link>
                  </Button>
                  <Button onClick={handleDelete.bind(this, id)} variant='danger'>
                    Delete
                  </Button>
                </ButtonGroup>
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
