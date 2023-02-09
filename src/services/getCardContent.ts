import { news, creators } from "../../static/assets/content.json"
import { News, Updates, Creators, CardContent } from "./types"
import { isNews, isUpdates, isCreators } from "./validateProps"
import { sortByDate } from "./sortByDate"
import { parseMarkdown } from "./parseMarkdown"

const getNews = (): News[] | undefined => {
  try {
    const temp = news.filter((n) => isNews(n))
    sortByDate(temp)
    parseMarkdown(temp)
    return temp
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message)
    }
  }
}

const getUpdates = (): Updates[] | undefined => {
  try {
    const temp = news.filter((n) => isUpdates(n)) as Updates[]
    sortByDate(temp)
    parseMarkdown(temp)
    return temp
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message)
    }
  }
}

const getCreators = (): Creators[] | undefined => {
  try {
    const temp = creators.filter(c => isCreators(c)) as Creators[]
    temp.sort((a, b) => Number(a.position) - Number(b.position))
    parseMarkdown(temp)
    return temp
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message)
    }
  }
}

export { getNews, getUpdates, getCreators }
