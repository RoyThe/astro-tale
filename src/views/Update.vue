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
        <h1 class="text-2xl md:text-4xl font-extrabold">
          Latest Release
        </h1>
        <div class="divider" />
      </div>
      <EventCard
        class="row-start-2 col-start-2 pb-8"
        :imgUrl="newsUrls[0]"
        modalId="pneuma"
        altText="test"
        newsType="update"
        title="Pneuma"
        date="2022.12.1"
      />
      <div class="text-2xl md:text-4xl font-extrabold justify-self-start col-start-2 row-start-3 w-full">
        <h1>
          Past Releases
        </h1>
        <div class="divider" />
      </div>
      
      <div class="mb-16 row-start-4 col-start-2 flex flex-wrap place-content-center">
        <div v-for="_ in [1, 2, 3, 4, 5, 6]" class="max-w-[250px]">
          <EventCard
            :imgUrl="newsUrls[0]"
            modalId="pneuma"
            altText="test"
            newsType="update"
            title="Pneuma"
            date="2022.12.1"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventCard from "../components/EventCard.vue"
import bgSliderUrl from "./../../static/assets/lt-slider-misc.jpg?url"
import bgUnderLineUrl from "./../../static/assets/lt_arrow.png"
const newsUrls = ["https://placeimg.com/400/225/arch"]

export default {
  data() {
    return { bgSliderUrl, bgUnderLineUrl, newsUrls }
  },
  components: { EventCard },
}
</script>
