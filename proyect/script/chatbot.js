const areaRespuesta= document.getElementById("respuesta")
const imagen = document.getElementById("imagenchatbot") 


function decirHola(){
    areaRespuesta.value= "Hola!,Me alegra saludarte";
    imagen.src="./proyect/image/chatbot/saludo1.jpg";
 
}
 
function comoEstas(){
    areaRespuesta.value=" Estoy bien,funcionando correctamente y listo para trabajar";
    imagen.src="./proyect/image/chatbot/saludo2.jpg";   
}
 
function comoTeSientes(){
    areaRespuesta.value="Mesiento de maravilla ycon ganasde aprenderbiologia";
    imagen.src="./proyect/image/chatbot/saludo3.jpg";
}
 