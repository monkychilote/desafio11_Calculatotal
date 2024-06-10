>**Nota:** Para visualizar la gitpage de este proyecto lo puede realizar precionando el siguiente enlace.
https://monkychilote.github.io/desafio11_Calculatotal/
>
>

  

# Explicación del HTML:

Con respecto a lo que tiene que ver con el desafio, ya que se esta reutilizando parte de la estructura del proyecto anterior y agregando la funcionalidad solicitada. 
El archivo HTML proporciona la estructura de la página web. 

1. **Encabezado <head>:** Se define la configuración básica de la página, incluyendo el idioma, el conjunto de caracteres y los enlaces a los estilos CSS.
2. **Cuerpo <body>:** Contiene el contenido visible de la página. Aquí tenemos un div con la clase contenedor-productos que contiene varias tarjetas de producto (div con la clase tarjeta-producto).
3. **Estructura de la Tarjeta de Producto:** Cada tarjeta incluye una imagen, un nombre de producto, un precio, controles para ajustar la cantidad y una visualización del precio total. Las IDs se usan para identificar de manera única cada elemento de precio y cantidad, lo que permite actualizarlos de forma dinámica mediante JavaScript.
4. **Script:** Al final del cuerpo, se enlaza el archivo script.js que contiene la lógica JavaScript.

## Explicación del CSS:

El archivo CSS estiliza los elementos de la página para que se vean bien y sean funcionales:

1. **Estilos Básicos:** 
    + Se aplica una fuente sans-serif para una apariencia moderna y clara.
    + El cuerpo de la página se centra utilizando Flexbox, lo que asegura que el contenido esté centrado tanto horizontal como verticalmente.

2. **Contenedor de Productos:** 
    + Utiliza CSS Grid para crear una disposición de productos flexible. La propiedad gap añade espacio entre las tarjetas de producto.

3. **Tarjeta de Producto:** 
    + Utiliza Flexbox para centrar los elementos dentro de cada tarjeta.

4. **Contenedor de Imagen:** 
    + Utiliza Flexbox para centrar la imagen dentro del contenedor. La imagen se ajusta automáticamente al tamaño del contenedor manteniendo sus proporciones.

5. **Botones de Control de Cantidad:** 
    + Se estilizan los botones para hacerlos visualmente atractivos y fáciles de usar.

6. **Media Queries:** 
    + Se utilizan para ajustar la disposición de las tarjetas de producto según el tamaño de la pantalla. A más de 996px, se muestran 4 columnas, entre 576px y 996px se muestran 2 columnas, y a menos de 576px se muestra una sola columna.


## Explicación del JavaScript:

El archivo JavaScript añade interactividad a la página:

1. **Evento DOMContentLoaded:** 
    + Asegura que el script se ejecute después de que el contenido HTML haya sido completamente cargado.
    
2. **Array de Productos:** 
    + Define una lista de productos con sus respectivos IDs y precios. Esto permite manejar varios productos de manera dinámica.
    
3. **Selección de Elementos del DOM:** 
    + Utiliza querySelector para seleccionar los elementos específicos de cada producto utilizando IDs únicos.
    
4. **Actualización del Precio Total:** 
    + Define una función actualizarPrecioTotal que calcula el precio total basado en la cantidad y el precio del producto, y actualiza el contenido del DOM con el nuevo precio.
    
5. **Eventos de Click para Botones:** 
    + Añade event listeners a los botones de aumentar y disminuir cantidad. Estos eventos modifican la cantidad del producto y actualizan el precio total en consecuencia.
    
6. **Inicialización del Precio Total:** 
    + Llama a actualizarPrecioTotal al inicio para asegurar que el precio total se muestre correctamente desde el principio.
    
