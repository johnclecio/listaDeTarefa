import { useEffect, useState } from "react";
import axios from "axios";

import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import type { Livro } from "./tipos/Livro";

import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  padding: 20px;
  background-color: #f5f5f5;
`;

const API_URL =
  "https://crudcrud.com/api/274c31dc0d2e4a039ecbae756cafb64c/livros";

function App() {
  const [livros, setLivros] = useState<Livro[]>([]);

  const adicionarLivro = async (dados: Livro) => {
    try {
      const resposta = await axios.post<Livro>(
        API_URL,
        dados
      );

      setLivros((prev) => [
        ...prev,
        resposta.data,
      ]);
    } catch (erro) {
      console.error(
        "Erro ao adicionar livro:",
        erro
      );
      alert("Não foi possível adicionar o livro.");
    }
  };

  const removerLivro = async (id: string) => {
    try {
      await axios.delete(`${API_URL}/${id}`);

      setLivros((prev) =>
        prev.filter((livro) => livro._id !== id)
      );
    } catch (erro) {
      console.error(
        "Erro ao remover livro:",
        erro
      );
      alert("Não foi possível remover o livro.");
    }
  };

  const carregarLivros = async () => {
    try {
      const resposta =
        await axios.get<Livro[]>(API_URL);

      setLivros(resposta.data);
    } catch (erro) {
      console.error(
        "Erro ao carregar livros:",
        erro
      );
      alert("Não foi possível carregar os livros.");
    }
  };

  useEffect(() => {
    carregarLivros();
  }, []);

  return (
    <Container>
      <BookForm aoEnviar={adicionarLivro} />

      <BookList
        adicionado={livros}
        aoRemover={removerLivro}
      />
    </Container>
  );
}

export default App;