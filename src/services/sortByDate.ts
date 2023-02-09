import { News, Updates } from "./types"

const sortByDate = (arr: News[] | Updates[]): News[] | Updates[] => {
  arr.forEach((obj) => {
    if (isNaN(new Date(obj.date).getTime())) {
      throw new Error(`malformatted date: ${obj.date} in ${obj.title}`)
    }
  })
  arr.sort((a, b) => {
    return +new Date(b.date) - +new Date(a.date)
  })
  return arr
}

export { sortByDate }
