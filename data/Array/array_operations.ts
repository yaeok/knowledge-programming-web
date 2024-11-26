import { EnumArray } from '@/data/Array/ArrayType'
import { OperationCategory } from '@/domain/entity/operation'

export const arrayOperations: OperationCategory[] = [
  {
    id: 'array_operations_1',
    title: '1. 配列の要素を追加/削除',
    category: 'array_operations',
    functions: [
      {
        id: 'array_type_1',
        name: EnumArray.PUSH,
        description: '配列の末尾に要素を追加します。',
        return: '追加後の新しい配列の長さ',
        code: `~~~ts
let fruits = ['Apple', 'Banana'];
fruits.push('Cherry');
console.log(fruits); // ["Apple", "Banana", "Cherry"]
~~~`,
      },
      {
        id: 'array_type_2',
        name: EnumArray.POP,
        description: '配列の末尾の要素を削除し、その要素を返します。',
        return: '削除された要素',
        code: `~~~ts
let numbers = [1, 2, 3];
let lastElement = numbers.pop();
console.log(lastElement); // 3
~~~`,
      },
      {
        id: 'array_type_3',
        name: EnumArray.UNSHIFT,
        description: '配列の先頭に要素を追加します。',
        return: '追加後の新しい配列の長さ',
        code: `~~~ts
let numbers = [2, 3, 4];
numbers.unshift(1);
console.log(numbers); // [1, 2, 3, 4]
~~~`,
      },
      {
        id: 'array_type_4',
        name: EnumArray.SHIFT,
        description: '配列の先頭の要素を削除し、その要素を返します。',
        return: '削除された要素',
        code: `~~~ts
let numbers = [1, 2, 3];
let firstElement = numbers.shift();
console.log(firstElement); // 1
~~~`,
      },
      {
        id: 'array_type_5',
        name: EnumArray.SPLICE,
        description: '配列の任意の位置に要素を追加または削除します。',
        return: '削除された要素の配列',
        code: `~~~ts
let numbers = [1, 3, 4];
numbers.splice(1, 0, 2);
console.log(numbers); // [1, 2, 3, 4]
~~~`,
      },
    ],
  },
  {
    id: 'array_operations_2',
    title: '2. 配列の要素を探索',
    category: 'array_operations',
    functions: [
      {
        id: 'array_type_6',
        name: EnumArray.INDEXOF,
        description:
          '指定された要素の最初のインデックスを返します。存在しない場合は -1 を返します。',
        return: '要素のインデックスまたは -1',
        code: `~~~ts
let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits.indexOf('banana')); // 1
console.log(fruits.indexOf('orange')); // -1
~~~`,
      },
      {
        id: 'array_type_7',
        name: EnumArray.LASTINDEXOF,
        description:
          '指定された要素の最後のインデックスを返します。存在しない場合は -1 を返します。',
        return: '要素のインデックスまたは -1',
        code: `~~~ts
let numbers = [1, 2, 3, 2, 1];
console.log(numbers.lastIndexOf(2)); // 3
~~~`,
      },
      {
        id: 'array_type_8',
        name: EnumArray.FIND,
        description:
          '条件に一致する最初の要素を返します。条件に一致する要素がない場合は undefined を返します。',
        return: '最初に条件に一致した要素または undefined',
        code: `~~~ts
let numbers = [1, 2, 3, 4];
let firstEven = numbers.find(x => x % 2 === 0);
console.log(firstEven); // 2
~~~`,
      },
      {
        id: 'array_type_9',
        name: EnumArray.FINDINDEX,
        description:
          '条件に一致する最初の要素のインデックスを返します。条件に一致する要素がない場合は -1 を返します。',
        return: '条件に一致した要素のインデックスまたは -1',
        code: `~~~ts
let numbers = [1, 3, 5, 7, 6];
let firstEvenIndex = numbers.findIndex(x => x % 2 === 0);
console.log(firstEvenIndex); // 4
~~~`,
      },
      {
        id: 'array_type_10',
        name: EnumArray.INCLUDES,
        description:
          '指定された要素が配列に存在するかを true または false で返します。',
        return: '指定された要素が存在するかどうかの真偽値',
        code: `~~~ts
let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits.includes('banana')); // true
console.log(fruits.includes('orange')); // false
~~~`,
      },
      {
        id: 'array_type_11',
        name: EnumArray.SOME,
        description:
          '条件に一致する要素が少なくとも1つあるかを判定し、結果を true または false で返します。',
        return: '条件に一致する要素があるかどうかの真偽値',
        code: `~~~ts
let numbers = [1, 3, 5, 7, 8];
console.log(numbers.some(x => x % 2 === 0)); // true
~~~`,
      },
      {
        id: 'array_type_12',
        name: EnumArray.EVERY,
        description:
          '配列内のすべての要素が条件を満たすかを判定し、結果を true または false で返します。',
        return: 'すべての要素が条件を満たすかどうかの真偽値',
        code: `~~~ts
let numbers = [2, 4, 6, 8, 10];
console.log(numbers.every(x => x % 2 === 0)); // true
~~~`,
      },
    ],
  },
  {
    id: 'array_operations_3',
    title: '3. 配列の要素を変換/操作',
    category: 'array_operations',
    functions: [
      {
        id: 'array_type_13',
        name: EnumArray.MAP,
        description: '配列の各要素に対して関数を実行し、新しい配列を返します。',
        return: '変換された新しい配列',
        code: `~~~ts
let numbers = [1, 2, 3, 4];
let doubled = numbers.map(x => x * 2);
console.log(doubled); // [2, 4, 6, 8]
~~~`,
      },
      {
        id: 'array_type_14',
        name: EnumArray.FILTER,
        description: '条件に一致する要素のみを含む新しい配列を返します。',
        return: '条件に一致する要素の新しい配列',
        code: `~~~ts
let numbers = [1, 2, 3, 4, 5];
let evens = numbers.filter(x => x % 2 === 0);
console.log(evens); // [2, 4]
~~~`,
      },
      {
        id: 'array_type_15',
        name: EnumArray.REDUCE,
        description:
          '配列の各要素に対して関数を実行し、1つの累積値を返します。',
        return: '累積結果の値',
        code: `~~~ts
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc, x) => acc + x, 0);
console.log(sum); // 10
~~~`,
      },
      {
        id: 'array_type_16',
        name: EnumArray.REDUCERIGHT,
        description: 'reduce() と同様ですが、右から左に実行します。',
        return: '累積結果の値',
        code: `~~~ts
let numbers = [1, 2, 3, 4];
let sum = numbers.reduceRight((acc, x) => acc + x, 0);
console.log(sum); // 10
~~~`,
      },
      {
        id: 'array_type_17',
        name: EnumArray.FOREACH,
        description:
          '配列の各要素に対して関数を実行します。新しい配列は返しません。',
        return: 'なし（undefined）',
        code: `~~~ts
let numbers = [1, 2, 3, 4];
numbers.forEach(x => console.log(x));
// 出力:
// 1
// 2
// 3
// 4
~~~`,
      },
    ],
  },
  {
    id: 'array_operations_4',
    title: '4. 配列の要素を並び替え',
    category: 'array_operations',
    functions: [
      {
        id: 'array_type_18',
        name: EnumArray.SORT,
        description: '配列の要素をソートします。',
        return: 'ソート後の同じ配列（破壊的操作）',
        code: `~~~ts
let fruits = ['cherry', 'banana', 'apple'];
fruits.sort();
console.log(fruits); // ["apple", "banana", "cherry"]
~~~`,
      },
      {
        id: 'array_type_19',
        name: EnumArray.REVERSE,
        description: '配列の要素の順序を逆にします。',
        return: '順序が逆になった同じ配列（破壊的操作）',
        code: `~~~ts
let numbers = [1, 2, 3, 4];
numbers.reverse();
console.log(numbers); // [4, 3, 2, 1]
~~~`,
      },
    ],
  },
  {
    id: 'array_operations_5',
    title: '5. 配列のコピーや結合',
    category: 'array_operations',
    functions: [
      {
        id: 'array_type_20',
        name: EnumArray.CONCAT,
        description: '2つ以上の配列を結合し、新しい配列を返します。',
        return: '結合された新しい配列',
        code: `~~~ts
let array1 = ['a', 'b'];
let array2 = ['c', 'd'];
let combined = array1.concat(array2);
console.log(combined); // ["a", "b", "c", "d"]
~~~`,
      },
      {
        id: 'array_type_21',
        name: EnumArray.SLICE,
        description: '配列の一部を抽出し、新しい配列を返します。',
        return: '指定した部分の新しい配列',
        code: `~~~ts
let numbers = [1, 2, 3, 4, 5];
let middle = numbers.slice(1, 4);
console.log(middle); // [2, 3, 4]
~~~`,
      },
    ],
  },
  {
    id: 'array_operations_6',
    title: '6. 配列の情報取得',
    category: 'array_operations',
    functions: [
      {
        id: 'array_type_22',
        name: EnumArray.LENGTH,
        description: '配列の要素数を返します。',
        return: '配列の要素数（数値）',
        code: `~~~ts
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.length); // 5
~~~`,
      },
      {
        id: 'array_type_23',
        name: EnumArray.JOIN,
        description:
          '配列のすべての要素を文字列に結合し、1つの文字列を返します。',
        return: '結合された文字列',
        code: `~~~ts
let elements = ['Fire', 'Air', 'Water'];
let joined = elements.join(', ');
console.log(joined); // "Fire, Air, Water"
~~~`,
      },
    ],
  },
  {
    id: 'array_operations_7',
    title: '7. 配列の操作を支援する関数',
    category: 'array_operations',
    functions: [
      {
        id: 'array_type_24',
        name: EnumArray.FILL,
        description: '配列のすべての要素を指定された値で埋めます。',
        return: '指定した値で埋められた同じ配列（破壊的操作）',
        code: `~~~ts
let numbers = [1, 2, 3, 4, 5];
numbers.fill(0);
console.log(numbers); // [0, 0, 0, 0, 0]
~~~`,
      },
      {
        id: 'array_type_25',
        name: EnumArray.FLAT,
        description: '多次元配列をフラットな1次元配列に変換します。',
        return: 'フラット化された新しい配列',
        code: `~~~ts
let arrays = [[1, 2], [3, 4], [5, 6]];
let flat = arrays.flat();
console.log(flat); // [1, 2, 3, 4, 5, 6]
~~~`,
      },
      {
        id: 'array_type_26',
        name: EnumArray.FLATMAP,
        description: 'map() した後に flat() を適用します。',
        return: 'フラット化された新しい配列',
        code: `~~~ts
let numbers = [1, 2, 3];
let doubledAndFlat = numbers.flatMap(x => [x * 2]);
console.log(doubledAndFlat); // [2, 4, 6]
~~~`,
      },
      {
        id: 'array_type_27',
        name: EnumArray.COPYWITHIN,
        description: '配列内の要素を別の位置にコピーします。',
        return: '要素がコピーされた同じ配列（破壊的操作）',
        code: `~~~ts
let numbers = [1, 2, 3, 4, 5];
numbers.copyWithin(0, 3);
console.log(numbers); // [4, 5, 3, 4, 5]
~~~`,
      },
    ],
  },
]

// idだけを取り出した配列
export const arrayOperationsId = arrayOperations.map(
  (operation) => operation.id
)
