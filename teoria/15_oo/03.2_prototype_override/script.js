class Cachorro {

    constructor(raca, cor) {
        this.raca = raca
        this.cor = cor
    }

    latir() {
        console.log('Au Au')
    }
}

Cachorro.prototype.raca = 'SRD'
Cachorro.prototype.patas = 4

let labrador = new Cachorro('Labrador', 'Amarelo')

console.log(Cachorro.prototype.raca)
console.log(labrador.raca)