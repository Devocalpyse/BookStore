import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const BookContext = createContext();

export function BookProvider(props) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      await refreshBooks();
    }
    fetchBooks();
  }, []);

  function refreshBooks() {
    return axios.get('http://localhost:3001/books').then((response) => {
      setBooks(response);
    });
  }

  function getBook() {}

  function addBook() {}

  function updateBook() {}

  function deleteBook() {}

  return (
    <BookContext.Provider
      value={{
        books,
        getBook,
        addBook,
        updateBook,
        deleteBook,
      }}>
      {props.children}
    </BookContext.Provider>
  );
}
