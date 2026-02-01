

document.getElementById("cep").addEventListener('blur', (event) => {
    const elemento = event.target;
    const cepInformado = elemento.value;

    if(!(cepInformado.length === 8)){
        return
    }

    fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
        .then(response => response.json())
        .then(data =>{
            if(!data.error){
                document.getElementById('logradouro').value = data.logradouro;
                document.getElementById('bairro').value = data.bairro;
                document.getElementById('cidade').value = data.localidade;
                document.getElementById('estado').value = data.uf;


            }
            else{
                alert("CEP não encontrado");
            }

        })
        .catch(error => console.error("Erro ao buscar CEP: ", error));
        
        
})      