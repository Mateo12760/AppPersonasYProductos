const service = {
  agregarPersona(nombre, apellido, edad) {
    if (!nombre || !apellido || isNaN(edad)) return;
    dataLayer.agregar({ nombre, apellido, edad });
  },
  eliminarPersona(index) {
    dataLayer.eliminar(index);
  },
  modificarPersona(index, nombre, apellido, edad) {
    dataLayer.modificar(index, { nombre, apellido, edad });
  },
  listarPersonas() {
    return dataLayer.obtenerTodas();
  }
};
