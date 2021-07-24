//istruzione "if"
let year = prompt('Quando è stata fatta la regola?','');
if (year == 2016) {
  alert( "risultato corretto" );
  alert( "esatto" );
}


// istruzione "else"
let value = prompt('Cognome di Carl?' '');
if (value == 'Jones') {
  alert('esatto!');
} else {
  alert("il cognome è Jones!");
}


//condizioni multiple "else if"
let year = prompt( 'quando è stata fatta la regola?');
if (year < 2016) {
  alert( 'Non ancora');
} else if (year > 2016) {
  alert( 'non proprio' );
} else {
  alert( 'giusto' );
}
