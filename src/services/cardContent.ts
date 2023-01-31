import { marked } from "marked"
import { news } from "../../static/assets/content.json"
import { checkForBodyProp, checkForDateProp } from "./validateProps"

const parseMarkdown = (arr) => {
  try {
    checkForBodyProp(arr)
    return arr.forEach((n) => {
      n.body = marked.parse(n.body)
    })
  } catch(error) {
    console.log(`caught: ${error}`);
    return arr
  }
}

const sortByDate = (arr) => {
  try {
    checkForDateProp(arr)
    return arr.sort((a, b) => {
      return new Date(a.date) - new Date(b.date)
    })
  } catch (error) {
    return error
  }
}

export const sortNews = () => {
  let temp = parseMarkdown(news)
  return sortByDate(temp)
}

export default { sortNews }
