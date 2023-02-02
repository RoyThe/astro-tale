import { CardContent, Creators, News, Updates } from "./types"

const isString = (x: unknown): boolean => {
  return Object.prototype.toString.call(x) === "[object String]"
}

const isCardContent = (args: unknown): args is CardContent =>
  typeof args == "object" &&
  "body" in (args as CardContent) &&
  "img" in (args as CardContent) &&
  (("title" in (args as CardContent) && "type" in (args as CardContent)) || "name" in (args as CardContent)) &&
  ("date" in (args as CardContent) || "position" in (args as CardContent))

const isNews = (args: unknown): args is News =>
  isCardContent(args) &&
  isString(args.body) &&
  isString(args.img) &&
  "type" in args &&
  "title" in args &&
  isString(args.title) &&
  isString(args.type) &&
  !("name" in args) &&
  !("position" in args)

const isUpdates = (args: unknown): args is Updates => isNews(args) && !isCreators(args) && args.type === "update"

const isCreators = (args: unknown): args is Creators =>
  isCardContent(args) &&
  isString(args.body) &&
  isString(args.img) &&
  "name" in args &&
  "position" in args &&
  !isNaN(Number(args.position)) &&
  Number(args.position) > 0 &&
  Number(args.position) < 4

export { isCardContent, isNews, isUpdates, isCreators }
