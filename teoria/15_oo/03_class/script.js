class Cachorro {
    constructor(raca, patas, cor) {
        this.raca = raca
        this.patas = patas
        this.cor = cor
    }
}

let labrador = new Cachorro('Labrados', 4, 'Amarelo')

console.log(labrador)
console.log(Object.getPrototypeOf(labrador))