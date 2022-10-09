// && = och
// || = eller

// för att undvika vissa error (som står som krav) kan du använda
// metoden isNaN(), du behöver själv testa samt söka efter information om
// du inte känner igen den.
const variableName = 10;
isNaN(variableName);

// varför måste vi använda parseFloat?
function atm() {
  const message = parseFloat(prompt("Display the menu here"));
  // funktion som har huvudansvar för att visa UI baserat på user input
  // ska inte hantera någon logik alls
  // du välkjer själv om du vill hantera user input med en switch
  // eller med if/else statement
}
