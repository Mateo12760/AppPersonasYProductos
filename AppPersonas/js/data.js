const dataLayer = {
  personas: [],
  agregar(persona) {
    this.personas.push(persona);
  },
  eliminar(index) {
    this.personas.splice(index, 1);
  },
  modificar(index, nuevaPersona) {
    this.personas[index] = nuevaPersona;
  },
  obtenerTodas() {
    return this.personas;
  }
};
