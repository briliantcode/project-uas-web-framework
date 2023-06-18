import React, { useState } from 'react';
import BookList from '../components/booklist';
import Navigation from '../components/Navigation';


function App() {
  const [books, setBooks] = useState([
    { id: 1, judul: 'Buku 1' },
    { id: 2, judul: 'Buku 2' },
    { id: 3, judul: 'Buku 3' },
  ]);

  return (
    <div >
      <Navigation></Navigation>
      <h1 className="text-2xl font-bold mb-4 flex justify-center">Tabel Data Buku</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">ID</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">Judul Buku</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td className="px-6 py-4 border-b border-gray-300">{book.id}</td>
              <td className="px-6 py-4 border-b border-gray-300">{book.judul}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

