<template>
  <div class="hero h-24 md:h-32 bg-cover relative" :style="`background-image: url(${bgSliderUrl});`">
    <div class="flex flex-col justify-center">
      <h1 class="text-3xl md:text-5xl text-center">News</h1>
      <figure class="w-32 md:w-44 mt-1"><img :src="bgUnderLineUrl" :alt="altText" /></figure>
    </div>
  </div>
</template>

<script>
import bgSliderUrl from "./../../static/assets/lt-slider-misc.jpg?url"
import bgUnderLineUrl from "./../../static/assets/lt_arrow.png"

export default {
  data() {
    return { bgSliderUrl, bgUnderLineUrl }
  }
}
</script>