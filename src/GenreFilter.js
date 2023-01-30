import { useContext, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { BookContext } from './BookContext';

function GenreFilter() {
  const [genreFilter, setGenreFilter] = useState('Genre');

  let { refreshBooks, filterBooks } = useContext(BookContext);

  function handleClick(event) {
    let value = event.target.innerHTML;
    if (value === 'None') {
      setGenreFilter('Genre');
      async function fetchBooks() {
        await refreshBooks();
      }
      fetchBooks();
    } else {
      setGenreFilter(value);
      filterBooks(value);
    }
  }

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant='outline-dark'>{genreFilter}</Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={handleClick} className='text-muted'>
            None
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleClick}>Fantasy</Dropdown.Item>
          <Dropdown.Item onClick={handleClick}>Science-Fiction</Dropdown.Item>
          <Dropdown.Item onClick={handleClick}>Thriller</Dropdown.Item>
          <Dropdown.Item onClick={handleClick}>Mystery</Dropdown.Item>
          <Dropdown.Item onClick={handleClick}>Romance</Dropdown.Item>
          <Dropdown.Item onClick={handleClick}>Horror</Dropdown.Item>
          <Dropdown.Item onClick={handleClick}>Other</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default GenreFilter;
