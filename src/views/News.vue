<template>
  <div>
    <div class="hero h-24 md:h-32 bg-cover relative" :style="`background-image: url(${bgSliderUrl});`">
      <div class="flex flex-col justify-center">
        <h1 class="text-3xl md:text-5xl text-center">News</h1>
        <figure class="w-32 md:w-44 mt-1"><img :src="bgUnderLineUrl" :alt="altText" /></figure>
      </div>
    </div>
    <div
      class="mt-5 w-screen grid place-items-center justify-center overflow-x-hidden gap-4 grid-cols-[minmax(0,_100px)_minmax(auto,_80rem)_minmax(0,_100px)]"
    >
      <div class="row-start-1 col-start-2 flex flex-wrap place-content-center">
        <div v-for="_ in [1, 2, 3, 4, 5, 6]" class="max-w-[250px]">
          <EventCardVue
          :imgUrl="newsUrls[0]"
          modalId="aieIsland"
          altText="test"
          newsType="event"
          title="Prepare for Aie Island!"
          date="2022.12.1"
        />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventCardVue from "../components/EventCard.vue"
import bgSliderUrl from "./../../static/assets/lt-slider-misc.jpg?url"
import bgUnderLineUrl from "./../../static/assets/lt_arrow.png"
const newsUrls = ["https://placeimg.com/400/225/arch"]

export default {
  data() {
    return { bgSliderUrl, bgUnderLineUrl, newsUrls }
  },
  components: { EventCardVue }
}
</script>
