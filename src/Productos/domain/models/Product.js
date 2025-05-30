class Product {
    constructor({ id, nombre, descripcion, cantidad, precio, id_categoria, habilitado }) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.precio = precio;
        this.id_categoria = id_categoria;
        this.habilitado = habilitado ; // convierte BIT a booleano
    }
}
module.exports = Product;
  