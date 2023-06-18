// BookForm.js
import React, { useState } from 'react';

function BookForm({ addBook }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '') {
      const newBook = {
        id: Date.now(),
        title: title.trim(),
      };
      addBook(newBook);
      setTitle('');
    }
  };

  return (
    <div className="my-4">
      <h2 className="text-xl font-bold mb-2">Tambah Buku</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Judul buku"
          className="border border-gray-300 rounded px-2 py-1 mr-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          type="submit"
          className="px-2 py-1 bg-blue-500 text-white rounded"
        >
          Tambah
        </button>
      </form>
    </div>
  );
}

export default BookForm;
