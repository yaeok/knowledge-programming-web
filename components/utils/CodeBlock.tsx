import {
  CodeComponent,
  ReactMarkdownNames,
} from 'react-markdown/src/ast-to-react'
import { Prism } from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism'

export const CodeBlock: CodeComponent | ReactMarkdownNames = ({
  inline,
  className,
  children,
}) => {
  const match = /language-(\w+)(:.+)?/.exec(className || '')
  const lang = match && match[1] ? match[1] : ''
  return !inline ? (
    <Prism language={lang} style={nord}>
      {String(children).replace(/\n$/, '')}
    </Prism>
  ) : (
    <code className={className}>{children}</code>
  )
}
