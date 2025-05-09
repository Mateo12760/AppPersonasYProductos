# Proyecto: Dos aplicaciones web con arquitectura en tres capas

Este repositorio contiene dos aplicaciones simples desarrolladas con HTML, CSS y JavaScript puro, estructuradas siguiendo una **arquitectura de tres capas**:

- **Capa de presentación (UI)**: Encargada de la interacción con el usuario y el renderizado de datos en pantalla.
- **Capa de lógica de negocio (Service)**: Procesa la información, gestiona reglas de negocio y actúa como intermediario entre UI y los datos.
- **Capa de acceso a datos (Data)**: Administra el almacenamiento y recuperación de datos (en este caso, simulados con arrays en memoria).


## Aplicaciones incluidas

### `AppPersonas`
Permite agregar, eliminar y listar personas.  
**Atributos**: nombre, apellido y edad.

### `AppProductos`
Permite agregar, eliminar y listar productos.  
**Atributos**: nombre, descripción y precio.


## Intercambio de capas (explicación técnica)

Uno de los objetivos principales de este proyecto fue demostrar la **independencia y reutilización de capas entre aplicaciones**.

### ¿Qué se intercambió?

- En `AppPersonas` se reutilizó la **capa de servicios (service.js)** proveniente de `AppProductos`, aprovechando que ambas comparten operaciones similares (agregar, eliminar, listar).
- En `AppProductos` se utilizó la **capa de presentación (ui.js)** de `AppPersonas`, ya que la estructura de interfaz era genérica y podía adaptarse fácilmente a los productos.

### ¿Cómo se logró?

Gracias a una separación clara de responsabilidades:
- Las funciones en `service.js` y `ui.js` se diseñaron de manera **modular y desacoplada**, utilizando parámetros en lugar de depender de datos hardcodeados o elementos específicos.
- Las funciones no dependen del tipo de entidad (persona o producto), sino del formato de los datos que reciben.
- Esto permite copiar una capa entre aplicaciones y **reutilizarla sin necesidad de modificarla o romper el código existente**.

Este enfoque favorece:
- **Reutilización** de lógica común (DRY).
- **Escalabilidad**, ya que se pueden agregar nuevas entidades reutilizando lógica existente.
- **Mantenibilidad**, ya que los cambios en una capa no afectan a las demás si están bien separadas.


## Cómo probar

1. Entrá a la carpeta `AppPersonas` o `AppProductos`.
2. Abrí `index.html` en tu navegador.
3. Agregá y eliminá elementos para ver cómo interactúan las capas.


## Estructura de cada aplicación

AppNombre/
├── index.html → Interfaz de usuario
├── style.css → Estilos
└── js/
├── data.js → Capa de acceso a datos
├── service.js → Capa de lógica de negocio
└── ui.js → Capa de presentación
