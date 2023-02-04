import { marked } from "marked"
import { CardContent } from "./types"

const parseMarkdown = (arr: CardContent[]): CardContent[] => {
  arr.forEach((n) => {
    n.body = marked.parse(n.body)
    if (n.img === "") {
      n.img = "https://astroLT.b-cdn.net/ag-logo.png"
    }
  })
  return arr
}

export { parseMarkdown }
