import { useState, useContext, useEffect } from 'react';
import { Form, Image, Button, Stack, Row, Col } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { BookContext } from './BookContext';

export default function BookForm() {
  let { titleId } = useParams();
  const [book, setBook] = useState({
    id: titleId,
    title: '',
    series: '',
    description: '',
    price: '',
    image: '',
    genre: 'Other',
  });

  let { id, title, series, description, price, image, genre } = book;

  useEffect(() => {
    if (id === undefined) return;
    async function fetch() {
      await readBook(id).then((book) => setBook(book));
    }
    fetch();
  }, [id]);

  const { createBook, readBook, updateBook, filterImage } = useContext(BookContext);

  let navigate = useNavigate();

  function handleChange(event) {
    setBook((preValue) => {
      return { ...preValue, [event.target.name]: event.target.value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    optionSelect();
  }

  function optionSelect() {
    if (id === undefined) {
      return createBook(book).then(navigate('/books'));
    } else {
      return updateBook(book).then(navigate(`/title/${id}`));
    }
  }

  function getImage() {
    if (image === '') return <h3 className='col-sm-4'>No Cover Selected</h3>;
    return <Image src={filterImage(id, image)} className='col-sm-4' />;
  }

  return (
    <Stack className='mb-3 mx-auto' direction='horizontal' gap={4}>
      {getImage()}
      <Form onSubmit={handleSubmit} className='col-sm-8 d-grid'>
        <Row className='mb-3'>
          <Form.Group as={Col}>
            <Form.Label>Title</Form.Label>
            <Form.Control type='text' name='title' value={title} onChange={handleChange} />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Series</Form.Label>
            <Form.Control type='text' name='series' value={series} onChange={handleChange} />
          </Form.Group>
        </Row>
        <Form.Group className='mb-3'>
          <Form.Label>Description/Synopsis</Form.Label>
          <Form.Control
            as='textarea'
            rows={3}
            name='description'
            value={description}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Genre</Form.Label>
          <Form.Select
            aria-label='Genre selection'
            name='genre'
            value={genre}
            onChange={handleChange}>
            <option value='Other'>Other</option>
            <option value='Fantasy'>Fantasy</option>
            <option value='Horror'>Horror</option>
            <option value='Mystery'>Mystery</option>
            <option value='Romance'>Romance</option>
            <option value='Science-Fiction'>Science-Fiction</option>
            <option value='Thriller'>Thriller</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Price</Form.Label>
          <Form.Control type='number' name='price' value={price} onChange={handleChange} />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Cover</Form.Label>
          <Form.Control
            aria-describedby='coverHelpBlock'
            type='text'
            name='image'
            value={image}
            onChange={handleChange}
          />
          <Form.Text id='coverHelpBlock' muted>
            Must be a valid link to an image hosted online, preferably as a square.
          </Form.Text>
        </Form.Group>
        <Button size='lg' type='submit'>
          Save
        </Button>
      </Form>
    </Stack>
  );
}
