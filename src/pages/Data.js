import { useMutation, useQuery } from "@apollo/client";
import Navigation from "../components/Navigation";
import GET_PEMINJAMAN from "../api/GetPeminjaman";
import UPDATE_PEMINJAMAN from "../api/UpdatePeminjaman";
import DELETE_PEMINJAMAN from "../api/DeletePeminjaman"
import { useState } from "react";
import Swal from 'sweetalert2';

const Data = () => {
  const [peminjam, setPeminjam] = useState('');
  const [judul, setJudul] = useState('');
  const [tglPinjam, setTglPinjam] = useState('');
  const [tglKembali, setTglKembali] = useState('');
  const [selectedPeminjam, setSelectedPeminjam] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const {loading, error, data} = useQuery(GET_PEMINJAMAN, {
    variables: {
    }
  });

  const [updatePeminjam] = useMutation(UPDATE_PEMINJAMAN, {
    refetchQueries: [{ query: GET_PEMINJAMAN }],
  });

  const [deletePeminjam] = useMutation(DELETE_PEMINJAMAN, {
    refetchQueries: [{ query: GET_PEMINJAMAN }],
  });

  const handleUpdate = () => {
    if (
      selectedPeminjam &&
      peminjam &&
      judul &&
      tglPinjam &&
      tglKembali
    ) {
      updatePeminjam({
        variables: {
          id: selectedPeminjam.id,
          peminjam: peminjam,
          judul: judul,
          tglPinjam: tglPinjam,
          tglKembali: tglKembali,
        },
      })
        .then(() => {
          setPeminjam('');
          setJudul('');
          setTglPinjam('');
          setTglKembali('');
          setSelectedPeminjam(null);
          Swal.fire('Success', 'Data berhasil diupdate', 'success');
          setCurrentPage(1); // Reset to the first page after update
        })
        .catch((error) => {
          Swal.fire('Error', `Data gagal diupdate: ${error.message}`, 'error');
        });
    } else {
      Swal.fire('Error', 'Harap lengkapi semua input', 'error');
    }
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Apakah anda ingin menghapus peminjaman ini?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Hapus',
      cancelButtonText: 'Batal',
    }).then((result) => {
      if (result.isConfirmed) {
        deletePeminjam({
          variables: {
            id: id,
          },
        });
      }
    });
  };

  const handleEdit = (peminjam) => {
    setSelectedPeminjam(peminjam);
    setPeminjam(peminjam.peminjam);
    setJudul(peminjam.judul);
    setTglPinjam(peminjam.tglPinjam);
    setTglKembali(peminjam.tglKembali);
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <Navigation></Navigation>
      <h2 class="text-4xl font-bold leading-tight pt-12 pl-12 pr-12 pb-2">
        Data Peminjaman
      </h2>
      <hr class="mt-4 mb-8 ml-12 mr-12"></hr>
      <ol class="pl-16 pr-16">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Peminjam
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Judul Buku
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Tanggal Pinjam
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Tanggal Kembali
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Aksi
                        </th>
                    </tr>
                </thead>
                <tbody>
                  {data.peminjaman.map((peminjam) => (
                    <tr key={peminjam.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td className="border px-4 py-2">{peminjam.peminjam}</td>
                      <td className="border px-4 py-2">{peminjam.judul}</td>
                      <td className="border px-4 py-2">{peminjam.tglPinjam}</td>
                      <td className="border px-4 py-2">{peminjam.tglKembali}</td>
                      <td className="border px-4 py-2 flex items-center">
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                          onClick={() => handleEdit(peminjam)}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                          onClick={() => handleDelete(peminjam.id)}
                        >
                          Hapus
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
            </table>
        </div>
        <div className="w-1/2 mx-auto">
          {selectedPeminjam && (
            <div className="mt-8">
            <h1 className="text-2xl font-bold mb-4">Edit</h1>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block font-bold mb-1" htmlFor="name">
                  Peminjam
                </label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                  type="text"
                  id="name"
                  value={peminjam}
                  onChange={(e) => setPeminjam(e.target.value)}
                />
              </div>
              <div>
                <label className="block font-bold mb-1" htmlFor="nim">
                  Judul Buku
                </label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                  type="text"
                  id="nim"
                  value={judul}
                  onChange={(e) => setJudul(e.target.value)}
                />
              </div>
              <div>
                <label className="block font-bold mb-1" htmlFor="prodi">
                  Tanggal Pinjam
                </label>
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                  id="prodi"
                  value={tglPinjam}
                  onChange={(e) => setTglPinjam(e.target.value)}
                >
                </input>
              </div>
              <div>
                <label className="block font-bold mb-1" htmlFor="angkatan">
                  Tanggal Kembali
                </label>
                <input
                  className="border border-gray-300 px-4 py-2 w-full rounded"
                  value={tglKembali}
                  onChange={(e) => setTglKembali(e.target.value)}
                >
                </input>
              </div>
              <div className="col-span-3">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleUpdate}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
          )}
        </div>
      </ol>
    </div>
  );
}

export default Data;
