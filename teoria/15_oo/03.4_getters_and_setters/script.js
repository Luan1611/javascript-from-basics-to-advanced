class Cachorro {

    constructor(raca, cor) {
        this.raca = raca
        this.cor = cor
    }

    latir() {
        console.log('Au Au')
    }

    get getCor() {
        return this.cor
    }

    set setCor(cor) {
        this.cor = cor
    }
}

let pastorAlemao = new Cachorro('Pastor Alemão', 'Sem cor')

console.log(pastorAlemao.getCor)

pastorAlemao.setCor = 'Marrom'

console.log(pastorAlemao.getCor)