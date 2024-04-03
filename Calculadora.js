function calcular(valor1, valor2, operador) {
    switch (operador) {
        case '+':
            return valor1 + valor2;
        case '-':
            return valor1 - valor2;
        case '*':
            return valor1 * valor2;
        case '/':
            if (valor2 !== 0) {
                return valor1 / valor2;
            } else {
                return "Divisão por zero não é permitida.";
            }
        default:
            return "Operador inválido.";
    }
}

// Exemplos de uso:
console.log(calcular(1, 1, '+')); // Saída: 2
console.log(calcular(1, 1, '-')); // Saída: 0
console.log(calcular(1, 1, '*')); // Saída: 1
console.log(calcular(1, 1, '/')); // Saída: 1