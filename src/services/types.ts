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

export interface Creators {
  name: string
  position: 1 | 2 | 3
  img: string
  body: string
}