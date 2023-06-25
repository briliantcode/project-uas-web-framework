import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Data from "./pages/Data";
import { ApolloProvider } from "@apollo/client";
import GraphQLClient from "./api/GraphQLClient";
import Peminjaman from "./pages/Peminjaman";

function App() {
  return (
    <ApolloProvider client={GraphQLClient}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/data" element={<Data />} />
        <Route path="/peminjaman" element={<Peminjaman />} />
      </Routes>
    </ApolloProvider>
  );
}

export default App;