import { marked } from "marked"
import { news, creators } from "../../static/assets/content.json"
import { checkForBodyProp, checkForDateProp } from "./validateProps"
import { News, Updates, Creators } from "./types"

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
      return +new Date(b.date) - +new Date(a.date)
    })
    return arr
  } catch (error) {
    console.log(`caught: ${error}`);
    return arr
  }
}

const getNews = (): News[] => {
  let temp = parseMarkdown(news)
  return sortByDate(temp)
}

const getUpdates = (): Updates[] => {
  return getNews().filter(n => n.type === "update") as Updates[]
}

const getCreators = (): Creators[] => {
  const temp = creators as Creators[]
  temp.sort((a, b) => a.position - b.position)
  temp.forEach(u => {
    u.body = marked.parse(u.body)
  })
  return temp
}

export { getNews, getUpdates, getCreators }
