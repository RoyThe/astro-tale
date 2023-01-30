<template>
  <div>
    <div class="hero h-24 md:h-32 bg-cover relative" :style="`background-image: url(${bgSliderUrl});`">
      <div class="flex flex-col justify-center">
        <h1 class="text-3xl md:text-5xl text-center font-extrabold text-black">News</h1>
        <figure class="w-32 md:w-44 mt-1"><img :src="bgUnderLineUrl" :alt="altText" /></figure>
      </div>
    </div>
    <div
      class="mt-5 pb-16 w-full grid place-items-center justify-center overflow-x-hidden gap-4 grid-cols-[minmax(0,_100px)_minmax(auto,_80rem)_minmax(0,_100px)]"
    >
      <div
        class="row-start-1 col-start-2 text-neutral-content justify-self-start w-full text-2xl md:text-4xl font-extrabold"
      >
        <h1>All</h1>
        <div class="divider" />
      </div>
      <div class="row-start-2 col-start-2 flex flex-wrap place-content-center gap-4">
        <div v-for="n in news" class="max-w-[250px]">
          <div v-if="numCards <= cardLimit">
            <EventCardVue
              :imgUrl="n.img"
              :modalId="JSON.stringify(n)"
              altText="test"
              :newsType="n.type"
              :title="n.title"
              :date="n.date"
              :content="n.body"
            />
          </div>
        </div>
      </div>
      <button v-if="numCards < news.length" @click="cardLimit += 3" class="mt-4 btn btn-outline row-start-3 col-start-2">
        Show More
      </button>
    </div>
  </div>
</template>

<script>
import { marked } from "marked"
import EventCardVue from "../components/NewsCard.vue"
import bgSliderUrl from "./../../static/assets/lt-slider-misc.jpg?url"
import bgUnderLineUrl from "./../../static/assets/lt_arrow.png"
import { news } from "./../../static/assets/content.json"

const newsUrls = ["https://placeimg.com/400/225/arch"]
const cardLimit = 6
let numCards = 6

news.sort((a, b) => {
  return new Date(a.date) - new Date(b.date)
})
news.forEach((n) => {
  n.body = marked.parse(n.body)
})

export default {
  data() {
    return { bgSliderUrl, bgUnderLineUrl, newsUrls, numCards, cardLimit, news }
  },
  components: { EventCardVue },
}
</script>
