const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const listaEls = document.querySelectorAll(".lista li");
  for (let index = 0; index < listaEls.length; index++) {
    listaEls[index].remove();
  }

  const listaEl = document.querySelector(".lista");
  for (let index = 0; index < cosasQueAprendimos.length; index++) {
    const newLiEl = document.createElement("li");
    newLiEl.textContent = cosasQueAprendimos[index].tema;
    newLiEl.classList.add(cosasQueAprendimos[index].class || "asd");
    listaEl.appendChild(newLiEl);
  }
}

main();
