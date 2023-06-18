// BookList.js
import React from 'react';

function BookList({ books, deleteBook }) {
  return (
    <div className="my-4">
      <h2 className="text-xl font-bold mb-2">Daftar Buku</h2>
      {books.length === 0 ? (
        <p>Tidak ada buku yang tersedia.</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.id} className="flex items-center justify-between py-2">
              <span>{book.title}</span>
              <button
                className="px-2 py-1 bg-red-500 text-white rounded"
                onClick={() => deleteBook(book.id)}
              >
                Hapus
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookList;
