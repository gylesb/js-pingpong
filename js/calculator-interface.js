var Calculator = require('./../js/calculator.js').calculatorModule;

$(document).ready(function() {
  $('#calculator-form').submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($('#number1').val());
    var number2 = parseInt($('#number2').val());
    var myCalculator = new Calculator();
    var add = myCalculator.Add(number1, number2);
    var sub = myCalculator.Sub(number1, number2);
    var mul = myCalculator.Mul(number1, number2);
    var div = myCalculator.Div(number1, number2);
    var operator = $("input:radio[name= operator]:checked").val();


    if(operator === "add")
    {
      $('#result').text(add);
    }
    else if(operator === "sub")
    {
      $('#result').text(sub);
    }
    else if(operator === "mul")
    {
      $('#result').text(mul);
    }
    else if(operator === "div")
    {
      $('#result').text(div);
    }
    else
      {
        $('#result').text("Please check one of the actions");

      }


  });
});
