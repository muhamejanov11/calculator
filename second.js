function calculate(a, b, operator) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Ошибка: оба аргумента должны быть числами';
    }

    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case ':':
            if (b === 0) {
                return 'Ошибка: деление на ноль';
            }
            return a / b;
        default:
            return 'Ошибка: неизвестный оператор';
    }
}

export default calculate