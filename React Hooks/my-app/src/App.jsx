import { useRef, useState } from 'react';

const Api_URL ="https://crudcrud.com/api/6d919fae8b29476ab063ef10e71e84e7/pagamentos";


function App(){
  
  const infoPagamento = {
    valor: 42.00,
    cpf: '061.555.123-31', 
    metodo: 'pix',
    chavePix: 'cpf',
    qrCode: null,
    status: null

  }


const [pagamento, setPagamento] = useState(infoPagamento);

const estaProcessando = useRef(false);

const efetuarPagamento = () => {

  if(estaProcessando.current){
    console.log("Já está sendo processada");
    return;
  }
  estaProcessando.current = true;
  
  fetch(Api_URL, {
    method: 'POST',
    headers: { 'Content-type': 'application/json'},
    body: JSON.stringify(pagamento)

  })
    .then(res => res.json())
    .then(pagamentoCriado => {
      setPagamento((prev) => ({
        ...prev, 
        idPagamento: pagamentoCriado._id,
        qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=PIX' ,
        status: 'CRIADO'}));
       
     

})

    .catch(error  => {
        console.error('Error ao criar pagamento')
    });
    

};

return (
  <div>
   <button onClick={() =>{
    efetuarPagamento();
    efetuarPagamento();
   }}>
   Pagar com Pix
   </button>
   <br />
   {pagamento.status && <img width="120" src={pagamento.qrCode} />   }
    
  </div>
  );
};
export default App;
