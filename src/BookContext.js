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

  let baseUrl = 'http://localhost:3001/books/';

  function refreshBooks() {
    return axios.get(baseUrl).then((response) => {
      setBooks(response.data);
    });
  }

  // CRUD Ops
  // Create a singular book
  function createBook(book) {
    return axios.post(baseUrl, book).then((response) => {
      refreshBooks();
      return new Promise((resolve) => resolve(response.data));
    });
  }

  // Get a singular book by id
  function readBook(id) {
    return axios
      .get(baseUrl + id)
      .then((response) => new Promise((resolve) => resolve(response.data)));
  }

  // Update a singular book by id
  function updateBook(book) {
    return axios.put(baseUrl + book.id, book).then((response) => {
      refreshBooks();
      return new Promise((resolve) => resolve(response.data));
    });
  }

  // Delete a singular book by id
  function deleteBook(id) {
    axios.delete(baseUrl + id).then(refreshBooks);
  }

  return (
    <BookContext.Provider
      value={{
        books,
        createBook,
        readBook,
        updateBook,
        deleteBook,
      }}>
      {props.children}
    </BookContext.Provider>
  );
}
