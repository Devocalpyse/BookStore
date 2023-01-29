import { Outlet, useParams } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from './BookContext';

export default function Title() {
  let [title, setTitle] = useState({
    title: '',
    series: ''
  });

  let { titleId } = useParams();
  let { readBook } = useContext(BookContext);

  useEffect(() => {
    async function fetch() {
      await readBook(titleId).then((book) => setTitle({
        title: book.title,
        series: book.series
      }));
    }
    fetch();
  }, [titleId, readBook]);
  return (
    <>
      <h1>{title.title} <small className='text-muted'>{title.series}</small></h1>
      <hr />
      <Outlet />
    </>
  );
}