class Cachorro {

    constructor(raca, cor) {
        this.raca = raca
        this.cor = cor
    }

    latir() {
        console.log('Au Au')
    }
}

Cachorro.prototype.patas = 4

let labrador = new Cachorro('Labrados', 'Amarelo')

console.log(labrador)
console.log(labrador.patas)
console.log(Object.getPrototypeOf(labrador))