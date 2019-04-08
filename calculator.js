
const Operator = require('./Operator/operation');


class Calculator {
    constructor() {
        this.operators = {
            '+' : new Operator.Add,
            '/' : new Operator.Div,
            '^' : new Operator.Pow,
        };
    }
    do(operator, firstNum, secondNum) {
        if (!this.operators.hasOwnProperty(operator)) {
            throw "Comming soon!"
        } else
        return this.operators[operator].operate(firstNum, secondNum)
    }
}

module.exports = Calculator;