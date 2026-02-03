


const arrayForm = ['cep', 'logradouro', 'bairro', 'cidade', 'estado', 'numero'];


const salvarTudo = () => {
    arrayForm.forEach(id => {
        const input = document.getElementById(id);
        if (input) localStorage.setItem(id, input.value);
    });
};

document.getElementById("cep").addEventListener('blur', (event) => {
    const cepInformado = event.target.value.replace(/\D/g, ''); 

    if (cepInformado.length !== 8) return;

    fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
        .then(response => response.json())
        .then(data => {
            if (!data.erro) {
                document.getElementById('logradouro').value = data.logradouro;
                document.getElementById('bairro').value = data.bairro;
                document.getElementById('cidade').value = data.localidade;
                document.getElementById('estado').value = data.uf;
                
               
                salvarTudo();
            } else {
                alert("CEP não encontrado");
            }
        })
        .catch(error => console.error("Erro ao buscar CEP: ", error));
});


arrayForm.forEach(id => {
    const input = document.getElementById(id);
    if (input) {
        input.addEventListener('input', () => {
            localStorage.setItem(id, input.value);
        });
    }
});

window.addEventListener('load', () => {
    arrayForm.forEach(id => {
        const valorSalvo = localStorage.getItem(id);
        const input = document.getElementById(id);
        if (valorSalvo && input) input.value = valorSalvo;
    });
});
