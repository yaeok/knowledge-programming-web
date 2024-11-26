import { EnumString } from '@/data/String/StringType'
import { QuestionCategory } from '@/domain/entity/question'

export const stringQuestions: QuestionCategory[] = [
  {
    id: 'string_type_1',
    title: EnumString.INDEXOF,
    category: 'string_operations',
    questions: [
      {
        question:
          '文字列 "hello world" から最初に "o" が現れるインデックスを取得してください。',
        code: `
~~~ts
let text: string = "hello world";
~~~
`,
        answer: `
~~~ts
let text: string = "hello world";
let index = text.indexOf("o");
console.log(index); // 4
~~~
`,
      },
      {
        question:
          '文字列 "typescript is fun" から "is" のインデックスを取得してください。',
        code: `
~~~ts
let sentence: string = "typescript is fun";
~~~
`,
        answer: `
~~~ts
let sentence: string = "typescript is fun";
let index = sentence.indexOf("is");
console.log(index); // 10
~~~
`,
      },
      {
        question:
          '文字列 "javascript" で "a" が最初に現れるインデックスを取得してください。',
        code: `
~~~ts
let word: string = "javascript";
~~~
`,
        answer: `
~~~ts
let word: string = "javascript";
let index = word.indexOf("a");
console.log(index); // 1
~~~
`,
      },
      {
        question:
          '文字列 "I love coding" で "love" が含まれている場合、そのインデックスを表示してください。',
        code: `
~~~ts
let phrase: string = "I love coding";
~~~
`,
        answer: `
~~~ts
let phrase: string = "I love coding";
let index = phrase.indexOf("love");
console.log(index); // 2
~~~
`,
      },
      {
        question:
          '文字列 "banana" から最初の "na" のインデックスを取得してください。',
        code: `
~~~ts
let fruit: string = "banana";
~~~
`,
        answer: `
~~~ts
let fruit: string = "banana";
let index = fruit.indexOf("na");
console.log(index); // 2
~~~
`,
      },
    ],
  },
  {
    id: 'string_type_2',
    title: EnumString.LASTINDEXOF,
    category: 'string_operations',
    questions: [
      {
        question:
          '文字列 "banana" の最後に "na" が現れるインデックスを取得してください。',
        code: `
~~~ts
let word: string = "banana";
~~~
`,
        answer: `
~~~ts
let word: string = "banana";
let lastIndex = word.lastIndexOf("na");
console.log(lastIndex); // 4
~~~
`,
      },
      {
        question:
          '文字列 "hello hello" の最後の "l" のインデックスを取得してください。',
        code: `
~~~ts
let text: string = "hello hello";
~~~
`,
        answer: `
~~~ts
let text: string = "hello hello";
let lastIndex = text.lastIndexOf("l");
console.log(lastIndex); // 9
~~~
`,
      },
      {
        question:
          '文字列 "mississippi" の最後の "s" のインデックスを取得してください。',
        code: `
~~~ts
let river: string = "mississippi";
~~~
`,
        answer: `
~~~ts
let river: string = "mississippi";
let lastIndex = river.lastIndexOf("s");
console.log(lastIndex); // 6
~~~
`,
      },
      {
        question:
          '文字列 "typescript types" の最後に "type" が現れるインデックスを取得してください。',
        code: `
~~~ts
let text: string = "typescript types";
~~~
`,
        answer: `
~~~ts
let text: string = "typescript types";
let lastIndex = text.lastIndexOf("type");
console.log(lastIndex); // 11
~~~
`,
      },
      {
        question:
          '文字列 "123123123" の最後の "2" のインデックスを取得してください。',
        code: `
~~~ts
let numbers: string = "123123123";
~~~
`,
        answer: `
~~~ts
let numbers: string = "123123123";
let lastIndex = numbers.lastIndexOf("2");
console.log(lastIndex); // 7
~~~
`,
      },
    ],
  },
  {
    id: 'string_type_3',
    title: EnumString.INCLUDES,
    category: 'string_operations',
    questions: [
      {
        question:
          '文字列 "hello world" に "world" が含まれているかどうか確認してください。',
        code: `
~~~ts
let text: string = "hello world";
~~~
`,
        answer: `
~~~ts
let text: string = "hello world";
let includesWorld = text.includes("world");
console.log(includesWorld); // true
~~~
`,
      },
      {
        question:
          '文字列 "typescript is fun" に "javascript" が含まれているか確認してください。',
        code: `
~~~ts
let sentence: string = "typescript is fun";
~~~
`,
        answer: `
~~~ts
let sentence: string = "typescript is fun";
let includesJs = sentence.includes("javascript");
console.log(includesJs); // false
~~~
`,
      },
      {
        question:
          '文字列 "apple pie" に "apple" が含まれているか確認してください。',
        code: `
~~~ts
let dessert: string = "apple pie";
~~~
`,
        answer: `
~~~ts
let dessert: string = "apple pie";
let includesApple = dessert.includes("apple");
console.log(includesApple); // true
~~~
`,
      },
      {
        question:
          '文字列 "openai gpt" に "gpt" が含まれているか確認してください。',
        code: `
~~~ts
let ai: string = "openai gpt";
~~~
`,
        answer: `
~~~ts
let ai: string = "openai gpt";
let includesGpt = ai.includes("gpt");
console.log(includesGpt); // true
~~~
`,
      },
      {
        question:
          '文字列 "coding is great" に "bad" が含まれているか確認してください。',
        code: `
~~~ts
let phrase: string = "coding is great";
~~~
`,
        answer: `
~~~ts
let phrase: string = "coding is great";
let includesBad = phrase.includes("bad");
console.log(includesBad); // false
~~~
`,
      },
    ],
  },
  {
    id: 'string_type_4',
    title: EnumString.STARTSWITH,
    category: 'string_operations',
    questions: [
      {
        question:
          '文字列 "javascript" が "java" で始まっているか確認してください。',
        code: `
~~~ts
let word: string = "javascript";
~~~
`,
        answer: `
~~~ts
let word: string = "javascript";
let startsWithJava = word.startsWith("java");
console.log(startsWithJava); // true
~~~
`,
      },
      {
        question:
          '文字列 "hello world" が "world" で始まっているか確認してください。',
        code: `
~~~ts
let text: string = "hello world";
~~~
`,
        answer: `
~~~ts
let text: string = "hello world";
let startsWithWorld = text.startsWith("world");
console.log(startsWithWorld); // false
~~~
`,
      },
      {
        question:
          '文字列 "typescript is awesome" が "typescript" で始まっているか確認してください。',
        code: `
~~~ts
let statement: string = "typescript is awesome";
~~~
`,
        answer: `
~~~ts
let statement: string = "typescript is awesome";
let startsWithTs = statement.startsWith("typescript");
console.log(startsWithTs); // true
~~~
`,
      },
      {
        question:
          '文字列 "good morning" が "good" で始まっているか確認してください。',
        code: `
~~~ts
let greeting: string = "good morning";
~~~
`,
        answer: `
~~~ts
let greeting: string = "good morning";
let startsWithGood = greeting.startsWith("good");
console.log(startsWithGood); // true
~~~
`,
      },
      {
        question:
          '文字列 "apple pie" が "pie" で始まっているか確認してください。',
        code: `
~~~ts
let dessert: string = "apple pie";
~~~
`,
        answer: `
~~~ts
let dessert: string = "apple pie";
let startsWithPie = dessert.startsWith("pie");
console.log(startsWithPie); // false
~~~
`,
      },
    ],
  },
  {
    id: 'string_type_5',
    title: EnumString.ENDSWITH,
    category: 'string_operations',
    questions: [
      {
        question: '文字列 "banana" が "na" で終わっているか確認してください。',
        code: `
~~~ts
let fruit: string = "banana";
~~~
`,
        answer: `
~~~ts
let fruit: string = "banana";
let endsWithNa = fruit.endsWith("na");
console.log(endsWithNa); // true
~~~
`,
      },
      {
        question:
          '文字列 "hello world" が "hello" で終わっているか確認してください。',
        code: `
~~~ts
let text: string = "hello world";
~~~
`,
        answer: `
~~~ts
let text: string = "hello world";
let endsWithHello = text.endsWith("hello");
console.log(endsWithHello); // false
~~~
`,
      },
      {
        question:
          '文字列 "typescript language" が "language" で終わっているか確認してください。',
        code: `
~~~ts
let statement: string = "typescript language";
~~~
`,
        answer: `
~~~ts
let statement: string = "typescript language";
let endsWithLanguage = statement.endsWith("language");
console.log(endsWithLanguage); // true
~~~
`,
      },
      {
        question:
          '文字列 "openai is powerful" が "powerful" で終わっているか確認してください。',
        code: `
~~~ts
let phrase: string = "openai is powerful";
~~~
`,
        answer: `
~~~ts
let phrase: string = "openai is powerful";
let endsWithPowerful = phrase.endsWith("powerful");
console.log(endsWithPowerful); // true
~~~
`,
      },
      {
        question:
          '文字列 "goodbye" が "bye" で終わっているか確認してください。',
        code: `
~~~ts
let farewell: string = "goodbye";
~~~
`,
        answer: `
~~~ts
let farewell: string = "goodbye";
let endsWithBye = farewell.endsWith("bye");
console.log(endsWithBye); // true
~~~
`,
      },
    ],
  },
  {
    id: 'string_type_6',
    title: EnumString.SEARCH,
    category: 'string_operations',
    questions: [
      {
        question: '文字列 "hello world" で "world" の位置を検索してください。',
        code: `
~~~ts
let text: string = "hello world";
~~~
`,
        answer: `
~~~ts
let text: string = "hello world";
let position = text.search("world");
console.log(position); // 6
~~~
`,
      },
      {
        question:
          '文字列 "javascript typescript" で "type" の位置を検索してください。',
        code: `
~~~ts
let languages: string = "javascript typescript";
~~~
`,
        answer: `
~~~ts
let languages: string = "javascript typescript";
let position = languages.search("type");
console.log(position); // 11
~~~
`,
      },
      {
        question:
          '文字列 "apple pie is delicious" で "pie" の位置を検索してください。',
        code: `
~~~ts
let sentence: string = "apple pie is delicious";
~~~
`,
        answer: `
~~~ts
let sentence: string = "apple pie is delicious";
let position = sentence.search("pie");
console.log(position); // 6
~~~
`,
      },
      {
        question:
          '文字列 "regular expressions are powerful" で "expressions" の位置を検索してください。',
        code: `
~~~ts
let text: string = "regular expressions are powerful";
~~~
`,
        answer: `
~~~ts
let text: string = "regular expressions are powerful";
let position = text.search("expressions");
console.log(position); // 8
~~~
`,
      },
      {
        question:
          '文字列 "find and replace" で "replace" の位置を検索してください。',
        code: `
~~~ts
let text: string = "find and replace";
~~~
`,
        answer: `
~~~ts
let text: string = "find and replace";
let position = text.search("replace");
console.log(position); // 9
~~~
`,
      },
    ],
  },
  {
    id: 'string_type_7',
    title: EnumString.SLICE,
    category: 'string_operations',
    questions: [
      {
        question: '文字列 "hello world" の "hello" 部分を抽出してください。',
        code: `
~~~ts
let text: string = "hello world";
~~~
`,
        answer: `
~~~ts
let text: string = "hello world";
let result = text.slice(0, 5);
console.log(result); // "hello"
~~~
`,
      },
      {
        question: '文字列 "javascript" の最後の4文字を抽出してください。',
        code: `
~~~ts
let word: string = "javascript";
~~~
`,
        answer: `
~~~ts
let word: string = "javascript";
let result = word.slice(-4);
console.log(result); // "ript"
~~~
`,
      },
      {
        question: '文字列 "abcdefg" の "cde" 部分を抽出してください。',
        code: `
~~~ts
let letters: string = "abcdefg";
~~~
`,
        answer: `
~~~ts
let letters: string = "abcdefg";
let result = letters.slice(2, 5);
console.log(result); // "cde"
~~~
`,
      },
      {
        question: '文字列 "typescript" の "script" 部分を抽出してください。',
        code: `
~~~ts
let language: string = "typescript";
~~~
`,
        answer: `
~~~ts
let language: string = "typescript";
let result = language.slice(4);
console.log(result); // "script"
~~~
`,
      },
      {
        question:
          '文字列 "123456789" のインデックス 3 から 6 までの部分を抽出してください。',
        code: `
~~~ts
let numbers: string = "123456789";
~~~
`,
        answer: `
~~~ts
let numbers: string = "123456789";
let result = numbers.slice(3, 6);
console.log(result); // "456"
~~~
`,
      },
    ],
  },
  {
    id: 'string_type_8',
    title: EnumString.SUBSTRING,
    category: 'string_operations',
    questions: [
      {
        question: '文字列 "hello world" の "world" 部分を抽出してください。',
        code: `
~~~ts
let text: string = "hello world";
~~~
`,
        answer: `
~~~ts
let text: string = "hello world";
let result = text.substring(6);
console.log(result); // "world"
~~~
`,
      },
      {
        question: '文字列 "javascript" の "java" 部分を抽出してください。',
        code: `
~~~ts
let word: string = "javascript";
~~~
`,
        answer: `
~~~ts
let word: string = "javascript";
let result = word.substring(0, 4);
console.log(result); // "java"
~~~
`,
      },
      {
        question: '文字列 "abcdefg" の "ef" 部分を抽出してください。',
        code: `
~~~ts
let letters: string = "abcdefg";
~~~
`,
        answer: `
~~~ts
let letters: string = "abcdefg";
let result = letters.substring(4, 6);
console.log(result); // "ef"
~~~
`,
      },
      {
        question: '文字列 "typescript" の "type" 部分を抽出してください。',
        code: `
~~~ts
let language: string = "typescript";
~~~
`,
        answer: `
~~~ts
let language: string = "typescript";
let result = language.substring(0, 4);
console.log(result); // "type"
~~~
`,
      },
      {
        question:
          '文字列 "123456789" のインデックス 2 から 5 までの部分を抽出してください。',
        code: `
~~~ts
let numbers: string = "123456789";
~~~
`,
        answer: `
~~~ts
let numbers: string = "123456789";
let result = numbers.substring(2, 5);
console.log(result); // "345"
~~~
`,
      },
    ],
  },
  {
    id: 'string_type_9',
    title: EnumString.SUBSTR,
    category: 'string_operations',
    questions: [
      {
        question: '文字列 "hello world" の "world" 部分を抽出してください。',
        code: `
~~~ts
let text: string = "hello world";
~~~
`,
        answer: `
~~~ts
let text: string = "hello world";
let result = text.substr(6);
console.log(result); // "world"
~~~
`,
      },
      {
        question: '文字列 "javascript" の最初の4文字を抽出してください。',
        code: `
~~~ts
let word: string = "javascript";
~~~
`,
        answer: `
~~~ts
let word: string = "javascript";
let result = word.substr(0, 4);
console.log(result); // "java"
~~~
`,
      },
      {
        question: '文字列 "abcdefg" の "cd" 部分を抽出してください。',
        code: `
~~~ts
let letters: string = "abcdefg";
~~~
`,
        answer: `
~~~ts
let letters: string = "abcdefg";
let result = letters.substr(2, 2);
console.log(result); // "cd"
~~~
`,
      },
      {
        question: '文字列 "typescript" の最後の6文字を抽出してください。',
        code: `
~~~ts
let language: string = "typescript";
~~~
`,
        answer: `
~~~ts
let language: string = "typescript";
let result = language.substr(-6);
console.log(result); // "script"
~~~
`,
      },
      {
        question:
          '文字列 "123456789" のインデックス 4 から 3 文字を抽出してください。',
        code: `
~~~ts
let numbers: string = "123456789";
~~~
`,
        answer: `
~~~ts
let numbers: string = "123456789";
let result = numbers.substr(4, 3);
console.log(result); // "567"
~~~
`,
      },
    ],
  },
  {
    id: 'string_type_10',
    title: EnumString.CHARAT,
    category: 'string_operations',
    questions: [
      {
        question: '文字列 "hello" のインデックス 1 の文字を取得してください。',
        code: `
~~~ts
let word: string = "hello";
~~~
`,
        answer: `
~~~ts
let word: string = "hello";
let char = word.charAt(1);
console.log(char); // "e"
~~~
`,
      },
      {
        question:
          '文字列 "typescript" のインデックス 4 の文字を取得してください。',
        code: `
~~~ts
let language: string = "typescript";
~~~
`,
        answer: `
~~~ts
let language: string = "typescript";
let char = language.charAt(4);
console.log(char); // "s"
~~~
`,
      },
      {
        question:
          '文字列 "abcdefg" のインデックス 2 の文字を取得してください。',
        code: `
~~~ts
let letters: string = "abcdefg";
~~~
`,
        answer: `
~~~ts
let letters: string = "abcdefg";
let char = letters.charAt(2);
console.log(char); // "c"
~~~
`,
      },
      {
        question: '文字列 "12345" のインデックス 3 の文字を取得してください。',
        code: `
~~~ts
let numbers: string = "12345";
~~~
`,
        answer: `
~~~ts
let numbers: string = "12345";
let char = numbers.charAt(3);
console.log(char); // "4"
~~~
`,
      },
      {
        question: '文字列 "openai" のインデックス 0 の文字を取得してください。',
        code: `
~~~ts
let name: string = "openai";
~~~
`,
        answer: `
~~~ts
let name: string = "openai";
let char = name.charAt(0);
console.log(char); // "o"
~~~
`,
      },
    ],
  },
  {
    id: 'string_type_11',
    title: EnumString.CHARCODEAT,
    category: 'string_operations',
    questions: [
      {
        question:
          '文字列 "A" のインデックス 0 の文字コードを取得してください。',
        code: `
~~~ts
let letter: string = "A";
~~~
`,
        answer: `
~~~ts
let letter: string = "A";
let code = letter.charCodeAt(0);
console.log(code); // 65
~~~
`,
      },
      {
        question:
          '文字列 "hello" のインデックス 1 の文字コードを取得してください。',
        code: `
~~~ts
let word: string = "hello";
~~~
`,
        answer: `
~~~ts
let word: string = "hello";
let code = word.charCodeAt(1);
console.log(code); // 101
~~~
`,
      },
      {
        question:
          '文字列 "typescript" のインデックス 4 の文字コードを取得してください。',
        code: `
~~~ts
let language: string = "typescript";
~~~
`,
        answer: `
~~~ts
let language: string = "typescript";
let code = language.charCodeAt(4);
console.log(code); // 115
~~~
`,
      },
      {
        question:
          '文字列 "12345" のインデックス 2 の文字コードを取得してください。',
        code: `
~~~ts
let numbers: string = "12345";
~~~
`,
        answer: `
~~~ts
let numbers: string = "12345";
let code = numbers.charCodeAt(2);
console.log(code); // 51
~~~
`,
      },
      {
        question:
          '文字列 "OpenAI" のインデックス 3 の文字コードを取得してください。',
        code: `
~~~ts
let name: string = "OpenAI";
~~~
`,
        answer: `
~~~ts
let name: string = "OpenAI";
let code = name.charCodeAt(3);
console.log(code); // 101
~~~
`,
      },
    ],
  },
  {
    id: 'string_type_12',
    title: EnumString.TOLOWERCASE,
    category: 'string_operations',
    questions: [
      {
        question: '文字列 "HELLO WORLD" を小文字に変換してください。',
        code: `
~~~ts
let text: string = "HELLO WORLD";
~~~
`,
        answer: `
~~~ts
let text: string = "HELLO WORLD";
let lowerText = text.toLowerCase();
console.log(lowerText); // "hello world"
~~~
`,
      },
      {
        question: '文字列 "JavaScript" を小文字に変換してください。',
        code: `
~~~ts
let language: string = "JavaScript";
~~~
`,
        answer: `
~~~ts
let language: string = "JavaScript";
let lowerLanguage = language.toLowerCase();
console.log(lowerLanguage); // "javascript"
~~~
`,
      },
      {
        question: '文字列 "OpenAI GPT" を小文字に変換してください。',
        code: `
~~~ts
let name: string = "OpenAI GPT";
~~~
`,
        answer: `
~~~ts
let name: string = "OpenAI GPT";
let lowerName = name.toLowerCase();
console.log(lowerName); // "openai gpt"
~~~
`,
      },
      {
        question: '文字列 "TeStInG" を小文字に変換してください。',
        code: `
~~~ts
let text: string = "TeStInG";
~~~
`,
        answer: `
~~~ts
let text: string = "TeStInG";
let lowerText = text.toLowerCase();
console.log(lowerText); // "testing"
~~~
`,
      },
      {
        question: '文字列 "UPPER CASE STRING" を小文字に変換してください。',
        code: `
~~~ts
let text: string = "UPPER CASE STRING";
~~~
`,
        answer: `
~~~ts
let text: string = "UPPER CASE STRING";
let lowerText = text.toLowerCase();
console.log(lowerText); // "upper case string"
~~~
`,
      },
    ],
  },
  {
    id: 'string_type_13',
    title: EnumString.TOUPPERCASE,
    category: 'string_operations',
    questions: [
      {
        question: '文字列 "hello world" を大文字に変換してください。',
        code: `
~~~ts
let text: string = "hello world";
~~~
`,
        answer: `
~~~ts
let text: string = "hello world";
let upperText = text.toUpperCase();
console.log(upperText); // "HELLO WORLD"
~~~
`,
      },
      {
        question: '文字列 "javascript" を大文字に変換してください。',
        code: `
~~~ts
let language: string = "javascript";
~~~
`,
        answer: `
~~~ts
let language: string = "javascript";
let upperLanguage = language.toUpperCase();
console.log(upperLanguage); // "JAVASCRIPT"
~~~
`,
      },
      {
        question: '文字列 "openai gpt" を大文字に変換してください。',
        code: `
~~~ts
let name: string = "openai gpt";
~~~
`,
        answer: `
~~~ts
let name: string = "openai gpt";
let upperName = name.toUpperCase();
console.log(upperName); // "OPENAI GPT"
~~~
`,
      },
      {
        question: '文字列 "Testing" を大文字に変換してください。',
        code: `
~~~ts
let text: string = "Testing";
~~~
`,
        answer: `
~~~ts
let text: string = "Testing";
let upperText = text.toUpperCase();
console.log(upperText); // "TESTING"
~~~
`,
      },
      {
        question: '文字列 "lower case string" を大文字に変換してください。',
        code: `
~~~ts
let text: string = "lower case string";
~~~
`,
        answer: `
~~~ts
let text: string = "lower case string";
let upperText = text.toUpperCase();
console.log(upperText); // "LOWER CASE STRING"
~~~
`,
      },
    ],
  },
  {
    id: 'string_type_14',
    title: EnumString.TRIM,
    category: 'string_operations',
    questions: [
      {
        question: '文字列 "   hello world   " の前後の空白を削除してください。',
        code: `
~~~ts
let text: string = "   hello world   ";
~~~
`,
        answer: `
~~~ts
let text: string = "   hello world   ";
let trimmedText = text.trim();
console.log(trimmedText); // "hello world"
~~~
`,
      },
      {
        question: '文字列 " JavaScript " の前後の空白を削除してください。',
        code: `
~~~ts
let language: string = " JavaScript ";
~~~
`,
        answer: `
~~~ts
let language: string = " JavaScript ";
let trimmedLanguage = language.trim();
console.log(trimmedLanguage); // "JavaScript"
~~~
`,
      },
      {
        question: '文字列 "   OpenAI GPT   " の前後の空白を削除してください。',
        code: `
~~~ts
let name: string = "   OpenAI GPT   ";
~~~
`,
        answer: `
~~~ts
let name: string = "   OpenAI GPT   ";
let trimmedName = name.trim();
console.log(trimmedName); // "OpenAI GPT"
~~~
`,
      },
      {
        question: '文字列 "   Testing   " の前後の空白を削除してください。',
        code: `
~~~ts
let text: string = "   Testing   ";
~~~
`,
        answer: `
~~~ts
let text: string = "   Testing   ";
let trimmedText = text.trim();
console.log(trimmedText); // "Testing"
~~~
`,
      },
      {
        question:
          '文字列 "     White Space     " の前後の空白を削除してください。',
        code: `
~~~ts
let text: string = "     White Space     ";
~~~
`,
        answer: `
~~~ts
let text: string = "     White Space     ";
let trimmedText = text.trim();
console.log(trimmedText); // "White Space"
~~~
`,
      },
    ],
  },
  {
    id: 'string_type_15',
    title: EnumString.TRIMSTART,
    category: 'string_operations',
    questions: [
      {
        question: '文字列 "   hello world" の前の空白を削除してください。',
        code: `
~~~ts
let text: string = "   hello world";
~~~
`,
        answer: `
~~~ts
let text: string = "   hello world";
let trimmedStartText = text.trimStart();
console.log(trimmedStartText); // "hello world"
~~~
`,
      },
      {
        question: '文字列 "   JavaScript" の前の空白を削除してください。',
        code: `
~~~ts
let language: string = "   JavaScript";
~~~
`,
        answer: `
~~~ts
let language: string = "   JavaScript";
let trimmedStartLanguage = language.trimStart();
console.log(trimmedStartLanguage); // "JavaScript"
~~~
`,
      },
      {
        question: '文字列 "   OpenAI GPT" の前の空白を削除してください。',
        code: `
~~~ts
let name: string = "   OpenAI GPT";
~~~
`,
        answer: `
~~~ts
let name: string = "   OpenAI GPT";
let trimmedStartName = name.trimStart();
console.log(trimmedStartName); // "OpenAI GPT"
~~~
`,
      },
      {
        question: '文字列 "   Testing" の前の空白を削除してください。',
        code: `
~~~ts
let text: string = "   Testing";
~~~
`,
        answer: `
~~~ts
let text: string = "   Testing";
let trimmedStartText = text.trimStart();
console.log(trimmedStartText); // "Testing"
~~~
`,
      },
      {
        question:
          '文字列 "   Leading White Space" の前の空白を削除してください。',
        code: `
~~~ts
let text: string = "   Leading White Space";
~~~
`,
        answer: `
~~~ts
let text: string = "   Leading White Space";
let trimmedStartText = text.trimStart();
console.log(trimmedStartText); // "Leading White Space"
~~~
`,
      },
    ],
  },
  {
    id: 'string_type_16',
    title: EnumString.TRIMEND,
    category: 'string_operations',
    questions: [
      {
        question: '文字列 "hello world   " の後ろの空白を削除してください。',
        code: `
~~~ts
let text: string = "hello world   ";
~~~
`,
        answer: `
~~~ts
let text: string = "hello world   ";
let trimmedEndText = text.trimEnd();
console.log(trimmedEndText); // "hello world"
~~~
`,
      },
      {
        question: '文字列 "JavaScript   " の後ろの空白を削除してください。',
        code: `
~~~ts
let language: string = "JavaScript   ";
~~~
`,
        answer: `
~~~ts
let language: string = "JavaScript   ";
let trimmedEndLanguage = language.trimEnd();
console.log(trimmedEndLanguage); // "JavaScript"
~~~
`,
      },
      {
        question: '文字列 "OpenAI GPT   " の後ろの空白を削除してください。',
        code: `
~~~ts
let name: string = "OpenAI GPT   ";
~~~
`,
        answer: `
~~~ts
let name: string = "OpenAI GPT   ";
let trimmedEndName = name.trimEnd();
console.log(trimmedEndName); // "OpenAI GPT"
~~~
`,
      },
      {
        question: '文字列 "Testing   " の後ろの空白を削除してください。',
        code: `
~~~ts
let text: string = "Testing   ";
~~~
`,
        answer: `
~~~ts
let text: string = "Testing   ";
let trimmedEndText = text.trimEnd();
console.log(trimmedEndText); // "Testing"
~~~
`,
      },
      {
        question:
          '文字列 "Trailing White Space   " の後ろの空白を削除してください。',
        code: `
~~~ts
let text: string = "Trailing White Space   ";
~~~
`,
        answer: `
~~~ts
let text: string = "Trailing White Space   ";
let trimmedEndText = text.trimEnd();
console.log(trimmedEndText); // "Trailing White Space"
~~~
`,
      },
    ],
  },
  {
    id: 'string_type_17',
    title: EnumString.CONCAT,
    category: 'string_operations',
    questions: [
      {
        question: '文字列 "Hello" と " World" を結合してください。',
        code: `
~~~ts
let text1: string = "Hello";
let text2: string = " World";
~~~
`,
        answer: `
~~~ts
let text1: string = "Hello";
let text2: string = " World";
let result = text1.concat(text2);
console.log(result); // "Hello World"
~~~
`,
      },
      {
        question: '文字列 "Java" と "Script" を結合してください。',
        code: `
~~~ts
let part1: string = "Java";
let part2: string = "Script";
~~~
`,
        answer: `
~~~ts
let part1: string = "Java";
let part2: string = "Script";
let combined = part1.concat(part2);
console.log(combined); // "JavaScript"
~~~
`,
      },
      {
        question: '文字列 "OpenAI" と " " と "GPT" を結合してください。',
        code: `
~~~ts
let name1: string = "OpenAI";
let space: string = " ";
let name2: string = "GPT";
~~~
`,
        answer: `
~~~ts
let name1: string = "OpenAI";
let space: string = " ";
let name2: string = "GPT";
let fullName = name1.concat(space, name2);
console.log(fullName); // "OpenAI GPT"
~~~
`,
      },
      {
        question: '文字列 "Front" と "End" を結合してください。',
        code: `
~~~ts
let first: string = "Front";
let second: string = "End";
~~~
`,
        answer: `
~~~ts
let first: string = "Front";
let second: string = "End";
let result = first.concat(second);
console.log(result); // "FrontEnd"
~~~
`,
      },
      {
        question: '文字列 "a", "b", "c" を結合して1つの文字列にしてください。',
        code: `
~~~ts
let letter1: string = "a";
let letter2: string = "b";
let letter3: string = "c";
~~~
`,
        answer: `
~~~ts
let letter1: string = "a";
let letter2: string = "b";
let letter3: string = "c";
let result = letter1.concat(letter2, letter3);
console.log(result); // "abc"
~~~
`,
      },
    ],
  },
  {
    id: 'string_type_18',
    title: EnumString.REPEAT,
    category: 'string_operations',
    questions: [
      {
        question: '文字列 "hello" を3回繰り返してください。',
        code: `
~~~ts
let text: string = "hello";
~~~
`,
        answer: `
~~~ts
let text: string = "hello";
let repeatedText = text.repeat(3);
console.log(repeatedText); // "hellohellohello"
~~~
`,
      },
      {
        question: '文字列 "abc" を2回繰り返してください。',
        code: `
~~~ts
let pattern: string = "abc";
~~~
`,
        answer: `
~~~ts
let pattern: string = "abc";
let result = pattern.repeat(2);
console.log(result); // "abcabc"
~~~
`,
      },
      {
        question: '文字列 "123" を5回繰り返してください。',
        code: `
~~~ts
let numbers: string = "123";
~~~
`,
        answer: `
~~~ts
let numbers: string = "123";
let repeatedNumbers = numbers.repeat(5);
console.log(repeatedNumbers); // "123123123123123"
~~~
`,
      },
      {
        question: '文字列 "-" を10回繰り返してください。',
        code: `
~~~ts
let dash: string = "-";
~~~
`,
        answer: `
~~~ts
let dash: string = "-";
let line = dash.repeat(10);
console.log(line); // "----------"
~~~
`,
      },
      {
        question: '文字列 "Repeat!" を1回繰り返してください。',
        code: `
~~~ts
let shout: string = "Repeat!";
~~~
`,
        answer: `
~~~ts
let shout: string = "Repeat!";
let result = shout.repeat(1);
console.log(result); // "Repeat!"
~~~
`,
      },
    ],
  },
  {
    id: 'string_type_19',
    title: EnumString.REPLACE,
    category: 'string_operations',
    questions: [
      {
        question:
          '文字列 "Hello World" の "World" を "JavaScript" に置き換えてください。',
        code: `
~~~ts
let text: string = "Hello World";
~~~
`,
        answer: `
~~~ts
let text: string = "Hello World";
let newText = text.replace("World", "JavaScript");
console.log(newText); // "Hello JavaScript"
~~~
`,
      },
      {
        question: '文字列 "abcabc" の最初の "a" を "x" に置き換えてください。',
        code: `
~~~ts
let pattern: string = "abcabc";
~~~
`,
        answer: `
~~~ts
let pattern: string = "abcabc";
let result = pattern.replace("a", "x");
console.log(result); // "xbcabc"
~~~
`,
      },
      {
        question: '文字列 "foobar" の "foo" を "baz" に置き換えてください。',
        code: `
~~~ts
let text: string = "foobar";
~~~
`,
        answer: `
~~~ts
let text: string = "foobar";
let newText = text.replace("foo", "baz");
console.log(newText); // "bazbar"
~~~
`,
      },
      {
        question:
          '文字列 "openAI" の "AI" を "AI model" に置き換えてください。',
        code: `
~~~ts
let text: string = "openAI";
~~~
`,
        answer: `
~~~ts
let text: string = "openAI";
let newText = text.replace("AI", "AI model");
console.log(newText); // "openAI model"
~~~
`,
      },
      {
        question: '文字列 "12345" の "5" を "0" に置き換えてください。',
        code: `
~~~ts
let numbers: string = "12345";
~~~
`,
        answer: `
~~~ts
let numbers: string = "12345";
let result = numbers.replace("5", "0");
console.log(result); // "12340"
~~~
`,
      },
    ],
  },
  {
    id: 'string_type_20',
    title: EnumString.REPLACEALL,
    category: 'string_operations',
    questions: [
      {
        question:
          '文字列 "foo bar foo" のすべての "foo" を "baz" に置き換えてください。',
        code: `
~~~ts
let text: string = "foo bar foo";
~~~
`,
        answer: `
~~~ts
let text: string = "foo bar foo";
let newText = text.replaceAll("foo", "baz");
console.log(newText); // "baz bar baz"
~~~
`,
      },
      {
        question:
          '文字列 "abcabcabc" のすべての "a" を "x" に置き換えてください。',
        code: `
~~~ts
let pattern: string = "abcabcabc";
~~~
`,
        answer: `
~~~ts
let pattern: string = "abcabcabc";
let result = pattern.replaceAll("a", "x");
console.log(result); // "xbcxbcxbc"
~~~
`,
      },
      {
        question:
          '文字列 "foobarfoobar" のすべての "o" を "0" に置き換えてください。',
        code: `
~~~ts
let text: string = "foobarfoobar";
~~~
`,
        answer: `
~~~ts
let text: string = "foobarfoobar";
let newText = text.replaceAll("o", "0");
console.log(newText); // "f00barf00bar"
~~~
`,
      },
      {
        question:
          '文字列 "123123123" のすべての "3" を "9" に置き換えてください。',
        code: `
~~~ts
let numbers: string = "123123123";
~~~
`,
        answer: `
~~~ts
let numbers: string = "123123123";
let result = numbers.replaceAll("3", "9");
console.log(result); // "129129129"
~~~
`,
      },
      {
        question:
          '文字列 "apple apple apple" のすべての "apple" を "orange" に置き換えてください。',
        code: `
~~~ts
let text: string = "apple apple apple";
~~~
`,
        answer: `
~~~ts
let text: string = "apple apple apple";
let newText = text.replaceAll("apple", "orange");
console.log(newText); // "orange orange orange"
~~~
`,
      },
    ],
  },
  {
    id: 'string_type_21',
    title: EnumString.SPLIT,
    category: 'string_operations',
    questions: [
      {
        question: '文字列 "apple,banana,cherry" をカンマで分割してください。',
        code: `
~~~ts
let fruits: string = "apple,banana,cherry";
~~~
`,
        answer: `
~~~ts
let fruits: string = "apple,banana,cherry";
let fruitArray = fruits.split(",");
console.log(fruitArray); // ["apple", "banana", "cherry"]
~~~
`,
      },
      {
        question: '文字列 "Hello World" をスペースで分割してください。',
        code: `
~~~ts
let text: string = "Hello World";
~~~
`,
        answer: `
~~~ts
let text: string = "Hello World";
let words = text.split(" ");
console.log(words); // ["Hello", "World"]
~~~
`,
      },
      {
        question: '文字列 "1-2-3-4" を "-" で分割してください。',
        code: `
~~~ts
let numbers: string = "1-2-3-4";
~~~
`,
        answer: `
~~~ts
let numbers: string = "1-2-3-4";
let numArray = numbers.split("-");
console.log(numArray); // ["1", "2", "3", "4"]
~~~
`,
      },
      {
        question: '文字列 "abc def ghi" を空白で分割して、配列にしてください。',
        code: `
~~~ts
let text: string = "abc def ghi";
~~~
`,
        answer: `
~~~ts
let text: string = "abc def ghi";
let result = text.split(" ");
console.log(result); // ["abc", "def", "ghi"]
~~~
`,
      },
      {
        question: '文字列 "a|b|c" を "|" で分割して配列にしてください。',
        code: `
~~~ts
let text: string = "a|b|c";
~~~
`,
        answer: `
~~~ts
let text: string = "a|b|c";
let result = text.split("|");
console.log(result); // ["a", "b", "c"]
~~~
`,
      },
    ],
  },
  {
    id: 'string_type_22',
    title: EnumString.PADSTART,
    category: 'string_operations',
    questions: [
      {
        question:
          '文字列 "5" を "0005" にするために、左側に "0" を3つ追加してください。',
        code: `
~~~ts
let number: string = "5";
~~~
`,
        answer: `
~~~ts
let number: string = "5";
let paddedNumber = number.padStart(4, "0");
console.log(paddedNumber); // "0005"
~~~
`,
      },
      {
        question:
          '文字列 "abc" を "xxabc" にするために、左側に "x" を2つ追加してください。',
        code: `
~~~ts
let text: string = "abc";
~~~
`,
        answer: `
~~~ts
let text: string = "abc";
let paddedText = text.padStart(5, "x");
console.log(paddedText); // "xxabc"
~~~
`,
      },
      {
        question:
          '文字列 "42" を "0042" にするために、左側に "0" を2つ追加してください。',
        code: `
~~~ts
let number: string = "42";
~~~
`,
        answer: `
~~~ts
let number: string = "42";
let paddedNumber = number.padStart(4, "0");
console.log(paddedNumber); // "0042"
~~~
`,
      },
      {
        question:
          '文字列 "hello" を "-----hello" にするために、左側に "-" を5つ追加してください。',
        code: `
~~~ts
let text: string = "hello";
~~~
`,
        answer: `
~~~ts
let text: string = "hello";
let paddedText = text.padStart(10, "-");
console.log(paddedText); // "-----hello"
~~~
`,
      },
      {
        question:
          '文字列 "123" を "###123" にするために、左側に "#" を3つ追加してください。',
        code: `
~~~ts
let number: string = "123";
~~~
`,
        answer: `
~~~ts
let number: string = "123";
let paddedNumber = number.padStart(6, "#");
console.log(paddedNumber); // "###123"
~~~
`,
      },
    ],
  },
  {
    id: 'string_type_23',
    title: EnumString.PADEND,
    category: 'string_operations',
    questions: [
      {
        question:
          '文字列 "5" を "5000" にするために、右側に "0" を3つ追加してください。',
        code: `
~~~ts
let number: string = "5";
~~~
`,
        answer: `
~~~ts
let number: string = "5";
let paddedNumber = number.padEnd(4, "0");
console.log(paddedNumber); // "5000"
~~~
`,
      },
      {
        question:
          '文字列 "abc" を "abcxx" にするために、右側に "x" を2つ追加してください。',
        code: `
~~~ts
let text: string = "abc";
~~~
`,
        answer: `
~~~ts
let text: string = "abc";
let paddedText = text.padEnd(5, "x");
console.log(paddedText); // "abcxx"
~~~
`,
      },
      {
        question:
          '文字列 "42" を "4200" にするために、右側に "0" を2つ追加してください。',
        code: `
~~~ts
let number: string = "42";
~~~
`,
        answer: `
~~~ts
let number: string = "42";
let paddedNumber = number.padEnd(4, "0");
console.log(paddedNumber); // "4200"
~~~
`,
      },
      {
        question:
          '文字列 "hello" を "hello-----" にするために、右側に "-" を5つ追加してください。',
        code: `
~~~ts
let text: string = "hello";
~~~
`,
        answer: `
~~~ts
let text: string = "hello";
let paddedText = text.padEnd(10, "-");
console.log(paddedText); // "hello-----"
~~~
`,
      },
      {
        question:
          '文字列 "123" を "123###" にするために、右側に "#" を3つ追加してください。',
        code: `
~~~ts
let number: string = "123";
~~~
`,
        answer: `
~~~ts
let number: string = "123";
let paddedNumber = number.padEnd(6, "#");
console.log(paddedNumber); // "123###"
~~~
`,
      },
    ],
  },
  {
    id: 'string_type_24',
    title: EnumString.MATCH,
    category: 'string_operations',
    questions: [
      {
        question:
          '文字列 "Hello World" の中で "o" に一致する全てのインスタンスを検索してください。',
        code: `
~~~ts
let text: string = "Hello World";
~~~
`,
        answer: `
~~~ts
let text: string = "Hello World";
let matches = text.match(/o/g);
console.log(matches); // ["o", "o"]
~~~
`,
      },
      {
        question:
          '文字列 "banana" の中で "a" に一致する全てのインスタンスを検索してください。',
        code: `
~~~ts
let text: string = "banana";
~~~
`,
        answer: `
~~~ts
let text: string = "banana";
let matches = text.match(/a/g);
console.log(matches); // ["a", "a", "a"]
~~~
`,
      },
      {
        question: '文字列 "123-456-789" で数字の部分を全て検索してください。',
        code: `
~~~ts
let text: string = "123-456-789";
~~~
`,
        answer: `
~~~ts
let text: string = "123-456-789";
let matches = text.match(/\\d+/g);
console.log(matches); // ["123", "456", "789"]
~~~
`,
      },
      {
        question:
          '文字列 "foo bar baz" の中で "ba" に一致する部分を全て検索してください。',
        code: `
~~~ts
let text: string = "foo bar baz";
~~~
`,
        answer: `
~~~ts
let text: string = "foo bar baz";
let matches = text.match(/ba/g);
console.log(matches); // ["ba", "ba"]
~~~
`,
      },
      {
        question:
          '文字列 "hello123world" の中で数字に一致する部分を全て検索してください。',
        code: `
~~~ts
let text: string = "hello123world";
~~~
`,
        answer: `
~~~ts
let text: string = "hello123world";
let matches = text.match(/\\d/g);
console.log(matches); // ["1", "2", "3"]
~~~
`,
      },
    ],
  },
  {
    id: 'string_type_25',
    title: EnumString.MATCHALL,
    category: 'string_operations',
    questions: [
      {
        question:
          '文字列 "Hello Hello" の中で "Hello" に一致する全てのインスタンスを検索してください。',
        code: `
~~~ts
let text: string = "Hello Hello";
~~~
`,
        answer: `
~~~ts
let text: string = "Hello Hello";
let matches = Array.from(text.matchAll(/Hello/g));
console.log(matches); // [["Hello"], ["Hello"]]
~~~
`,
      },
      {
        question:
          '文字列 "abc123abc" の中で "abc" に一致する全てのインスタンスを検索してください。',
        code: `
~~~ts
let text: string = "abc123abc";
~~~
`,
        answer: `
~~~ts
let text: string = "abc123abc";
let matches = Array.from(text.matchAll(/abc/g));
console.log(matches); // [["abc"], ["abc"]]
~~~
`,
      },
      {
        question: '文字列 "10, 20, 30" で全ての数値部分を検索してください。',
        code: `
~~~ts
let text: string = "10, 20, 30";
~~~
`,
        answer: `
~~~ts
let text: string = "10, 20, 30";
let matches = Array.from(text.matchAll(/\\d+/g));
console.log(matches); // [["10"], ["20"], ["30"]]
~~~
`,
      },
      {
        question:
          '文字列 "foo bar foo bar" の中で "foo" に一致する部分を全て検索してください。',
        code: `
~~~ts
let text: string = "foo bar foo bar";
~~~
`,
        answer: `
~~~ts
let text: string = "foo bar foo bar";
let matches = Array.from(text.matchAll(/foo/g));
console.log(matches); // [["foo"], ["foo"]]
~~~
`,
      },
      {
        question:
          '文字列 "a1b2c3" の中で数字に一致する全てのインスタンスを検索してください。',
        code: `
~~~ts
let text: string = "a1b2c3";
~~~
`,
        answer: `
~~~ts
let text: string = "a1b2c3";
let matches = Array.from(text.matchAll(/\\d/g));
console.log(matches); // [["1"], ["2"], ["3"]]
~~~
`,
      },
    ],
  },
  {
    id: 'string_type_26',
    title: EnumString.LOCALECOMPARE,
    category: 'string_operations',
    questions: [
      {
        question: '"apple" と "banana" をロケールに基づいて比較してください。',
        code: `
~~~ts
let a: string = "apple";
let b: string = "banana";
~~~
`,
        answer: `
~~~ts
let a: string = "apple";
let b: string = "banana";
let result = a.localeCompare(b);
console.log(result); // -1 (or negative number)
~~~
`,
      },
      {
        question: '"a" と "a" をロケールに基づいて比較してください。',
        code: `
~~~ts
let a: string = "a";
let b: string = "a";
~~~
`,
        answer: `
~~~ts
let a: string = "a";
let b: string = "a";
let result = a.localeCompare(b);
console.log(result); // 0
~~~
`,
      },
      {
        question: '"z" と "y" をロケールに基づいて比較してください。',
        code: `
~~~ts
let a: string = "z";
let b: string = "y";
~~~
`,
        answer: `
~~~ts
let a: string = "z";
let b: string = "y";
let result = a.localeCompare(b);
console.log(result); // 1 (or positive number)
~~~
`,
      },
      {
        question: '"cat" と "car" をロケールに基づいて比較してください。',
        code: `
~~~ts
let a: string = "cat";
let b: string = "car";
~~~
`,
        answer: `
~~~ts
let a: string = "cat";
let b: string = "car";
let result = a.localeCompare(b);
console.log(result); // 1 (or positive number)
~~~
`,
      },
      {
        question: '"éclair" と "apple" をロケールに基づいて比較してください。',
        code: `
~~~ts
let a: string = "éclair";
let b: string = "apple";
~~~
`,
        answer: `
~~~ts
let a: string = "éclair";
let b: string = "apple";
let result = a.localeCompare(b);
console.log(result); // Depends on locale settings
~~~
`,
      },
    ],
  },
  {
    id: 'string_type_27',
    title: EnumString.NORMALIZE,
    category: 'string_operations',
    questions: [
      {
        question: '文字列 "café" を NFC 正規化形式で標準化してください。',
        code: `
~~~ts
let text: string = "café";
~~~
`,
        answer: `
~~~ts
let text: string = "café";
let normalized = text.normalize("NFC");
console.log(normalized); // "café"
~~~
`,
      },
      {
        question:
          '文字列 "e\u0301clair" を NFD 正規化形式で標準化してください。',
        code: `
~~~ts
let text: string = "e\\u0301clair";
~~~
`,
        answer: `
~~~ts
let text: string = "e\\u0301clair";
let normalized = text.normalize("NFD");
console.log(normalized); // "éclair"
~~~
`,
      },
      {
        question: '文字列 "a\u030A" を NFKC 正規化形式で標準化してください。',
        code: `
~~~ts
let text: string = "a\\u030A";
~~~
`,
        answer: `
~~~ts
let text: string = "a\\u030A";
let normalized = text.normalize("NFKC");
console.log(normalized); // "å"
~~~
`,
      },
      {
        question: '文字列 "Å" を NFKD 正規化形式で標準化してください。',
        code: `
~~~ts
let text: string = "Å";
~~~
`,
        answer: `
~~~ts
let text: string = "Å";
let normalized = text.normalize("NFKD");
console.log(normalized); // "Å"
~~~
`,
      },
      {
        question: '文字列 "café" を NFD 正規化形式で標準化してください。',
        code: `
~~~ts
let text: string = "café";
~~~
`,
        answer: `
~~~ts
let text: string = "café";
let normalized = text.normalize("NFD");
console.log(normalized); // "café"
~~~
`,
      },
    ],
  },
]
