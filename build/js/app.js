(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
function Calculator(skinName)
// Constructor
{
  this.skin = skinName;
}

// Method Code
Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
};

exports.calculatorModule = Calculator;

},{}],3:[function(require,module,exports){
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

var CalculatorPingPong = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new CalculatorPingPong("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

$(document).ready(function(){
  $('#time').text(moment());
});

},{"./../js/calculator.js":1,"./../js/pingpong.js":2}]},{},[3]);
