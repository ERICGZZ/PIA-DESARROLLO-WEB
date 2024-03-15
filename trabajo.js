// Función para validar el formulario antes de enviar
function validateForm() {
    var nombre = document.getElementById("nombre").value;
    var puesto = document.getElementById("puesto").value;
    var empresa = document.getElementById("empresa").value;
    var experiencia = document.getElementById("experiencia").value;
    
    if (nombre.trim() === "" || puesto.trim() === "" || empresa.trim() === "" || experiencia.trim() === "") {
      alert("Por favor complete todos los campos.");
      return false;
    }
    
    return true;
  }
  
  // Agregar un event listener para el evento submit del formulario
  document.getElementById("workForm").addEventListener("submit", function(event) {
    if (!validateForm()) {
      event.preventDefault(); // Evitar que se envíe el formulario si la validación falla
    }
  });