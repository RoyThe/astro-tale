<template>
  <div>
    <div class="hero min-h-screen" :style="`background-image: url(${bgUrl});`">
      <img class="w-32 h-auto relative -top-40" src="./../../static/assets/lt_logo.png" />
      <div class="hero-content text-center text-neutral-content bg-neutral rounded max-w-6xl">
        <div class="max-w-md">
          <p>
            Embark on an epic quest with other Heroes from around the globe to battle against the forces of the Demon
            World and search for the renowned champion Iris Riviere.
          </p>
          <h2 class="text-2xl font-extrabold font-mono max-w-full">Download La Tale now and TELL YOUR TALE today!</h2>
          <a class="btn btn-primary">View Downloads</a>
        </div>
      </div>
    </div>
    <div
      class="mt-5 w-screen grid place-items-center justify-center overflow-x-hidden gap-4 grid-cols-[minmax(0,_100px)_minmax(auto,_80rem)_minmax(0,_100px)]"
    >
      <div class="row-start-1 col-start-2 flex flex-wrap place-content-center">
        <h1>Downloads</h1>
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
