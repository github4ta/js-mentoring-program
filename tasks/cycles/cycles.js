/** TODO
 * implement factorial algorithm using for, while, do..while operators
 * assign result to corresponding variable
 * for - forFactorial
 * while - whileFactorial
 * do..while - doFactorial
 */
let forFactorial, whileFactorial, doFactorial;
const n = 10; //10! = 3628800

forFactorial = 1;
for (let i = 1; i <= 10; i++) {
  forFactorial = forFactorial * i;
}

whileFactorial = 1;
var i =1;
while (i <= 10) {
  whileFactorial = whileFactorial * i;
  i++;
}

doFactorial = 1;
i = 1;
do {
  doFactorial = doFactorial * i;
  i++;
}
while (i <= 10);


/** TODO
 * return concatenated string from an array of substring
 * assign result to variable str
 */
let str = "";
const substr = ["I", " love", " JS"];

for (let i = 0; i < substr.length; i++) {
  str += substr[i];
}

/** TODO
 * calculate a total of income of certain person
 * assign result to variable totalIncome
 */
let totalIncome = 0;
const personIncomes = {
  salary: 1985,
  rent: -600,
  interestOnDeposit: 250,
  otherExpences: -300
};

for (var key in personIncomes) {
  totalIncome += personIncomes[key];
}

module.exports = {
  forFactorial,
  whileFactorial,
  doFactorial,
  str,
  totalIncome
};
