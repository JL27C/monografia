const contenedor = document.getElementById("contenedor-cards");
const modal = document.getElementById("material-modal"); 
const modalContent = document.getElementById("modal-content");
const modalClose = document.getElementById("modal-close");

// Siempre se debe aclarar de que documento se viene.
fetch("./data/contenidos.json")
  .then(response => response.json())
  .then(data => {
    // Guardar los datos
// Automatisa que el cliente este todos los catalogos
    todosLosContenidos = [...data.biologia || [], ...data.quimica || []];

    document.getElementById("btn-biologia").addEventListener("click", () => {
      mostrarContenido(data.biologia || []);
    });
 
    document.getElementById("btn-quimica").addEventListener("click", () => {
        // data: esta diciendo que traiga esa Categoria
      mostrarContenido(data.quimica || []);

    });
    document.getElementById("btn-todo").addEventListener("click", () => {
        // Esta parte es donde me indica todo
      mostrarContenido(todosLosContenidos);
    });
    mostrarContenido(todosLosContenidos);
  })
 .catch(error => console.error("error al cargar el JSON:", error));


function mostrarContenido(lista) {
  contenedor.innerHTML = "";
 if(lista.length === 0) {
    contenedor.innerHTML = "<p>No hay contenido disponible.</p>";
  }
lista.forEach(item => {
    const cardHTML = `
    <div class="col-md-6 col-lg-4 col-xl-3 mb-4">
    <div class=" card h-100 recipe-card" data-item='${JSON.stringify(item)}'>
    <img src="${item.imagen}" class="card-img-top" alt="${item.titulo}">
      <div class="card-body">
        <h3>${item.titulo}</h3>
        <p>${item.descripcion}</p>
        <small class="text-muted">${item.categoria || 'Sin categoría'}</small>
      </div>
      </div>
      </div>
    `;
    contenedor.innerHTML += cardHTML;
  });


// Agregar evento de clic a las cartas
contenedor.querySelectorAll('.recipe-card').forEach(card => {
  card.addEventListener('click', () => {
    const item = JSON.parse(card.dataset.item);
    mostrarModal(item);
  });

});

}

// Función para abrir el modal con la información del item

function mostrarModal(item) {
    modalContent.innerHTML = `
        <h2>${item.titulo}</h2>
        <img src="${item.imagen}" alt="${item.titulo}">
        
        <h4 class="mt-4">Descripción</h4>
        <p>${item.descripcion}</p>
 
        ${item.detalles ? `
            <h4 class="mt-3">Detalles adicionales</h4>
            <p>${item.detalles}</p>
        ` : ''}
        
        ${item.conceptos ? `
            <h4>Conceptos clave</h4>
            <ul>${item.conceptos.map(c => `<li>${c}</li>`).join('')}</ul>
        ` : ''}
    `;
 
    modal.classList.add('open');
}

//Cerrar el modal

modalClose.addEventListener('click', () => {
    modal.classList.remove('open');
});
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('open');
    }
});