<template>
  <div>
    <div class="hero h-24 md:h-32 bg-cover relative" :style="`background-image: url(${bgSliderUrl});`">
      <div class="flex flex-col justify-center">
        <h1 class="text-3xl md:text-5xl text-center font-extrabold text-black">Media</h1>
        <figure class="w-32 md:w-44 mt-1"><img :src="bgUnderLineUrl" :alt="altText" /></figure>
      </div>
    </div>
    <div
      class="mt-5 w-full grid place-items-center justify-center overflow-x-hidden gap-4 grid-cols-[minmax(0,_100px)_minmax(auto,_80rem)_minmax(0,_100px)]"
    >
      <div class="text-2xl md:text-4xl font-extrabold justify-self-start self-center col-start-2 row-start-1 w-full">
        <h1>Featured Creators</h1>
        <div class="divider" />
      </div>
      <div class="row-start-2 col-start-2 pb-8 flex place-content-center">
        <CreatorCard
          altText="test"
          position="1"
          :imgUrl="creators[0].img"
          :modalId="JSON.stringify(creators[0])"
          :title="creators[0].name"
          :content="creators[0].body"
        />
        <CreatorCard
          altText="test"
          position="2"
          :imgUrl="creators[1].img"
          :modalId="JSON.stringify(creators[1])"
          :title="creators[1].name"
          :content="creators[1].body"
        />
        <CreatorCard
          class="hidden sm:block"
          altText="test"
          position="3"
          :imgUrl="creators[2].img"
          :modalId="JSON.stringify(creators[2])"
          :title="creators[2].name"
          :content="creators[2].body"
        />
      </div>
      <div class="text-2xl md:text-4xl font-extrabold justify-self-start self-center col-start-2 row-start-3 w-full">
        <h1>Media</h1>
        <div class="divider" />
      </div>
      <div class="col-start-2 row-start-4 mb-16">
        <Carousel />
      </div>
    </div>
  </div>
</template>

<script>
import CreatorCard from "../components/CreatorCard.vue"
import bgSliderUrl from "./../../static/assets/lt-slider-misc.jpg?url"
import bgUnderLineUrl from "./../../static/assets/lt_arrow.png"
import Carousel from "../components/Carousel.vue"
import { getCreators } from "../services/getCardContent"

const creators = getCreators()
if (creators.length !== 3) {
  throw new Error('not exactly 3 creators')
}

export default {
  data() {
    return { bgSliderUrl, bgUnderLineUrl, creators }
  },
  components: { CreatorCard, Carousel },
}
</script>
