// Función para validar el formulario antes de enviar
function validateForm() {
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var pasatiempos = document.getElementById("pasatiempos").value;
    
    if (nombre.trim() === "" || edad.trim() === "" || pasatiempos.trim() === "") {
      alert("Por favor complete todos los campos.");
      return false;
    }
    
    return true;
  }
  
  // Agregar un event listener para el evento submit del formulario
  document.getElementById("hobbiesForm").addEventListener("submit", function(event) {
    if (!validateForm()) {
      event.preventDefault(); // Evitar que se envíe el formulario si la validación falla
    }
  });