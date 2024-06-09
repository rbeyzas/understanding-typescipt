- JavaScript dinamik olarak yazılır, bu da başlangıçta bir sayı tutabilecek bir değişkenimizin olması ve daha sonra ona bir dize atamamızın gayet iyi olduğu anlamına gelir. İşte bu nedenle, belirli bir türe bağlı olan bir kodumuz varsa, çalışma zamanında bir şeyin mevcut türünü kontrol edebilmemiz için type off operatörüne ihtiyacımız vardır. Öte yandan TypeScript statik olarak yazılır, yani değişkenlerin ve parametrelerin türlerini geliştirme sırasında tanımlarız, çalışma zamanı sırasında aniden değişmezler. Elbette TypeScript JavaScript'e derlendiği için teorik olarak bunu yapabilirler. Ancak TypeScript kullanırsak ve bir değişkene aniden yeni bir veri türü atadığımız bir kod yazarsak, örneğin daha önce bunun bir sayı olması gerektiğini söylemiştik ve şimdi bir dize atıyoruz, o zaman geliştirme sırasında bir hata alırız, böylece türler konusunda net olmak zorunda kalırız.
- TypeScript ile runtime'da değil, yalnızca development sırasında destek alabiliriz, çünkü bu TypeScript özellikleri ve kontrolleri JavaScript engine'de yerleşik değildir, bu nedenle mantık tarayıcıda yürütülemez, yalnızca kodunuzu derlediğinizde geliştirme sırasında yürütülebilir.
- Typescriptte primitive type'ların hepsi lowercase'dir. It is `string` and `number` (etc.), NOT `String` `Number` etc.
- Ts'de tüm sayılar default olarak float'tır. 5 = 5.0
- Type Inference: https://www.typescriptlang.org/docs/handbook/type-inference.html
- Nested Objects & Types
  Let's say you have this JavaScript object:

```
const product = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}
```

This would be the type of such an object:

```
{
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  }
}
```

So you have an object type in an object type so to say.
