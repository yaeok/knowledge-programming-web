export class Knowledge {
  id: string
  title: string
  language: string
  type: string
  tags: string[]
  content: string | null
  createdAt: Date | null
  updatedAt: Date | null
  constructor(args: {
    id: string
    title: string
    language: string
    type: string
    tags: string[]
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }) {
    const { id, title, language, type, tags, content, createdAt, updatedAt } =
      args
    this.id = id
    this.title = title
    this.language = language
    this.type = type
    this.tags = tags
    this.content = content
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
}
