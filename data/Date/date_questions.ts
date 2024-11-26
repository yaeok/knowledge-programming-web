import { EnumDate } from '@/data/Date/DateType'
import { QuestionCategory } from '@/domain/entity/question'

export const dateQuestions: QuestionCategory[] = [
  {
    id: 'date_type_1',
    title: EnumDate.NEWDATE,
    category: 'date_operations',
    questions: [
      {
        question:
          '現在の日付と時刻を持つ新しい Date オブジェクトを作成してください。',
        code: `
~~~ts
let currentDate: Date;
~~~
`,
        answer: `
~~~ts
let currentDate: Date = new Date();
console.log(currentDate); // 現在の日付と時刻
~~~
`,
      },
      {
        question:
          '今日の日付のみを取得する Date オブジェクトを作成し、その日にち部分を出力してください。',
        code: `
~~~ts
let todayDate: Date;
~~~
`,
        answer: `
~~~ts
let todayDate: Date = new Date();
console.log(todayDate.getDate()); // 今日の日付
~~~
`,
      },
      {
        question:
          '現在の時間のみを取得する Date オブジェクトを作成し、その時刻を出力してください。',
        code: `
~~~ts
let currentTime: Date;
~~~
`,
        answer: `
~~~ts
let currentTime: Date = new Date();
console.log(currentTime.getHours() + ':' + currentTime.getMinutes()); // 現在の時間 (時:分)
~~~
`,
      },
      {
        question:
          '特定の日付 (2022年1月1日) を作成し、その年を出力してください。',
        code: `
~~~ts
let specificDate: Date;
~~~
`,
        answer: `
~~~ts
let specificDate: Date = new Date(2022, 0, 1);
console.log(specificDate.getFullYear()); // 2022
~~~
`,
      },
      {
        question:
          'Date オブジェクトを使って現在のタイムゾーンのオフセットを取得してください。',
        code: `
~~~ts
let currentDate: Date;
~~~
`,
        answer: `
~~~ts
let currentDate: Date = new Date();
console.log(currentDate.getTimezoneOffset()); // 現在のタイムゾーンのオフセット (分単位)
~~~
`,
      },
    ],
  },
  {
    id: 'date_type_2',
    title: EnumDate.GETFULLYEAR,
    category: 'date_operations',
    questions: [
      {
        question: '現在の日付の年を取得してください。',
        code: `
~~~ts
let currentYear: number;
~~~
`,
        answer: `
~~~ts
let currentYear: number = new Date().getFullYear();
console.log(currentYear); // 現在の年
~~~
`,
      },
      {
        question: '特定の日付 (2000年1月1日) の年を取得してください。',
        code: `
~~~ts
let date: Date = new Date(2000, 0, 1);
let year: number;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date(2000, 0, 1);
let year: number = date.getFullYear();
console.log(year); // 2000
~~~
`,
      },
      {
        question:
          '次の年に設定された Date オブジェクトの年を取得してください。',
        code: `
~~~ts
let nextYearDate: Date = new Date();
nextYearDate.setFullYear(nextYearDate.getFullYear() + 1);
let year: number;
~~~
`,
        answer: `
~~~ts
let nextYearDate: Date = new Date();
nextYearDate.setFullYear(nextYearDate.getFullYear() + 1);
let year: number = nextYearDate.getFullYear();
console.log(year); // 次の年
~~~
`,
      },
      {
        question: '現在の年が2025年かどうかをチェックしてください。',
        code: `
~~~ts
let isYear2025: boolean;
~~~
`,
        answer: `
~~~ts
let isYear2025: boolean = new Date().getFullYear() === 2025;
console.log(isYear2025); // 現在の年が2025年なら true, そうでなければ false
~~~
`,
      },
      {
        question: '過去の日付 (1995年7月20日) の年を取得してください。',
        code: `
~~~ts
let pastDate: Date = new Date('1995-07-20');
let pastYear: number;
~~~
`,
        answer: `
~~~ts
let pastDate: Date = new Date('1995-07-20');
let pastYear: number = pastDate.getFullYear();
console.log(pastYear); // 1995
~~~
`,
      },
    ],
  },
  {
    id: 'date_type_3',
    title: EnumDate.GETMONTH,
    category: 'date_operations',
    questions: [
      {
        question: '現在の月 (0から始まる) を取得してください。',
        code: `
~~~ts
let currentMonth: number;
~~~
`,
        answer: `
~~~ts
let currentMonth: number = new Date().getMonth();
console.log(currentMonth); // 現在の月 (0 - 11)
~~~
`,
      },
      {
        question: '特定の日付 (2023年12月25日) の月を取得してください。',
        code: `
~~~ts
let date: Date = new Date(2023, 11, 25);
let month: number;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date(2023, 11, 25);
let month: number = date.getMonth();
console.log(month); // 11 (12月)
~~~
`,
      },
      {
        question: '現在の日付から3ヶ月前の月を取得してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setMonth(date.getMonth() - 3);
let month: number;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setMonth(date.getMonth() - 3);
let month: number = date.getMonth();
console.log(month); // 現在の月から3ヶ月前
~~~
`,
      },
      {
        question: '今日の日付が夏季（6月〜8月）かどうかを確認してください。',
        code: `
~~~ts
let isSummer: boolean;
~~~
`,
        answer: `
~~~ts
let month: number = new Date().getMonth();
let isSummer: boolean = (month >= 5 && month <= 7);
console.log(isSummer); // 夏季なら true, それ以外は false
~~~
`,
      },
      {
        question:
          '過去の日付 (1999年11月15日) の月を取得し、その結果を出力してください。',
        code: `
~~~ts
let date: Date = new Date('1999-11-15');
let month: number;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('1999-11-15');
let month: number = date.getMonth();
console.log(month); // 10 (11月)
~~~
`,
      },
    ],
  },
  {
    id: 'date_type_4',
    title: EnumDate.GETDATE,
    category: 'date_operations',
    questions: [
      {
        question: '現在の日にちを取得してください。',
        code: `
~~~ts
let currentDate: number;
~~~
`,
        answer: `
~~~ts
let currentDate: number = new Date().getDate();
console.log(currentDate); // 現在の日にち
~~~
`,
      },
      {
        question: '特定の日付 (2025年4月10日) の日にちを取得してください。',
        code: `
~~~ts
let date: Date = new Date(2025, 3, 10);
let day: number;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date(2025, 3, 10);
let day: number = date.getDate();
console.log(day); // 10
~~~
`,
      },
      {
        question: '昨日の日付を取得して、その日にちを表示してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setDate(date.getDate() - 1);
let yesterday: number;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setDate(date.getDate() - 1);
let yesterday: number = date.getDate();
console.log(yesterday); // 昨日の日にち
~~~
`,
      },
      {
        question: '指定した日付が月の最初の日かどうかを確認してください。',
        code: `
~~~ts
let date: Date = new Date('2024-02-01');
let isFirstDay: boolean;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2024-02-01');
let isFirstDay: boolean = date.getDate() === 1;
console.log(isFirstDay); // true
~~~
`,
      },
      {
        question:
          '過去の日付 (2001年1月3日) の日にちを取得し、その結果を表示してください。',
        code: `
~~~ts
let date: Date = new Date('2001-01-03');
let day: number;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2001-01-03');
let day: number = date.getDate();
console.log(day); // 3
~~~
`,
      },
    ],
  },
  {
    id: 'date_type_5',
    title: EnumDate.GETDAY,
    category: 'date_operations',
    questions: [
      {
        question: '現在の曜日を数値で取得してください（0=日曜日, 6=土曜日）。',
        code: `
~~~ts
let currentDay: number;
~~~
`,
        answer: `
~~~ts
let currentDay: number = new Date().getDay();
console.log(currentDay); // 現在の曜日
~~~
`,
      },
      {
        question:
          '特定の日付（2023年10月15日）の曜日を数値で取得してください。',
        code: `
~~~ts
let date: Date = new Date(2023, 9, 15);
let dayOfWeek: number;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date(2023, 9, 15);
let dayOfWeek: number = date.getDay();
console.log(dayOfWeek); // 0 (日曜日)
~~~
`,
      },
      {
        question: '過去の日付（2000年1月1日）の曜日を数値で取得してください。',
        code: `
~~~ts
let date: Date = new Date(2000, 0, 1);
let dayOfWeek: number;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date(2000, 0, 1);
let dayOfWeek: number = date.getDay();
console.log(dayOfWeek); // 6 (土曜日)
~~~
`,
      },
      {
        question:
          '今日が平日か週末かを判定してください（0=日曜日, 6=土曜日の場合は週末）。',
        code: `
~~~ts
let isWeekend: boolean;
~~~
`,
        answer: `
~~~ts
let currentDay: number = new Date().getDay();
let isWeekend: boolean = (currentDay === 0 || currentDay === 6);
console.log(isWeekend); // 週末の場合は true, 平日の場合は false
~~~
`,
      },
      {
        question: '次の火曜日の日付を求めてください。',
        code: `
~~~ts
let today: Date = new Date();
let nextTuesday: Date;
~~~
`,
        answer: `
~~~ts
let today: Date = new Date();
let dayOfWeek: number = today.getDay();
let nextTuesday: Date = new Date(today);
nextTuesday.setDate(today.getDate() + ((9 - dayOfWeek) % 7));
console.log(nextTuesday); // 次の火曜日の日付
~~~
`,
      },
    ],
  },
  {
    id: 'date_type_6',
    title: EnumDate.GETHOURS,
    category: 'date_operations',
    questions: [
      {
        question: '現在の時間（時）を取得してください。',
        code: `
~~~ts
let currentHour: number;
~~~
`,
        answer: `
~~~ts
let currentHour: number = new Date().getHours();
console.log(currentHour); // 現在の時間 (0-23)
~~~
`,
      },
      {
        question:
          '特定の日付（2024年7月4日 午後3時45分）の時間を取得してください。',
        code: `
~~~ts
let date: Date = new Date(2024, 6, 4, 15, 45);
let hour: number;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date(2024, 6, 4, 15, 45);
let hour: number = date.getHours();
console.log(hour); // 15
~~~
`,
      },
      {
        question: '現在の時間が午後かどうかをチェックしてください。',
        code: `
~~~ts
let isPM: boolean;
~~~
`,
        answer: `
~~~ts
let currentHour: number = new Date().getHours();
let isPM: boolean = currentHour >= 12;
console.log(isPM); // 午後なら true, 午前なら false
~~~
`,
      },
      {
        question:
          '午前9時に設定された日付オブジェクトを作成し、その時間を取得してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setHours(9);
let hour: number;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setHours(9);
let hour: number = date.getHours();
console.log(hour); // 9
~~~
`,
      },
      {
        question:
          '特定の日付の時間部分を取得し、その結果を24時間形式で表示してください。',
        code: `
~~~ts
let date: Date = new Date('2023-11-11T17:30:00');
let hour: number;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2023-11-11T17:30:00');
let hour: number = date.getHours();
console.log(hour); // 17
~~~
`,
      },
    ],
  },
  {
    id: 'date_type_7',
    title: EnumDate.GETMINUTES,
    category: 'date_operations',
    questions: [
      {
        question: '現在の分を取得してください。',
        code: `
~~~ts
let currentMinute: number;
~~~
`,
        answer: `
~~~ts
let currentMinute: number = new Date().getMinutes();
console.log(currentMinute); // 現在の分 (0-59)
~~~
`,
      },
      {
        question: '特定の日付（2023年12月25日 14:45）の分を取得してください。',
        code: `
~~~ts
let date: Date = new Date(2023, 11, 25, 14, 45);
let minutes: number;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date(2023, 11, 25, 14, 45);
let minutes: number = date.getMinutes();
console.log(minutes); // 45
~~~
`,
      },
      {
        question:
          '現在の時間が30分を過ぎているかどうかをチェックしてください。',
        code: `
~~~ts
let isAfter30Minutes: boolean;
~~~
`,
        answer: `
~~~ts
let currentMinute: number = new Date().getMinutes();
let isAfter30Minutes: boolean = currentMinute > 30;
console.log(isAfter30Minutes); // 30分を過ぎていれば true, それ以外は false
~~~
`,
      },
      {
        question:
          '午後2時45分に設定された日付オブジェクトを作成し、その分を取得してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setHours(14, 45);
let minutes: number;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setHours(14, 45);
let minutes: number = date.getMinutes();
console.log(minutes); // 45
~~~
`,
      },
      {
        question: '特定の日付の分部分を取得し、その結果を表示してください。',
        code: `
~~~ts
let date: Date = new Date('2022-08-08T08:30:00');
let minutes: number;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2022-08-08T08:30:00');
let minutes: number = date.getMinutes();
console.log(minutes); // 30
~~~
`,
      },
    ],
  },
  {
    id: 'date_type_8',
    title: EnumDate.GETSECONDS,
    category: 'date_operations',
    questions: [
      {
        question: '現在の秒を取得してください。',
        code: `
~~~ts
let currentSecond: number;
~~~
`,
        answer: `
~~~ts
let currentSecond: number = new Date().getSeconds();
console.log(currentSecond); // 現在の秒 (0-59)
~~~
`,
      },
      {
        question:
          '特定の日付（2023年12月25日 14:45:30）の秒を取得してください。',
        code: `
~~~ts
let date: Date = new Date(2023, 11, 25, 14, 45, 30);
let seconds: number;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date(2023, 11, 25, 14, 45, 30);
let seconds: number = date.getSeconds();
console.log(seconds); // 30
~~~
`,
      },
      {
        question: '現在の秒が30秒以上かどうかを確認してください。',
        code: `
~~~ts
let isAfter30Seconds: boolean;
~~~
`,
        answer: `
~~~ts
let currentSecond: number = new Date().getSeconds();
let isAfter30Seconds: boolean = currentSecond >= 30;
console.log(isAfter30Seconds); // 30秒以上なら true, それ以外は false
~~~
`,
      },
      {
        question:
          '午前8時15分45秒に設定された日付オブジェクトを作成し、その秒を取得してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setHours(8, 15, 45);
let seconds: number;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setHours(8, 15, 45);
let seconds: number = date.getSeconds();
console.log(seconds); // 45
~~~
`,
      },
      {
        question:
          '過去の日付（2021年5月5日 午後3時0分15秒）の秒を取得し、その結果を表示してください。',
        code: `
~~~ts
let date: Date = new Date('2021-05-05T15:00:15');
let seconds: number;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2021-05-05T15:00:15');
let seconds: number = date.getSeconds();
console.log(seconds); // 15
~~~
`,
      },
    ],
  },
  {
    id: 'date_type_9',
    title: EnumDate.GETMILLISECONDS,
    category: 'date_operations',
    questions: [
      {
        question: '現在のミリ秒を取得してください。',
        code: `
~~~ts
let currentMilliseconds: number;
~~~
`,
        answer: `
~~~ts
let currentMilliseconds: number = new Date().getMilliseconds();
console.log(currentMilliseconds); // 現在のミリ秒 (0-999)
~~~
`,
      },
      {
        question:
          '特定の日付（2023年11月11日 13:45:30.123）のミリ秒を取得してください。',
        code: `
~~~ts
let date: Date = new Date(2023, 10, 11, 13, 45, 30, 123);
let milliseconds: number;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date(2023, 10, 11, 13, 45, 30, 123);
let milliseconds: number = date.getMilliseconds();
console.log(milliseconds); // 123
~~~
`,
      },
      {
        question:
          '現在の時間がミリ秒の範囲内で500以上かどうかを確認してください。',
        code: `
~~~ts
let isAfter500Milliseconds: boolean;
~~~
`,
        answer: `
~~~ts
let currentMilliseconds: number = new Date().getMilliseconds();
let isAfter500Milliseconds: boolean = currentMilliseconds >= 500;
console.log(isAfter500Milliseconds); // 500以上なら true, それ以外は false
~~~
`,
      },
      {
        question:
          '特定の日付のミリ秒部分を取得し、その結果を表示してください。',
        code: `
~~~ts
let date: Date = new Date('2024-05-15T09:00:00.789');
let milliseconds: number;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2024-05-15T09:00:00.789');
let milliseconds: number = date.getMilliseconds();
console.log(milliseconds); // 789
~~~
`,
      },
      {
        question:
          '午前8時15分45秒500ミリ秒に設定された日付オブジェクトを作成し、そのミリ秒を取得してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setHours(8, 15, 45, 500);
let milliseconds: number;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setHours(8, 15, 45, 500);
let milliseconds: number = date.getMilliseconds();
console.log(milliseconds); // 500
~~~
`,
      },
    ],
  },
  {
    id: 'date_type_10',
    title: EnumDate.GETTIME,
    category: 'date_operations',
    questions: [
      {
        question: '現在の日付と時刻をミリ秒で取得してください。',
        code: `
~~~ts
let currentTime: number;
~~~
`,
        answer: `
~~~ts
let currentTime: number = new Date().getTime();
console.log(currentTime); // 現在の日付と時刻のミリ秒数
~~~
`,
      },
      {
        question:
          '特定の日付（2023年12月25日 00:00:00）の時刻をミリ秒で取得してください。',
        code: `
~~~ts
let date: Date = new Date('2023-12-25T00:00:00');
let timeInMilliseconds: number;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2023-12-25T00:00:00');
let timeInMilliseconds: number = date.getTime();
console.log(timeInMilliseconds); // ミリ秒での時刻
~~~
`,
      },
      {
        question:
          '現在の時刻が1970年1月1日以降の何ミリ秒かを取得してください。',
        code: `
~~~ts
let millisecondsSinceEpoch: number;
~~~
`,
        answer: `
~~~ts
let millisecondsSinceEpoch: number = new Date().getTime();
console.log(millisecondsSinceEpoch); // 1970年1月1日以降のミリ秒
~~~
`,
      },
      {
        question:
          '過去の日付（2000年1月1日 00:00:00）の時刻をミリ秒で取得してください。',
        code: `
~~~ts
let date: Date = new Date('2000-01-01T00:00:00');
let timeInMilliseconds: number;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2000-01-01T00:00:00');
let timeInMilliseconds: number = date.getTime();
console.log(timeInMilliseconds); // ミリ秒での時刻
~~~
`,
      },
      {
        question:
          '特定の日付の時刻をミリ秒で取得し、その結果を表示してください。',
        code: `
~~~ts
let date: Date = new Date('2025-06-30T23:59:59');
let timeInMilliseconds: number;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2025-06-30T23:59:59');
let timeInMilliseconds: number = date.getTime();
console.log(timeInMilliseconds); // ミリ秒での時刻
~~~
`,
      },
    ],
  },
  {
    id: 'date_type_11',
    title: EnumDate.GETTIMEZONEOFFSET,
    category: 'date_operations',
    questions: [
      {
        question: '現在のタイムゾーンのオフセットを分で取得してください。',
        code: `
~~~ts
let timezoneOffset: number;
~~~
`,
        answer: `
~~~ts
let timezoneOffset: number = new Date().getTimezoneOffset();
console.log(timezoneOffset); // タイムゾーンのオフセット (分単位)
~~~
`,
      },
      {
        question:
          '特定の日付のタイムゾーンのオフセットを分で取得してください。',
        code: `
~~~ts
let date: Date = new Date('2023-03-28T00:00:00');
let timezoneOffset: number;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2023-03-28T00:00:00');
let timezoneOffset: number = date.getTimezoneOffset();
console.log(timezoneOffset); // タイムゾーンのオフセット (分単位)
~~~
`,
      },
      {
        question:
          'UTCとのタイムゾーンのオフセットが負の値かどうかを確認してください。',
        code: `
~~~ts
let isNegativeOffset: boolean;
~~~
`,
        answer: `
~~~ts
let timezoneOffset: number = new Date().getTimezoneOffset();
let isNegativeOffset: boolean = timezoneOffset < 0;
console.log(isNegativeOffset); // オフセットが負の値なら true, そうでないなら false
~~~
`,
      },
      {
        question:
          '過去の日付（2001年1月1日）のタイムゾーンのオフセットを分で取得してください。',
        code: `
~~~ts
let date: Date = new Date('2001-01-01T00:00:00');
let timezoneOffset: number;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2001-01-01T00:00:00');
let timezoneOffset: number = date.getTimezoneOffset();
console.log(timezoneOffset); // タイムゾーンのオフセット (分単位)
~~~
`,
      },
      {
        question:
          '指定された日付のタイムゾーンのオフセットを分で取得し、その結果を表示してください。',
        code: `
~~~ts
let date: Date = new Date('1995-12-17T03:24:00');
let timezoneOffset: number;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('1995-12-17T03:24:00');
let timezoneOffset: number = date.getTimezoneOffset();
console.log(timezoneOffset); // タイムゾーンのオフセット (分単位)
~~~
`,
      },
    ],
  },
  {
    id: 'date_type_12',
    title: EnumDate.SETFULLYEAR,
    category: 'date_operations',
    questions: [
      {
        question: '現在の日付の年を2030年に設定してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setFullYear(2030);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setFullYear(2030);
console.log(date.getFullYear()); // 2030
~~~
`,
      },
      {
        question: '特定の日付（2024年4月1日）の年を2025年に変更してください。',
        code: `
~~~ts
let date: Date = new Date(2024, 3, 1);
date.setFullYear(2025);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date(2024, 3, 1);
date.setFullYear(2025);
console.log(date.getFullYear()); // 2025
~~~
`,
      },
      {
        question: '指定した日付の年、月、日を2022年5月10日に設定してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setFullYear(2022, 4, 10);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setFullYear(2022, 4, 10);
console.log(date); // 2022年5月10日のDateオブジェクト
~~~
`,
      },
      {
        question: '過去の日付（1999年12月31日）を2023年に変更してください。',
        code: `
~~~ts
let date: Date = new Date('1999-12-31');
date.setFullYear(2023);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('1999-12-31');
date.setFullYear(2023);
console.log(date.getFullYear()); // 2023
~~~
`,
      },
      {
        question: '現在の年を1年進めるように設定してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setFullYear(date.getFullYear() + 1);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setFullYear(date.getFullYear() + 1);
console.log(date.getFullYear()); // 現在の年 + 1
~~~
`,
      },
    ],
  },
  {
    id: 'date_type_13',
    title: EnumDate.SETMONTH,
    category: 'date_operations',
    questions: [
      {
        question: '現在の日付の月を7月（インデックス6）に設定してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setMonth(6);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setMonth(6);
console.log(date.getMonth()); // 6 (7月)
~~~
`,
      },
      {
        question:
          '特定の日付（2023年5月15日）の月を12月（インデックス11）に変更してください。',
        code: `
~~~ts
let date: Date = new Date(2023, 4, 15);
date.setMonth(11);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date(2023, 4, 15);
date.setMonth(11);
console.log(date.getMonth()); // 11 (12月)
~~~
`,
      },
      {
        question:
          '指定した日付の月を1月（インデックス0）に設定し、日を10日に設定してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setMonth(0, 10);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setMonth(0, 10);
console.log(date); // 1月10日のDateオブジェクト
~~~
`,
      },
      {
        question:
          '過去の日付（2000年1月1日）を3月（インデックス2）に変更してください。',
        code: `
~~~ts
let date: Date = new Date('2000-01-01');
date.setMonth(2);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2000-01-01');
date.setMonth(2);
console.log(date.getMonth()); // 2 (3月)
~~~
`,
      },
      {
        question: '現在の月を3ヶ月進めるように設定してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setMonth(date.getMonth() + 3);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setMonth(date.getMonth() + 3);
console.log(date.getMonth()); // 現在の月 + 3
~~~
`,
      },
    ],
  },
  {
    id: 'date_type_14',
    title: EnumDate.SETDATE,
    category: 'date_operations',
    questions: [
      {
        question: '現在の日付の「日」部分を15日に設定してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setDate(15);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setDate(15);
console.log(date.getDate()); // 15
~~~
`,
      },
      {
        question:
          '特定の日付（2023年5月1日）の「日」部分を20日に変更してください。',
        code: `
~~~ts
let date: Date = new Date(2023, 4, 1);
date.setDate(20);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date(2023, 4, 1);
date.setDate(20);
console.log(date.getDate()); // 20
~~~
`,
      },
      {
        question: '指定した日付を月の末日に設定してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setDate(0); // 翌月の0日は月の末日
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setDate(0);
console.log(date); // 月の末日
~~~
`,
      },
      {
        question: '過去の日付（2000年1月15日）を5日に変更してください。',
        code: `
~~~ts
let date: Date = new Date('2000-01-15');
date.setDate(5);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2000-01-15');
date.setDate(5);
console.log(date.getDate()); // 5
~~~
`,
      },
      {
        question: '現在の日付を1週間前に設定してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setDate(date.getDate() - 7);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setDate(date.getDate() - 7);
console.log(date); // 1週間前の日付
~~~
`,
      },
    ],
  },
  {
    id: 'date_type_15',
    title: EnumDate.SETHOURS,
    category: 'date_operations',
    questions: [
      {
        question: '現在の時間の「時」を午後2時に設定してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setHours(14);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setHours(14);
console.log(date.getHours()); // 14
~~~
`,
      },
      {
        question:
          '特定の日付（2023年8月1日）の「時」を午後3時45分に変更してください。',
        code: `
~~~ts
let date: Date = new Date(2023, 7, 1);
date.setHours(15, 45);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date(2023, 7, 1);
date.setHours(15, 45);
console.log(date.getHours(), date.getMinutes()); // 15, 45
~~~
`,
      },
      {
        question: '指定した日付の「時」を23時30分10秒に設定してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setHours(23, 30, 10);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setHours(23, 30, 10);
console.log(date); // 時刻が 23:30:10 の Date オブジェクト
~~~
`,
      },
      {
        question:
          '過去の日付（1999年12月31日）の「時」を午前8時に変更してください。',
        code: `
~~~ts
let date: Date = new Date('1999-12-31');
date.setHours(8);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('1999-12-31');
date.setHours(8);
console.log(date.getHours()); // 8
~~~
`,
      },
      {
        question: '現在の「時」を2時間進めるように設定してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setHours(date.getHours() + 2);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setHours(date.getHours() + 2);
console.log(date.getHours()); // 現在の時間 + 2
~~~
`,
      },
    ],
  },
  {
    id: 'date_type_16',
    title: EnumDate.SETMINUTES,
    category: 'date_operations',
    questions: [
      {
        question: '現在の時間の「分」を30分に設定してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setMinutes(30);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setMinutes(30);
console.log(date.getMinutes()); // 30
~~~
`,
      },
      {
        question:
          '特定の日付（2023年11月1日）の「分」を45分に変更してください。',
        code: `
~~~ts
let date: Date = new Date(2023, 10, 1);
date.setMinutes(45);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date(2023, 10, 1);
date.setMinutes(45);
console.log(date.getMinutes()); // 45
~~~
`,
      },
      {
        question: '指定した日付の「分」を15分30秒に設定してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setMinutes(15, 30);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setMinutes(15, 30);
console.log(date.getMinutes(), date.getSeconds()); // 15, 30
~~~
`,
      },
      {
        question:
          '過去の日付（2005年10月20日）の「分」を10分に変更してください。',
        code: `
~~~ts
let date: Date = new Date('2005-10-20');
date.setMinutes(10);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2005-10-20');
date.setMinutes(10);
console.log(date.getMinutes()); // 10
~~~
`,
      },
      {
        question: '現在の「分」を10分進めるように設定してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setMinutes(date.getMinutes() + 10);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setMinutes(date.getMinutes() + 10);
console.log(date.getMinutes()); // 現在の分 + 10
~~~
`,
      },
    ],
  },
  {
    id: 'date_type_17',
    title: EnumDate.SETSECONDS,
    category: 'date_operations',
    questions: [
      {
        question: '現在の時間の「秒」を45秒に設定してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setSeconds(45);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setSeconds(45);
console.log(date.getSeconds()); // 45
~~~
`,
      },
      {
        question:
          '特定の日付（2022年8月8日）の「秒」を10秒に変更してください。',
        code: `
~~~ts
let date: Date = new Date(2022, 7, 8);
date.setSeconds(10);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date(2022, 7, 8);
date.setSeconds(10);
console.log(date.getSeconds()); // 10
~~~
`,
      },
      {
        question: '指定した日付の「秒」を30秒500ミリ秒に設定してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setSeconds(30, 500);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setSeconds(30, 500);
console.log(date.getSeconds(), date.getMilliseconds()); // 30, 500
~~~
`,
      },
      {
        question:
          '過去の日付（1997年5月10日）の「秒」を20秒に変更してください。',
        code: `
~~~ts
let date: Date = new Date('1997-05-10');
date.setSeconds(20);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('1997-05-10');
date.setSeconds(20);
console.log(date.getSeconds()); // 20
~~~
`,
      },
      {
        question: '現在の「秒」を15秒進めるように設定してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setSeconds(date.getSeconds() + 15);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setSeconds(date.getSeconds() + 15);
console.log(date.getSeconds()); // 現在の秒 + 15
~~~
`,
      },
    ],
  },
  {
    id: 'date_type_18',
    title: EnumDate.SETMILLISECONDS,
    category: 'date_operations',
    questions: [
      {
        question: '現在の時間の「ミリ秒」を500ミリ秒に設定してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setMilliseconds(500);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setMilliseconds(500);
console.log(date.getMilliseconds()); // 500
~~~
`,
      },
      {
        question:
          '特定の日付（2023年12月1日）の「ミリ秒」を750ミリ秒に変更してください。',
        code: `
~~~ts
let date: Date = new Date(2023, 11, 1);
date.setMilliseconds(750);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date(2023, 11, 1);
date.setMilliseconds(750);
console.log(date.getMilliseconds()); // 750
~~~
`,
      },
      {
        question: '指定した日付の「ミリ秒」を250ミリ秒に設定してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setMilliseconds(250);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setMilliseconds(250);
console.log(date.getMilliseconds()); // 250
~~~
`,
      },
      {
        question:
          '過去の日付（1995年4月5日）の「ミリ秒」を100ミリ秒に変更してください。',
        code: `
~~~ts
let date: Date = new Date('1995-04-05');
date.setMilliseconds(100);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('1995-04-05');
date.setMilliseconds(100);
console.log(date.getMilliseconds()); // 100
~~~
`,
      },
      {
        question: '現在の「ミリ秒」を300ミリ秒進めるように設定してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setMilliseconds(date.getMilliseconds() + 300);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setMilliseconds(date.getMilliseconds() + 300);
console.log(date.getMilliseconds()); // 現在のミリ秒 + 300
~~~
`,
      },
    ],
  },
  {
    id: 'date_type_19',
    title: EnumDate.SETTIME,
    category: 'date_operations',
    questions: [
      {
        question: '現在の時刻を1970年1月1日からのミリ秒で設定してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setTime(0);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setTime(0);
console.log(date); // 1970年1月1日のDateオブジェクト
~~~
`,
      },
      {
        question:
          '特定の日付の時刻をミリ秒（1588347600000）で設定してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setTime(1588347600000);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setTime(1588347600000);
console.log(date); // ミリ秒数で指定した日付
~~~
`,
      },
      {
        question:
          '過去の日付（2000年1月1日）の時刻を取得し、10000ミリ秒後に設定してください。',
        code: `
~~~ts
let date: Date = new Date('2000-01-01');
date.setTime(date.getTime() + 10000);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2000-01-01');
date.setTime(date.getTime() + 10000);
console.log(date); // 2000年1月1日の10秒後
~~~
`,
      },
      {
        question: '未来の日付を現在の時刻から1時間後に設定してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setTime(date.getTime() + 3600000);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setTime(date.getTime() + 3600000);
console.log(date); // 現在の時刻から1時間後
~~~
`,
      },
      {
        question: '現在の時刻を0時にリセットするように設定してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setTime(date.setHours(0, 0, 0, 0));
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setTime(date.setHours(0, 0, 0, 0));
console.log(date); // 今日の0時
~~~
`,
      },
    ],
  },
  {
    id: 'date_type_20',
    title: EnumDate.GETUTCFULLYEAR,
    category: 'date_operations',
    questions: [
      {
        question: '現在の日付のUTC年を取得してください。',
        code: `
~~~ts
let utcYear: number;
~~~
`,
        answer: `
~~~ts
let utcYear: number = new Date().getUTCFullYear();
console.log(utcYear); // 現在のUTC年
~~~
`,
      },
      {
        question: '特定の日付（2023年5月1日）のUTC年を取得してください。',
        code: `
~~~ts
let date: Date = new Date('2023-05-01T00:00:00Z');
let utcYear: number;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2023-05-01T00:00:00Z');
let utcYear: number = date.getUTCFullYear();
console.log(utcYear); // 2023
~~~
`,
      },
      {
        question: '現在の年がUTCで2025年かどうかをチェックしてください。',
        code: `
~~~ts
let isUTCYear2025: boolean;
~~~
`,
        answer: `
~~~ts
let isUTCYear2025: boolean = new Date().getUTCFullYear() === 2025;
console.log(isUTCYear2025); // true if 2025, otherwise false
~~~
`,
      },
      {
        question: '過去の日付（1999年12月31日）のUTC年を取得してください。',
        code: `
~~~ts
let date: Date = new Date('1999-12-31T00:00:00Z');
let utcYear: number;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('1999-12-31T00:00:00Z');
let utcYear: number = date.getUTCFullYear();
console.log(utcYear); // 1999
~~~
`,
      },
      {
        question: '現在の日付のUTC年が2023年より前かどうかを判定してください。',
        code: `
~~~ts
let isBefore2023: boolean;
~~~
`,
        answer: `
~~~ts
let isBefore2023: boolean = new Date().getUTCFullYear() < 2023;
console.log(isBefore2023); // 2023年より前なら true, それ以外は false
~~~
`,
      },
    ],
  },
  {
    id: 'date_type_21',
    title: EnumDate.GETUTCMONTH,
    category: 'date_operations',
    questions: [
      {
        question: '現在の日付のUTC月を取得してください（0から始まる）。',
        code: `
~~~ts
let utcMonth: number;
~~~
`,
        answer: `
~~~ts
let utcMonth: number = new Date().getUTCMonth();
console.log(utcMonth); // 現在のUTC月 (0 - 11)
~~~
`,
      },
      {
        question: '特定の日付（2023年5月1日）のUTC月を取得してください。',
        code: `
~~~ts
let date: Date = new Date('2023-05-01T00:00:00Z');
let utcMonth: number;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2023-05-01T00:00:00Z');
let utcMonth: number = date.getUTCMonth();
console.log(utcMonth); // 4 (5月)
~~~
`,
      },
      {
        question:
          '現在の日付のUTC月が7月（インデックス6）かどうかを確認してください。',
        code: `
~~~ts
let isUTCJuly: boolean;
~~~
`,
        answer: `
~~~ts
let isUTCJuly: boolean = new Date().getUTCMonth() === 6;
console.log(isUTCJuly); // true if July, otherwise false
~~~
`,
      },
      {
        question: '過去の日付（1999年12月31日）のUTC月を取得してください。',
        code: `
~~~ts
let date: Date = new Date('1999-12-31T00:00:00Z');
let utcMonth: number;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('1999-12-31T00:00:00Z');
let utcMonth: number = date.getUTCMonth();
console.log(utcMonth); // 11 (12月)
~~~
`,
      },
      {
        question: '現在の日付のUTC月が3月より前かどうかを判定してください。',
        code: `
~~~ts
let isBeforeMarchUTC: boolean;
~~~
`,
        answer: `
~~~ts
let isBeforeMarchUTC: boolean = new Date().getUTCMonth() < 2;
console.log(isBeforeMarchUTC); // 3月より前なら true, それ以外は false
~~~
`,
      },
    ],
  },
  {
    id: 'date_type_22',
    title: EnumDate.GETUTCDATE,
    category: 'date_operations',
    questions: [
      {
        question: '現在の日付のUTC日を取得してください。',
        code: `
~~~ts
let utcDate: number;
~~~
`,
        answer: `
~~~ts
let utcDate: number = new Date().getUTCDate();
console.log(utcDate); // 現在のUTC日
~~~
`,
      },
      {
        question: '特定の日付（2024年4月15日）のUTC日を取得してください。',
        code: `
~~~ts
let date: Date = new Date('2024-04-15T00:00:00Z');
let utcDate: number;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2024-04-15T00:00:00Z');
let utcDate: number = date.getUTCDate();
console.log(utcDate); // 15
~~~
`,
      },
      {
        question: '現在の日付のUTC日が15日かどうかを確認してください。',
        code: `
~~~ts
let isUTCDate15: boolean;
~~~
`,
        answer: `
~~~ts
let isUTCDate15: boolean = new Date().getUTCDate() === 15;
console.log(isUTCDate15); // true if 15th, otherwise false
~~~
`,
      },
      {
        question: '過去の日付（2005年6月10日）のUTC日を取得してください。',
        code: `
~~~ts
let date: Date = new Date('2005-06-10T00:00:00Z');
let utcDate: number;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2005-06-10T00:00:00Z');
let utcDate: number = date.getUTCDate();
console.log(utcDate); // 10
~~~
`,
      },
      {
        question: '現在の日付のUTC日が7日以内かどうかを判定してください。',
        code: `
~~~ts
let isFirstWeekUTC: boolean;
~~~
`,
        answer: `
~~~ts
let isFirstWeekUTC: boolean = new Date().getUTCDate() <= 7;
console.log(isFirstWeekUTC); // 7日以内なら true, それ以外は false
~~~
`,
      },
    ],
  },
  {
    id: 'date_type_23',
    title: EnumDate.GETUTCDAY,
    category: 'date_operations',
    questions: [
      {
        question:
          '現在の日付のUTC曜日を取得してください（0=日曜日, 6=土曜日）。',
        code: `
~~~ts
let utcDay: number;
~~~
`,
        answer: `
~~~ts
let utcDay: number = new Date().getUTCDay();
console.log(utcDay); // 現在のUTC曜日
~~~
`,
      },
      {
        question: '特定の日付（2025年7月20日）のUTC曜日を取得してください。',
        code: `
~~~ts
let date: Date = new Date('2025-07-20T00:00:00Z');
let utcDay: number;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2025-07-20T00:00:00Z');
let utcDay: number = date.getUTCDay();
console.log(utcDay); // 0 (日曜日)
~~~
`,
      },
      {
        question: '現在の日付のUTC曜日が土曜日かどうかを確認してください。',
        code: `
~~~ts
let isUTCSaturday: boolean;
~~~
`,
        answer: `
~~~ts
let isUTCSaturday: boolean = new Date().getUTCDay() === 6;
console.log(isUTCSaturday); // 土曜日なら true, それ以外は false
~~~
`,
      },
      {
        question: '過去の日付（1980年11月15日）のUTC曜日を取得してください。',
        code: `
~~~ts
let date: Date = new Date('1980-11-15T00:00:00Z');
let utcDay: number;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('1980-11-15T00:00:00Z');
let utcDay: number = date.getUTCDay();
console.log(utcDay); // 6 (土曜日)
~~~
`,
      },
      {
        question:
          '現在の日付のUTC曜日が平日かどうかを判定してください（0=日曜日, 6=土曜日の場合は週末）。',
        code: `
~~~ts
let isUTCWeekday: boolean;
~~~
`,
        answer: `
~~~ts
let utcDay: number = new Date().getUTCDay();
let isUTCWeekday: boolean = (utcDay > 0 && utcDay < 6);
console.log(isUTCWeekday); // 平日なら true, それ以外は false
~~~
`,
      },
    ],
  },
  {
    id: 'date_type_1',
    title: EnumDate.GETUTCHOURS,
    category: 'date_operations',
    questions: [
      {
        question: '現在のUTC時間を取得してください。',
        code: `
~~~ts
let utcHours: number;
~~~
`,
        answer: `
~~~ts
let utcHours: number = new Date().getUTCHours();
console.log(utcHours); // 現在のUTC時間 (0-23)
~~~
`,
      },
      {
        question: '特定の日付（2024年12月24日）のUTC時間を取得してください。',
        code: `
~~~ts
let date: Date = new Date('2024-12-24T15:30:00Z');
let utcHours: number;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2024-12-24T15:30:00Z');
let utcHours: number = date.getUTCHours();
console.log(utcHours); // 15
~~~
`,
      },
      {
        question: '現在のUTC時間が午後かどうかをチェックしてください。',
        code: `
~~~ts
let isUTCPM: boolean;
~~~
`,
        answer: `
~~~ts
let isUTCPM: boolean = new Date().getUTCHours() >= 12;
console.log(isUTCPM); // 午後なら true, 午前なら false
~~~
`,
      },
      {
        question: '過去の日付（1992年2月29日）のUTC時間を取得してください。',
        code: `
~~~ts
let date: Date = new Date('1992-02-29T07:45:00Z');
let utcHours: number;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('1992-02-29T07:45:00Z');
let utcHours: number = date.getUTCHours();
console.log(utcHours); // 7
~~~
`,
      },
      {
        question: '現在のUTC時間が6時以降かどうかを判定してください。',
        code: `
~~~ts
let isAfter6AMUTC: boolean;
~~~
`,
        answer: `
~~~ts
let isAfter6AMUTC: boolean = new Date().getUTCHours() >= 6;
console.log(isAfter6AMUTC); // 6時以降なら true, それ以外は false
~~~
`,
      },
    ],
  },
  {
    id: 'date_type_1',
    title: EnumDate.GETUTCMINUTES,
    category: 'date_operations',
    questions: [
      {
        question: '現在のUTC分を取得してください。',
        code: `
~~~ts
let utcMinutes: number;
~~~
`,
        answer: `
~~~ts
let utcMinutes: number = new Date().getUTCMinutes();
console.log(utcMinutes); // 現在のUTC分 (0-59)
~~~
`,
      },
      {
        question: '特定の日付（2022年3月17日）のUTC分を取得してください。',
        code: `
~~~ts
let date: Date = new Date('2022-03-17T08:45:00Z');
let utcMinutes: number;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2022-03-17T08:45:00Z');
let utcMinutes: number = date.getUTCMinutes();
console.log(utcMinutes); // 45
~~~
`,
      },
      {
        question: '現在のUTC時間の分が30分以上かどうかをチェックしてください。',
        code: `
~~~ts
let isUTCMinutesAfter30: boolean;
~~~
`,
        answer: `
~~~ts
let isUTCMinutesAfter30: boolean = new Date().getUTCMinutes() >= 30;
console.log(isUTCMinutesAfter30); // 30分以上なら true, それ以外は false
~~~
`,
      },
      {
        question: '過去の日付（2010年9月10日）のUTC分を取得してください。',
        code: `
~~~ts
let date: Date = new Date('2010-09-10T14:15:00Z');
let utcMinutes: number;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2010-09-10T14:15:00Z');
let utcMinutes: number = date.getUTCMinutes();
console.log(utcMinutes); // 15
~~~
`,
      },
      {
        question: '現在のUTC時間の分が45分以内かどうかを判定してください。',
        code: `
~~~ts
let isBefore45MinutesUTC: boolean;
~~~
`,
        answer: `
~~~ts
let isBefore45MinutesUTC: boolean = new Date().getUTCMinutes() <= 45;
console.log(isBefore45MinutesUTC); // 45分以内なら true, それ以外は false
~~~
`,
      },
    ],
  },
  {
    id: 'date_type_1',
    title: EnumDate.GETUTCSECONDS,
    category: 'date_operations',
    questions: [
      {
        question: '現在のUTC秒を取得してください。',
        code: `
~~~ts
let utcSeconds: number;
~~~
`,
        answer: `
~~~ts
let utcSeconds: number = new Date().getUTCSeconds();
console.log(utcSeconds); // 現在のUTC秒 (0-59)
~~~
`,
      },
      {
        question: '特定の日付（2021年11月11日）のUTC秒を取得してください。',
        code: `
~~~ts
let date: Date = new Date('2021-11-11T11:11:11Z');
let utcSeconds: number;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2021-11-11T11:11:11Z');
let utcSeconds: number = date.getUTCSeconds();
console.log(utcSeconds); // 11
~~~
`,
      },
      {
        question: '現在のUTC秒が30秒以上かどうかを確認してください。',
        code: `
~~~ts
let isUTCSecondsAfter30: boolean;
~~~
`,
        answer: `
~~~ts
let isUTCSecondsAfter30: boolean = new Date().getUTCSeconds() >= 30;
console.log(isUTCSecondsAfter30); // 30秒以上なら true, それ以外は false
~~~
`,
      },
      {
        question: '過去の日付（2000年5月5日）のUTC秒を取得してください。',
        code: `
~~~ts
let date: Date = new Date('2000-05-05T05:05:05Z');
let utcSeconds: number;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2000-05-05T05:05:05Z');
let utcSeconds: number = date.getUTCSeconds();
console.log(utcSeconds); // 5
~~~
`,
      },
      {
        question: '現在のUTC秒が15秒以内かどうかを判定してください。',
        code: `
~~~ts
let isBefore15SecondsUTC: boolean;
~~~
`,
        answer: `
~~~ts
let isBefore15SecondsUTC: boolean = new Date().getUTCSeconds() <= 15;
console.log(isBefore15SecondsUTC); // 15秒以内なら true, それ以外は false
~~~
`,
      },
    ],
  },
  {
    id: 'date_type_1',
    title: EnumDate.GETUTCMILLISECONDS,
    category: 'date_operations',
    questions: [
      {
        question: '現在のUTCミリ秒を取得してください。',
        code: `
~~~ts
let utcMilliseconds: number;
~~~
`,
        answer: `
~~~ts
let utcMilliseconds: number = new Date().getUTCMilliseconds();
console.log(utcMilliseconds); // 現在のUTCミリ秒 (0-999)
~~~
`,
      },
      {
        question: '特定の日付（2022年2月22日）のUTCミリ秒を取得してください。',
        code: `
~~~ts
let date: Date = new Date('2022-02-22T22:22:22.222Z');
let utcMilliseconds: number;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2022-02-22T22:22:22.222Z');
let utcMilliseconds: number = date.getUTCMilliseconds();
console.log(utcMilliseconds); // 222
~~~
`,
      },
      {
        question:
          '現在のUTCミリ秒が500ミリ秒以上かどうかをチェックしてください。',
        code: `
~~~ts
let isUTCMillisecondsAfter500: boolean;
~~~
`,
        answer: `
~~~ts
let isUTCMillisecondsAfter500: boolean = new Date().getUTCMilliseconds() >= 500;
console.log(isUTCMillisecondsAfter500); // 500ミリ秒以上なら true, それ以外は false
~~~
`,
      },
      {
        question: '過去の日付（2012年8月8日）のUTCミリ秒を取得してください。',
        code: `
~~~ts
let date: Date = new Date('2012-08-08T08:08:08.808Z');
let utcMilliseconds: number;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2012-08-08T08:08:08.808Z');
let utcMilliseconds: number = date.getUTCMilliseconds();
console.log(utcMilliseconds); // 808
~~~
`,
      },
      {
        question: '現在のUTCミリ秒が250ミリ秒以内かどうかを判定してください。',
        code: `
~~~ts
let isBefore250MillisecondsUTC: boolean;
~~~
`,
        answer: `
~~~ts
let isBefore250MillisecondsUTC: boolean = new Date().getUTCMilliseconds() <= 250;
console.log(isBefore250MillisecondsUTC); // 250ミリ秒以内なら true, それ以外は false
~~~
`,
      },
    ],
  },
  {
    id: 'date_type_1',
    title: EnumDate.SETUTCFULLYEAR,
    category: 'date_operations',
    questions: [
      {
        question: '現在の日付のUTC年を2030年に設定してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setUTCFullYear(2030);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setUTCFullYear(2030);
console.log(date.getUTCFullYear()); // 2030
~~~
`,
      },
      {
        question:
          '特定の日付（2023年4月1日）のUTC年を2025年に変更してください。',
        code: `
~~~ts
let date: Date = new Date('2023-04-01T00:00:00Z');
date.setUTCFullYear(2025);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2023-04-01T00:00:00Z');
date.setUTCFullYear(2025);
console.log(date.getUTCFullYear()); // 2025
~~~
`,
      },
      {
        question:
          '指定した日付のUTC年、月、日を2022年5月10日に設定してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setUTCFullYear(2022, 4, 10);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setUTCFullYear(2022, 4, 10);
console.log(date); // 2022年5月10日のDateオブジェクト
~~~
`,
      },
      {
        question:
          '過去の日付（1999年12月31日）をUTCで2023年に変更してください。',
        code: `
~~~ts
let date: Date = new Date('1999-12-31T00:00:00Z');
date.setUTCFullYear(2023);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('1999-12-31T00:00:00Z');
date.setUTCFullYear(2023);
console.log(date.getUTCFullYear()); // 2023
~~~
`,
      },
      {
        question: '現在のUTC年を1年進めるように設定してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setUTCFullYear(date.getUTCFullYear() + 1);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setUTCFullYear(date.getUTCFullYear() + 1);
console.log(date.getUTCFullYear()); // 現在の年 + 1
~~~
`,
      },
    ],
  },
  {
    id: 'date_type_1',
    title: EnumDate.SETUTCMONTH,
    category: 'date_operations',
    questions: [
      {
        question: '現在の日付のUTC月を7月（インデックス6）に設定してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setUTCMonth(6);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setUTCMonth(6);
console.log(date.getUTCMonth()); // 6 (7月)
~~~
`,
      },
      {
        question:
          '特定の日付（2023年5月15日）のUTC月を12月（インデックス11）に変更してください。',
        code: `
~~~ts
let date: Date = new Date('2023-05-15T00:00:00Z');
date.setUTCMonth(11);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2023-05-15T00:00:00Z');
date.setUTCMonth(11);
console.log(date.getUTCMonth()); // 11 (12月)
~~~
`,
      },
      {
        question:
          '指定した日付のUTC月を1月（インデックス0）に設定し、日を10日に設定してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setUTCMonth(0, 10);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setUTCMonth(0, 10);
console.log(date); // 1月10日のDateオブジェクト
~~~
`,
      },
      {
        question:
          '過去の日付（2000年1月1日）をUTCで3月（インデックス2）に変更してください。',
        code: `
~~~ts
let date: Date = new Date('2000-01-01T00:00:00Z');
date.setUTCMonth(2);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2000-01-01T00:00:00Z');
date.setUTCMonth(2);
console.log(date.getUTCMonth()); // 2 (3月)
~~~
`,
      },
      {
        question: '現在のUTC月を3ヶ月進めるように設定してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setUTCMonth(date.getUTCMonth() + 3);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setUTCMonth(date.getUTCMonth() + 3);
console.log(date.getUTCMonth()); // 現在の月 + 3
~~~
`,
      },
    ],
  },
  {
    id: 'date_type_1',
    title: EnumDate.SETUTCDATE,
    category: 'date_operations',
    questions: [
      {
        question: '現在の日付のUTC「日」を15日に設定してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setUTCDate(15);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setUTCDate(15);
console.log(date.getUTCDate()); // 15
~~~
`,
      },
      {
        question:
          '特定の日付（2023年5月1日）のUTC「日」を20日に変更してください。',
        code: `
~~~ts
let date: Date = new Date('2023-05-01T00:00:00Z');
date.setUTCDate(20);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2023-05-01T00:00:00Z');
date.setUTCDate(20);
console.log(date.getUTCDate()); // 20
~~~
`,
      },
      {
        question: '指定した日付のUTC「日」を月の末日に設定してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setUTCDate(0); // 翌月の0日は月の末日
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setUTCDate(0);
console.log(date); // 月の末日
~~~
`,
      },
      {
        question: '過去の日付（2000年1月15日）をUTCで5日に変更してください。',
        code: `
~~~ts
let date: Date = new Date('2000-01-15T00:00:00Z');
date.setUTCDate(5);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2000-01-15T00:00:00Z');
date.setUTCDate(5);
console.log(date.getUTCDate()); // 5
~~~
`,
      },
      {
        question: '現在のUTC日を1週間前に設定してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setUTCDate(date.getUTCDate() - 7);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setUTCDate(date.getUTCDate() - 7);
console.log(date); // 1週間前の日付
~~~
`,
      },
    ],
  },
  {
    id: 'date_type_1',
    title: EnumDate.SETUTCHOURS,
    category: 'date_operations',
    questions: [
      {
        question: '現在のUTC時間の「時」を午後2時に設定してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setUTCHours(14);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setUTCHours(14);
console.log(date.getUTCHours()); // 14
~~~
`,
      },
      {
        question:
          '特定の日付（2023年8月1日）のUTC「時」を午後3時45分に変更してください。',
        code: `
~~~ts
let date: Date = new Date('2023-08-01T00:00:00Z');
date.setUTCHours(15, 45);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2023-08-01T00:00:00Z');
date.setUTCHours(15, 45);
console.log(date.getUTCHours(), date.getUTCMinutes()); // 15, 45
~~~
`,
      },
      {
        question: '指定した日付のUTC「時」を23時30分10秒に設定してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setUTCHours(23, 30, 10);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setUTCHours(23, 30, 10);
console.log(date); // 時刻が 23:30:10 の Date オブジェクト
~~~
`,
      },
      {
        question:
          '過去の日付（1999年12月31日）のUTC「時」を午前8時に変更してください。',
        code: `
~~~ts
let date: Date = new Date('1999-12-31T00:00:00Z');
date.setUTCHours(8);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('1999-12-31T00:00:00Z');
date.setUTCHours(8);
console.log(date.getUTCHours()); // 8
~~~
`,
      },
      {
        question: '現在のUTC「時」を2時間進めるように設定してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setUTCHours(date.getUTCHours() + 2);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setUTCHours(date.getUTCHours() + 2);
console.log(date.getUTCHours()); // 現在の時間 + 2
~~~
`,
      },
    ],
  },
  {
    id: 'date_type_1',
    title: EnumDate.SETUTCMINUTES,
    category: 'date_operations',
    questions: [
      {
        question: '現在のUTC時間の「分」を30分に設定してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setUTCMinutes(30);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setUTCMinutes(30);
console.log(date.getUTCMinutes()); // 30
~~~
`,
      },
      {
        question:
          '特定の日付（2023年11月1日）のUTC「分」を45分に変更してください。',
        code: `
~~~ts
let date: Date = new Date('2023-11-01T00:00:00Z');
date.setUTCMinutes(45);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2023-11-01T00:00:00Z');
date.setUTCMinutes(45);
console.log(date.getUTCMinutes()); // 45
~~~
`,
      },
      {
        question: '指定した日付のUTC「分」を15分30秒に設定してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setUTCMinutes(15, 30);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setUTCMinutes(15, 30);
console.log(date.getUTCMinutes(), date.getUTCSeconds()); // 15, 30
~~~
`,
      },
      {
        question:
          '過去の日付（2005年10月20日）のUTC「分」を10分に変更してください。',
        code: `
~~~ts
let date: Date = new Date('2005-10-20T00:00:00Z');
date.setUTCMinutes(10);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2005-10-20T00:00:00Z');
date.setUTCMinutes(10);
console.log(date.getUTCMinutes()); // 10
~~~
`,
      },
      {
        question: '現在のUTC「分」を10分進めるように設定してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setUTCMinutes(date.getUTCMinutes() + 10);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setUTCMinutes(date.getUTCMinutes() + 10);
console.log(date.getUTCMinutes()); // 現在の分 + 10
~~~
`,
      },
    ],
  },
  {
    id: 'date_type_1',
    title: EnumDate.SETUTCSECONDS,
    category: 'date_operations',
    questions: [
      {
        question: '現在のUTC時間の「秒」を45秒に設定してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setUTCSeconds(45);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setUTCSeconds(45);
console.log(date.getUTCSeconds()); // 45
~~~
`,
      },
      {
        question:
          '特定の日付（2022年8月8日）のUTC「秒」を10秒に変更してください。',
        code: `
~~~ts
let date: Date = new Date('2022-08-08T00:00:00Z');
date.setUTCSeconds(10);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2022-08-08T00:00:00Z');
date.setUTCSeconds(10);
console.log(date.getUTCSeconds()); // 10
~~~
`,
      },
      {
        question: '指定した日付のUTC「秒」を30秒500ミリ秒に設定してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setUTCSeconds(30, 500);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setUTCSeconds(30, 500);
console.log(date.getUTCSeconds(), date.getUTCMilliseconds()); // 30, 500
~~~
`,
      },
      {
        question:
          '過去の日付（1997年5月10日）のUTC「秒」を20秒に変更してください。',
        code: `
~~~ts
let date: Date = new Date('1997-05-10T00:00:00Z');
date.setUTCSeconds(20);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('1997-05-10T00:00:00Z');
date.setUTCSeconds(20);
console.log(date.getUTCSeconds()); // 20
~~~
`,
      },
      {
        question: '現在のUTC「秒」を15秒進めるように設定してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setUTCSeconds(date.getUTCSeconds() + 15);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setUTCSeconds(date.getUTCSeconds() + 15);
console.log(date.getUTCSeconds()); // 現在の秒 + 15
~~~
`,
      },
    ],
  },
  {
    id: 'date_type_1',
    title: EnumDate.SETUTCMILLISECONDS,
    category: 'date_operations',
    questions: [
      {
        question: '現在のUTC時間の「ミリ秒」を500ミリ秒に設定してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setUTCMilliseconds(500);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setUTCMilliseconds(500);
console.log(date.getUTCMilliseconds()); // 500
~~~
`,
      },
      {
        question:
          '特定の日付（2023年12月1日）のUTC「ミリ秒」を750ミリ秒に変更してください。',
        code: `
~~~ts
let date: Date = new Date('2023-12-01T00:00:00Z');
date.setUTCMilliseconds(750);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2023-12-01T00:00:00Z');
date.setUTCMilliseconds(750);
console.log(date.getUTCMilliseconds()); // 750
~~~
`,
      },
      {
        question: '指定した日付のUTC「ミリ秒」を250ミリ秒に設定してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setUTCMilliseconds(250);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setUTCMilliseconds(250);
console.log(date.getUTCMilliseconds()); // 250
~~~
`,
      },
      {
        question:
          '過去の日付（1995年4月5日）のUTC「ミリ秒」を100ミリ秒に変更してください。',
        code: `
~~~ts
let date: Date = new Date('1995-04-05T00:00:00Z');
date.setUTCMilliseconds(100);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('1995-04-05T00:00:00Z');
date.setUTCMilliseconds(100);
console.log(date.getUTCMilliseconds()); // 100
~~~
`,
      },
      {
        question:
          '現在のUTC「ミリ秒」を300ミリ秒進めるように設定してください。',
        code: `
~~~ts
let date: Date = new Date();
date.setUTCMilliseconds(date.getUTCMilliseconds() + 300);
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
date.setUTCMilliseconds(date.getUTCMilliseconds() + 300);
console.log(date.getUTCMilliseconds()); // 現在のミリ秒 + 300
~~~
`,
      },
    ],
  },
  {
    id: 'date_type_1',
    title: EnumDate.TOSTRING,
    category: 'date_operations',
    questions: [
      {
        question: '現在の日付を文字列形式で取得してください。',
        code: `
~~~ts
let dateString: string;
~~~
`,
        answer: `
~~~ts
let dateString: string = new Date().toString();
console.log(dateString); // 現在の日付の文字列形式
~~~
`,
      },
      {
        question: '特定の日付（2022年1月1日）を文字列形式で取得してください。',
        code: `
~~~ts
let date: Date = new Date('2022-01-01');
let dateString: string;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2022-01-01');
let dateString: string = date.toString();
console.log(dateString); // 特定の日付の文字列形式
~~~
`,
      },
      {
        question: '現在の日付をUTC形式で文字列として出力してください。',
        code: `
~~~ts
let date: Date = new Date();
let utcString: string;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date();
let utcString: string = date.toUTCString();
console.log(utcString); // 現在の日付のUTC形式文字列
~~~
`,
      },
      {
        question: '過去の日付（2000年5月15日）を文字列として出力してください。',
        code: `
~~~ts
let date: Date = new Date('2000-05-15');
let dateString: string;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2000-05-15');
let dateString: string = date.toString();
console.log(dateString); // 文字列としての日付
~~~
`,
      },
      {
        question: '未来の日付を文字列形式で出力し、形式を確認してください。',
        code: `
~~~ts
let futureDate: Date = new Date();
futureDate.setFullYear(futureDate.getFullYear() + 1);
let dateString: string;
~~~
`,
        answer: `
~~~ts
let futureDate: Date = new Date();
futureDate.setFullYear(futureDate.getFullYear() + 1);
let dateString: string = futureDate.toString();
console.log(dateString); // 未来の日付の文字列形式
~~~
`,
      },
    ],
  },
  {
    id: 'date_type_1',
    title: EnumDate.TODATESTRING,
    category: 'date_operations',
    questions: [
      {
        question: '現在の日付を「日付のみ」の文字列形式で取得してください。',
        code: `
~~~ts
let dateString: string;
~~~
`,
        answer: `
~~~ts
let dateString: string = new Date().toDateString();
console.log(dateString); // 現在の日付の文字列形式 (例: "Mon Sep 05 2023")
~~~
`,
      },
      {
        question:
          '特定の日付（2023年12月25日）を「日付のみ」の文字列形式で取得してください。',
        code: `
~~~ts
let date: Date = new Date('2023-12-25');
let dateString: string;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2023-12-25');
let dateString: string = date.toDateString();
console.log(dateString); // "Mon Dec 25 2023"
~~~
`,
      },
      {
        question:
          '過去の日付（2000年1月1日）を「日付のみ」の文字列として出力してください。',
        code: `
~~~ts
let date: Date = new Date('2000-01-01');
let dateString: string;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2000-01-01');
let dateString: string = date.toDateString();
console.log(dateString); // "Sat Jan 01 2000"
~~~
`,
      },
      {
        question:
          '未来の日付を「日付のみ」の文字列形式で出力し、形式を確認してください。',
        code: `
~~~ts
let futureDate: Date = new Date();
futureDate.setFullYear(futureDate.getFullYear() + 1);
let dateString: string;
~~~
`,
        answer: `
~~~ts
let futureDate: Date = new Date();
futureDate.setFullYear(futureDate.getFullYear() + 1);
let dateString: string = futureDate.toDateString();
console.log(dateString); // 未来の日付の文字列形式
~~~
`,
      },
      {
        question:
          '現在の日付を「日付のみ」の文字列形式で取得し、表示してください。',
        code: `
~~~ts
let dateString: string;
~~~
`,
        answer: `
~~~ts
let dateString: string = new Date().toDateString();
console.log(dateString); // 現在の日付の文字列形式
~~~
`,
      },
    ],
  },
  {
    id: 'date_type_1',
    title: EnumDate.TOTIMESTRING,
    category: 'date_operations',
    questions: [
      {
        question: '現在の時間を「時刻のみ」の文字列形式で取得してください。',
        code: `
~~~ts
let timeString: string;
~~~
`,
        answer: `
~~~ts
let timeString: string = new Date().toTimeString();
console.log(timeString); // 現在の時刻の文字列形式 (例: "14:39:07 GMT+0000 (Coordinated Universal Time)")
~~~
`,
      },
      {
        question:
          '特定の日付（2023年11月11日 14:45:30）の「時刻のみ」を文字列形式で取得してください。',
        code: `
~~~ts
let date: Date = new Date('2023-11-11T14:45:30');
let timeString: string;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2023-11-11T14:45:30');
let timeString: string = date.toTimeString();
console.log(timeString); // "14:45:30 GMT+0000 (Coordinated Universal Time)"
~~~
`,
      },
      {
        question:
          '過去の日付（2000年5月5日 08:30:15）を「時刻のみ」の文字列として出力してください。',
        code: `
~~~ts
let date: Date = new Date('2000-05-05T08:30:15');
let timeString: string;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2000-05-05T08:30:15');
let timeString: string = date.toTimeString();
console.log(timeString); // "08:30:15 GMT+0000 (Coordinated Universal Time)"
~~~
`,
      },
      {
        question:
          '未来の日付を「時刻のみ」の文字列形式で出力し、形式を確認してください。',
        code: `
~~~ts
let futureDate: Date = new Date();
futureDate.setHours(futureDate.getHours() + 5);
let timeString: string;
~~~
`,
        answer: `
~~~ts
let futureDate: Date = new Date();
futureDate.setHours(futureDate.getHours() + 5);
let timeString: string = futureDate.toTimeString();
console.log(timeString); // 未来の時刻の文字列形式
~~~
`,
      },
      {
        question:
          '現在の時間を「時刻のみ」の文字列形式で取得し、表示してください。',
        code: `
~~~ts
let timeString: string;
~~~
`,
        answer: `
~~~ts
let timeString: string = new Date().toTimeString();
console.log(timeString); // 現在の時刻の文字列形式
~~~
`,
      },
    ],
  },
  {
    id: 'date_type_1',
    title: EnumDate.TOLOCALESTRING,
    category: 'date_operations',
    questions: [
      {
        question:
          '現在の日付と時刻をロケールに基づいた文字列形式で取得してください。',
        code: `
~~~ts
let localeString: string;
~~~
`,
        answer: `
~~~ts
let localeString: string = new Date().toLocaleString();
console.log(localeString); // 現在の日付と時刻のロケール形式
~~~
`,
      },
      {
        question:
          '特定の日付（2024年1月1日）を日本のロケール形式で取得してください。',
        code: `
~~~ts
let date: Date = new Date('2024-01-01');
let localeString: string;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2024-01-01');
let localeString: string = date.toLocaleString('ja-JP');
console.log(localeString); // 日本のロケール形式での日付
~~~
`,
      },
      {
        question:
          '現在の日付と時刻を英語（米国）のロケール形式で取得してください。',
        code: `
~~~ts
let localeString: string;
~~~
`,
        answer: `
~~~ts
let localeString: string = new Date().toLocaleString('en-US');
console.log(localeString); // 米国のロケール形式
~~~
`,
      },
      {
        question:
          '過去の日付（1990年3月15日）をフランスのロケール形式で取得してください。',
        code: `
~~~ts
let date: Date = new Date('1990-03-15');
let localeString: string;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('1990-03-15');
let localeString: string = date.toLocaleString('fr-FR');
console.log(localeString); // フランスのロケール形式での日付
~~~
`,
      },
      {
        question:
          '現在の日付と時刻をドイツのロケール形式で取得し、オプションを指定してください（週の曜日を含む）。',
        code: `
~~~ts
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let localeString: string;
~~~
`,
        answer: `
~~~ts
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let localeString: string = new Date().toLocaleString('de-DE', options);
console.log(localeString); // ドイツのロケール形式での日付と曜日
~~~
`,
      },
    ],
  },
  {
    id: 'date_type_1',
    title: EnumDate.TOLOCALEDATETIME,
    category: 'date_operations',
    questions: [
      {
        question:
          '現在の日付をロケールに基づいた「日付のみ」の文字列形式で取得してください。',
        code: `
~~~ts
let localeDateString: string;
~~~
`,
        answer: `
~~~ts
let localeDateString: string = new Date().toLocaleDateString();
console.log(localeDateString); // 現在の日付のロケール形式
~~~
`,
      },
      {
        question:
          '特定の日付（2025年6月15日）を日本のロケール形式で「日付のみ」で取得してください。',
        code: `
~~~ts
let date: Date = new Date('2025-06-15');
let localeDateString: string;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2025-06-15');
let localeDateString: string = date.toLocaleDateString('ja-JP');
console.log(localeDateString); // 日本のロケール形式での日付
~~~
`,
      },
      {
        question:
          '現在の日付を英語（英国）のロケール形式で「日付のみ」で取得してください。',
        code: `
~~~ts
let localeDateString: string;
~~~
`,
        answer: `
~~~ts
let localeDateString: string = new Date().toLocaleDateString('en-GB');
console.log(localeDateString); // 英国のロケール形式での日付
~~~
`,
      },
      {
        question:
          '過去の日付（1985年7月20日）をドイツのロケール形式で「日付のみ」で取得してください。',
        code: `
~~~ts
let date: Date = new Date('1985-07-20');
let localeDateString: string;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('1985-07-20');
let localeDateString: string = date.toLocaleDateString('de-DE');
console.log(localeDateString); // ドイツのロケール形式での日付
~~~
`,
      },
      {
        question:
          '現在の日付をイタリアのロケール形式で「日付のみ」で取得し、年と月を長い形式で表示してください。',
        code: `
~~~ts
let options = { year: 'numeric', month: 'long', day: 'numeric' };
let localeDateString: string;
~~~
`,
        answer: `
~~~ts
let options = { year: 'numeric', month: 'long', day: 'numeric' };
let localeDateString: string = new Date().toLocaleDateString('it-IT', options);
console.log(localeDateString); // イタリアのロケール形式での日付
~~~
`,
      },
    ],
  },
  {
    id: 'date_type_1',
    title: EnumDate.TOLOCALETIMESTRING,
    category: 'date_operations',
    questions: [
      {
        question:
          '現在の時刻をロケールに基づいた「時刻のみ」の文字列形式で取得してください。',
        code: `
~~~ts
let localeTimeString: string;
~~~
`,
        answer: `
~~~ts
let localeTimeString: string = new Date().toLocaleTimeString();
console.log(localeTimeString); // 現在の時刻のロケール形式
~~~
`,
      },
      {
        question:
          '特定の日付（2023年11月11日 14:45:30）の「時刻のみ」を日本のロケール形式で取得してください。',
        code: `
~~~ts
let date: Date = new Date('2023-11-11T14:45:30');
let localeTimeString: string;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2023-11-11T14:45:30');
let localeTimeString: string = date.toLocaleTimeString('ja-JP');
console.log(localeTimeString); // 日本のロケール形式での時刻
~~~
`,
      },
      {
        question:
          '現在の時刻をフランスのロケール形式で「時刻のみ」で取得してください。',
        code: `
~~~ts
let localeTimeString: string;
~~~
`,
        answer: `
~~~ts
let localeTimeString: string = new Date().toLocaleTimeString('fr-FR');
console.log(localeTimeString); // フランスのロケール形式での時刻
~~~
`,
      },
      {
        question:
          '過去の日付（1999年12月31日 23:59:59）をドイツのロケール形式で「時刻のみ」で取得してください。',
        code: `
~~~ts
let date: Date = new Date('1999-12-31T23:59:59');
let localeTimeString: string;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('1999-12-31T23:59:59');
let localeTimeString: string = date.toLocaleTimeString('de-DE');
console.log(localeTimeString); // ドイツのロケール形式での時刻
~~~
`,
      },
      {
        question:
          '現在の時刻をイタリアのロケール形式で「時刻のみ」で取得し、24時間形式で表示してください。',
        code: `
~~~ts
let options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false };
let localeTimeString: string;
~~~
`,
        answer: `
~~~ts
let options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false };
let localeTimeString: string = new Date().toLocaleTimeString('it-IT', options);
console.log(localeTimeString); // イタリアのロケール形式での24時間形式の時刻
~~~
`,
      },
    ],
  },
  {
    id: 'date_type_1',
    title: EnumDate.TOISOSTRING,
    category: 'date_operations',
    questions: [
      {
        question: '現在の日付をISO 8601形式の文字列で取得してください。',
        code: `
~~~ts
let isoString: string;
~~~
`,
        answer: `
~~~ts
let isoString: string = new Date().toISOString();
console.log(isoString); // 現在の日付のISO 8601形式 (例: "2023-09-05T14:39:07.123Z")
~~~
`,
      },
      {
        question:
          '特定の日付（2024年6月1日）をISO 8601形式の文字列で取得してください。',
        code: `
~~~ts
let date: Date = new Date('2024-06-01');
let isoString: string;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2024-06-01');
let isoString: string = date.toISOString();
console.log(isoString); // ISO 8601形式での日付
~~~
`,
      },
      {
        question:
          '過去の日付（1995年7月15日 12:30:45）をISO 8601形式の文字列で取得してください。',
        code: `
~~~ts
let date: Date = new Date('1995-07-15T12:30:45');
let isoString: string;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('1995-07-15T12:30:45');
let isoString: string = date.toISOString();
console.log(isoString); // ISO 8601形式での日時
~~~
`,
      },
      {
        question:
          '未来の日付をISO 8601形式の文字列で出力し、形式を確認してください。',
        code: `
~~~ts
let futureDate: Date = new Date();
futureDate.setFullYear(futureDate.getFullYear() + 1);
let isoString: string;
~~~
`,
        answer: `
~~~ts
let futureDate: Date = new Date();
futureDate.setFullYear(futureDate.getFullYear() + 1);
let isoString: string = futureDate.toISOString();
console.log(isoString); // 未来の日付のISO 8601形式
~~~
`,
      },
      {
        question: '現在の日時をISO 8601形式で取得し、出力してください。',
        code: `
~~~ts
let isoString: string;
~~~
`,
        answer: `
~~~ts
let isoString: string = new Date().toISOString();
console.log(isoString); // 現在の日時のISO 8601形式
~~~
`,
      },
    ],
  },
  {
    id: 'date_type_1',
    title: EnumDate.TOUTCSTRING,
    category: 'date_operations',
    questions: [
      {
        question: '現在の日付をUTC形式の文字列で取得してください。',
        code: `
~~~ts
let utcString: string;
~~~
`,
        answer: `
~~~ts
let utcString: string = new Date().toUTCString();
console.log(utcString); // 現在の日付のUTC形式 (例: "Tue, 05 Sep 2023 14:39:07 GMT")
~~~
`,
      },
      {
        question:
          '特定の日付（2025年12月25日）をUTC形式の文字列で取得してください。',
        code: `
~~~ts
let date: Date = new Date('2025-12-25');
let utcString: string;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('2025-12-25');
let utcString: string = date.toUTCString();
console.log(utcString); // "Thu, 25 Dec 2025 00:00:00 GMT"
~~~
`,
      },
      {
        question:
          '過去の日付（1998年10月10日 08:30:00）をUTC形式の文字列で取得してください。',
        code: `
~~~ts
let date: Date = new Date('1998-10-10T08:30:00');
let utcString: string;
~~~
`,
        answer: `
~~~ts
let date: Date = new Date('1998-10-10T08:30:00');
let utcString: string = date.toUTCString();
console.log(utcString); // "Sat, 10 Oct 1998 08:30:00 GMT"
~~~
`,
      },
      {
        question:
          '未来の日付をUTC形式の文字列で出力し、形式を確認してください。',
        code: `
~~~ts
let futureDate: Date = new Date();
futureDate.setFullYear(futureDate.getFullYear() + 2);
let utcString: string;
~~~
`,
        answer: `
~~~ts
let futureDate: Date = new Date();
futureDate.setFullYear(futureDate.getFullYear() + 2);
let utcString: string = futureDate.toUTCString();
console.log(utcString); // 未来の日付のUTC形式
~~~
`,
      },
      {
        question: '現在の日時をUTC形式で取得し、出力してください。',
        code: `
~~~ts
let utcString: string;
~~~
`,
        answer: `
~~~ts
let utcString: string = new Date().toUTCString();
console.log(utcString); // 現在の日時のUTC形式
~~~
`,
      },
    ],
  },
  {
    id: 'date_type_1',
    title: EnumDate.NOW,
    category: 'date_operations',
    questions: [
      {
        question:
          '現在の日時を1970年1月1日からのミリ秒として取得してください。',
        code: `
~~~ts
let currentTime: number;
~~~
`,
        answer: `
~~~ts
let currentTime: number = Date.now();
console.log(currentTime); // 現在の日時のミリ秒
~~~
`,
      },
      {
        question:
          '現在の時刻をミリ秒単位で取得し、1秒後の時刻との差を表示してください。',
        code: `
~~~ts
let currentTime: number = Date.now();
setTimeout(() => {
  let laterTime: number = Date.now();
  console.log(laterTime - currentTime); // 約1000ミリ秒 (1秒)
}, 1000);
~~~
`,
        answer: `
~~~ts
let currentTime: number = Date.now();
setTimeout(() => {
  let laterTime: number = Date.now();
  console.log(laterTime - currentTime); // 約1000ミリ秒 (1秒)
}, 1000);
~~~
`,
      },
      {
        question:
          '過去の日時（2000年1月1日）と現在の日時の差をミリ秒単位で取得してください。',
        code: `
~~~ts
let pastTime: number = new Date('2000-01-01').getTime();
let currentTime: number = Date.now();
let difference: number;
~~~
`,
        answer: `
~~~ts
let pastTime: number = new Date('2000-01-01').getTime();
let currentTime: number = Date.now();
let difference: number = currentTime - pastTime;
console.log(difference); // 差分のミリ秒
~~~
`,
      },
      {
        question: '現在の時刻が10000ミリ秒後かどうかをチェックしてください。',
        code: `
~~~ts
let startTime: number = Date.now();
setTimeout(() => {
  let currentTime: number = Date.now();
  let isAfter10Seconds: boolean = (currentTime - startTime) >= 10000;
  console.log(isAfter10Seconds); // 10秒後なら true
}, 10000);
~~~
`,
        answer: `
~~~ts
let startTime: number = Date.now();
setTimeout(() => {
  let currentTime: number = Date.now();
  let isAfter10Seconds: boolean = (currentTime - startTime) >= 10000;
  console.log(isAfter10Seconds); // 10秒後なら true
}, 10000);
~~~
`,
      },
      {
        question: '現在の時刻をミリ秒単位で取得し、その値を表示してください。',
        code: `
~~~ts
let currentTime: number;
~~~
`,
        answer: `
~~~ts
let currentTime: number = Date.now();
console.log(currentTime); // 現在の時刻のミリ秒
~~~
`,
      },
    ],
  },
  {
    id: 'date_type_1',
    title: EnumDate.PARSE,
    category: 'date_operations',
    questions: [
      {
        question: '文字列「2023-12-25」をミリ秒に変換して取得してください。',
        code: `
~~~ts
let timeInMilliseconds: number;
~~~
`,
        answer: `
~~~ts
let timeInMilliseconds: number = Date.parse('2023-12-25');
console.log(timeInMilliseconds); // ミリ秒 (例: 1703654400000)
~~~
`,
      },
      {
        question:
          '特定の文字列「March 15, 2024 12:00:00」からミリ秒を取得してください。',
        code: `
~~~ts
let timeInMilliseconds: number;
~~~
`,
        answer: `
~~~ts
let timeInMilliseconds: number = Date.parse('March 15, 2024 12:00:00');
console.log(timeInMilliseconds); // ミリ秒での日付
~~~
`,
      },
      {
        question:
          '文字列「2001-09-11T08:46:00Z」をミリ秒に変換して表示してください。',
        code: `
~~~ts
let timeInMilliseconds: number;
~~~
`,
        answer: `
~~~ts
let timeInMilliseconds: number = Date.parse('2001-09-11T08:46:00Z');
console.log(timeInMilliseconds); // ミリ秒での日付
~~~
`,
      },
      {
        question:
          '文字列「2022-04-01」と現在の時刻との差をミリ秒単位で取得してください。',
        code: `
~~~ts
let parsedTime: number = Date.parse('2022-04-01');
let currentTime: number = Date.now();
let difference: number;
~~~
`,
        answer: `
~~~ts
let parsedTime: number = Date.parse('2022-04-01');
let currentTime: number = Date.now();
let difference: number = currentTime - parsedTime;
console.log(difference); // 差分のミリ秒
~~~
`,
      },
      {
        question:
          '文字列「July 4, 1776」をミリ秒に変換して、その結果を表示してください。',
        code: `
~~~ts
let timeInMilliseconds: number;
~~~
`,
        answer: `
~~~ts
let timeInMilliseconds: number = Date.parse('July 4, 1776');
console.log(timeInMilliseconds); // ミリ秒での日付
~~~
`,
      },
    ],
  },
  {
    id: 'date_type_1',
    title: EnumDate.UTC,
    category: 'date_operations',
    questions: [
      {
        question: 'UTCで2023年12月25日00:00:00のミリ秒を取得してください。',
        code: `
~~~ts
let timeInMilliseconds: number;
~~~
`,
        answer: `
~~~ts
let timeInMilliseconds: number = Date.UTC(2023, 11, 25, 0, 0, 0);
console.log(timeInMilliseconds); // ミリ秒 (例: 1703462400000)
~~~
`,
      },
      {
        question: 'UTCで2024年3月15日12:00:00のミリ秒を取得してください。',
        code: `
~~~ts
let timeInMilliseconds: number;
~~~
`,
        answer: `
~~~ts
let timeInMilliseconds: number = Date.UTC(2024, 2, 15, 12, 0, 0);
console.log(timeInMilliseconds); // ミリ秒での日付
~~~
`,
      },
      {
        question: 'UTCで2001年9月11日08:46:00のミリ秒を取得してください。',
        code: `
~~~ts
let timeInMilliseconds: number;
~~~
`,
        answer: `
~~~ts
let timeInMilliseconds: number = Date.UTC(2001, 8, 11, 8, 46, 0);
console.log(timeInMilliseconds); // ミリ秒での日付
~~~
`,
      },
      {
        question:
          'UTCで2022年4月1日と現在の時刻との差をミリ秒単位で取得してください。',
        code: `
~~~ts
let parsedTime: number = Date.UTC(2022, 3, 1);
let currentTime: number = Date.now();
let difference: number;
~~~
`,
        answer: `
~~~ts
let parsedTime: number = Date.UTC(2022, 3, 1);
let currentTime: number = Date.now();
let difference: number = currentTime - parsedTime;
console.log(difference); // 差分のミリ秒
~~~
`,
      },
      {
        question:
          'UTCで1776年7月4日00:00:00のミリ秒を取得して、その結果を表示してください。',
        code: `
~~~ts
let timeInMilliseconds: number;
~~~
`,
        answer: `
~~~ts
let timeInMilliseconds: number = Date.UTC(1776, 6, 4, 0, 0, 0);
console.log(timeInMilliseconds); // ミリ秒での日付
~~~
`,
      },
    ],
  },
]
