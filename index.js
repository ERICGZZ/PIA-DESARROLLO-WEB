// Definiciones de ejemplo (puedes cambiarlas según tus necesidades)
var definitions = [
    { term: "HTML", definition: "HyperText Markup Language - Lenguaje de marcado de hipertexto utilizado para crear y estructurar páginas web." },
    { term: "CSS", definition: "Cascading Style Sheets - Hojas de estilo en cascada utilizadas para dar estilo y diseño a las páginas web." },
    { term: "JavaScript", definition: "JavaScript - Lenguaje de programación utilizado para crear interactividad en las páginas web." }
  ];

  // Función para agregar las definiciones al contenedor en el HTML
  function renderDefinitions() {
    var container = document.getElementById("definitionsContainer");
    
    // Iterar sobre cada definición y crear un elemento HTML para mostrarla
    definitions.forEach(function(definition) {
      var div = document.createElement("div");
      div.classList.add("definition");
      div.innerHTML = "<span class='term'>" + definition.term + ":</span> " + definition.definition;
      container.appendChild(div);
    });
  }

  // Llamar a la función para renderizar las definiciones cuando la página cargue
  window.onload = function() {
    renderDefinitions();
  };