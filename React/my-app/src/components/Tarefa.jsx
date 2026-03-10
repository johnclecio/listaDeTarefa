import { useState , useEffect, memo} from "react";
import './Tarefa.css';


function Tarefa({ texto }) {

    const [concluida, setConcluida] = useState(false);


        useEffect(() =>{
            console.log("Componente tarefa executada", texto);
        },[])
        
        
        console.log("componente tarefa executado", texto);

    const alternarConcluida = () =>{
        setConcluida(!concluida);
    }

    return (
        <li><input type="checkbox" onChange={alternarConcluida}/> <span className={ concluida ? "concluida" : ""}>{texto}</span> <button>Remover</button></li>
    )
}

export default memo(Tarefa);