import { gql } from "@apollo/client";

const UPDATE_PEMINJAMAN = gql`
  mutation UpdatePeminjaman(
    $id: Int!
    $judul: String!
    $peminjam: String!
    $tglPinjam: String!
    $tglKembali: String!
    ) {
    update_peminjaman_by_pk(
      pk_columns: { id: $id },
      _set: {
        judul: $judul
        peminjam: $peminjam
        tglPinjam: $tglPinjam
        tglKembali: $tglKembali
      }) {
      id
      judul
      peminjam
      tglPinjam
      tglKembali 
    }
  }
`;

export default UPDATE_PEMINJAMAN;