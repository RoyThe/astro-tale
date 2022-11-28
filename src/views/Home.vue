<template>
  <div class="hero min-h-[60vh] bg-cover relative" :style="`background-image: url(${sliderUrl});`">
    <div class="hero-overlay bg-opacity-60 h-20 absolute bottom-0" />
    <div class="hero-content absolute bottom-0">
      <div class="w-screen flex justify-evenly">
        <button class="btn btn-accent normal-case">
          <RouterLink :to="{ name: 'news' }">See Patch Notes</RouterLink>
        </button>
        <button class="btn btn-accent normal-case hidden sm:block">
          <RouterLink :to="{ name: 'download' }">Download</RouterLink>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import sliderUrl from "./../../static/assets/lt-slider.jpg?url"

export default {
  data() {
    return { sliderUrl }
  },
}
</script>
