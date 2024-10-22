function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                result = 'Ошибка: деление на ноль';
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = 'Неизвестная операция';
    }

    document.getElementById('result').innerText = result;
}
