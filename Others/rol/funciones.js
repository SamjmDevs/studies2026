//Función generadora de tiradas de dados
// attemps es las veces que se tira el dado, mientras que diceType es el número de caras que tiene el dado

function* diceRoller(attempts, diceType) {
    for (let i = 0; i < attempts; i++) {
        // Añadido el +1 para que vaya de 1 a 8 en lugar de 0 a 7
        yield Math.floor(Math.random() * diceType) + 1; 
    }
}

// Si quieres 4 tiradas, el primer parámetro debe ser 4
let tiradas = diceRoller(3, 8);
let result = [];

result[0] = tiradas.next().value;
result[1] = tiradas.next().value;
result[2] = tiradas.next().value;

console.log(result);

