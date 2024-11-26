import { EnumArray } from '@/data/Array/ArrayType'
import { QuestionCategory } from '@/domain/entity/question'

export const arrayQuestions: QuestionCategory[] = [
  {
    id: 'array_type_1',
    title: EnumArray.PUSH,
    category: 'array_operations',
    questions: [
      {
        question:
          '配列 fruits があります。この配列に orange を追加してください。',
        code: `
~~~ts
let fruits: string[] = ["apple", "banana"];
~~~
`,
        answer: `
~~~ts
let fruits: string[] = ["apple", "banana"];
fruits.push("orange");
console.log(fruits); // ["apple", "banana", "orange"]
~~~
`,
      },
      {
        question:
          '数値の配列 numbers に、複数の要素 4, 5, 6 を一度に追加してください。',
        code: `
~~~ts
let numbers: number[] = [1, 2, 3];
~~~
`,
        answer: `
~~~ts
let numbers: number[] = [1, 2, 3];
numbers.push(4, 5, 6);
console.log(numbers); // [1, 2, 3, 4, 5, 6]
~~~
`,
      },
      {
        question:
          '配列 data に別の配列 [4, 5] を単一の要素として追加してください。',
        code: `
~~~ts
let data: any[] = [1, 2, 3];
~~~
`,
        answer: `
~~~ts
let data: any[] = [1, 2, 3];
data.push([4, 5]);
console.log(data); // [1, 2, 3, [4, 5]]
~~~
`,
      },
      {
        question:
          '条件に応じて配列 items に新しい要素 newItem を追加する必要があります。newItem が null または undefined ではない場合のみ追加してください。',
        code: `
~~~ts
let items: (string | null)[] = ["item1", "item2"];
let newItem: string | null = "item3";
~~~
`,
        answer: `
~~~ts
let items: (string | null)[] = ["item1", "item2"];
let newItem: string | null = "item3";
if (newItem !== null && newItem !== undefined) {
    items.push(newItem);
}
console.log(items); // ["item1", "item2", "item3"]
~~~
`,
      },
      {
        question:
          '配列 mixedArray は数値と文字列を含むことができます。新しい数値 30 と新しい文字列 thirty を追加してください。',
        code: `
~~~ts
let mixedArray: (number | string)[] = [10, "twenty"];
~~~
`,
        answer: `
~~~ts
let mixedArray: (number | string)[] = [10, "twenty"];
mixedArray.push(30, "thirty");
console.log(mixedArray); // [10, "twenty", 30, "thirty"]
~~~
`,
      },
    ],
  },
  {
    id: 'array_type_2',
    title: EnumArray.POP,
    category: 'array_operations',
    questions: [
      {
        question:
          '配列 fruits から最後の要素を削除し、その要素を表示してください。',
        code: `
~~~ts
let fruits: string[] = ["apple", "banana", "cherry"];
~~~
`,
        answer: `
~~~ts
let fruits: string[] = ["apple", "banana", "cherry"];
let removedFruit = fruits.pop();
console.log(removedFruit); // "cherry"
~~~
`,
      },
      {
        question:
          '配列 numbers から最後の要素を削除した後、その配列の長さを取得してください。',
        code: `
~~~ts
let numbers: number[] = [1, 2, 3, 4];
~~~
`,
        answer: `
~~~ts
let numbers: number[] = [1, 2, 3, 4];
numbers.pop();
console.log(numbers.length); // 3
~~~
`,
      },
      {
        question:
          '空の配列から要素を削除しようとしたときの結果を示してください。',
        code: `
~~~ts
let emptyArray: any[] = [];
~~~
`,
        answer: `
~~~ts
let emptyArray: any[] = [];
let removedElement = emptyArray.pop();
console.log(removedElement); // undefined
~~~
`,
      },
      {
        question:
          '複数のデータ型を持つ配列から最後の要素を削除し、その要素の型を表示してください。',
        code: `
~~~ts
let mixedArray: (number | string)[] = [1, "two", 3];
~~~
`,
        answer: `
~~~ts
let mixedArray: (number | string)[] = [1, "two", 3];
let lastElement = mixedArray.pop();
console.log(typeof lastElement); // "number"
~~~
`,
      },
      {
        question:
          '配列 characters に含まれるすべての要素を一つずつ削除し、そのたびに配列の状態を表示してください。',
        code: `
~~~ts
let characters: string[] = ["a", "b", "c"];
~~~
`,
        answer: `
~~~ts
let characters: string[] = ["a", "b", "c"];
while (characters.length > 0) {
  characters.pop();
  console.log(characters);
}
// 出力: 
// ["a", "b"]
// ["a"]
// []
~~~
`,
      },
    ],
  },
  {
    id: 'array_type_3',
    title: EnumArray.UNSHIFT,
    category: 'array_operations',
    questions: [
      {
        question: '配列 colors の先頭に新しい要素 "red" を追加してください。',
        code: `
~~~ts
let colors: string[] = ["blue", "green"];
~~~
`,
        answer: `
~~~ts
let colors: string[] = ["blue", "green"];
colors.unshift("red");
~~~
`,
      },
      {
        question: '配列 values の先頭に複数の数値 1, 2, 3 を追加してください。',
        code: `
~~~ts
let values: number[] = [4, 5, 6];
~~~
`,
        answer: `
~~~ts
let values: number[] = [4, 5, 6];
values.unshift(1, 2, 3);
~~~
`,
      },
      {
        question:
          '配列 mixed に要素 true と "hello" を先頭に追加し、その配列を出力してください。',
        code: `
~~~ts
let mixed: (boolean | string)[] = [false, "world"];
~~~
`,
        answer: `
~~~ts
let mixed: (boolean | string)[] = [false, "world"];
mixed.unshift(true, "hello");
console.log(mixed); // [true, "hello", false, "world"]
~~~
`,
      },
      {
        question:
          '配列 data に新しい要素を追加する関数 addData を作成してください。この関数は、配列の先頭に要素を追加し、追加後の配列を返します。',
        code: `
~~~ts
function addData(array: any[], element: any): any[] {
  // ここにコードを追加
}

let data = [3, 4, 5];
console.log(addData(data, 2)); // [2, 3, 4, 5]
~~~
`,
        answer: `
~~~ts
function addData(array: any[], element: any): any[] {
  array.unshift(element);
  return array;
}

let data = [3, 4, 5];
console.log(addData(data, 2)); // [2, 3, 4, 5]
~~~
`,
      },
      {
        question:
          '数値配列 numbers の先頭に新しい要素を追加し、その長さを返してください。',
        code: `
~~~ts
let numbers: number[] = [10, 20, 30];
~~~
`,
        answer: `
~~~ts
let numbers: number[] = [10, 20, 30];
let newLength = numbers.unshift(5);
console.log(newLength); // 4
~~~
`,
      },
    ],
  },
  {
    id: 'array_type_4',
    title: EnumArray.SHIFT,
    category: 'array_operations',
    questions: [
      {
        question:
          '配列 numbers の先頭の要素を削除し、その要素を表示してください。',
        code: `
~~~ts
let numbers: number[] = [10, 20, 30];
~~~
`,
        answer: `
~~~ts
let numbers: number[] = [10, 20, 30];
let firstElement = numbers.shift();
console.log(firstElement); // 10
~~~
`,
      },
      {
        question:
          '配列 elements の先頭の要素を削除し、削除後の配列の状態を表示してください。',
        code: `
~~~ts
let elements: string[] = ["one", "two", "three"];
~~~
`,
        answer: `
~~~ts
let elements: string[] = ["one", "two", "three"];
elements.shift();
console.log(elements); // ["two", "three"]
~~~
`,
      },
      {
        question:
          '空の配列から先頭の要素を削除しようとしたときの結果を示してください。',
        code: `
~~~ts
let emptyArray: any[] = [];
~~~
`,
        answer: `
~~~ts
let emptyArray: any[] = [];
let removedElement = emptyArray.shift();
console.log(removedElement); // undefined
~~~
`,
      },
      {
        question:
          '複数のデータ型を持つ配列 mixedArray の先頭の要素を削除し、その要素の型を表示してください。',
        code: `
~~~ts
let mixedArray: (number | string)[] = [1, "two", 3];
~~~
`,
        answer: `
~~~ts
let mixedArray: (number | string)[] = [1, "two", 3];
let firstElement = mixedArray.shift();
console.log(typeof firstElement); // "number"
~~~
`,
      },
      {
        question:
          '配列 list のすべての要素を一つずつ削除し、そのたびに配列の状態を表示してください。',
        code: `
~~~ts
let list: string[] = ["a", "b", "c"];
~~~
`,
        answer: `
~~~ts
let list: string[] = ["a", "b", "c"];
while (list.length > 0) {
  list.shift();
  console.log(list);
}
// 出力: 
// ["b", "c"]
// ["c"]
// []
~~~
`,
      },
    ],
  },
  {
    id: 'array_type_5',
    title: EnumArray.SPLICE,
    category: 'array_operations',
    questions: [
      {
        question: '配列 fruits から要素 "banana" を削除してください。',
        code: `
~~~ts
let fruits: string[] = ["apple", "banana", "cherry"];
~~~
`,
        answer: `
~~~ts
let fruits: string[] = ["apple", "banana", "cherry"];
fruits.splice(1, 1);
console.log(fruits); // ["apple", "cherry"]
~~~
`,
      },
      {
        question:
          '配列 numbers のインデックス 2 から 2 つの要素を削除し、その後の配列を表示してください。',
        code: `
~~~ts
let numbers: number[] = [1, 2, 3, 4, 5];
~~~
`,
        answer: `
~~~ts
let numbers: number[] = [1, 2, 3, 4, 5];
numbers.splice(2, 2);
console.log(numbers); // [1, 2, 5]
~~~
`,
      },
      {
        question:
          '配列 chars のインデックス 1 に "x", "y" を追加し、配列の内容を出力してください。',
        code: `
~~~ts
let chars: string[] = ["a", "b", "c"];
~~~
`,
        answer: `
~~~ts
let chars: string[] = ["a", "b", "c"];
chars.splice(1, 0, "x", "y");
console.log(chars); // ["a", "x", "y", "b", "c"]
~~~
`,
      },
      {
        question:
          '配列 colors の最後の要素を削除し、その削除された要素を表示してください。',
        code: `
~~~ts
let colors: string[] = ["red", "green", "blue"];
~~~
`,
        answer: `
~~~ts
let colors: string[] = ["red", "green", "blue"];
let removedColors = colors.splice(-1);
console.log(removedColors); // ["blue"]
~~~
`,
      },
      {
        question:
          '配列 data の要素を入れ替えるように splice を使用して、配列を逆順にしてください。',
        code: `
~~~ts
let data: number[] = [1, 2, 3, 4];
~~~
`,
        answer: `
~~~ts
let data: number[] = [1, 2, 3, 4];
data.splice(0, data.length, 4, 3, 2, 1);
console.log(data); // [4, 3, 2, 1]
~~~
`,
      },
    ],
  },
  {
    id: 'array_type_6',
    title: EnumArray.INDEXOF,
    category: 'array_operations',
    questions: [
      {
        question:
          '配列 fruits から要素 "cherry" のインデックスを取得してください。',
        code: `
~~~ts
let fruits: string[] = ["apple", "banana", "cherry"];
~~~
`,
        answer: `
~~~ts
let fruits: string[] = ["apple", "banana", "cherry"];
let index = fruits.indexOf("cherry");
console.log(index); // 2
~~~
`,
      },
      {
        question:
          '配列 numbers に存在しない要素 100 のインデックスを取得し、その結果を表示してください。',
        code: `
~~~ts
let numbers: number[] = [10, 20, 30, 40];
~~~
`,
        answer: `
~~~ts
let numbers: number[] = [10, 20, 30, 40];
let index = numbers.indexOf(100);
console.log(index); // -1
~~~
`,
      },
      {
        question:
          '文字列配列 words の中から、最初に "code" が現れるインデックスを探してください。',
        code: `
~~~ts
let words: string[] = ["hello", "world", "code", "world", "code"];
~~~
`,
        answer: `
~~~ts
let words: string[] = ["hello", "world", "code", "world", "code"];
let firstIndex = words.indexOf("code");
console.log(firstIndex); // 2
~~~
`,
      },
      {
        question:
          '配列 items で最初に "apple" が現れるインデックスを探し、もし存在しなければメッセージを表示してください。',
        code: `
~~~ts
let items: string[] = ["banana", "orange", "grape"];
~~~
`,
        answer: `
~~~ts
let items: string[] = ["banana", "orange", "grape"];
let index = items.indexOf("apple");
if (index === -1) {
  console.log("apple not found");
} else {
  console.log("apple found at index", index);
}
~~~
`,
      },
      {
        question:
          '数値配列 nums の中で 5 のインデックスを探し、見つからなければ "Not found" と表示するロジックを実装してください。',
        code: `
~~~ts
let nums: number[] = [1, 2, 3, 4, 6, 7];
~~~
`,
        answer: `
~~~ts
let nums: number[] = [1, 2, 3, 4, 6, 7];
let index = nums.indexOf(5);
console.log(index !== -1 ? "Found at index " + index : "Not found");
// 出力: "Not found"
~~~
`,
      },
    ],
  },
  {
    id: 'array_type_7',
    title: EnumArray.LASTINDEXOF,
    category: 'array_operations',
    questions: [
      {
        question:
          '配列 fruits から要素 "banana" の最後のインデックスを取得してください。',
        code: `
~~~ts
let fruits: string[] = ["apple", "banana", "cherry", "banana"];
~~~
`,
        answer: `
~~~ts
let fruits: string[] = ["apple", "banana", "cherry", "banana"];
let lastIndex = fruits.lastIndexOf("banana");
console.log(lastIndex); // 3
~~~
`,
      },
      {
        question:
          '配列 numbers の中で、値 2 の最後の出現場所を取得してください。',
        code: `
~~~ts
let numbers: number[] = [1, 2, 3, 2, 1];
~~~
`,
        answer: `
~~~ts
let numbers: number[] = [1, 2, 3, 2, 1];
let lastIndex = numbers.lastIndexOf(2);
console.log(lastIndex); // 3
~~~
`,
      },
      {
        question:
          '配列 letters に存在しない要素 "z" の最後のインデックスを取得し、その結果を表示してください。',
        code: `
~~~ts
let letters: string[] = ["a", "b", "c", "d"];
~~~
`,
        answer: `
~~~ts
let letters: string[] = ["a", "b", "c", "d"];
let lastIndex = letters.lastIndexOf("z");
console.log(lastIndex); // -1
~~~
`,
      },
      {
        question:
          '配列 items に重複する "item" の最後のインデックスを探し、結果を表示してください。',
        code: `
~~~ts
let items: string[] = ["item", "element", "item", "part", "item"];
~~~
`,
        answer: `
~~~ts
let items: string[] = ["item", "element", "item", "part", "item"];
let lastIndex = items.lastIndexOf("item");
console.log(lastIndex); // 4
~~~
`,
      },
      {
        question:
          '配列 values の中で、数値 7 の最後のインデックスを取得し、見つからなければ "Not found" と表示してください。',
        code: `
~~~ts
let values: number[] = [3, 7, 2, 7, 1];
~~~
`,
        answer: `
~~~ts
let values: number[] = [3, 7, 2, 7, 1];
let lastIndex = values.lastIndexOf(7);
console.log(lastIndex !== -1 ? "Found at index " + lastIndex : "Not found");
// 出力: "Found at index 3"
~~~
`,
      },
    ],
  },
  {
    id: 'array_type_8',
    title: EnumArray.FIND,
    category: 'array_operations',
    questions: [
      {
        question: '配列 numbers の中で最初の偶数を見つけてください。',
        code: `
~~~ts
let numbers: number[] = [1, 3, 5, 4, 2];
~~~
`,
        answer: `
~~~ts
let numbers: number[] = [1, 3, 5, 4, 2];
let firstEven = numbers.find(x => x % 2 === 0);
console.log(firstEven); // 4
~~~
`,
      },
      {
        question:
          '配列 words の中で、長さが 5 の文字列を最初に見つけてください。',
        code: `
~~~ts
let words: string[] = ["short", "longer", "lengthy", "tiny"];
~~~
`,
        answer: `
~~~ts
let words: string[] = ["short", "longer", "lengthy", "tiny"];
let firstFiveLetterWord = words.find(word => word.length === 5);
console.log(firstFiveLetterWord); // "short"
~~~
`,
      },
      {
        question:
          '配列 items で、条件に一致する要素を探し、見つからなければ "None found" と表示してください。',
        code: `
~~~ts
let items: number[] = [11, 13, 17];
~~~
`,
        answer: `
~~~ts
let items: number[] = [11, 13, 17];
let foundItem = items.find(item => item > 20);
console.log(foundItem !== undefined ? foundItem : "None found");
// 出力: "None found"
~~~
`,
      },
      {
        question:
          '配列 temperatures の中で 15 度以下の最初の値を見つけてください。',
        code: `
~~~ts
let temperatures: number[] = [22, 25, 18, 10, 5];
~~~
`,
        answer: `
~~~ts
let temperatures: number[] = [22, 25, 18, 10, 5];
let coldTemperature = temperatures.find(temp => temp <= 15);
console.log(coldTemperature); // 10
~~~
`,
      },
      {
        question:
          '配列 students の中で、age が 18 以上の最初の student を見つけてください。',
        code: `
~~~ts
let students: { name: string; age: number }[] = [
  { name: "John", age: 17 },
  { name: "Jane", age: 19 },
  { name: "Jim", age: 16 }
];
~~~
`,
        answer: `
~~~ts
let students: { name: string; age: number }[] = [
  { name: "John", age: 17 },
  { name: "Jane", age: 19 },
  { name: "Jim", age: 16 }
];
let adultStudent = students.find(student => student.age >= 18);
console.log(adultStudent); // { name: "Jane", age: 19 }
~~~
`,
      },
    ],
  },
  {
    id: 'array_type_9',
    title: EnumArray.FINDINDEX,
    category: 'array_operations',
    questions: [
      {
        question:
          '配列 numbers の中で最初に 3 以上の値のインデックスを取得してください。',
        code: `
~~~ts
let numbers: number[] = [1, 2, 3, 4, 5];
~~~
`,
        answer: `
~~~ts
let numbers: number[] = [1, 2, 3, 4, 5];
let index = numbers.findIndex(x => x >= 3);
console.log(index); // 2
~~~
`,
      },
      {
        question:
          '配列 names の中で、最初に "John" が現れるインデックスを見つけてください。',
        code: `
~~~ts
let names: string[] = ["Jane", "John", "Alice", "John"];
~~~
`,
        answer: `
~~~ts
let names: string[] = ["Jane", "John", "Alice", "John"];
let index = names.findIndex(name => name === "John");
console.log(index); // 1
~~~
`,
      },
      {
        question:
          '配列 ages の中で 18 未満の年齢を持つ最初の要素のインデックスを取得してください。',
        code: `
~~~ts
let ages: number[] = [21, 22, 17, 19];
~~~
`,
        answer: `
~~~ts
let ages: number[] = [21, 22, 17, 19];
let index = ages.findIndex(age => age < 18);
console.log(index); // 2
~~~
`,
      },
      {
        question:
          '文字列配列 fruits の中で "orange" が存在するインデックスを探してください。',
        code: `
~~~ts
let fruits: string[] = ["apple", "banana", "cherry"];
~~~
`,
        answer: `
~~~ts
let fruits: string[] = ["apple", "banana", "cherry"];
let index = fruits.findIndex(fruit => fruit === "orange");
console.log(index); // -1
~~~
`,
      },
      {
        question:
          '配列 data の中で、空文字列 "" のインデックスを見つけて、結果を表示してください。',
        code: `
~~~ts
let data: string[] = ["a", "b", "", "d"];
~~~
`,
        answer: `
~~~ts
let data: string[] = ["a", "b", "", "d"];
let index = data.findIndex(x => x === "");
console.log(index); // 2
~~~
`,
      },
    ],
  },
  {
    id: 'array_type_10',
    title: EnumArray.INCLUDES,
    category: 'array_operations',
    questions: [
      {
        question: '配列 items に "pen" が含まれているか確認してください。',
        code: `
~~~ts
let items: string[] = ["book", "pen", "notebook"];
~~~
`,
        answer: `
~~~ts
let items: string[] = ["book", "pen", "notebook"];
let hasPen = items.includes("pen");
console.log(hasPen); // true
~~~
`,
      },
      {
        question: '配列 scores に数値 90 が含まれているか確認してください。',
        code: `
~~~ts
let scores: number[] = [85, 92, 88, 75];
~~~
`,
        answer: `
~~~ts
let scores: number[] = [85, 92, 88, 75];
let hasNinety = scores.includes(90);
console.log(hasNinety); // false
~~~
`,
      },
      {
        question:
          '配列 list に "apple" が含まれているかを調べ、結果を表示してください。',
        code: `
~~~ts
let list: string[] = ["orange", "banana", "grape"];
~~~
`,
        answer: `
~~~ts
let list: string[] = ["orange", "banana", "grape"];
let containsApple = list.includes("apple");
console.log(containsApple); // false
~~~
`,
      },
      {
        question:
          '配列 elements の中に数値 7 が含まれているか確認してください。',
        code: `
~~~ts
let elements: number[] = [3, 7, 2, 5];
~~~
`,
        answer: `
~~~ts
let elements: number[] = [3, 7, 2, 5];
let hasSeven = elements.includes(7);
console.log(hasSeven); // true
~~~
`,
      },
      {
        question:
          '配列 fruits に "kiwi" が含まれているかどうかを調べ、含まれていれば "Found" と表示してください。',
        code: `
~~~ts
let fruits: string[] = ["apple", "banana", "cherry"];
~~~
`,
        answer: `
~~~ts
let fruits: string[] = ["apple", "banana", "cherry"];
if (fruits.includes("kiwi")) {
  console.log("Found");
} else {
  console.log("Not found");
}
// 出力: "Not found"
~~~
`,
      },
    ],
  },
  {
    id: 'array_type_11',
    title: EnumArray.SOME,
    category: 'array_operations',
    questions: [
      {
        question:
          '配列 numbers の中に偶数が少なくとも1つあるかどうかを確認してください。',
        code: `
~~~ts
let numbers: number[] = [1, 3, 5, 7, 8];
~~~
`,
        answer: `
~~~ts
let numbers: number[] = [1, 3, 5, 7, 8];
let hasEven = numbers.some(x => x % 2 === 0);
console.log(hasEven); // true
~~~
`,
      },
      {
        question:
          '配列 words の中に "apple" が含まれているかどうかを調べてください。',
        code: `
~~~ts
let words: string[] = ["banana", "orange", "grape"];
~~~
`,
        answer: `
~~~ts
let words: string[] = ["banana", "orange", "grape"];
let containsApple = words.some(word => word === "apple");
console.log(containsApple); // false
~~~
`,
      },
      {
        question:
          '配列 temperatures の中に 30 度以上の温度が存在するかどうかを調べてください。',
        code: `
~~~ts
let temperatures: number[] = [15, 22, 28, 29, 30];
~~~
`,
        answer: `
~~~ts
let temperatures: number[] = [15, 22, 28, 29, 30];
let hasHotDay = temperatures.some(temp => temp >= 30);
console.log(hasHotDay); // true
~~~
`,
      },
      {
        question:
          '配列 items の中に null または undefined の要素が含まれているかどうかを確認してください。',
        code: `
~~~ts
let items: (string | null)[] = ["item1", "item2", null, "item4"];
~~~
`,
        answer: `
~~~ts
let items: (string | null)[] = ["item1", "item2", null, "item4"];
let hasNull = items.some(item => item === null || item === undefined);
console.log(hasNull); // true
~~~
`,
      },
      {
        question:
          '配列 prices の中に負の数値が存在するかどうかを調べてください。',
        code: `
~~~ts
let prices: number[] = [100, -50, 200, 150];
~~~
`,
        answer: `
~~~ts
let prices: number[] = [100, -50, 200, 150];
let hasNegative = prices.some(price => price < 0);
console.log(hasNegative); // true
~~~
`,
      },
    ],
  },
  {
    id: 'array_type_12',
    title: EnumArray.EVERY,
    category: 'array_operations',
    questions: [
      {
        question:
          '配列 numbers の全ての要素が正の数であるかどうかを確認してください。',
        code: `
~~~ts
let numbers: number[] = [1, 2, 3, 4, 5];
~~~
`,
        answer: `
~~~ts
let numbers: number[] = [1, 2, 3, 4, 5];
let allPositive = numbers.every(x => x > 0);
console.log(allPositive); // true
~~~
`,
      },
      {
        question:
          '配列 ages のすべての要素が18歳以上であるかどうかを確認してください。',
        code: `
~~~ts
let ages: number[] = [18, 20, 25, 30];
~~~
`,
        answer: `
~~~ts
let ages: number[] = [18, 20, 25, 30];
let allAdults = ages.every(age => age >= 18);
console.log(allAdults); // true
~~~
`,
      },
      {
        question:
          '配列 names の全ての要素が文字列型であるかどうかを確認してください。',
        code: `
~~~ts
let names: (string | number)[] = ["Alice", "Bob", "Charlie"];
~~~
`,
        answer: `
~~~ts
let names: (string | number)[] = ["Alice", "Bob", "Charlie"];
let allStrings = names.every(name => typeof name === 'string');
console.log(allStrings); // true
~~~
`,
      },
      {
        question:
          '配列 results の全ての要素が true であるかどうかを確認してください。',
        code: `
~~~ts
let results: boolean[] = [true, true, false, true];
~~~
`,
        answer: `
~~~ts
let results: boolean[] = [true, true, false, true];
let allTrue = results.every(result => result === true);
console.log(allTrue); // false
~~~
`,
      },
      {
        question:
          '配列 data の全ての数値が100以上であるかどうかを調べてください。',
        code: `
~~~ts
let data: number[] = [150, 200, 180, 220];
~~~
`,
        answer: `
~~~ts
let data: number[] = [150, 200, 180, 220];
let allAbove100 = data.every(value => value >= 100);
console.log(allAbove100); // true
~~~
`,
      },
    ],
  },
  {
    id: 'array_type_13',
    title: EnumArray.MAP,
    category: 'array_operations',
    questions: [
      {
        question:
          '配列 numbers の各要素に 2 を掛けた新しい配列を作成してください。',
        code: `
~~~ts
let numbers: number[] = [1, 2, 3, 4];
~~~
`,
        answer: `
~~~ts
let numbers: number[] = [1, 2, 3, 4];
let doubled = numbers.map(x => x * 2);
console.log(doubled); // [2, 4, 6, 8]
~~~
`,
      },
      {
        question:
          '配列 names の各要素を大文字に変換した新しい配列を作成してください。',
        code: `
~~~ts
let names: string[] = ["alice", "bob", "charlie"];
~~~
`,
        answer: `
~~~ts
let names: string[] = ["alice", "bob", "charlie"];
let uppercasedNames = names.map(name => name.toUpperCase());
console.log(uppercasedNames); // ["ALICE", "BOB", "CHARLIE"]
~~~
`,
      },
      {
        question:
          '配列 ages の各要素に 1 を加えた新しい配列を作成してください。',
        code: `
~~~ts
let ages: number[] = [20, 25, 30];
~~~
`,
        answer: `
~~~ts
let ages: number[] = [20, 25, 30];
let newAges = ages.map(age => age + 1);
console.log(newAges); // [21, 26, 31]
~~~
`,
      },
      {
        question:
          '配列 words の各要素の長さを格納する新しい配列を作成してください。',
        code: `
~~~ts
let words: string[] = ["apple", "banana", "cherry"];
~~~
`,
        answer: `
~~~ts
let words: string[] = ["apple", "banana", "cherry"];
let lengths = words.map(word => word.length);
console.log(lengths); // [5, 6, 6]
~~~
`,
      },
      {
        question:
          '配列 numbers の各要素の平方根を格納する新しい配列を作成してください。',
        code: `
~~~ts
let numbers: number[] = [1, 4, 9, 16];
~~~
`,
        answer: `
~~~ts
let numbers: number[] = [1, 4, 9, 16];
let roots = numbers.map(Math.sqrt);
console.log(roots); // [1, 2, 3, 4]
~~~
`,
      },
    ],
  },
  {
    id: 'array_type_14',
    title: EnumArray.FILTER,
    category: 'array_operations',
    questions: [
      {
        question:
          '配列 numbers の中から偶数のみを含む新しい配列を作成してください。',
        code: `
~~~ts
let numbers: number[] = [1, 2, 3, 4, 5, 6];
~~~
`,
        answer: `
~~~ts
let numbers: number[] = [1, 2, 3, 4, 5, 6];
let evens = numbers.filter(x => x % 2 === 0);
console.log(evens); // [2, 4, 6]
~~~
`,
      },
      {
        question:
          '配列 fruits の中から "a" を含む要素のみを含む新しい配列を作成してください。',
        code: `
~~~ts
let fruits: string[] = ["apple", "banana", "cherry", "date"];
~~~
`,
        answer: `
~~~ts
let fruits: string[] = ["apple", "banana", "cherry", "date"];
let containsA = fruits.filter(fruit => fruit.includes("a"));
console.log(containsA); // ["apple", "banana", "date"]
~~~
`,
      },
      {
        question:
          '配列 ages の中から 18 歳以上の要素のみを含む新しい配列を作成してください。',
        code: `
~~~ts
let ages: number[] = [16, 18, 21, 17, 30];
~~~
`,
        answer: `
~~~ts
let ages: number[] = [16, 18, 21, 17, 30];
let adults = ages.filter(age => age >= 18);
console.log(adults); // [18, 21, 30]
~~~
`,
      },
      {
        question:
          '配列 elements の中から空文字を除外した新しい配列を作成してください。',
        code: `
~~~ts
let elements: string[] = ["a", "", "b", "c", ""];
~~~
`,
        answer: `
~~~ts
let elements: string[] = ["a", "", "b", "c", ""];
let nonEmpty = elements.filter(element => element !== "");
console.log(nonEmpty); // ["a", "b", "c"]
~~~
`,
      },
      {
        question:
          '配列 temperatures の中から負の温度を除外した新しい配列を作成してください。',
        code: `
~~~ts
let temperatures: number[] = [22, -5, 15, -10, 30];
~~~
`,
        answer: `
~~~ts
let temperatures: number[] = [22, -5, 15, -10, 30];
let positiveTemps = temperatures.filter(temp => temp >= 0);
console.log(positiveTemps); // [22, 15, 30]
~~~
`,
      },
    ],
  },
  {
    id: 'array_type_15',
    title: EnumArray.REDUCE,
    category: 'array_operations',
    questions: [
      {
        question: '配列 numbers のすべての要素の合計を計算してください。',
        code: `
~~~ts
let numbers: number[] = [1, 2, 3, 4];
~~~
`,
        answer: `
~~~ts
let numbers: number[] = [1, 2, 3, 4];
let sum = numbers.reduce((acc, x) => acc + x, 0);
console.log(sum); // 10
~~~
`,
      },
      {
        question:
          '配列 prices のすべての要素を掛け合わせた結果を計算してください。',
        code: `
~~~ts
let prices: number[] = [10, 20, 30];
~~~
`,
        answer: `
~~~ts
let prices: number[] = [10, 20, 30];
let product = prices.reduce((acc, price) => acc * price, 1);
console.log(product); // 6000
~~~
`,
      },
      {
        question:
          '配列 strings のすべての要素を結合した文字列を生成してください。',
        code: `
~~~ts
let strings: string[] = ["Hello", " ", "world", "!"];
~~~
`,
        answer: `
~~~ts
let strings: string[] = ["Hello", " ", "world", "!"];
let sentence = strings.reduce((acc, str) => acc + str, "");
console.log(sentence); // "Hello world!"
~~~
`,
      },
      {
        question: '配列 numbers のすべての要素の最大値を求めてください。',
        code: `
~~~ts
let numbers: number[] = [5, 10, 15, 3, 8];
~~~
`,
        answer: `
~~~ts
let numbers: number[] = [5, 10, 15, 3, 8];
let max = numbers.reduce((acc, num) => Math.max(acc, num), numbers[0]);
console.log(max); // 15
~~~
`,
      },
      {
        question:
          '配列 letters の要素を一つのオブジェクトに集計して、各要素の出現回数をカウントしてください。',
        code: `
~~~ts
let letters: string[] = ["a", "b", "a", "c", "b", "a"];
~~~
`,
        answer: `
~~~ts
let letters: string[] = ["a", "b", "a", "c", "b", "a"];
let counts = letters.reduce((acc, letter) => {
  acc[letter] = (acc[letter] || 0) + 1;
  return acc;
}, {});
console.log(counts); // { a: 3, b: 2, c: 1 }
~~~
`,
      },
    ],
  },
  {
    id: 'array_type_16',
    title: EnumArray.REDUCERIGHT,
    category: 'array_operations',
    questions: [
      {
        question:
          '配列 numbers の要素を右から左に足していき、その合計を求めてください。',
        code: `
~~~ts
let numbers: number[] = [1, 2, 3, 4];
~~~
`,
        answer: `
~~~ts
let numbers: number[] = [1, 2, 3, 4];
let sum = numbers.reduceRight((acc, x) => acc + x, 0);
console.log(sum); // 10
~~~
`,
      },
      {
        question:
          '配列 words の要素を逆順に結合して、単一の文字列を作成してください。',
        code: `
~~~ts
let words: string[] = ["world", " ", "Hello"];
~~~
`,
        answer: `
~~~ts
let words: string[] = ["world", " ", "Hello"];
let sentence = words.reduceRight((acc, word) => acc + word, "");
console.log(sentence); // "Hello world"
~~~
`,
      },
      {
        question: '配列 items の要素を逆順に結合した文字列を生成してください。',
        code: `
~~~ts
let items: string[] = ["item1", "item2", "item3"];
~~~
`,
        answer: `
~~~ts
let items: string[] = ["item1", "item2", "item3"];
let combined = items.reduceRight((acc, item) => acc + item + " ", "");
console.log(combined.trim()); // "item3 item2 item1"
~~~
`,
      },
      {
        question:
          '配列 numbers を右から左に処理して、最小値を見つけてください。',
        code: `
~~~ts
let numbers: number[] = [7, 3, 9, 1, 5];
~~~
`,
        answer: `
~~~ts
let numbers: number[] = [7, 3, 9, 1, 5];
let min = numbers.reduceRight((acc, num) => Math.min(acc, num), numbers[0]);
console.log(min); // 1
~~~
`,
      },
      {
        question:
          '配列 characters のすべての要素を逆順で連結した新しい文字列を作成してください。',
        code: `
~~~ts
let characters: string[] = ["x", "y", "z"];
~~~
`,
        answer: `
~~~ts
let characters: string[] = ["x", "y", "z"];
let reversedString = characters.reduceRight((acc, char) => acc + char, "");
console.log(reversedString); // "zyx"
~~~
`,
      },
    ],
  },
  {
    id: 'array_type_17',
    title: EnumArray.FOREACH,
    category: 'array_operations',
    questions: [
      {
        question: '配列 numbers のすべての要素をコンソールに出力してください。',
        code: `
~~~ts
let numbers: number[] = [1, 2, 3, 4];
~~~
`,
        answer: `
~~~ts
let numbers: number[] = [1, 2, 3, 4];
numbers.forEach(num => console.log(num));
// 出力: 
// 1
// 2
// 3
// 4
~~~
`,
      },
      {
        question: '配列 words の各要素をコンソールに大文字で出力してください。',
        code: `
~~~ts
let words: string[] = ["apple", "banana", "cherry"];
~~~
`,
        answer: `
~~~ts
let words: string[] = ["apple", "banana", "cherry"];
words.forEach(word => console.log(word.toUpperCase()));
// 出力: 
// APPLE
// BANANA
// CHERRY
~~~
`,
      },
      {
        question:
          '配列 items の各要素に "!" を付けてコンソールに出力してください。',
        code: `
~~~ts
let items: string[] = ["item1", "item2", "item3"];
~~~
`,
        answer: `
~~~ts
let items: string[] = ["item1", "item2", "item3"];
items.forEach(item => console.log(item + "!"));
// 出力: 
// item1!
// item2!
// item3!
~~~
`,
      },
      {
        question:
          '配列 prices の各要素を10倍にしてコンソールに出力してください。',
        code: `
~~~ts
let prices: number[] = [10, 20, 30];
~~~
`,
        answer: `
~~~ts
let prices: number[] = [10, 20, 30];
prices.forEach(price => console.log(price * 10));
// 出力: 
// 100
// 200
// 300
~~~
`,
      },
      {
        question:
          '配列 grades の要素ごとにメッセージを生成し、コンソールに出力してください。',
        code: `
~~~ts
let grades: number[] = [85, 92, 88];
~~~
`,
        answer: `
~~~ts
let grades: number[] = [85, 92, 88];
grades.forEach(grade => console.log("Your grade is: " + grade));
// 出力: 
// Your grade is: 85
// Your grade is: 92
// Your grade is: 88
~~~
`,
      },
    ],
  },
  {
    id: 'array_type_18',
    title: EnumArray.SORT,
    category: 'array_operations',
    questions: [
      {
        question: '配列 numbers を昇順でソートしてください。',
        code: `
~~~ts
let numbers: number[] = [5, 2, 8, 1, 3];
~~~
`,
        answer: `
~~~ts
let numbers: number[] = [5, 2, 8, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 3, 5, 8]
~~~
`,
      },
      {
        question: '配列 names を辞書順でソートしてください。',
        code: `
~~~ts
let names: string[] = ["Charlie", "Alice", "Bob"];
~~~
`,
        answer: `
~~~ts
let names: string[] = ["Charlie", "Alice", "Bob"];
names.sort();
console.log(names); // ["Alice", "Bob", "Charlie"]
~~~
`,
      },
      {
        question: '配列 items の文字列長でソートしてください。',
        code: `
~~~ts
let items: string[] = ["apple", "banana", "fig"];
~~~
`,
        answer: `
~~~ts
let items: string[] = ["apple", "banana", "fig"];
items.sort((a, b) => a.length - b.length);
console.log(items); // ["fig", "apple", "banana"]
~~~
`,
      },
      {
        question: '配列 numbers を降順でソートしてください。',
        code: `
~~~ts
let numbers: number[] = [10, 5, 8, 3];
~~~
`,
        answer: `
~~~ts
let numbers: number[] = [10, 5, 8, 3];
numbers.sort((a, b) => b - a);
console.log(numbers); // [10, 8, 5, 3]
~~~
`,
      },
      {
        question:
          '配列 products を price プロパティの昇順でソートしてください。',
        code: `
~~~ts
let products: { name: string; price: number }[] = [
  { name: "Laptop", price: 800 },
  { name: "Phone", price: 600 },
  { name: "Tablet", price: 400 }
];
~~~
`,
        answer: `
~~~ts
let products: { name: string; price: number }[] = [
  { name: "Laptop", price: 800 },
  { name: "Phone", price: 600 },
  { name: "Tablet", price: 400 }
];
products.sort((a, b) => a.price - b.price);
console.log(products); 
// [
//   { name: "Tablet", price: 400 },
//   { name: "Phone", price: 600 },
//   { name: "Laptop", price: 800 }
// ]
~~~
`,
      },
    ],
  },
  {
    id: 'array_type_19',
    title: EnumArray.REVERSE,
    category: 'array_operations',
    questions: [
      {
        question: '配列 numbers の要素の順序を逆にしてください。',
        code: `
~~~ts
let numbers: number[] = [1, 2, 3, 4];
~~~
`,
        answer: `
~~~ts
let numbers: number[] = [1, 2, 3, 4];
numbers.reverse();
console.log(numbers); // [4, 3, 2, 1]
~~~
`,
      },
      {
        question: '配列 fruits の要素を逆順で表示してください。',
        code: `
~~~ts
let fruits: string[] = ["apple", "banana", "cherry"];
~~~
`,
        answer: `
~~~ts
let fruits: string[] = ["apple", "banana", "cherry"];
fruits.reverse();
console.log(fruits); // ["cherry", "banana", "apple"]
~~~
`,
      },
      {
        question: '配列 items の要素を逆順に並べ替えてください。',
        code: `
~~~ts
let items: number[] = [10, 20, 30];
~~~
`,
        answer: `
~~~ts
let items: number[] = [10, 20, 30];
items.reverse();
console.log(items); // [30, 20, 10]
~~~
`,
      },
      {
        question:
          '配列 characters の要素を逆順で連結した文字列を作成してください。',
        code: `
~~~ts
let characters: string[] = ["a", "b", "c"];
~~~
`,
        answer: `
~~~ts
let characters: string[] = ["a", "b", "c"];
let reversedString = characters.reverse().join("");
console.log(reversedString); // "cba"
~~~
`,
      },
      {
        question: '配列 sentences の順序を逆にして出力してください。',
        code: `
~~~ts
let sentences: string[] = ["Hello", "world", "from", "typescript"];
~~~
`,
        answer: `
~~~ts
let sentences: string[] = ["Hello", "world", "from", "typescript"];
sentences.reverse();
console.log(sentences); // ["typescript", "from", "world", "Hello"]
~~~
`,
      },
    ],
  },
  {
    id: 'array_type_20',
    title: EnumArray.CONCAT,
    category: 'array_operations',
    questions: [
      {
        question:
          '配列 array1 と array2 を結合して新しい配列を作成してください。',
        code: `
~~~ts
let array1: number[] = [1, 2, 3];
let array2: number[] = [4, 5, 6];
~~~
`,
        answer: `
~~~ts
let array1: number[] = [1, 2, 3];
let array2: number[] = [4, 5, 6];
let combined = array1.concat(array2);
console.log(combined); // [1, 2, 3, 4, 5, 6]
~~~
`,
      },
      {
        question:
          '配列 fruits と vegetables を結合して新しい配列を作成してください。',
        code: `
~~~ts
let fruits: string[] = ["apple", "banana"];
let vegetables: string[] = ["carrot", "lettuce"];
~~~
`,
        answer: `
~~~ts
let fruits: string[] = ["apple", "banana"];
let vegetables: string[] = ["carrot", "lettuce"];
let food = fruits.concat(vegetables);
console.log(food); // ["apple", "banana", "carrot", "lettuce"]
~~~
`,
      },
      {
        question: '3つの配列を結合して新しい配列を作成してください。',
        code: `
~~~ts
let a: number[] = [1, 2];
let b: number[] = [3, 4];
let c: number[] = [5, 6];
~~~
`,
        answer: `
~~~ts
let a: number[] = [1, 2];
let b: number[] = [3, 4];
let c: number[] = [5, 6];
let result = a.concat(b, c);
console.log(result); // [1, 2, 3, 4, 5, 6]
~~~
`,
      },
      {
        question:
          '文字列配列 words1 と words2 を結合して新しい配列を作成してください。',
        code: `
~~~ts
let words1: string[] = ["hello"];
let words2: string[] = ["world"];
~~~
`,
        answer: `
~~~ts
let words1: string[] = ["hello"];
let words2: string[] = ["world"];
let greeting = words1.concat(words2);
console.log(greeting); // ["hello", "world"]
~~~
`,
      },
      {
        question:
          '配列 data1 と data2 を結合し、その結果の配列を降順に並び替えてください。',
        code: `
~~~ts
let data1: number[] = [1, 5, 7];
let data2: number[] = [2, 6, 8];
~~~
`,
        answer: `
~~~ts
let data1: number[] = [1, 5, 7];
let data2: number[] = [2, 6, 8];
let combined = data1.concat(data2).sort((a, b) => b - a);
console.log(combined); // [8, 7, 6, 5, 2, 1]
~~~
`,
      },
    ],
  },
  {
    id: 'array_type_21',
    title: EnumArray.SLICE,
    category: 'array_operations',
    questions: [
      {
        question:
          '配列 numbers の最初の3つの要素を抽出した新しい配列を作成してください。',
        code: `
~~~ts
let numbers: number[] = [1, 2, 3, 4, 5];
~~~
`,
        answer: `
~~~ts
let numbers: number[] = [1, 2, 3, 4, 5];
let firstThree = numbers.slice(0, 3);
console.log(firstThree); // [1, 2, 3]
~~~
`,
      },
      {
        question:
          '配列 letters の最後の2つの要素を抽出した新しい配列を作成してください。',
        code: `
~~~ts
let letters: string[] = ["a", "b", "c", "d"];
~~~
`,
        answer: `
~~~ts
let letters: string[] = ["a", "b", "c", "d"];
let lastTwo = letters.slice(-2);
console.log(lastTwo); // ["c", "d"]
~~~
`,
      },
      {
        question:
          '配列 fruits の2番目から4番目までの要素を抽出した新しい配列を作成してください。',
        code: `
~~~ts
let fruits: string[] = ["apple", "banana", "cherry", "date"];
~~~
`,
        answer: `
~~~ts
let fruits: string[] = ["apple", "banana", "cherry", "date"];
let selectedFruits = fruits.slice(1, 4);
console.log(selectedFruits); // ["banana", "cherry", "date"]
~~~
`,
      },
      {
        question: '配列 data の全ての要素を新しい配列に複製してください。',
        code: `
~~~ts
let data: number[] = [1, 2, 3, 4];
~~~
`,
        answer: `
~~~ts
let data: number[] = [1, 2, 3, 4];
let copy = data.slice();
console.log(copy); // [1, 2, 3, 4]
~~~
`,
      },
      {
        question:
          '配列 items のインデックス1から最後までの要素を抽出した新しい配列を作成してください。',
        code: `
~~~ts
let items: string[] = ["first", "second", "third", "fourth"];
~~~
`,
        answer: `
~~~ts
let items: string[] = ["first", "second", "third", "fourth"];
let partialItems = items.slice(1);
console.log(partialItems); // ["second", "third", "fourth"]
~~~
`,
      },
    ],
  },
  {
    id: 'array_type_22',
    title: EnumArray.LENGTH,
    category: 'array_operations',
    questions: [
      {
        question: '配列 numbers の要素数を取得してください。',
        code: `
~~~ts
let numbers: number[] = [1, 2, 3, 4, 5];
~~~
`,
        answer: `
~~~ts
let numbers: number[] = [1, 2, 3, 4, 5];
let length = numbers.length;
console.log(length); // 5
~~~
`,
      },
      {
        question: '配列 words の長さを取得し、その結果を表示してください。',
        code: `
~~~ts
let words: string[] = ["hello", "world"];
~~~
`,
        answer: `
~~~ts
let words: string[] = ["hello", "world"];
console.log(words.length); // 2
~~~
`,
      },
      {
        question:
          '配列 items に新しい要素を追加した後、その長さを表示してください。',
        code: `
~~~ts
let items: string[] = ["apple", "banana"];
~~~
`,
        answer: `
~~~ts
let items: string[] = ["apple", "banana"];
items.push("cherry");
console.log(items.length); // 3
~~~
`,
      },
      {
        question: '配列 elements の長さが 5 以上かどうかを確認してください。',
        code: `
~~~ts
let elements: number[] = [10, 20, 30];
~~~
`,
        answer: `
~~~ts
let elements: number[] = [10, 20, 30];
let isLongEnough = elements.length >= 5;
console.log(isLongEnough); // false
~~~
`,
      },
      {
        question:
          '配列 characters の長さが 0 であるかを確認し、その結果を表示してください。',
        code: `
~~~ts
let characters: string[] = [];
~~~
`,
        answer: `
~~~ts
let characters: string[] = [];
let isEmpty = characters.length === 0;
console.log(isEmpty); // true
~~~
`,
      },
    ],
  },
  {
    id: 'array_type_23',
    title: EnumArray.JOIN,
    category: 'array_operations',
    questions: [
      {
        question:
          '配列 words のすべての要素をスペースで結合した文字列を生成してください。',
        code: `
~~~ts
let words: string[] = ["Hello", "world"];
~~~
`,
        answer: `
~~~ts
let words: string[] = ["Hello", "world"];
let sentence = words.join(" ");
console.log(sentence); // "Hello world"
~~~
`,
      },
      {
        question:
          '配列 numbers のすべての要素をカンマで結合した文字列を生成してください。',
        code: `
~~~ts
let numbers: number[] = [1, 2, 3, 4, 5];
~~~
`,
        answer: `
~~~ts
let numbers: number[] = [1, 2, 3, 4, 5];
let joinedNumbers = numbers.join(", ");
console.log(joinedNumbers); // "1, 2, 3, 4, 5"
~~~
`,
      },
      {
        question:
          '配列 items のすべての要素をハイフンで結合した文字列を生成してください。',
        code: `
~~~ts
let items: string[] = ["item1", "item2", "item3"];
~~~
`,
        answer: `
~~~ts
let items: string[] = ["item1", "item2", "item3"];
let combinedItems = items.join("-");
console.log(combinedItems); // "item1-item2-item3"
~~~
`,
      },
      {
        question:
          '配列 fruits のすべての要素を空文字で結合した文字列を生成してください。',
        code: `
~~~ts
let fruits: string[] = ["apple", "banana", "cherry"];
~~~
`,
        answer: `
~~~ts
let fruits: string[] = ["apple", "banana", "cherry"];
let fruitString = fruits.join("");
console.log(fruitString); // "applebananacherry"
~~~
`,
      },
      {
        question:
          '配列 letters のすべての要素を " | " で区切って結合した文字列を生成してください。',
        code: `
~~~ts
let letters: string[] = ["A", "B", "C"];
~~~
`,
        answer: `
~~~ts
let letters: string[] = ["A", "B", "C"];
let formattedLetters = letters.join(" | ");
console.log(formattedLetters); // "A | B | C"
~~~
`,
      },
    ],
  },
  {
    id: 'array_type_24',
    title: EnumArray.FILL,
    category: 'array_operations',
    questions: [
      {
        question: '配列 numbers をすべて 0 で埋めてください。',
        code: `
~~~ts
let numbers: number[] = [1, 2, 3, 4];
~~~
`,
        answer: `
~~~ts
let numbers: number[] = [1, 2, 3, 4];
numbers.fill(0);
console.log(numbers); // [0, 0, 0, 0]
~~~
`,
      },
      {
        question:
          '配列 items のインデックス 1 から 3 までを "empty" で埋めてください。',
        code: `
~~~ts
let items: string[] = ["filled", "filled", "filled", "filled"];
~~~
`,
        answer: `
~~~ts
let items: string[] = ["filled", "filled", "filled", "filled"];
items.fill("empty", 1, 3);
console.log(items); // ["filled", "empty", "empty", "filled"]
~~~
`,
      },
      {
        question: '配列 data を5で埋めてください。',
        code: `
~~~ts
let data: number[] = new Array(3);
~~~
`,
        answer: `
~~~ts
let data: number[] = new Array(3);
data.fill(5);
console.log(data); // [5, 5, 5]
~~~
`,
      },
      {
        question: '配列 letters の最初の2つの要素を "A" で埋めてください。',
        code: `
~~~ts
let letters: string[] = ["B", "C", "D", "E"];
~~~
`,
        answer: `
~~~ts
let letters: string[] = ["B", "C", "D", "E"];
letters.fill("A", 0, 2);
console.log(letters); // ["A", "A", "D", "E"]
~~~
`,
      },
      {
        question: '配列 values の要素を全て "X" に置き換えてください。',
        code: `
~~~ts
let values: string[] = ["one", "two", "three"];
~~~
`,
        answer: `
~~~ts
let values: string[] = ["one", "two", "three"];
values.fill("X");
console.log(values); // ["X", "X", "X"]
~~~
`,
      },
    ],
  },
  {
    id: 'array_type_25',
    title: EnumArray.FLAT,
    category: 'array_operations',
    questions: [
      {
        question:
          '配列 arrays をフラット化して 1 次元の配列を作成してください。',
        code: `
~~~ts
let arrays: number[][] = [[1, 2], [3, 4], [5, 6]];
~~~
`,
        answer: `
~~~ts
let arrays: number[][] = [[1, 2], [3, 4], [5, 6]];
let flatArray = arrays.flat();
console.log(flatArray); // [1, 2, 3, 4, 5, 6]
~~~
`,
      },
      {
        question:
          'ネストされた配列 nestedArray を1レベルだけフラット化してください。',
        code: `
~~~ts
let nestedArray: any[] = [1, [2, 3], [4, [5, 6]]];
~~~
`,
        answer: `
~~~ts
let nestedArray: any[] = [1, [2, 3], [4, [5, 6]]];
let flatOnce = nestedArray.flat();
console.log(flatOnce); // [1, 2, 3, 4, [5, 6]]
~~~
`,
      },
      {
        question:
          '深くネストされた配列 deepArray を完全にフラット化してください。',
        code: `
~~~ts
let deepArray: any[] = [1, [2, [3, [4, 5]]]];
~~~
`,
        answer: `
~~~ts
let deepArray: any[] = [1, [2, [3, [4, 5]]]];
let fullyFlat = deepArray.flat(Infinity);
console.log(fullyFlat); // [1, 2, 3, 4, 5]
~~~
`,
      },
      {
        question:
          '3次元配列 threeDimArray を1次元の配列にフラット化してください。',
        code: `
~~~ts
let threeDimArray: number[][][] = [[[1, 2]], [[3, 4]], [[5, 6]]];
~~~
`,
        answer: `
~~~ts
let threeDimArray: number[][][] = [[[1, 2]], [[3, 4]], [[5, 6]]];
let flatArray = threeDimArray.flat(2);
console.log(flatArray); // [1, 2, 3, 4, 5, 6]
~~~
`,
      },
      {
        question:
          '配列 mixedArray をフラット化して、1次元配列を作成してください。',
        code: `
~~~ts
let mixedArray: any[] = ["a", ["b", "c"], [["d", "e"]]];
~~~
`,
        answer: `
~~~ts
let mixedArray: any[] = ["a", ["b", "c"], [["d", "e"]]];
let flatMixed = mixedArray.flat(2);
console.log(flatMixed); // ["a", "b", "c", "d", "e"]
~~~
`,
      },
    ],
  },
  {
    id: 'array_type_26',
    title: EnumArray.FLATMAP,
    category: 'array_operations',
    questions: [
      {
        question:
          '配列 numbers の各要素を2倍にして新しいフラットな配列を作成してください。',
        code: `
~~~ts
let numbers: number[] = [1, 2, 3];
~~~
`,
        answer: `
~~~ts
let numbers: number[] = [1, 2, 3];
let doubledFlat = numbers.flatMap(x => [x * 2]);
console.log(doubledFlat); // [2, 4, 6]
~~~
`,
      },
      {
        question:
          '文字列配列 words の各要素に "!" を追加して、新しいフラットな配列を作成してください。',
        code: `
~~~ts
let words: string[] = ["hi", "hello"];
~~~
`,
        answer: `
~~~ts
let words: string[] = ["hi", "hello"];
let exclaimWords = words.flatMap(word => [word + "!"]);
console.log(exclaimWords); // ["hi!", "hello!"]
~~~
`,
      },
      {
        question:
          '配列 values の各要素を3倍にして、フラットな配列を作成してください。',
        code: `
~~~ts
let values: number[] = [1, 2];
~~~
`,
        answer: `
~~~ts
let values: number[] = [1, 2];
let tripledFlat = values.flatMap(x => [x * 3]);
console.log(tripledFlat); // [3, 6]
~~~
`,
      },
      {
        question:
          '配列 chars の各文字に対して、フラットな配列で複製を作成してください。',
        code: `
~~~ts
let chars: string[] = ["a", "b"];
~~~
`,
        answer: `
~~~ts
let chars: string[] = ["a", "b"];
let replicated = chars.flatMap(char => [char, char]);
console.log(replicated); // ["a", "a", "b", "b"]
~~~
`,
      },
      {
        question:
          '配列 items の各要素をフラットにして、配列の長さを2倍にしてください。',
        code: `
~~~ts
let items: number[] = [1, 2, 3];
~~~
`,
        answer: `
~~~ts
let items: number[] = [1, 2, 3];
let duplicatedItems = items.flatMap(item => [item, item]);
console.log(duplicatedItems); // [1, 1, 2, 2, 3, 3]
~~~
`,
      },
    ],
  },
  {
    id: 'array_type_27',
    title: EnumArray.COPYWITHIN,
    category: 'array_operations',
    questions: [
      {
        question:
          '配列 numbers の要素をコピーし、インデックス2から配置してください。',
        code: `
~~~ts
let numbers: number[] = [1, 2, 3, 4, 5];
~~~
`,
        answer: `
~~~ts
let numbers: number[] = [1, 2, 3, 4, 5];
numbers.copyWithin(2);
console.log(numbers); // [1, 2, 1, 2, 3]
~~~
`,
      },
      {
        question:
          '配列 items の要素をインデックス1から3までコピーし、インデックス3から配置してください。',
        code: `
~~~ts
let items: string[] = ["a", "b", "c", "d", "e"];
~~~
`,
        answer: `
~~~ts
let items: string[] = ["a", "b", "c", "d", "e"];
items.copyWithin(3, 1, 3);
console.log(items); // ["a", "b", "c", "b", "c"]
~~~
`,
      },
      {
        question:
          '配列 fruits の要素をインデックス2からコピーし、インデックス0から配置してください。',
        code: `
~~~ts
let fruits: string[] = ["apple", "banana", "cherry", "date"];
~~~
`,
        answer: `
~~~ts
let fruits: string[] = ["apple", "banana", "cherry", "date"];
fruits.copyWithin(0, 2);
console.log(fruits); // ["cherry", "date", "cherry", "date"]
~~~
`,
      },
      {
        question:
          '配列 elements の要素をインデックス0から2までコピーし、インデックス2から配置してください。',
        code: `
~~~ts
let elements: string[] = ["x", "y", "z"];
~~~
`,
        answer: `
~~~ts
let elements: string[] = ["x", "y", "z"];
elements.copyWithin(2, 0, 2);
console.log(elements); // ["x", "y", "x"]
~~~
`,
      },
      {
        question:
          '配列 data の要素をインデックス1からコピーし、インデックス0から配置してください。',
        code: `
~~~ts
let data: number[] = [10, 20, 30, 40, 50];
~~~
`,
        answer: `
~~~ts
let data: number[] = [10, 20, 30, 40, 50];
data.copyWithin(0, 1);
console.log(data); // [20, 30, 40, 50, 50]
~~~
`,
      },
    ],
  },
]

export const arrayQuestionIds = arrayQuestions.map((question) => question.id)
