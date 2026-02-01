


const botaoTema = document.getElementById("botaoTema");

botaoTema.addEventListener("click", () => {
  const temaAtual = localStorage.getItem("tema") || "light";
  const novoTema = temaAtual === "dark" ? "light" : "dark";

  document.body.classList.remove("dark", "light");
  document.body.classList.add(novoTema);

  localStorage.setItem("tema", novoTema);

  botaoTema.textContent = novoTema === "dark" ? "☀️" : "🌙";
});

document.addEventListener("DOMContentLoaded", ()=>{

    const temaSalvo = localStorage.getItem("tema") || "light";

    if(temaSalvo === "dark"){
        document.body.classList.add("dark");
        botaoTema.textContent = '☀️';
    }else{
        botaoTema.textContent = "🌙";
    }
})
