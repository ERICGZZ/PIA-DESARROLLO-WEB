// Función para validar el formulario antes de enviar
function validateForm() {
    var integrante = document.getElementById("integrante").value;
    var nombre = document.getElementById("nombre").value;
    var foto = document.getElementById("foto").value;
    var datosGenerales = document.getElementById("datos_generales").value;
    
    if (integrante.trim() === "" || nombre.trim() === "" || foto.trim() === "" || datosGenerales.trim() === "") {
      alert("Por favor complete todos los campos.");
      return false;
    }
    
    return true;
  }
  
  // Agregar un event listener para el evento submit del formulario
  document.getElementById("familyForm").addEventListener("submit", function(event) {
    if (!validateForm()) {
      event.preventDefault(); // Evitar que se envíe el formulario si la validación falla
    }
  });