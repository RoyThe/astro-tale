import exp from "constants"
import { News } from "./types"

const checkForBodyProp = (arr: News[]): void | Error => {
  arr.forEach((item) => {
    if (!("body" in item) || undefined === item.body) {
      return new Error(`body not found in ${item}`)
    }
  })
}

const checkForDateProp = (arr: News[]) => {
  arr.forEach((item) => {
    if (!("date" in item) || undefined === item.date) {
      throw new Error(`date not found in ${item}`)
    }
  })
}

export { checkForBodyProp, checkForDateProp }