import styled from "styled-components";
import type { Livro } from "../tipos/Livro";

type Props = {
  livro: Livro;
  aoRemover: (id: string) => void;
};

const Card = styled.div`
  background: #fff;
  padding: 18px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  display: flex;
  flex-direction: column;
  gap: 8px;

  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Titulo = styled.h3`
  margin: 0;
  color: #1f2937;
`;

const Texto = styled.p`
  margin: 0;
  color: #4b5563;
`;

const Status = styled.span<{ $lido: boolean }>`
  font-weight: bold;
  color: ${(props) => (props.$lido ? "#16a34a" : "#ea580c")};
`;

const Button = styled.button`
  align-self: flex-start;

  margin-top: 10px;
  padding: 10px 14px;

  border: none;
  border-radius: 8px;

  background-color: #dc2626;
  color: white;
  font-weight: 600;

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

const BookItem = ({ livro, aoRemover }: Props) => {
  return (
    <Card>
      <Titulo>{livro.title}</Titulo>

      <Texto>
        <strong>Autor:</strong> {livro.author}
      </Texto>

      <Texto>
        <strong>Status:</strong>{" "}
        <Status $lido={livro.status === "Lido"}>
          {livro.status}
        </Status>
      </Texto>

      <Button
        onClick={() => livro._id && aoRemover(livro._id)}
      >
        Remover
      </Button>
    </Card>
  );
};

export default BookItem;