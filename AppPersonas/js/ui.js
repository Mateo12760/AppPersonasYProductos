const ui = {
  agregarPersona() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const edad = parseInt(document.getElementById("edad").value);
    service.agregarPersona(nombre, apellido, edad);
    ui.mostrarPersonas();
  },
  eliminarPersona(index) {
    service.eliminarPersona(index);
    ui.mostrarPersonas();
  },
  mostrarPersonas() {
    const lista = document.getElementById("listaPersonas");
    lista.innerHTML = "";
    const personas = service.listarPersonas();
    personas.forEach((p, i) => {
      const li = document.createElement("li");
      li.textContent = `${p.nombre} ${p.apellido}, ${p.edad} años`;
      const btn = document.createElement("button");
      btn.textContent = "Eliminar";
      btn.onclick = () => ui.eliminarPersona(i);
      li.appendChild(btn);
      lista.appendChild(li);
    });
  }
};
