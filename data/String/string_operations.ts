import { OperationCategory } from '@/domain/entity/operation'

export const stringOperations: OperationCategory[] = [
  {
    id: 'string_operations_1',
    title: '1. 文字列の検索',
    category: 'string_operations',
    functions: [
      {
        id: 'string_type_1',
        name: 'indexOf()',
        description:
          '指定された文字列が最初に現れる位置のインデックスを返します。見つからない場合は -1 を返します。',
        return: '文字列のインデックスまたは -1',
        code: `~~~ts
let str = 'Hello, world!';
console.log(str.indexOf('world')); // 出力: 7
console.log(str.indexOf('notfound')); // 出力: -1
~~~`,
      },
      {
        id: 'string_type_2',
        name: 'lastIndexOf()',
        description:
          '指定された文字列が最後に現れる位置のインデックスを返します。見つからない場合は -1 を返します。',
        return: '文字列のインデックスまたは -1',
        code: `~~~ts
let str = 'Hello, world! Hello!';
console.log(str.lastIndexOf('Hello')); // 出力: 13
console.log(str.lastIndexOf('notfound')); // 出力: -1
~~~`,
      },
      {
        id: 'string_type_3',
        name: 'includes()',
        description:
          '指定された文字列が存在するかどうかを判定し、true または false を返します。',
        return: '指定された文字列が存在するかどうかの真偽値',
        code: `~~~ts
let str = 'Hello, world!';
console.log(str.includes('world')); // 出力: true
console.log(str.includes('notfound')); // 出力: false
~~~`,
      },
      {
        id: 'string_type_4',
        name: 'startsWith()',
        description:
          '文字列が指定された文字列で始まるかどうかを判定し、true または false を返します。',
        return: '指定された文字列で始まるかどうかの真偽値',
        code: `~~~ts
let str = 'Hello, world!';
console.log(str.startsWith('Hello')); // 出力: true
console.log(str.startsWith('world')); // 出力: false
~~~`,
      },
      {
        id: 'string_type_5',
        name: 'endsWith()',
        description:
          '文字列が指定された文字列で終わるかどうかを判定し、true または false を返します。',
        return: '指定された文字列で終わるかどうかの真偽値',
        code: `~~~ts
let str = 'Hello, world!';
console.log(str.endsWith('world!')); // 出力: true
console.log(str.endsWith('Hello')); // 出力: false
~~~`,
      },
      {
        id: 'string_type_6',
        name: 'search()',
        description:
          '正規表現で指定されたパターンを検索し、最初にマッチする位置のインデックスを返します。見つからない場合は -1 を返します。',
        return: '正規表現にマッチする位置のインデックスまたは -1',
        code: `~~~ts
let str = 'Hello, world!';
console.log(str.search(/world/)); // 出力: 7
console.log(str.search(/notfound/)); // 出力: -1
~~~`,
      },
    ],
  },
  {
    id: 'string_operations_2',
    title: '2. 文字列の抽出',
    category: 'string_operations',
    functions: [
      {
        id: 'string_type_7',
        name: 'slice()',
        description: '指定した開始位置から終了位置までの部分文字列を返します。',
        return: '部分文字列',
        code: `~~~ts
let str = 'Hello, world!';
console.log(str.slice(0, 5)); // 出力: "Hello"
console.log(str.slice(7)); // 出力: "world!"
~~~`,
      },
      {
        id: 'string_type_8',
        name: 'substring()',
        description: '指定した開始位置と終了位置の間の部分文字列を返します。',
        return: '部分文字列',
        code: `~~~ts
let str = 'Hello, world!';
console.log(str.substring(0, 5)); // 出力: "Hello"
console.log(str.substring(7)); // 出力: "world!"
~~~`,
      },
      {
        id: 'string_type_9',
        name: 'substr()',
        description:
          '指定した位置から指定した長さの部分文字列を返します（非推奨）。',
        return: '部分文字列',
        code: `~~~ts
let str = 'Hello, world!';
console.log(str.substr(0, 5)); // 出力: "Hello"
console.log(str.substr(7, 5)); // 出力: "world"
~~~`,
      },
      {
        id: 'string_type_10',
        name: 'charAt()',
        description: '指定したインデックスの文字を返します。',
        return: '文字',
        code: `~~~ts
let str = 'Hello, world!';
console.log(str.charAt(0)); // 出力: "H"
console.log(str.charAt(7)); // 出力: "w"
~~~`,
      },
      {
        id: 'string_type_11',
        name: 'charCodeAt()',
        description: '指定したインデックスの文字のUnicode値を返します。',
        return: 'Unicode値（数値）',
        code: `~~~ts
let str = 'Hello';
console.log(str.charCodeAt(0)); // 出力: 72
console.log(str.charCodeAt(1)); // 出力: 101
~~~`,
      },
    ],
  },
  {
    id: 'string_operations_3',
    title: '3. 文字列の変換',
    category: 'string_operations',
    functions: [
      {
        id: 'string_type_12',
        name: 'toLowerCase()',
        description: '文字列を小文字に変換して返します。',
        return: '小文字に変換された文字列',
        code: `~~~ts
let str = 'Hello, World!';
console.log(str.toLowerCase()); // 出力: "hello, world!"
~~~`,
      },
      {
        id: 'string_type_13',
        name: 'toUpperCase()',
        description: '文字列を大文字に変換して返します。',
        return: '大文字に変換された文字列',
        code: `~~~ts
let str = 'Hello, World!';
console.log(str.toUpperCase()); // 出力: "HELLO, WORLD!"
~~~`,
      },
      {
        id: 'string_type_14',
        name: 'trim()',
        description: '文字列の先頭と末尾の空白を削除して返します。',
        return: '空白が削除された文字列',
        code: `~~~ts
let str = '   Hello, World!   ';
console.log(str.trim()); // 出力: "Hello, World!"
~~~`,
      },
      {
        id: 'string_type_15',
        name: 'trimStart()',
        description: '文字列の先頭の空白を削除して返します。',
        return: '先頭の空白が削除された文字列',
        code: `~~~ts
let str = '   Hello, World!   ';
console.log(str.trimStart()); // 出力: "Hello, World!   "
~~~`,
      },
      {
        id: 'string_type_16',
        name: 'trimEnd()',
        description: '文字列の末尾の空白を削除して返します。',
        return: '末尾の空白が削除された文字列',
        code: `~~~ts
let str = '   Hello, World!   ';
console.log(str.trimEnd()); // 出力: "   Hello, World!"
~~~`,
      },
    ],
  },
  {
    id: 'string_operations_4',
    title: '4. 文字列の操作',
    category: 'string_operations',
    functions: [
      {
        id: 'string_type_17',
        name: 'concat()',
        description: '2つ以上の文字列を結合して新しい文字列を返します。',
        return: '結合された新しい文字列',
        code: `~~~ts
let str1 = 'Hello';
let str2 = 'World';
console.log(str1.concat(', ', str2, '!')); // 出力: "Hello, World!"
~~~`,
      },
      {
        id: 'string_type_18',
        name: 'repeat()',
        description: '文字列を指定した回数繰り返して新しい文字列を返します。',
        return: '繰り返された新しい文字列',
        code: `~~~ts
let str = 'Hello';
console.log(str.repeat(3)); // 出力: "HelloHelloHello"
~~~`,
      },
      {
        id: 'string_type_19',
        name: 'replace()',
        description:
          '指定した文字列または正規表現に一致する部分を、新しい文字列で置き換えます。',
        return: '置き換えられた新しい文字列',
        code: `~~~ts
let str = 'Hello, World!';
console.log(str.replace('World', 'JavaScript')); // 出力: "Hello, JavaScript!"
~~~`,
      },
      {
        id: 'string_type_20',
        name: 'replaceAll()',
        description:
          '指定した文字列または正規表現に一致するすべての部分を、新しい文字列で置き換えます。',
        return: 'すべて置き換えられた新しい文字列',
        code: `~~~ts
let str = 'Hello, World! World!';
console.log(str.replaceAll('World', 'JavaScript')); // 出力: "Hello, JavaScript! JavaScript!"
~~~`,
      },
      {
        id: 'string_type_21',
        name: 'split()',
        description:
          '指定した文字列や正規表現に基づいて、文字列を複数の部分に分割し、配列として返します。',
        return: '文字列の配列',
        code: `~~~ts
let str = 'Hello, World!';
console.log(str.split(', ')); // 出力: ["Hello", "World!"]
~~~`,
      },
      {
        id: 'string_type_22',
        name: 'padStart()',
        description:
          '指定した長さになるように文字列の先頭に指定した文字を追加します。',
        return: '指定した文字で埋められた文字列',
        code: `~~~ts
let str = '5';
console.log(str.padStart(3, '0')); // 出力: "005"
~~~`,
      },
      {
        id: 'string_type_23',
        name: 'padEnd()',
        description:
          '指定した長さになるように文字列の末尾に指定した文字を追加します。',
        return: '指定した文字で埋められた文字列',
        code: `~~~ts
let str = '5';
console.log(str.padEnd(3, '0')); // 出力: "500"
~~~`,
      },
    ],
  },
  {
    id: 'string_operations_5',
    title: '5. 正規表現の使用',
    category: 'string_operations',
    functions: [
      {
        id: 'string_type_24',
        name: 'match()',
        description: '正規表現に一致する文字列を検索し、結果を配列で返します。',
        return: '一致した結果の配列またはnull',
        code: `~~~ts
let str = 'Hello, world!';
console.log(str.match(/world/)); // 出力: ["world"]
~~~`,
      },
      {
        id: 'string_type_25',
        name: 'matchAll()',
        description:
          '正規表現に一致するすべての結果を反復可能なオブジェクトで返します。',
        return: '一致した結果の反復可能なオブジェクト',
        code: `~~~ts
let str = 'test1 test2 test3';
console.log([...str.matchAll(/test\\d/g)]); // 出力: [["test1"], ["test2"], ["test3"]]
~~~`,
      },
    ],
  },
  {
    id: 'string_operations_6',
    title: '6. その他の文字列操作',
    category: 'string_operations',
    functions: [
      {
        id: 'string_type_26',
        name: 'localeCompare()',
        description:
          '2つの文字列を比較し、ロケールに基づいた並び順を考慮した結果を返します。',
        return: '比較結果（数値）',
        code: `~~~ts
let str1 = 'a';
let str2 = 'b';
console.log(str1.localeCompare(str2)); // 出力: -1
~~~`,
      },
      {
        id: 'string_type_27',
        name: 'normalize()',
        description: '文字列をUnicode正規化形式に変換して返します。',
        return: '正規化された文字列',
        code: `~~~ts
let str = '\u004E\u0303';
console.log(str.normalize('NFC')); // 出力: "Ñ"
~~~`,
      },
    ],
  },
]
