


function toggleMenu(x) {
    x.classList.toggle("change");

    const menu = document.querySelector(".nav__list");
    menu.classList.toggle("active");
}



document.addEventListener("DOMContentLoaded", function () {

  const links = document.querySelectorAll(".nav__link");

  links.forEach(function(link){

    link.addEventListener("click", function(e){

      e.preventDefault();

      const secao = this.dataset.section;
      const destino = document.querySelector("." + secao);

      if(destino){
        destino.scrollIntoView({
          behavior: "smooth"
        });
      }

    });

  });

});
