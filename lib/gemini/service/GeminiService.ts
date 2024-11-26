// import { Quiz, SelectValue } from '@/domain/entities/Quiz'
// import { GoogleGenerativeAI } from '@google/generative-ai'

// export class GeminiService {
//   private genAI: GoogleGenerativeAI

//   constructor(apiKey: string) {
//     this.genAI = new GoogleGenerativeAI(apiKey)
//   }

//   async generatedQuiz(certification: string): Promise<Quiz[]> {
//     const model = this.genAI.getGenerativeModel({
//       model: 'gemini-1.5-flash',
//       generationConfig: { responseMimeType: 'application/json' },
//     })

//     console.log('certification', certification)

//     const prompt = `
//     ${certification}の資格合格を目指しています。
//     ${certification}の試験範囲に関するクイズを提供してください。
//     10問のクイズを提供してください。
//     正答が「上記すべて」や「すべて正しい」などの問題は避けてください。

//     # 成約事項
//     以下の形式で提供してください。
//     {
//       "questions": [
//         {
//           "question": "",
//           "selects": ["", "", "", ""],
//           "answer": 0,
//           "explanation": ""
//         }
//       ]
//     }
//     `

//     const result = await model.generateContent(prompt)
//     const response = result.response
//     const text = response.text()
//     console.log(text)
//     const json = JSON.parse(text)

//     // jsonからQuizに変換し、リスト化する
//     return json.questions.map(
//       (question: {
//         question: string
//         answer: number
//         explanation: string
//         selects: string[]
//       }) => {
//         const selects = question.selects.map(
//           (select: string, index: number) => {
//             return new SelectValue({ value: index, label: select })
//           }
//         )
//         return new Quiz({
//           qid: '',
//           question: question.question,
//           selects: selects,
//           answer: question.answer,
//           explanation: question.explanation,
//           createdAt: new Date(),
//           updatedAt: new Date(),
//         })
//       }
//     )
//   }
// }
