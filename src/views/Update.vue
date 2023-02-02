<template>
  <div>
    <div class="hero h-24 md:h-32 bg-cover relative" :style="`background-image: url(${bgSliderUrl});`">
      <div class="flex flex-col justify-center">
        <h1 class="text-3xl md:text-5xl text-center font-extrabold text-black">Updates</h1>
        <figure class="w-32 md:w-44 mt-1"><img :src="bgUnderLineUrl" :alt="altText" /></figure>
      </div>
    </div>
    <div
      class="mt-5 w-full grid place-items-center justify-center overflow-x-hidden gap-4 grid-cols-[minmax(0,_100px)_minmax(auto,_80rem)_minmax(0,_100px)]"
    >
      <div class="col-start-2 row-start-1 justify-self-start w-full">
        <h1 class="text-2xl md:text-4xl font-extrabold">Latest Release</h1>
        <div class="divider" />
      </div>
      <NewsCard
        class="row-start-2 col-start-2 pb-8"
        altText="test"
        newsType="update"
        :imgUrl="updates[0].img"
        :modalId="JSON.stringify(updates[0])"
        :title="updates[0].title"
        :date="updates[0].date"
        :content="updates[0].body"
      />
      <div class="text-2xl md:text-4xl font-extrabold justify-self-start col-start-2 row-start-3 w-full">
        <h1>Past Releases</h1>
        <div class="divider" />
      </div>

      <div class="row-start-4 col-start-2 flex flex-wrap place-content-center gap-y-4">
        <div v-for="[index, u] in updates.slice(1).entries()" class="max-w-[250px]">
          <div v-if="index < cardLimit">
            <NewsCard
            altText="test"
            newsType="update"
            :imgUrl="u.img"
            :modalId="JSON.stringify(u)"
            :title="u.title"
            :date="u.date"
            :content="u.body"
          />
          </div>
        </div>
      </div>
      <button
        v-if="cardLimit < updates.length - 1"
        @click="cardLimit += 3"
        class="btn btn-outline row-start-5 col-start-2 mt-4"
      >
        Show More
      </button>
      <div class="row-start-6 col-start-2 h-16"/>
    </div>
  </div>
</template>

<script>
import NewsCard from "../components/NewsCard.vue"
import bgSliderUrl from "./../../static/assets/lt-slider-misc.jpg?url"
import bgUnderLineUrl from "./../../static/assets/lt_arrow.png"
import { sortedUpdates } from "../services/cardContent"

const cardLimit = 3
const updates = sortedUpdates()

if (updates.length < 1) {
  // TODO handle this case
  throw new Error("not enough updates")
}

export default {
  data() {
    return { bgSliderUrl, bgUnderLineUrl, cardLimit, updates }
  },
  components: { NewsCard },
}
</script>
