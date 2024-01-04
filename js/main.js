//*funksiya ile ededin tersini tapmaq

// function reverse_a_number(n)
// {
//   n=n+ "";

//   return n.split("").reverse().join("");
// }
// console.log(Number(reverse_a_number(1234)));


// reverse_a_number adında bir fonksiyon tanımlanıyor. Bu fonksiyon bir sayı alır (n).

// Sayı n, metin bir ifadeye dönüştürülüyor. "n+"";" işlemi sayıyı string bir ifadeye dönüştürmek için kullanılıyor. Bu, sayıyı bir metin olarak ele almak için yapılmış bir dönüşüm.

// Ardından, bu metin ifade split("") yöntemi kullanılarak parçalara ayrılıyor. Bu, her rakamı ayrı bir karakter olarak ayırır. Örneğin, 1234 rakamları ["1", "2", "3", "4"] şeklinde ayrılır.

// reverse() metodu kullanılarak, bu karakter dizisi tersine çevrilir. Yani, ["4", "3", "2", "1"] şeklinde olur.

// Son olarak, join("") metodu kullanılarak, bu karakter dizisi birleştirilir ve tekrar bir metin ifadesine dönüştürülür. Bu, rakamların tersine çevrilmiş hali olan "4321" string ifadesini verir.

// Son olarak, Number() fonksiyonu ile bu metin ifadesi tekrar sayıya dönüştürülür ve console.log ile ekrana yazdırılır.

// Bu kod, sayıyı tersine çevirme işlemini string manipülasyonu kullanarak gerçekleştirir. Sayıyı tersine çevirmek için string metotları (split, reverse, join) kullanır ve ardından tekrar sayıya dönüştürür. Bu şekilde, sayının rakamları tersine çevrilir.



function truncate(str, no_words) {
  return str.split(" ").slice(0, no_words).join(" ");
}

console.log(truncate('Bu kod, sayıyı tersine çevirme işlemini string manipülasyonu kullanarak gerçekleştirir.', 7));



