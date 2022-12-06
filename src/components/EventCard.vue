<template>
  <div class="card card-compact w-44 md:w-60 min-[1200px]:w-96 bg-base-100 shadow-xl">
    <figure class="my-1"><img :src="imgUrl" :alt="altText" /></figure>
    <div class="card-body items-center">
      <div class="badge badge-primary uppercase m-0 relative -top-8">{{newsType}}</div>
      <h2 class="card-title -mt-6 w-fit text-sm md:text-lg text-center">Upcoming Winter Events</h2>
      <p>11.28.2022</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: String,
    altText: String,
    newsType: String
  }
}
</script>