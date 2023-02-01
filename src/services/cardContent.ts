import { marked } from "marked"
import { news } from "../../static/assets/content.json"
import { checkForBodyProp, checkForDateProp } from "./validateProps"
import { News } from "./types"

const parseMarkdown = (arr: News[]): News[] => {
  try {
    checkForBodyProp(arr)
    arr.forEach((n) => {
      n.body = marked.parse(n.body)
    })
    return arr
  } catch(error) {
    console.log(`caught: ${error}`);
    return arr
  }
}

const sortByDate = (arr: News[]): News[] => {
  try {
    checkForDateProp(arr)
    arr.sort((a, b) => {
      return +new Date(a.date) - +new Date(b.date)
    })
    return arr
  } catch (error) {
    console.log(`caught: ${error}`);
    return arr
  }
}

const sortedNews = (): News[] => {
  let temp = parseMarkdown(news)
  return sortByDate(temp)
}

export { sortedNews }
