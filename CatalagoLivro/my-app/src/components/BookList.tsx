import styled from "styled-components";
import type { Livro } from "../tipos/Livro";

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

const Card = styled.div`
  background: #fff;
  padding: 18px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Titulo = styled.h3`
  margin: 0 0 12px 0;
  color: #222;
`;

const Texto = styled.p`
  margin: 6px 0;
  color: #555;
`;

const Button = styled.button`
  margin-top: 12px;
  padding: 10px 14px;

  border: none;
  border-radius: 8px;

  background-color: #dc2626;
  color: white;
  font-weight: bold;

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

const EmptyMessage = styled.p`
  text-align: center;
  color: #666;
  font-size: 1rem;
  margin-top: 30px;
`;

const Status = styled.span<{ $lido: boolean }>`
  font-weight: bold;
  color: ${(props) => (props.$lido ? "#16a34a" : "#ea580c")};
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
        <Card key={livro._id}>
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
      ))}
    </Container>
  );
};

export default BookList;