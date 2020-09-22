/*
 * Задача 3: «Развернуть слова в предложении»
 *
 * Напишите функцию reverseWords(str), принимающую на вход строку.
 * Функция должна вернуть новую строку, расставив слова в обратном
 * порядке.Если в строке есть знаки препинания, их можно удалить
 * или оставить — на ваше усмотрение.
 *
*/

// ПРОСТОЕ РЕШЕНИЕ:
function reverseWords(str) {
  // Напишите код здесь
  return str.split(' ').reverse().join(' ');
}
// И вот ЭТО ^ дает зеленые результаты теста! Ну не знаю... Второе решение прикольнее, хоть все строчки красные)))
// Красные, потому что я первое слово каждого предожения в нем делаю с заглавной. Не вижу смысла подгонять под тест,
// тем более что решение выше - необходимый минимум - представлено.


// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(reverseWords('всегда много путей достичь цель есть')); // "есть цель достичь путей много всегда"
console.log(reverseWords('испробовать их все должны вы')); // "вы должны все их испробовать"

// СЛОЖНОЕ РЕШЕНИЕ
// (Обращает порядок слов в пределах частей предложения, ограниченных запятыми, воспроизводя пунктуацию и соотв. образом
// меняя регистр букв):
function reverseWords(str) {
  if (typeof str === "string" && str.length !== 0) {
    //     console.log('str');
    //     console.log(str);
    // Получить массив строк-предложений, разделив строку по пробелам, перед которыми стоят знаки препинания конца
    // предложения:
    const sentArr = str.split(/(?<=[!?.…]) /);
    //     console.log('sentArr');
    //     console.log(sentArr);
    // Каждый элемент массива строк-предложений разбить на фразы:
    const sentPhraseArr = sentArr.map(function (sentence) {
      return sentence.split(/(?<=,) /);
    });
    //     console.log("sentPhraseArr");
    //     console.log(sentPhraseArr);
    const reversedArr = sentPhraseArr.map(function (sentence, index, array) {
      return sentence.map(function (phrase, index, array) {
        // Поменять первые буквы предложений на строчные:
        let phraseR = phrase[0].toLowerCase() + phrase.substr(1);
        // Обратить порядок слов во фразах:
        phraseR = phraseR
          .split(" ")
          .reverse()
          .join(" ");
        //       console.log(phraseR);

        // Получить индекс запятой:
        let commaPos = phraseR.indexOf(",");
        //       console.log(commaPos);

        // Перенести запятую в конец фразы:
        phraseR =
          phraseR.substr(0, commaPos) +
          phraseR.substr(commaPos + 1) +
          phraseR.charAt(commaPos);
        return phraseR;
      });
    });
    //     console.log("reversedArr");
    //     console.log(reversedArr); // Массив с массивами-предложениями, разбитыми на фразы
    const reversedArrGlued = reversedArr.map(function (phrase, index, array) {
      // Склеить массив-предложение в строку:
      let sentence = phrase.join(" ");
      sentence = sentence[0].toUpperCase() + sentence.substr(1);
      //       console.log(sentence);
      //       console.log(sentence);
      // Получить индекс знаков препинания конца предложения:
      let punctPos = Math.max(
        sentence.indexOf("."),
        sentence.indexOf("!"),
        sentence.indexOf("?"),
        sentence.indexOf("..."),
        sentence.indexOf("…")
      );
      //       console.log(punctPos);

      // Перенести знаки препинания конца предложения в конец предложения:
      sentence =
        sentence.substr(0, punctPos) +
        sentence.substr(punctPos + 1) +
        sentence.charAt(punctPos);
      //     console.log(sentence);
      return sentence; // Возвращает для каждого элемента массива предложений по строке-предложению
    });
    return reversedArrGlued.join(" "); // Готовый текст
  } else {
    return "ВВЕДИТЕ текст (рекомендуется заменить обычные пробелы на неразрывные после предлогов и внутри неделимых фраз).";
  }
}

console.log(reverseWords());
console.log(
  reverseWords(
    "Напишите функцию reverseWords(str), принимающую на вход строку. Функция должна вернуть новую строку, расставив слова в обратном порядке. Есть ли в строке знаки препинания? Их можно удалить или оставить — на ваше усмотрение."
  )
);
console.log(reverseWords("всегда много путей достичь цель есть")); // "есть цель достичь путей много всегда"
console.log(reverseWords("испробовать их все должны вы, только смотрите не упоритесь")); // "вы должны все их испробовать"

// Союз "и" некорректно встает в конец предложения. Предотвращать в условиях данной уч. задачи нецелесообразно.
console.log(
  reverseWords(
    "я двигаюсь к цели упорно и настойчиво, и ждет меня награда"
  )
);
// console.log('\n\n==============================================\n\n');

// Поставил нбсп после зпт - все сломалось, т. к. не произошло разделения на фразы. Предотвращать нецелесообразно.
// console.log(
//   reverseWords(
//     "я двигаюсь к цели упорно и настойчиво, и ждет меня награда"
//   )
// );


 /*  
 *   Принято, отличное решение!
 */