var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var operations = ["+", "-", "×", "÷", "^"];


function solve () {
  var equation = document.getElementById('resultParagraph').innerHTML;
  equation = formatBrackets(equation);

  console.log(equation);
  console.log(eval(equation));
}

function factorial(num) {
  var total = 1;
  if(num < 0){
    for(var i = num; i < 0; i ++){
      total *= i;
    }
    if(total > 0){
      total *= -1;
    }
  }else{
    for(var i = num; i > 0; i --){
      total *= i;
    }
  }

  return total;
}

function formatBrackets (input) {
  var equation = input;
  var openBracketCount = 0;
  var closedBracketCount = 0;
  for(var i = 0; i < equation.length; i ++){
    if(equation[i] == "("){
      openBracketCount ++;

      // Multiply before bracket open
      if(operations.indexOf(equation[i-1]) == -1){
        equation = equation.splice(i, 0, '*');
        i++;
      }
    }
    if(equation[i] == ")"){
      closedBracketCount ++;
    }
  }
  var dc = openBracketCount - closedBracketCount;
  for (var i = 0; i < dc; i++) {
    equation+= ")";
  }
  return equation;
}
