import { useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import GET_PEMINJAMAN from '../api/GetPeminjaman';
import { gql } from "@apollo/client";

const INSERT_PEMINJAMAN = gql`
  mutation InsertPeminjaman(
    $judul: String!
    $peminjam: String!
    $tglPinjam: String!
    $tglKembali: String!
  ) {
    insert_peminjaman_one(
      object: {
        judul: $judul
        peminjam: $peminjam
        tglPinjam: $tglPinjam
        tglKembali: $tglKembali
      }
    ) {        
      id
      judul
      peminjam
      tglPinjam
      tglKembali
    }
  }
`;

const App = () => {
  const [judul, setJudul] = useState('');
  const [peminjam, setPeminjam] = useState('');
  const [tglPinjam, setTglPinjam] = useState('');
  const [tglKembali, setTglKembali] = useState('');
  
  const {refetch} = useQuery(GET_PEMINJAMAN);

  const [addPeminjaman] = useMutation(INSERT_PEMINJAMAN, {
    onCompleted: () => {
      refetch();
    }
  })

  const handleAdd = () => {
    if (judul && peminjam && tglPinjam && tglKembali)
    // Logika pemrosesan form, misalnya mengirim data ke server
    addPeminjaman({
      variables: {
        judul,
        peminjam,
        tglPinjam,
        tglKembali,
      },
    });
    setJudul('');
    setPeminjam('');
    setTglPinjam('');
    setTglKembali('');
  };

  return (
    <div >
      <h1 className="text-2xl font-bold mb-4 flex justify-center">Form Peminjaman Buku</h1>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id">
            Judul Buku
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="id"
            type="text"
            placeholder="Masukkan Judul Buku"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="judul">
            Nama Peminjam
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="judul"
            type="text"
            placeholder="Masukkan Nama Peminjam"
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
            type="text"
            value={tglPinjam}
            onChange={(e) => setTglPinjam(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tanggal-kembali">
            Tanggal Kembali
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="tanggal-kembali"
            type="text"
            value={tglKembali}
            onChange={(e) => setTglKembali(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleAdd}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
