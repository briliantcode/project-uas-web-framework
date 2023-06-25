import { gql } from "@apollo/client";

const INSERT_PEMINJAMAN = gql`
  mutation InsertPeminjaman($tglKembali: String, $tglPinjam: String, $id: Int, $judul: String, $peminjam: String) {
    insert_peminjaman(objects: {tglKembali: $tglKembali, tglPinjam: $tglPinjam, id: $id, judul: $judul, peminjam: $peminjam}) {
      affected_rows
      returning {
        tglKembali
        tglPinjam
        id
        judul
        peminjam
      }
    }
  }
`;

export default INSERT_PEMINJAMAN;
