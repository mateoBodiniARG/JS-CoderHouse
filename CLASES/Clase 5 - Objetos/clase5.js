//objetos literal

const miReloj = {
    color: "Rojo",
    modelo: "casio",
    malla: "cuero"
}

console.log(miReloj)

//objetos constructor

class Computadora {
    constructor(tipo,sistema) {
        this.tipo = tipo;
        this.sistema = sistema;
}
}

const compu1 = new Computadora("notebook","windows");

console.log(compu1)
