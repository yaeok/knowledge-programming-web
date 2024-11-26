import { OperationCategory } from '@/domain/entity/operation'

import { EnumDate } from './DateType'

export const dateOperations: OperationCategory[] = [
  {
    id: 'date_operations_1',
    title: '1. 日付の作成',
    category: 'date_operations',
    functions: [
      {
        id: 'date_type_1',
        name: EnumDate.NEWDATE,
        description: '現在の日付と時刻で新しいDateオブジェクトを作成します。',
        return: '新しいDateオブジェクト',
        code: `~~~ts
let currentDate = new Date();
console.log(currentDate);
~~~`,
      },
      {
        id: 'date_type_2',
        name: EnumDate.NEWDATESTRING,
        description:
          '日付の文字列またはタイムスタンプからDateオブジェクトを作成します。',
        return: '新しいDateオブジェクト',
        code: `~~~ts
let dateFromString = new Date('2024-09-07T12:00:00');
let dateFromTimestamp = new Date(1710240000000);
console.log(dateFromString);
console.log(dateFromTimestamp);
~~~`,
      },
      {
        id: 'date_type_3',
        name: EnumDate.NEWDATEPARAMS,
        description:
          '指定した年、月、日、時、分、秒、ミリ秒でDateオブジェクトを作成します。',
        return: '新しいDateオブジェクト',
        code: `~~~ts
let specificDate = new Date(2024, 8, 7, 12, 30, 0, 0);
console.log(specificDate);
~~~`,
      },
    ],
  },
  {
    id: 'date_operations_2',
    title: '2. 日付の取得',
    category: 'date_operations',
    functions: [
      {
        id: 'date_type_4',
        name: EnumDate.GETFULLYEAR,
        description: 'Dateオブジェクトから年を取得します。',
        return: '4桁の年（数値）',
        code: `~~~ts
let date = new Date();
console.log(date.getFullYear());
~~~`,
      },
      {
        id: 'date_type_5',
        name: EnumDate.GETMONTH,
        description: 'Dateオブジェクトから月を取得します（0が1月、11が12月）。',
        return: '月（0〜11の数値）',
        code: `~~~ts
let date = new Date();
console.log(date.getMonth());
~~~`,
      },
      {
        id: 'date_type_6',
        name: EnumDate.GETDATE,
        description: 'Dateオブジェクトから日を取得します。',
        return: '日（1〜31の数値）',
        code: `~~~ts
let date = new Date();
console.log(date.getDate());
~~~`,
      },
      {
        id: 'date_type_7',
        name: EnumDate.GETDAY,
        description:
          'Dateオブジェクトから曜日を取得します（0が日曜日、6が土曜日）。',
        return: '曜日（0〜6の数値）',
        code: `~~~ts
let date = new Date();
console.log(date.getDay());
~~~`,
      },
      {
        id: 'date_type_8',
        name: EnumDate.GETHOURS,
        description: 'Dateオブジェクトから時を取得します。',
        return: '時（0〜23の数値）',
        code: `~~~ts
let date = new Date();
console.log(date.getHours());
~~~`,
      },
      {
        id: 'date_type_9',
        name: EnumDate.GETMINUTES,
        description: 'Dateオブジェクトから分を取得します。',
        return: '分（0〜59の数値）',
        code: `~~~ts
let date = new Date();
console.log(date.getMinutes());
~~~`,
      },
      {
        id: 'date_type_10',
        name: EnumDate.GETSECONDS,
        description: 'Dateオブジェクトから秒を取得します。',
        return: '秒（0〜59の数値）',
        code: `~~~ts
let date = new Date();
console.log(date.getSeconds());
~~~`,
      },
      {
        id: 'date_type_11',
        name: EnumDate.GETMILLISECONDS,
        description: 'Dateオブジェクトからミリ秒を取得します。',
        return: 'ミリ秒（0〜999の数値）',
        code: `~~~ts
let date = new Date();
console.log(date.getMilliseconds());
~~~`,
      },
      {
        id: 'date_type_12',
        name: EnumDate.GETTIME,
        description: '1970年1月1日00:00:00 UTCからの経過ミリ秒数を取得します。',
        return: '経過ミリ秒数（数値）',
        code: `~~~ts
let date = new Date();
console.log(date.getTime());
~~~`,
      },
      {
        id: 'date_type_13',
        name: EnumDate.GETTIMEZONEOFFSET,
        description: '現地時間とUTCの差を分で取得します。',
        return: 'タイムゾーンの差（分単位の数値）',
        code: `~~~ts
let date = new Date();
console.log(date.getTimezoneOffset());
~~~`,
      },
    ],
  },
  {
    id: 'date_operations_3',
    title: '3. 日付の設定',
    category: 'date_operations',
    functions: [
      {
        id: 'date_type_14',
        name: EnumDate.SETFULLYEAR,
        description: 'Dateオブジェクトの年を設定します。',
        return: '設定後の新しいタイムスタンプ（数値）',
        code: `~~~ts
let date = new Date();
date.setFullYear(2025, 0, 15);
console.log(date);
~~~`,
      },
      {
        id: 'date_type_15',
        name: EnumDate.SETMONTH,
        description: 'Dateオブジェクトの月を設定します。',
        return: '設定後の新しいタイムスタンプ（数値）',
        code: `~~~ts
let date = new Date();
date.setMonth(11, 25);
console.log(date);
~~~`,
      },
      {
        id: 'date_type_16',
        name: EnumDate.SETDATE,
        description: 'Dateオブジェクトの日を設定します。',
        return: '設定後の新しいタイムスタンプ（数値）',
        code: `~~~ts
let date = new Date();
date.setDate(20);
console.log(date);
~~~`,
      },
      {
        id: 'date_type_17',
        name: EnumDate.SETHOURS,
        description: 'Dateオブジェクトの時を設定します。',
        return: '設定後の新しいタイムスタンプ（数値）',
        code: `~~~ts
let date = new Date();
date.setHours(13, 30, 30, 500);
console.log(date);
~~~`,
      },
      {
        id: 'date_type_18',
        name: EnumDate.SETMINUTES,
        description: 'Dateオブジェクトの分を設定します。',
        return: '設定後の新しいタイムスタンプ（数値）',
        code: `~~~ts
let date = new Date();
date.setMinutes(45, 30, 300);
console.log(date);
~~~`,
      },
      {
        id: 'date_type_19',
        name: EnumDate.SETSECONDS,
        description: 'Dateオブジェクトの秒を設定します。',
        return: '設定後の新しいタイムスタンプ（数値）',
        code: `~~~ts
let date = new Date();
date.setSeconds(30, 750);
console.log(date);
~~~`,
      },
      {
        id: 'date_type_20',
        name: EnumDate.SETMILLISECONDS,
        description: 'Dateオブジェクトのミリ秒を設定します。',
        return: '設定後の新しいタイムスタンプ（数値）',
        code: `~~~ts
let date = new Date();
date.setMilliseconds(123);
console.log(date);
~~~`,
      },
      {
        id: 'date_type_21',
        name: EnumDate.SETTIME,
        description:
          '1970年1月1日00:00:00 UTCからの経過ミリ秒数でDateオブジェクトを設定します。',
        return: '設定後の新しいタイムスタンプ（数値）',
        code: `~~~ts
let date = new Date();
date.setTime(1710240000000);
console.log(date);
~~~`,
      },
    ],
  },
  {
    id: 'date_operations_4',
    title: '4. UTCベースの日付操作',
    category: 'date_operations',
    functions: [
      {
        id: 'date_type_22',
        name: EnumDate.GETUTCFULLYEAR,
        description: 'UTCの年を取得します。',
        return: '4桁の年（数値）',
        code: `~~~ts
let date = new Date();
console.log(date.getUTCFullYear());
~~~`,
      },
      {
        id: 'date_type_23',
        name: EnumDate.GETUTCMONTH,
        description: 'UTCの月を取得します（0が1月、11が12月）。',
        return: '月（0〜11の数値）',
        code: `~~~ts
let date = new Date();
console.log(date.getUTCMonth());
~~~`,
      },
      {
        id: 'date_type_24',
        name: EnumDate.GETUTCDATE,
        description: 'UTCの日を取得します。',
        return: '日（1〜31の数値）',
        code: `~~~ts
let date = new Date();
console.log(date.getUTCDate());
~~~`,
      },
      {
        id: 'date_type_25',
        name: EnumDate.GETUTCDAY,
        description: 'UTCの曜日を取得します（0が日曜日、6が土曜日）。',
        return: '曜日（0〜6の数値）',
        code: `~~~ts
let date = new Date();
console.log(date.getUTCDay());
~~~`,
      },
      {
        id: 'date_type_26',
        name: EnumDate.GETUTCHOURS,
        description: 'UTCの時を取得します。',
        return: '時（0〜23の数値）',
        code: `~~~ts
let date = new Date();
console.log(date.getUTCHours());
~~~`,
      },
      {
        id: 'date_type_27',
        name: EnumDate.GETUTCMINUTES,
        description: 'UTCの分を取得します。',
        return: '分（0〜59の数値）',
        code: `~~~ts
let date = new Date();
console.log(date.getUTCMinutes());
~~~`,
      },
      {
        id: 'date_type_28',
        name: EnumDate.GETUTCSECONDS,
        description: 'UTCの秒を取得します。',
        return: '秒（0〜59の数値）',
        code: `~~~ts
let date = new Date();
console.log(date.getUTCSeconds());
~~~`,
      },
      {
        id: 'date_type_29',
        name: EnumDate.GETUTCMILLISECONDS,
        description: 'UTCのミリ秒を取得します。',
        return: 'ミリ秒（0〜999の数値）',
        code: `~~~ts
let date = new Date();
console.log(date.getUTCMilliseconds());
~~~`,
      },
      {
        id: 'date_type_30',
        name: EnumDate.SETUTCFULLYEAR,
        description: 'UTCの年を設定します。',
        return: '設定後の新しいタイムスタンプ（数値）',
        code: `~~~ts
let date = new Date();
date.setUTCFullYear(2025, 0, 15);
console.log(date);
~~~`,
      },
      {
        id: 'date_type_31',
        name: EnumDate.SETUTCMONTH,
        description: 'UTCの月を設定します。',
        return: '設定後の新しいタイムスタンプ（数値）',
        code: `~~~ts
let date = new Date();
date.setUTCMonth(11, 25);
console.log(date);
~~~`,
      },
      {
        id: 'date_type_32',
        name: EnumDate.SETUTCDATE,
        description: 'UTCの日を設定します。',
        return: '設定後の新しいタイムスタンプ（数値）',
        code: `~~~ts
let date = new Date();
date.setUTCDate(20);
console.log(date);
~~~`,
      },
      {
        id: 'date_type_33',
        name: EnumDate.SETUTCHOURS,
        description: 'UTCの時を設定します。',
        return: '設定後の新しいタイムスタンプ（数値）',
        code: `~~~ts
let date = new Date();
date.setUTCHours(13, 30, 30, 500);
console.log(date);
~~~`,
      },
      {
        id: 'date_type_34',
        name: EnumDate.SETUTCMINUTES,
        description: 'UTCの分を設定します。',
        return: '設定後の新しいタイムスタンプ（数値）',
        code: `~~~ts
let date = new Date();
date.setUTCMinutes(45, 30, 300);
console.log(date);
~~~`,
      },
      {
        id: 'date_type_35',
        name: EnumDate.SETUTCSECONDS,
        description: 'UTCの秒を設定します。',
        return: '設定後の新しいタイムスタンプ（数値）',
        code: `~~~ts
let date = new Date();
date.setUTCSeconds(30, 750);
console.log(date);
~~~`,
      },
      {
        id: 'date_type_36',
        name: EnumDate.SETUTCMILLISECONDS,
        description: 'UTCのミリ秒を設定します。',
        return: '設定後の新しいタイムスタンプ（数値）',
        code: `~~~ts
let date = new Date();
date.setUTCMilliseconds(123);
console.log(date);
~~~`,
      },
    ],
  },
  {
    id: 'date_operations_5',
    title: '5. 日付の文字列変換',
    category: 'date_operations',
    functions: [
      {
        id: 'date_type_37',
        name: EnumDate.TOSTRING,
        description:
          'Dateオブジェクトを人間が読みやすい形式の文字列に変換します。',
        return: '日付の文字列表現',
        code: `~~~ts
let date = new Date();
console.log(date.toString());
~~~`,
      },
      {
        id: 'date_type_38',
        name: EnumDate.TODATESTRING,
        description: '日付部分だけの文字列を返します。',
        return: '日付の文字列表現（例: "Mon Sep 07 2024"）',
        code: `~~~ts
let date = new Date();
console.log(date.toDateString());
~~~`,
      },
      {
        id: 'date_type_39',
        name: EnumDate.TOTIMESTRING,
        description: '時刻部分だけの文字列を返します。',
        return: '時刻の文字列表現（例: "13:45:30 GMT+0000 (UTC)"）',
        code: `~~~ts
let date = new Date();
console.log(date.toTimeString());
~~~`,
      },
      {
        id: 'date_type_40',
        name: EnumDate.TOLOCALESTRING,
        description: '現地の形式で日付と時刻を表す文字列を返します。',
        return: 'ロケールに基づいた日付と時刻の文字列',
        code: `~~~ts
let date = new Date();
console.log(date.toLocaleString('ja-JP'));
~~~`,
      },
      {
        id: 'date_type_41',
        name: EnumDate.TOLOCALEDATETIME,
        description: '現地の形式で日付を表す文字列を返します。',
        return: 'ロケールに基づいた日付の文字列',
        code: `~~~ts
let date = new Date();
console.log(date.toLocaleDateString('ja-JP'));
~~~`,
      },
      {
        id: 'date_type_42',
        name: EnumDate.TOLOCALETIMESTRING,
        description: '現地の形式で時刻を表す文字列を返します。',
        return: 'ロケールに基づいた時刻の文字列',
        code: `~~~ts
let date = new Date();
console.log(date.toLocaleTimeString('ja-JP'));
~~~`,
      },
      {
        id: 'date_type_43',
        name: EnumDate.TOISOSTRING,
        description: 'ISO 8601形式の文字列を返します。',
        return: 'ISO 8601形式の日付文字列（例: "2024-09-07T12:00:00.000Z"）',
        code: `~~~ts
let date = new Date();
console.log(date.toISOString());
~~~`,
      },
      {
        id: 'date_type_44',
        name: EnumDate.TOUTCSTRING,
        description: 'UTC形式の文字列を返します。',
        return: 'UTC形式の日付文字列',
        code: `~~~ts
let date = new Date();
console.log(date.toUTCString());
~~~`,
      },
    ],
  },
  {
    id: 'date_operations_6',
    title: '6. その他の日付操作',
    category: 'date_operations',
    functions: [
      {
        id: 'date_type_45',
        name: EnumDate.NOW,
        description: '現在のタイムスタンプ（ミリ秒）を返します。',
        return: '現在の経過ミリ秒数（数値）',
        code: `~~~ts
console.log(Date.now());
~~~`,
      },
      {
        id: 'date_type_46',
        name: EnumDate.PARSE,
        description:
          '文字列を解析し、1970年1月1日からの経過ミリ秒数を返します。',
        return: '解析された経過ミリ秒数（数値）',
        code: `~~~ts
let timestamp = Date.parse('2024-09-07T12:00:00Z');
console.log(timestamp);
~~~`,
      },
      {
        id: 'date_type_47',
        name: EnumDate.UTC,
        description: '指定されたUTC日時をミリ秒に変換して返します。',
        return: 'UTC日時に基づく経過ミリ秒数（数値）',
        code: `~~~ts
let utcDate = Date.UTC(2024, 8, 7, 12, 0, 0, 0);
console.log(utcDate);
~~~`,
      },
    ],
  },
]
