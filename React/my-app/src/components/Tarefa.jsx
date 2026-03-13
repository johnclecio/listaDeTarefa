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
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    

`;
const BotaoAlerta = styled(Botao)`
    background-color: #f44138;

    &:hover{
      background-color: #d32f2f;
      
    }
`;

const TextItem = styled.span`
    text-decoration: ${({concluida}) => (concluida ? "line-through" : "none" )} ;
    color: ${({concluida}) => (concluida ? "gray" : "#000" )};  
`;



function Tarefa({ texto, concluida, onToggle, onRemover }) {

  const handleClick = () => {
    if (concluida) {
      onRemover();
    } else {
      onToggle();
    }
  };

  return (
    <Item >
      <input 
        type="checkbox"
        checked={concluida}
        onChange={onToggle}
      />

      <TextItem concluida={concluida}>
        {texto}
      </TextItem>

      <BotaoAlerta onClick={handleClick}>
        {concluida ? "Remover" : "Concluída"}
      </BotaoAlerta>
    </Item>
  );
}

export default memo(Tarefa);