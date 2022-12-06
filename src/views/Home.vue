<template>
  <div>
    <div class="hero min-h-[50vh] bg-cover relative" :style="`background-image: url(${sliderUrl});`">
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
    <div
      class="mt-5 w-screen grid grid-cols-[minmax(0,_100px)_minmax(auto,_80rem)_minmax(0,_100px)] grid-rows-1 place-items-center justify-center"
    >
      <h1 class="mb-4 ml-4 text-2xl md:text-4xl font-extrabold justify-self-start col-start-2">News</h1>
      <div class="w-full h-auto flex justify-evenly m-0 col-start-2">
        <EventCardVue :imgUrl="newsUrls[0]" altText="test" newsType="event" />
        <EventCardVue class="max-[420px]:hidden block" :imgUrl="newsUrls[0]" altText="test" newsType="sale" />
        <EventCardVue class="hidden lg:block" :imgUrl="newsUrls[0]" altText="test" newsType="patch" />
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
      newsUrls,
    }
  },
}
</script>
