class Product {
    constructor({ id, nombre, descripcion, cantidad, precio, id_categoria, estado }) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.precio = precio;
        this.id_categoria = id_categoria;
        this.estado = estado === 1; // convierte BIT a booleano
    }
}
module.exports = Product;
  