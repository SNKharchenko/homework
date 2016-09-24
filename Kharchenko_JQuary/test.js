// тест

function allQuestions() {
   var mark = 0;
   if($("#linkteg1").is(':checked')) {
	mark = mark +1;
}
   if($("#numberedlist3").is(':checked')) {
	mark = mark +1;
}
   if($("#passteg4").is(':checked')) {
	mark = mark +1;
}
   if($("#tableteg2").is(':checked') && $("#tableteg4").is(':checked') && !$("#tableteg1").is(':checked') && !$("#tableteg3").is(':checked')) {
	mark = mark +1;
}

  if($("#formteg1").is(':checked') && $("#formteg2").is(':checked') && !$("#formteg3").is(':checked') && !$("#formteg4").is(':checked')) {
	mark = mark +1;
}
 alert(mark + " баллов из 5, " + "Ваш результат " + mark * 20 + "% верных ответов");
 
 //сброс результата
 
 $('input:checked').prop('checked', false);
 
}
$("#testBotton").bind('click', function() {allQuestions();});


