function lembrarSoma(x) {
    return function(y) {
        return x + y
    }
}

let soma1 = lembrarSoma(2)
console.log(soma1(5))

let soma2 = lembrarSoma(5)
console.log(soma2(7))


function contador(i) {
    let cont = i
    let somarContador = function() {
        console.log(cont)
        cont++
    }
    return somarContador
}

let meuContador = contador(5)
meuContador()
meuContador()
meuContador()

/* 
Interessante da closure e quando você bota a variável para receber a função
 principal, aquela função na verdade lhe da a referência da segunda função.
  E até bonito de ver quando se coloca pra debugar e olhar o passo a passo.
*/