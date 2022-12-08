<template>
  <div>
    <div class="hero h-24 md:h-32 bg-cover relative" :style="`background-image: url(${bgSliderUrl});`">
      <div class="flex flex-col justify-center">
        <h1 class="text-3xl md:text-5xl text-center font-extrabold">Media</h1>
        <figure class="w-32 md:w-44 mt-1"><img :src="bgUnderLineUrl" :alt="altText" /></figure>
      </div>
    </div>
    <div
      class="mt-5 w-screen grid place-items-center justify-center overflow-x-hidden gap-4 grid-cols-[minmax(0,_100px)_minmax(auto,_80rem)_minmax(0,_100px)]"
    >
      <h1 class="text-2xl md:text-4xl font-extrabold justify-self-start self-center col-start-2 row-start-1">
        Featured Creators
      </h1>
      <div class="row-start-2 col-start-2 pb-8 flex place-content-center">
          <CreatorCard
            :imgUrl="newsUrls[0]"
            modalId="first"
            altText="test"
            newsType="1"
            title="LeMars"
          />
          <CreatorCard
            :imgUrl="newsUrls[0]"
            modalId="second"
            altText="test"
            newsType="2"
            title="Script"
          />
          <CreatorCard
            class="hidden sm:block"
            :imgUrl="newsUrls[0]"
            modalId="third"
            altText="test"
            newsType="3"
            title="Bacon"
          />
      </div>
    </div>
  </div>
</template>

<script>
import CreatorCard from "../components/CreatorCard.vue"
import bgSliderUrl from "./../../static/assets/lt-slider-misc.jpg?url"
import bgUnderLineUrl from "./../../static/assets/lt_arrow.png"
const newsUrls = ["https://placeimg.com/400/225/arch"]

export default {
  data() {
    return { bgSliderUrl, bgUnderLineUrl, newsUrls }
  },
  components: { CreatorCard },
}
</script>
