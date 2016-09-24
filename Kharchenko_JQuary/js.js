//калькулятор

var firstNumber;
var operation;
var res = $("#result");
//оживим 10 кнопок
function addNumeral(numeral) {
	res.val(res.val() + numeral);
}
var numSeven = $("#seven");
	 numSeven.click(function () {
		 addNumeral(7);
});
var numEight = $("#eight");
	 numEight.click(function () {
		 addNumeral(8);
});
var numNine = $("#nine");
	 numNine.click(function () {
		 addNumeral(9);
});
var numFour = $("#four");
	 numFour.click(function () {
		 addNumeral(4);
});
var numFive = $("#five");
	 numFive.click(function () {
		 addNumeral(5);
});
var numSix = $("#six");
	 numSix.click(function () {
		 addNumeral(6);
});
var numOne = $("#one");
	 numOne.click(function () {
		 addNumeral(1);
});
var numTwo = $("#two");
	 numTwo.click(function () {
		 addNumeral(2);
});
var numThree = $("#three");
	 numThree.click(function () {
		 addNumeral(3);
});
var numZero = $("#zero");
	 numZero.click(function () {
		 addNumeral(0);
});
	 
//+-*/
var act = $("#division");
	act.click(function () {
	firstNumber = res.val();
	operation = "/";
	res.val("");
});
var act = $("#multiply");
	act.click(function () {
	firstNumber = res.val();
	operation = "*";
	res.val("");
});
var act = $("#minus");
	act.click(function () {
	firstNumber = res.val();
	operation = "-";
	res.val("");
});
var act = $("#plus");
	act.click(function () {
	firstNumber = res.val();
	operation = "+";
	res.val("");
});

//= деление на ноль
var butEqual = $("#equal");
 butEqual.click(function () {
	switch (operation) {
		case "+":
	      res.val(+firstNumber +  +res.val());
		  break;
		case "-":
		  res.val(+firstNumber -  +res.val());
		  break;
		case "*":
		  res.val(+firstNumber *  +res.val());
		  break;
		case "/":
		    switch (true) {
			  case res.val()!= 0:
			    res.val(+firstNumber /  +res.val());
			    break;
			  case res.val() == 0:
			    alert("Деление на ноль невозможнo");
			    break;
		  }
		break;
	}
});
//точка
 var numPoint = $("#point");
    numPoint.click(function () {
   if (res.val().indexOf(".") === -1) {
   res.val() += ".";
   }
  });
 //сброс
 var numReset = $("#reset");
     numReset.click(function () {
	 res.val("");
 });
  
 //+/-
 var numPlusMinus = $("#plusMinus");
   numPlusMinus.click(function () {
   res.val() = res.val() * -1;
 });

