<template>
  <div>
    <div class="hero min-h-[50vh] lg:h-[80vh] bg-cover relative" :style="`background-image: url(${sliderUrl});`">
      <div class="w-full py-4 absolute bottom-0 bg-gradient-to-l from-slate-800 to-transparent">
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
    <div
      class="mt-5 w-full grid place-items-center justify-center overflow-x-hidden gap-4 grid-cols-[minmax(0,_100px)_minmax(auto,_80rem)_minmax(0,_100px)]"
    >
      <!-- NEWS SECTION START -->
      <h1 class="text-2xl md:text-4xl font-extrabold justify-self-start self-center col-start-2 row-start-1">News</h1>
      <div class="w-full h-auto flex justify-evenly col-start-2 row-start-2">
        <EventCardVue
          :imgUrl="newsUrls[0]"
          modalId="aieIsland"
          altText="test"
          newsType="patch"
          title="Hotfix v3.0.1"
          date="2022.12.1"
        />
        <EventCardVue
          :imgUrl="newsUrls[0]"
          modalId="flashSales"
          altText="test"
          newsType="sales"
          title="Preparation Flash Sales"
          date="2022.12.1"
        />
        <EventCardVue
          class="hidden lg:block"
          :imgUrl="newsUrls[0]"
          modalId="winterEvents"
          altText="test"
          newsType="event"
          title="Upcoming Winter Events"
          date="2022.11.17"
        />
      </div>
      <div class="w-full h-auto flex justify-evenly items-center m-0 col-start-2 row-start-3">
        
        <ServerStatusVue />
      </div>
      <!-- SERVER STATUS / COMMUNITY -->
      <h1 class="text-2xl md:text-4xl font-extrabold justify-self-start self-center col-start-2 row-start-4">
        Updates
      </h1>
      <div class="w-full h-auto flex justify-evenly m-0 mb-16 col-start-2 row-start-5">
        Update card views go here
      </div>
    </div>
  </div>
</template>

<script>
import sliderUrl from "./../../static/assets/lt-slider.jpg?url"
import EventCardVue from "../components/EventCard.vue"
import ServerStatusVue from "../components/ServerStatus.vue"
const newsUrls = ["https://placeimg.com/400/225/arch"]

export default {
  components: { EventCardVue, ServerStatusVue },
  data() {
    return {
      sliderUrl,
      newsUrls,
    }
  },
}
</script>
