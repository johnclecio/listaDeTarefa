// Firebase App
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";

// Firestore
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "cadastroclientes-b4aeb.firebaseapp.com",
  projectId: "cadastroclientes-b4aeb",
  storageBucket: "cadastroclientes-b4aeb.firebasestorage.app",
  messagingSenderId: "284108928422",
  appId: "1:284108928422:web:eaa56518e63c320e024b67"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const lista = document.getElementById("listaClientes");

async function carregarClientes() {
  lista.innerHTML = "";

  const querySnapshot = await getDocs(collection(db, "clientes"));

  querySnapshot.forEach((docSnap) => {
    criarItem({
      id: docSnap.id,
      ...docSnap.data()
    });
  });
}

carregarClientes();

document.getElementById("add").addEventListener("click", async () => {
  const nome = document.getElementById("nome").value.toLowerCase();
  const email = document.getElementById("email").value.toLowerCase();


  if (!nome || !email) return;

  const docRef = await addDoc(collection(db, "clientes"), {
    nome,
    email
  });

  criarItem({ id: docRef.id, nome, email });

  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
});

function criarItem(cliente) {
  const item = document.createElement("li");

  const texto = document.createElement("span");
  texto.textContent = `${cliente.nome} - ${cliente.email}`;

  const botao = document.createElement("button");
  botao.textContent = "X";

  botao.addEventListener("click", () => {
    removerCliente(cliente.id, item);
  });

  item.appendChild(texto);
  item.appendChild(botao);

  lista.appendChild(item);
}
async function removerCliente(id, item) {
  await deleteDoc(doc(db, "clientes", id));
  item.remove();
}

