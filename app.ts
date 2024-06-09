const person1 = {
  name: 'John',
  age: 25,
};

console.log(person1.name);
// console.log(person.nickname); // error
// --------------------------------

// const person: {
//   name: string;
//   age: number;
// } = {
const person2 = {
  name: 'Beyza',
  age: 30,
};

console.log(person2.name);
// --------------------------------
// const person3: object = {
//   name: 'Beyza',
//   age: 30,
// };

// console.log(person3.name);

// burda ts'e object dedik ama object'in içindeki propertylere ulaşamıyoruz çünkü başka hiçbir şey bildirmedik. name ögesini bulamaz çünkü object'in içindeki ögelerin tiplerini belirtmedik.
// --------------------------------

// const person4: {} = {
//   name: 'Beyza',
//   age: 30,
// };

// console.log(person4.name);
// köşeli parantez  ts'de özel bir nesne türü gösterimidir. yukardaki kodla aynı durum geçerli. name ögesine ulaşamıyoruz.
