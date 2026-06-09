import styled from "styled-components";
import type { Livro } from "../tipos/Livro";
import BookItem from "./BookItem";

type Props = {
  adicionado: Livro[];
  aoRemover: (id: string) => void;
};

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 20px auto;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const EmptyMessage = styled.p`
  text-align: center;
  color: #666;
  font-size: 1rem;
  margin-top: 30px;
`;

const BookList = ({ adicionado, aoRemover }: Props) => {
  if (adicionado.length === 0) {
    return (
      <EmptyMessage>
        Nenhum livro foi cadastrado.
      </EmptyMessage>
    );
  }

  return (
    <Container>
      {adicionado.map((livro) => (
        <BookItem
          key={livro._id}
          livro={livro}
          aoRemover={aoRemover}
        />
      ))}
    </Container>
  );
};

export default BookList;