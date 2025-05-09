const ui = {
  agregarProducto() {
    const nombre = document.getElementById("nombre").value;
    const descripcion = document.getElementById("descripcion").value;
    const precio = parseFloat(document.getElementById("precio").value);
    service.agregarProducto(nombre, descripcion, precio);
    ui.mostrarProductos();
  },
  eliminarProducto(index) {
    service.eliminarProducto(index);
    ui.mostrarProductos();
  },
  mostrarProductos() {
    const lista = document.getElementById("listaProductos");
    lista.innerHTML = "";
    const productos = service.listarProductos();
    productos.forEach((p, i) => {
      const li = document.createElement("li");
      li.textContent = `${p.nombre} - ${p.descripcion} ($${p.precio})`;
      const btn = document.createElement("button");
      btn.textContent = "Eliminar";
      btn.onclick = () => ui.eliminarProducto(i);
      li.appendChild(btn);
      lista.appendChild(li);
    });
  }
};
