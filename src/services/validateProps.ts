import { News } from "./types"

// const isParsedArgs = (args: unknown): args is ParsedArgs => 
//   typeof args == "object"
//   && 'daily_exercises' in (args as ParsedArgs)
//   && 'target' in (args as ParsedArgs);

// const isValidData = (args: ParsedArgs): args is ParsedArgs =>
//   !isNaN(Number(args.target))
//   && Array.isArray(args.daily_exercises)
//   && args.daily_exercises.filter(num => isNaN(Number(num))).length === 0;

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