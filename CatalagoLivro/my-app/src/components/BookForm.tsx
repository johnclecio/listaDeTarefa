import { useState } from "react";
import styled from "styled-components";
import type { Livro } from "../tipos/Livro";
import type { SyntheticEvent } from "react";

type Props = {
  aoEnviar: (livro: Livro) => void;
};

const Form = styled.form`
  width: 100%;
  max-width: 500px;
  margin: 40px auto;
  padding: 32px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;

const Title = styled.h2`
  margin: 0;
  text-align: center;
  color: #1f2937;
`;

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;

  padding: 12px;
  border: 1px solid #dcdcdc;
  border-radius: 8px;

  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #2563eb;
  }
`;

const Select = styled.select`
  width: 100%;
  box-sizing: border-box;

  padding: 12px;
  border: 1px solid #dcdcdc;
  border-radius: 8px;

  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #2563eb;
  }
`;

const Button = styled.button`
  padding: 12px;

  border: none;
  border-radius: 8px;

  background-color: #2563eb;
  color: white;

  font-size: 1rem;
  font-weight: bold;

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

const BookForm = ({ aoEnviar }: Props) => {
  const [title, setTitulo] = useState("");
  const [author, setAutor] = useState("");
  const [status, setStatus] = useState<"Lido" | "Não lido">("Não lido");

  const enviarFormulario = (e: SyntheticEvent) => {
    e.preventDefault();

    if (!title.trim() || !author.trim()) {
      return;
    }

    aoEnviar({
      title,
      author,
      status,
    });

    setTitulo("");
    setAutor("");
    setStatus("Não lido");
  };

  return (
    <Form onSubmit={enviarFormulario}>
      <Title>Cadastro de Livros</Title>

      <Input
        type="text"
        placeholder="Título do livro"
        value={title}
        onChange={(e) => setTitulo(e.target.value)}
      />

      <Input
        type="text"
        placeholder="Autor"
        value={author}
        onChange={(e) => setAutor(e.target.value)}
      />

      <Select
        value={status}
        onChange={(e) =>
          setStatus(e.target.value as "Lido" | "Não lido")
        }
      >
        <option value="Não lido">Não lido</option>
        <option value="Lido">Lido</option>
      </Select>

      <Button type="submit">
        Adicionar Livro
      </Button>
    </Form>
  );
};

export default BookForm;