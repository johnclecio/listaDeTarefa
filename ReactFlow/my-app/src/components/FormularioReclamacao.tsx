import React, { useState } from "react";
import type { Reclamacao } from "../tipos/Reclamacao";
import style from './FormularioReclamacao.module.css'

type Props = {   
     aoEnviar : (reclamacao: Reclamacao) => void
};
     
     
const FormularioReclamacao = ({aoEnviar} : Props) =>{   
     
     const [nome, setNome ] = useState('');  
     const [mensagem, setMensagem] = useState('');

     const enviar = (e: React.SyntheticEvent<HTMLFormElement>) => {
          e.preventDefault();
          if(!nome || !mensagem) return;

          aoEnviar({id: 0, nome, mensagem});
          setNome('');
          setMensagem('');
     }    

     return(
          <form className={style.formulario} onSubmit={enviar}>
               <h2>Registro de Reclamação</h2>
               <input 
                    className={style.input}
                    type="text" 
                    placeholder="nome da empresa"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    />

               <textarea 
                    className={style.textarea}
                    placeholder="Digite sua reclamação aqui!"
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}     
               >
                      
               </textarea> 
               <button type="submit">Enviar</button>    
          </form>
     ) 
} 

export default FormularioReclamacao;