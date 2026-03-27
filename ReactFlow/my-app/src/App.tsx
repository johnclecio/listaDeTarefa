import { useState } from 'react';
import FormularioReclamacao from './components/FormularioReclamacao'
import type { Reclamacao } from './tipos/Reclamacao';
import ListaReclamacoes from './components/ListaRecalamacoes';




function App() {

  const [reclamacoes, setReclamacoes] = useState<Reclamacao[]>([]);

  const adicionarReclamacao = (dados: Reclamacao ) => {
    const nova: Reclamacao ={
      ...dados,
      id: 1
  }
    setReclamacoes(prev => [...prev, nova]);

  }
 


  return (
    <>
     <FormularioReclamacao  aoEnviar={adicionarReclamacao}/>
     <ListaReclamacoes reclamacoes={reclamacoes}/>
    </>
  )
}

export default App;
