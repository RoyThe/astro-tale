import { News, Updates } from "./types"

const sortByDate = (arr: News[] | Updates[]): News[] | Updates[] => {
  arr.sort((a, b) => {
    return +new Date(b.date) - +new Date(a.date)
  })
  return arr
}

export { sortByDate }
