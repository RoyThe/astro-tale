<template>
  <div>
    <div class="hero min-h-[50vh] lg:h-[80vh] bg-cover relative" :style="`background-image: url(${sliderUrl});`">
      <div class="w-full py-4 absolute bottom-0 bg-gradient-to-l from-slate-800 to-transparent">
        <div class="w-full flex justify-evenly">
          <button class="btn btn-wide btn-accent">
            <RouterLink :to="{ name: 'news' }">See Patch Notes</RouterLink>
          </button>
          <button class="btn btn-wide btn-accent hidden sm:block">
            <RouterLink :to="{ name: 'download' }">Download</RouterLink>
          </button>
        </div>
      </div>
    </div>
    <div
      class="mt-5 w-full grid place-items-center justify-center overflow-x-hidden gap-4 grid-cols-[minmax(0,_100px)_minmax(auto,_80rem)_minmax(0,_100px)]"
    >
      <!-- NEWS SECTION START -->
      <div class="text-2xl md:text-4xl font-extrabold justify-self-start self-center col-start-2 row-start-1 w-full">
        <h1>News</h1>
        <div class="divider" />
      </div>
      <div class="w-full h-auto flex justify-evenly col-start-2 row-start-2">
        <NewsCard
          :imgUrl="news[0].img"
          :modalId="JSON.stringify(news[0])"
          altText="test"
          :newsType="news[0].type"
          :title="news[0].title"
          :date="news[0].date"
          :content="news[0].body"
        />
        <NewsCard
          :imgUrl="news[1].img"
          :modalId="JSON.stringify(news[1])"
          altText="test"
          :newsType="news[1].type"
          :title="news[1].title"
          :date="news[1].date"
          :content="news[1].body"
        />
        <NewsCard
          class="hidden lg:block"
          :imgUrl="news[2].img"
          :modalId="JSON.stringify(news[2])"
          altText="test"
          :newsType="news[2].type"
          :title="news[2].title"
          :date="news[2].date"
          :content="news[2].body"
        />
      </div>
      <div class="w-full h-auto flex justify-evenly items-center m-0 col-start-2 row-start-3">
        <ServerStatusVue />
        <SocialsMenu />
      </div>
      <!-- SERVER STATUS / COMMUNITY -->
      <div class="text-2xl md:text-4xl font-extrabold justify-self-start self-center col-start-2 row-start-4 w-full">
        <h1>Media</h1>
        <div class="divider" />
      </div>
      <div class="w-full h-auto flex justify-evenly m-0 mb-16 col-start-2 row-start-5">
        <Carousel />
      </div>
    </div>
  </div>
</template>

<script>
import sliderUrl from "./../../static/assets/lt-slider.jpg?url"
import NewsCard from "../components/NewsCard.vue"
import ServerStatusVue from "../components/ServerStatus.vue"
import SocialsMenu from "../components/SocialsMenu.vue"
import Carousel from "../components/Carousel.vue"
import { sortedNews } from "../services/cardContent"

const news = sortedNews().slice(0, 3)

export default {
  components: { NewsCard, ServerStatusVue, SocialsMenu, Carousel },
  data() {
    return {
      sliderUrl,
      news,
    }
  },
}
</script>
