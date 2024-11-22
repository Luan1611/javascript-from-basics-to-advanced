function Cachorro(raca, patas, cor) {
    this.raca = raca
    this.patas = patas
    this.cor = cor
    this.uivar = function() {
        console.log('Auuuuuu')
    }
}

let husky = new Cachorro('Husky', 4, 'cinza')

console.log(husky)
console.log(Object.getPrototypeOf(husky))