<template>
  <div class="hero min-h-screen" :style="`background-image: url(${bgUrl});`">
    <div class="hero-content text-center text-neutral-content bg-neutral rounded-lg w-10/12 max-w-6xl relative">
      <div class="max-w-[90%] py-4">
        <p class="md:text-2xl">
          Embark on an epic quest with other Heroes from around the globe to battle against the forces of the Demon
          World and search for the renowned champion Iris Riviere.
        </p>
        <br />
        <h2 class="text-2xl md:text-4xl font-extrabold font-mono max-w-full">
          Download La Tale now and TELL YOUR TALE today!
        </h2>
        <br />
        <a href="#" class="btn btn-primary min-w-[200px] w-6/12 h-auto text-lg font-extrabold md:text-2xl"
          >Download Now</a
        >
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
