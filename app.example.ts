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

let favoriteActivities: string[];
favoriteActivities = ['Sports'];
// içerde string olacak dedik. number yazarsak hata verir.

let favoriteActivities2: any[];
favoriteActivities2 = ['Sports', 1];
// any yazdığımızda her türlü veri tipini atayabiliriz.

for (const hobby of favoriteActivities) {
  console.log(hobby.toUpperCase());
  // hata vermedi çünkü arrayin string olduğunu bildirdik.
  // console.log(hobby.map()); // !!! error !!!
  // hata verir çünkü map() methodu string'de yoktur.
}

const person5: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // tuple
} = {
  name: 'Beyza',
  age: 26,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'],
};

// tuple ile arrayin içindeki veri tipini belirleyebiliriz. role'de number ve string olacak dedik.
// tuple içerisindeki veri tipi sayısı ve sırası sabit olmalıdır.
// person.role[1] = 10; //error
// person.role.push('admin'); push tuple'larda istisna olarak çalışır. ama bu durumda tuple'nin yapısını bozar.
// person5.role = [0, 'admin', 'user'];  // error
person5.role.push('admin');

console.log(person5);

enum Role {
  ADMIN = 'ADMIN',
  READ_ONLY = 11,
  AUTHOR = 12,
}
//enum ile sabit değerler tanımlayabiliriz. bu sayede hata yapma olasılığımız azalır.
// enum içindeki değerlerin hepsi number olmak zorunda değil. string de olabilir.
// enum içindeki değerlerin hepsi büyük harfve farklı olmalıdır.

const person6: {
  name: string;
  age: number;
  hobbies: string[];
  role: [Role, string];
} = {
  name: 'Beyza',
  age: 26,
  hobbies: ['Sports', 'Cooking'],
  role: [Role.ADMIN, 'author'],
};
