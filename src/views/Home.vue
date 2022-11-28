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
      <div class="w-full h-auto flex justify-evenly m-0">
        <div class="card card-compact w-48 md:w-64 lg:w-96 bg-base-100 shadow-xl">
          <figure class="my-1"><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
          <div class="card-body items-center">
            <div class="badge badge-primary uppercase m-0 relative -top-8">event</div>
            <h2 class="card-title -mt-6 w-fit">Upcoming Winter Events</h2>
            <p>11.28.2022</p>
          </div>
        </div>
        <div class="card card-compact w-48 md:w-64 lg:w-96 bg-base-100 shadow-xl">
          <figure class="my-1"><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
          <div class="card-body items-center">
            <div class="badge badge-primary uppercase m-0 relative -top-8">event</div>
            <h2 class="card-title -mt-6 w-fit">Upcoming Winter Events</h2>
            <p>11.28.2022</p>
          </div>
        </div>
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
