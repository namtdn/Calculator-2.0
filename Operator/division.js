class Division {
    operate(firstNum, secondNum) {
        if (secondNum == 0) {
            throw 'Division by zero'
        } else 
        return firstNum / secondNum
    }
}
module.exports = Division;

