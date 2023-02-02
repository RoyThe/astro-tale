export interface News {
  title: string
  date: string
  type: string
  img: string
  body: string
}

export interface Updates extends News {
  type: "update"
}