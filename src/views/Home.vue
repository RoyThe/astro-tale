<template>
  <div class="hero min-h-[60vh] bg-cover relative" :style="`background-image: url(${sliderUrl});`">
    <div class="w-screen p-2 py-4 absolute bottom-0 bg-gradient-to-l from-slate-800 to-transparent">
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
</template>

<script>
import sliderUrl from "./../../static/assets/lt-slider.jpg?url"

export default {
  data() {
    return { sliderUrl }
  },
}
</script>
