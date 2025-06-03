class TipoDocumento{
    constructor(id,descripcion,habilitado){
        this.id = id;
        this.descripcion = descripcion;
        this.habilitado = habilitado; // convierte BIT a booleano
    
    }
}

module.exports = TipoDocumento;
