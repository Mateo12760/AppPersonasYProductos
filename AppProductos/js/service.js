const service = {
  agregarProducto(nombre, descripcion, precio) {
    if (!nombre || !descripcion || isNaN(precio)) return;
    dataLayer.agregar({ nombre, descripcion, precio });
  },
  eliminarProducto(index) {
    dataLayer.eliminar(index);
  },
  listarProductos() {
    return dataLayer.obtenerTodos();
  }
};
