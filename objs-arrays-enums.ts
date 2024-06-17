function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: 'as-number' | 'as-text',
) {
  let result;
  // if else kullanma sebebimiz, biz aslında input1 ve input2'nin number olup olmadığını kontrol etmek istiyoruz. Ama bizim resultConversion'u kontrol etmemiz gerekiyor. Eğer resultConversion as-number ise input1 ve input2'nin number olup olmadığını kontrol etmemize gerek yok. Çünkü zaten number olacaklar. Ama resultConversion as-text ise input1 ve input2'nin string olup olmadığını kontrol etmemiz gerekiyor. Bu yüzden if else kullandık.
  // belki de + operatörünü kullanamadığımız bir tip belirlemişsek ts bize kızmaması için if else kullandık.
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}
