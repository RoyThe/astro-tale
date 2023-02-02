import { marked } from "marked"
import { CardContent } from "./types"

const parseMarkdown = (arr: CardContent[]): CardContent[] => {
  arr.forEach((n) => {
    n.body = marked.parse(n.body)
  })
  return arr
}

export { parseMarkdown }
