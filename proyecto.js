// Función para validar el formulario antes de enviar
function validateForm() {
    var nombreProyecto = document.getElementById("nombre_proyecto").value;
    var descripcionProyecto = document.getElementById("descripcion_proyecto").value;
    var fechaInicio = document.getElementById("fecha_inicio").value;
    var duracionEstimada = document.getElementById("duracion_estimada").value;
    
    if (nombreProyecto.trim() === "" || descripcionProyecto.trim() === "" || fechaInicio.trim() === "" || duracionEstimada.trim() === "") {
      alert("Por favor complete todos los campos.");
      return false;
    }
    
    return true;
  }
  
  // Agregar un event listener para el evento submit del formulario
  document.getElementById("projectForm").addEventListener("submit", function(event) {
    if (!validateForm()) {
      event.preventDefault(); // Evitar que se envíe el formulario si la validación falla
    }
  });