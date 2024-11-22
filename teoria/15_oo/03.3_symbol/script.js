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

let patas = Symbol()
Cachorro.prototype[patas] = 4

let labrador = new Cachorro('Labrador', 'Amarelo')

labrador.latir()

console.log(Cachorro.prototype.raca)
console.log(labrador.raca)

// Acessando o Symbol
console.log(Cachorro.prototype[patas])
console.log(labrador[patas])