const areaRespuesta= document.getElementById("respuesta")
const imagen = document.getElementById("imagenchatbot")
const chatbotTitle = document.getElementById("chatbot-title")
const dynamicButtonsContainer = document.getElementById("dynamic-buttons")
const categoryButtonsContainer = document.getElementById("category-buttons")
 
//FUNCIONES PARA MOSTRAR LAS CATEGORIAS
const categorias = {
  biologia: {
    titulo: "Asistente de Biología",
    botones: [
      {
        texto: "La Célula",
        respuesta: "La célula es la unidad básica de la vida. Existen células procariotas y eucariotas. Las eucariotas tienen núcleo y orgánulos.",
        imagen: "./image/chatbot/saludo.jpg"
      },
      {
        texto: "Fotosíntesis",
        respuesta: "La fotosíntesis es el proceso por el cual las plantas convierten la luz solar, agua y CO₂ en glucosa y oxígeno.",
        imagen: "./image/chatbot/saludo3.jpg"
      },
      {
        texto: "ADN y Genética",
        respuesta: "El ADN contiene la información genética. Se encuentra en el núcleo de las células eucariotas y determina las características de los seres vivos.",
        imagen: "./image/chatbot/saludo3.jpg"
      },
      {
        texto: "Mitosis y Meiosis",
        respuesta: "La mitosis es la división celular para el crecimiento. La meiosis es la división que produce gametos (óvulos y espermatozoides).",
        imagen: "./image/chatbot/saludo.jpg"
      },
      {
        texto: "Ecosistemas",
        respuesta: "Un ecosistema es la interacción entre los seres vivos y su entorno. Incluye productores, consumidores y descomponedores.",
        imagen: "./image/chatbot/saludo2.jpg"
      }
    ]
  },
 
  quimica: {
    titulo: "Asistente de Química",
    botones: [
      {
        texto: "El Átomo",
        respuesta: "El átomo es la unidad más pequeña de la materia. Está compuesto por protones, neutrones y electrones.",
        imagen: "./image/chatbot/saludo3.jpg"
      },
      {
        texto: "Tabla Periódica",
        respuesta: "La tabla periódica organiza los elementos químicos según su número atómico y propiedades similares.",
        imagen: "./image/chatbot/saludo.jpg"
      },
      {
        texto: "Enlaces Químicos",
        respuesta: "Los enlaces químicos unen los átomos. Los más comunes son iónicos, covalentes y metálicos.",
        imagen: "./image/chatbot/saludo2.jpg"
      },
      {
        texto: "Reacciones Químicas",
        respuesta: "Una reacción química es la transformación de sustancias (reactivos) en otras nuevas (productos).",
        imagen: "./image/chatbot/saludo3.jpg"
      },
      {
        texto: "Ácidos y Bases",
        respuesta: "Los ácidos liberan H⁺ y las bases liberan OH⁻ en solución. Se miden con la escala de pH.",
        imagen: "./image/chatbot/saludo.jpg"
      }
    ]
  }
};
 
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
 
function seleccionarCategoria(categoria) {
  // Quitar active a todos
  document.querySelectorAll('#category-buttons button').forEach(btn => btn.classList.remove('active'));
  // Activar el botón seleccionado
  document.getElementById(`btn-${categoria}`).classList.add('active');
 
  const data = categorias[categoria];
 
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
  renderCategoryButtons();
  seleccionarCategoria('biologia'); // Inicia con Biología
};
