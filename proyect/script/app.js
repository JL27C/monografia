const contenedor = document.getElementById("contenedor-cards");
 
// Siempre se debe aclarar de que documento se viene.
fetch("./proyect/data/contenidos.json")
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
    const srcImg = item.imagen.startsWith("proyect/") ? item.imagen : `proyect/${item.imagen}`;
    // el innerHTML es para enviarlo a la pagina
    contenedor.innerHTML += `
<div class="card">
<h3>${item.titulo}</h3>
<img src="${srcImg}" alt="${item.titulo}">
<p>${item.descripcion}</p>
</div>
    `;
  });
}

 
/// proyecto del joel, proyecto-del-joel  es snake case

