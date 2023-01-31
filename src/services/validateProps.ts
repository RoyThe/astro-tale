export const checkForBodyProp = (arr) => {
  arr.forEach((item) => {
    if (!("body" in item) || undefined === item.body) {
      throw new Error(`body not found in ${item}`)
    }
  })
}

export const checkForDateProp = (arr) => {
  arr.forEach((item) => {
    if (!("date" in item) || undefined === item.date) {
      throw new Error(`date not found in ${item}`)
    }
  })
}