function Calculator()
// Constructor
{
}


Calculator.prototype.Add = function(number1, number2) {
  return number1 + number2;
};

Calculator.prototype.Sub = function(number1, number2) {
  return number1 - number2;
};

Calculator.prototype.Mul = function(number1, number2) {
  return number1 * number2;
};

Calculator.prototype.Div = function(number1, number2) {
  return number1 / number2;
};


exports.calculatorModule = Calculator;
