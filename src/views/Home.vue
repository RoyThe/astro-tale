<template>
  <div>
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
    <!-- NEWS SECTION START -->
    <div class="py-10 px-6 w-screen">
      <h1 class="mb-4 text-4xl font-extrabold">News</h1>
      <div class="w-full max-w-6xl h-auto flex justify-evenly m-0">
        <EventCardVue :imgUrl="newsUrls[0]" altText="test" newsType="event" />
        <span class="w-8 h-1" />
        <EventCardVue :imgUrl="newsUrls[0]" altText="test" newsType="sale" />
        <span class="w-8 h-1 hidden min-[650px]:block" />
        <EventCardVue
          class="hidden min-[650px]:block"
          :imgUrl="newsUrls[0]"
          altText="test"
          newsType="patch"
        />
      </div>
    </div>
  </div>
</template>

<script>
import sliderUrl from "./../../static/assets/lt-slider.jpg?url"
import EventCardVue from "../components/EventCard.vue"
const newsUrls = ["https://placeimg.com/400/225/arch"]

export default {
  components: { EventCardVue },
  data() {
    return { 
      sliderUrl,
      newsUrls
    }
  },
}
</script>
