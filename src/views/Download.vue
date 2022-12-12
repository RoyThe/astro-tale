<template>
  <div>
    <div class="hero min-h-screen relative -top-1 -z-10" :style="`background-image: url(${bgUrl});`">
      <div class="hero-content text-center text-neutral-content bg-neutral rounded-lg w-10/12 max-w-6xl z-0 relative -top-16">
        <div class="max-w-[90%] py-4">
          <p class="md:text-2xl">
            Embark on an epic quest with other Heroes from around the globe to battle against the forces of the Demon
            World and search for the renowned champion Iris Riviere.
          </p>
          <br />
          <h2 class="text-2xl md:text-4xl font-extrabold font-mono max-w-full">Download La Tale now and TELL YOUR TALE today!</h2>
          <br />
          <a href="#downloads-table" class="btn btn-primary min-w-[200px] w-6/12 h-auto text-lg font-extrabold md:text-2xl">View Downloads</a>
        </div>
      </div>
    </div>
    <div
      class="mt-5 w-screen grid place-items-center justify-center overflow-x-hidden gap-4 grid-cols-[minmax(0,_100px)_minmax(auto,_80rem)_minmax(0,_100px)]"
    >
      <div class="row-start-1 col-start-2 flex flex-wrap place-content-center" id="downloads-table">
        <h1>Downloads</h1>
        <div class="w-full h-40 bg-slate-400">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bgUrl from "./../../static/assets/bg_1.jpg?url"
const newsUrls = ["https://placeimg.com/400/225/arch"]

export default {
  data() {
    return { newsUrls, bgUrl }
  },
}
</script>
