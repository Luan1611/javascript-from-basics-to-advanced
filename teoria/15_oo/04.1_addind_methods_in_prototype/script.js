function Cachorro(raca, patas, cor) {
    this.raca = raca
    this.patas = patas
    this.cor = cor

    //Método do objeto, não do prototype
    // this.uivar = function() {
    //     console.log('Auuuuuu')
    // }
}

Cachorro.prototype.uivar = function() {
    console.log('Auuuuuu')
}

Cachorro.prototype.latir = function() {
    console.log('Au Au')
}

let husky = new Cachorro('Husky', 4, 'cinza')

console.log(husky)
console.log(Object.getPrototypeOf(husky))

husky.uivar()
husky.latir()