document.addEventListener("DOMContentLoaded", () => {
  const productos = [
    { id: 1, precio: 500000 },
    { id: 2, precio: 300000 },
    { id: 3, precio: 400000 },
    { id: 4, precio: 500000 },
    { id: 5, precio: 600000 },
    { id: 6, precio: 700000 },
    // Añade más productos según sea necesario
  ];

  productos.forEach((producto) => {
    const botonDisminuir = document.querySelector(
      `#boton-disminuir${producto.id}`
    );
    const botonAumentar = document.querySelector(
      `#boton-aumentar${producto.id}`
    );
    const cantidadSpan = document.querySelector(`#cantidad${producto.id}`);
    const precioTotalElemento = document.querySelector(
      `#precio-total${producto.id}`
    );
    const precioProductoElemento = document.querySelector(
      `#precio-producto${producto.id}`
    );

    let cantidad = 1;
    const precioProducto = producto.precio;

    const actualizarPrecioTotal = () => {
      const precioTotal = precioProducto * cantidad;
      precioTotalElemento.innerHTML = `Total: $${precioTotal.toLocaleString()}`;
    };

    botonDisminuir.addEventListener("click", () => {
      if (cantidad > 1) {
        cantidad--;
        cantidadSpan.innerHTML = cantidad;
        actualizarPrecioTotal();
      }
    });

    botonAumentar.addEventListener("click", () => {
      cantidad++;
      cantidadSpan.innerHTML = cantidad;
      actualizarPrecioTotal();
    });

    // Inicializar el precio total
    actualizarPrecioTotal();
  });
});
