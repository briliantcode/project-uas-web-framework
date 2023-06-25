import { gql } from "@apollo/client";

const DELETE_PEMINJAMAN = gql`
  mutation DeletePeminjaman($id: Int!) {
    delete_peminjaman_by_pk(id: $id) {
      id
    }
  }
`;

export default DELETE_PEMINJAMAN;
