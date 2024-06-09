// Type control
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  //   if (typeof n1 !== 'number' || typeof n2 !== 'number') {
  //     throw new Error('Incorrect input!');
  //   }

  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}
const number1 = 5; // 5.0
const number2 = 2.8;
const printNumber = true;
const resultPhrase = 'Result is: ';

add(number1, number2, printNumber, resultPhrase);
// type system only helps you during development
// js uses "dynamic types" (resolved at runtime)
// ts uses "static types" (set during development)
