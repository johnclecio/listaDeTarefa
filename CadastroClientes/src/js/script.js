const lista = document.getElementById("listaClientes");


fetch("https://crudcrud.com/api/99953f7cc52d47eeafc6566ccfdc5822/clientes")
.then(resposta => resposta.json())
.then(listaDeClientes => {
    listaDeClientes.forEach(cliente => {
        criarItem(cliente);
    });
});


document.getElementById("add").addEventListener("click", () => {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    if (!nome || !email) return;

    fetch("https://crudcrud.com/api/99953f7cc52d47eeafc6566ccfdc5822/clientes", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ nome, email })
    })
    .then(resposta => resposta.json())
    .then(cliente => {
        criarItem(cliente);
        document.getElementById("nome").value = "";
        document.getElementById("email").value = "";
    });
});


function criarItem(cliente) {
    const item = document.createElement("li");

    const texto = document.createElement("span");
    texto.textContent = `${cliente.nome} - ${cliente.email}`;

    const botao = document.createElement("button");
    botao.textContent = "X";

    botao.addEventListener("click", () => {
        removerCliente(cliente._id, item);
    });

    item.appendChild(texto);
    item.appendChild(botao);

    lista.appendChild(item);
}


function removerCliente(id, item) {
    fetch(`https://crudcrud.com/api/99953f7cc52d47eeafc6566ccfdc5822/clientes/${id}`, {
        method: "DELETE"
    })
    .then(() => {
        item.remove();
    });
}
