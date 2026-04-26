const areaRespuesta = document.getElementById("respuesta");
const imagenChatbot = document.getElementById("imagenchatbot");
const chatbotTitle = document.getElementById("chatbot-title");
const dynamicButtonsContainer = document.getElementById("dynamic-buttons");
const categoryButtonsContainer = document.getElementById("category-buttons");
 
 
// ==================== FUNCIONES ====================
function renderCategoryButtons() {
  categoryButtonsContainer.innerHTML = `
    <button onclick="seleccionarCategoria('biologia')" class="btn btn-primary w-100 mb-2 active" id="btn-biologia">
      🧬 Biología
    </button>
    <button onclick="seleccionarCategoria('quimica')" class="btn btn-primary w-100" id="btn-quimica">
      ⚗️ Química
    </button>
  `;
}
 
async function cargarCategorias() {
  try{
    const response = await fetch('data/chat.json');
    categorias = await response.json();
    // Después de cargar, renderizamos los botones
    renderCategoryButtons();
    seleccionarCategoria ('biologia');
  }catch(error){
    console.error("Error cargando categorías:", error);
    areaRespuesta.value = "Error. No se pudieron cargar las categorías.";
  
}
}
 
 
 
function seleccionarCategoria(categoria) {
  // Quitar active a todos
  document.querySelectorAll('#category-buttons button').forEach(btn => btn.classList.remove('active'));
  // Activar el botón seleccionado
  const botonActivo = document.getElementById(`btn-${categoria}`);
  if (botonActivo) botonActivo.classList.add('active');
 
  const data = categorias[categoria];
  if (!data)return;
 
  // Cambiar título
  chatbotTitle.textContent = data.titulo;
 
  // Limpiar botones anteriores
  dynamicButtonsContainer.innerHTML = "";
 
  // Crear los 5 botones dinámicamente
  data.botones.forEach(boton => {
    const btn = document.createElement("button");
    btn.className = "chatbot-btn";
    btn.textContent = boton.texto;
    btn.onclick = () => {
      areaRespuesta.value = boton.respuesta;
      imagenChatbot.src = boton.imagen;
    };
    dynamicButtonsContainer.appendChild(btn);
  });
}
 
// ==================== INICIALIZACIÓN ====================
window.onload = () => {
  cargarCategorias();
};
 