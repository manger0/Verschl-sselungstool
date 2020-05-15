
function shift() {

    if (document.getElementById("encrypt").value !== "" && document.getElementById("crypt").value !== "") {
        alert("Fehler Textfelder");

    } else {

       var level = document.getElementById("level").value; 
       if (document.getElementById("encrypt").value !== "" && document.getElementById("crypt").value == "") {

           var textIn = document.getElementById("encrypt").value; 
           textOut =  change(textIn, level); 
           document.getElementById("crypt").value = textOut;
        

       } else if (document.getElementById("encrypt").value == "" && document.getElementById("crypt").value !== "") {

           var textIn = document.getElementById("crypt").value;
           level *= (-1);
           textOut =  change(textIn, level);
           document.getElementById("encrypt").value = textOut;
       }
    }    
}

function change(str, n) {
	var shifted = '';
	n = n%26;
	for (var i = 0; i < str.length; i++) {
		let code = str[i].charCodeAt();
    let capital = (code > 64 && code < 91) ? true : false;
    if (code < (capital?65:97) || code > (capital?90:122) || n == 0) {
      shifted += str[i];
      continue;
    }
    if (n > 0) {
      if (code > (capital?90:122)-n) {
  			code = n + code - 26;
  		} else {
  			code += n;
  		}
    } else {
      if (code < (capital?65:97)-n) {
  			code = code + n + 26;
  		} else {
  			code += n;
  		}
    }
		shifted += String.fromCharCode(code);
	}
	return shifted;
}