<template>
  <input type="checkbox" :id="modalId" class="modal-toggle" />
  <label :for="modalId" class="modal cursor-pointer">
    <label class="modal-box relative w-11/12 max-w-4xl">
      <div class="grid grid-cols-1 place-items-center">
        <div class="row-start-1 flex flex-wrap w-full items-center mb-4">
          <span class="badge badge-primary uppercase float-left">{{ newsType }}</span>
          <h3 class="text-2xl font-bold grow text-center">{{ title }}</h3>
          <p class="float-right grow-0">{{ date }}</p>
        </div>
        <figure class="my-1 row-start-2 w-full"><img class="w-full h-auto" :src="imgUrl" :alt="altText" /></figure>
      </div>
    </label>
  </label>
</template>

<script>
export default {
  props: {
    modalId: String,
    imgUrl: String,
    altText: String,
    title: String,
    date: String,
    newsType: String,
  },
}
</script>
