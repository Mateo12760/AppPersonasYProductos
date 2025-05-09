const dataLayer = {
  productos: [],
  agregar(producto) {
    this.productos.push(producto);
  },
  eliminar(index) {
    this.productos.splice(index, 1);
  },
  obtenerTodos() {
    return this.productos;
  }
};
