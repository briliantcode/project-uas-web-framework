import React, { useState } from 'react';
import Navigation from '../components/Navigation';

function App() {
  const [id, setid] = useState('');
  const [judul, setJudul] = useState('');
  const [peminjam, setPeminjam] = useState('');
  const [tanggalPinjam, setTanggalPinjam] = useState('');
  const [tanggalKembali, setTanggalKembali] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logika pemrosesan form, misalnya mengirim data ke server
    console.log({
      id,
      judul,
      peminjam,
      tanggalPinjam,
      tanggalKembali,
    });
  };

  const handleReset = () => {
    setid('');
    setJudul('');
    setPeminjam('');
    setTanggalPinjam('');
    setTanggalKembali('');
  };

  return (
    <div >
      <Navigation></Navigation>
      <h1 className="text-2xl font-bold mb-4 flex justify-center">Form Peminjaman Buku</h1>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
      <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id">
            ID Buku
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="id"
            type="number"
            placeholder="Masukkan id buku"
            value={id}
            onChange={(e) => setid(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="judul">
            Judul Buku
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="judul"
            type="text"
            placeholder="Masukkan judul buku"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="peminjam">
            Nama Peminjam
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="peminjam"
            type="text"
            placeholder="Masukkan nama peminjam"
            value={peminjam}
            onChange={(e) => setPeminjam(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tanggal-pinjam">
            Tanggal Pinjam
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="tanggal-pinjam"
            type="date"
            value={tanggalPinjam}
            onChange={(e) => setTanggalPinjam(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tanggal-kembali">
            Tanggal Kembali
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="tanggal-kembali"
            type="date"
            value={tanggalKembali}
            onChange={(e) => setTanggalKembali(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
