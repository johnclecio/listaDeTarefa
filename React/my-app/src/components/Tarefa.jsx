import { memo } from "react";
import styled from 'styled-components';



const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px 0;
    border-bottom: 1px solid #ccc ;
`;

const Botao = styled.button`
  padding: 10px 10px;
  background-color: #4caf50; /* adiciona isso */
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #388e3c;
  }
`;
const BotaoAlerta = styled(Botao)`
    background-color: #f44138;

    &:hover{
      background-color: #d32f2f;
      
    }
`;

const Actions = styled.div`
  display: flex;
  gap: 8px;
`;  

const TextItem = styled.span`
  text-decoration: ${({ $concluida }) =>
    $concluida ? "line-through" : "none"};
  color: ${({ $concluida }) =>
    $concluida ? "gray" : "#000"};
`;



function Tarefa({ texto, concluida, onToggle, onRemover }) {



  return (
        <Item>
        <input 
          type="checkbox"
          checked={concluida}
          onChange={onToggle}
        />

        <TextItem $concluida={concluida}>
          {texto}
        </TextItem>

        <Actions>
        <Botao onClick={onToggle}>
          {concluida ? "Desfazer" : "Concluir"}
        </Botao>

        <BotaoAlerta onClick={onRemover}>
          Remover
        </BotaoAlerta>
      </Actions>
    </Item>
  );
}

export default memo(Tarefa);