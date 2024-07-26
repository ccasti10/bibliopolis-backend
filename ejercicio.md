Escenario:
En el mundo digital actual, las compras online se han convertido en la norma. La industria del libro no se ha quedado atrás, y las plataformas de venta online de libros están en auge. En este escenario, la empresa "Bibliópolis" busca consolidarse como líder en el mercado, ofreciendo una experiencia de compra de libros online fácil, eficiente y atractiva.
Bibliópolis necesita desarrollar una plataforma web que permita a los usuarios comprar libros de forma online. La plataforma debe ser fácil de usar, intuitiva y segura. Además, debe ofrecer un amplio catálogo de libros, información detallada de cada libro, opciones de búsqueda y filtrado, métodos de pago seguros y envío rápido y confiable.
Objetivo:
Identifica los objetos que serían necesarios para modelar este sistema de reclutamiento.
Usuario:
id: identificador único del usuario, generado automáticamente
nombre: nombre del usuario
correoElectronico: correo electrónico del usuario, único
contrasena: String contraseña del usuario
direccion: String dirección de envío del usuario
historialPedidos: lista de pedidos realizados por el usuario

Libro
isbn: ISBN del libro, obligatorio, único)
titulo: título del libro, obligatorio)
autor: autor del libro, obligatorio)
editorial: editorial del libro)
genero: género literario del libro)
precio: precio del libro
descripción: descripción del libro
imagen: ruta a la imagen de portada del libro
stock: cantidad de libros disponibles en stock

Pedido
id: identificador único del pedido, generado automáticamente
usuario: usuario que realizó el pedido
fechaPedido:fecha en la que se realizó el pedido
estado: estado actual del pedido: "pendiente", "en proceso", "enviado", "entregado"
total: precio total del pedido (Calculado)
items: lista de ítems que componen el pedido

ItemPedido

libro: libro que forma parte del pedido
cantidad: cantidad de libros del mismo tipo en el pedido

Relaciones

Un Usuario puede realizar muchos Pedidos.
Un Pedido pertenece a un único Usuario.
Un Pedido puede tener muchos ItemPedidos.
Un ItemPedido pertenece a un único Pedido.
Un ItemPedido está asociado a un único Libro.
Un Libro puede estar asociado a varios ItemPedidos.

Actividades:
✅ Crea un nuevo proyecto utilizando nestjs llamado “bibliopolis-backend”
✅ Crea un nuevo repositorio en github llamado “bibliopolis-backend”
✅ Sincroniza tu repositorio local con el repositorio de github
✅ Identifica las clases necesarias según el escenario planteado y por cada clase define los atributos especificando el tipo de dato necesario.
✅ Crea las siguientes clases y sus relaciones en la carpeta models
✅ Usuario
✅ Libro
✅ Pedido
✅ ItemPedido
✅ Haz un commit con el mensaje “Modelo creado” y luego haz un push al repositorio de github.
✅ Crea una nueva rama en tu repositorio local llamada “feature_usuarios”

✅ Crea el controlador para Usuarios que permita realizar las siguientes acciones
✅ Registrar un nuevo usuario
✅ Obtener un usuario según su id
✅ Obtener todos los usuarios
✅ Eliminar un usuario según su id

✅Crea un servicio para almacenar los datos de los usuarios y que permita dar soporte a las acciones que maneja el controlador de usuarios
✅ Registrar un nuevo usuario (Verificar si existe el usuario según el correo ingresado)

✅ Obtener un usuario según su id, en caso de que el usuario no exista devolver el código 404.
✅ Obtener todos los usuarios (Excluir la password en la lista )
✅ Eliminar un usuarios según su id
✅Haz un commit con el mensaje “Módulo de usuarios” y luego haz un push al repositorio de github usando la rama “feature_usuarios”.

✅Haz un pull request hacia la rama master en github
✅En el repositorio local cambiarse a la rama ‘main’
✅Sincronizar los cambios con el repositorio remoto
Crear una nueva rama llamada “feature_libros”
Crea el controlador para Libros que permita realizar las siguientes acciones
crear un nuevo libro
Obtener un libro según su ISBN
Obtener todos los libros y permitir filtrar por autor y/o género
Eliminar un libro según su ISBN
Crea un servicio para almacenar los datos de libros y que permita dar soporte a las acciones que maneja el controlador de libros
crear un nuevo libro, debe verificar que el ISBN no exista.
Obtener un libro según su ISBN
Obtener todas los libros y permitir filtrar por autor y/o género (Si no se envían los filtros de autor o género debe devolver todos los libros,)
Eliminar un libro según su ISBN
Haz un commit con el mensaje “Módulo de libros” y luego haz un push al repositorio de github usando la rama “feature_libros”.
Repite los pasos 11, 12, 13
Crear una nueva rama llamada “feature_pedidos”
Crea el controlador para Pedidos que permita realizar las siguientes acciones
crear un nuevo pedido
Obtener un pedido según su Id
Obtener todos los pedidos y permitir filtrar por estado y/o usuario
Modificar el estado de un pedido según su id
Crea un servicio para almacenar los datos de pedidos y que permita dar soporte a las acciones que maneja el controlador de pedidos
crear un nuevo pedido
La fechaPedido debe ser igual a la fecha actual del sistema
El total se debe calcular en base al precio de cada libro en el pedido y su cantidad.
Se debe validar que exista stock para cada uno de los libros en el pedido.
Obtener un pedido según su Id
Obtener todos los pedidos y permitir filtrar por estado y/o usuario
Modificar el estado de un pedido según su id
Si el estado actual del pedido es "pendiente" solo debe permitir el valor "en proceso"
Si el estado actual del pedido es "en proceso" solo debe permitir el valor "enviado"
Si el estado actual del pedido es "enviado", sólo debe permitir el valor "entregado"
Si el estado actual del pedido es "entregado" no se puede modificar
Si no debe devolver el 400 con el mensaje “estado incorrecto”
Haz un commit con el mensaje “Módulo de Pedidos” y luego haz un push al repositorio de github usando la rama “feature_pedidos”.
