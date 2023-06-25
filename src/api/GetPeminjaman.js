import { gql } from "@apollo/client";

const GET_PEMINJAMAN = gql`
  query GetPeminjaman {
    peminjaman {
      tglKembali
      tglPinjam
      id
      judul
      peminjam
    }
  }
`;

export default GET_PEMINJAMAN;
