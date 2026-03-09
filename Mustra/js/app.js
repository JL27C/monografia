const contenedor = document.getElementById("contenedor-cards");
 
fetch("data/contenidos.json")
  .then(response => response.json())
  .then(data => {
 
    document.getElementById("btn-biologia").addEventListener("click", () => {
      mostrarContenido(data.biologia);
    });
 
    document.getElementById("btn-quimica").addEventListener("click", () => {
        // data: esta diciendo que traiga esa Categoria
      mostrarContenido(data.quimica);

    });
    document.getElementById("btn-todo").addEventListener("click", () => {
        // Esta parte es donde me indica todo
        const todo = [...data.biologia, ...data.quimica];
      mostrarContenido(todo);
    });
  });
 
function mostrarContenido(lista) {
  contenedor.innerHTML = "";
 
  lista.forEach(item => {
    // el innerHTML es para enviarlo a la pagina
    contenedor.innerHTML += `
<div class="card">
<h3>${item.titulo}</h3>
<img src="${item.imagen}" alt="${item.titulo}">
<p>${item.descripcion}</p>
</div>
    `;
  });
}

 
/// proyecto del joel, proyecto-del-joel  es snake case

