function printTriangle (max){
var max;
var space = "", grid = "";

  var i = 0;
while (i < max) {
	space = "";
	grid = "";
	for (var j = 0; j < max - i; j++) space += " ";
	for (var k = 0; k < i + 1 ; k++) grid += "#"+" ";
	console.log(space + grid);
	i++;
}
}

printTriangle(5);