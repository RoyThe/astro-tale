<template>
  <input type="checkbox" :id="modalId" class="modal-toggle" />
  <label :for="modalId" class="modal cursor-pointer">
    <label class="modal-box relative w-11/12 max-w-4xl">
      <div class="grid grid-cols-1 place-items-center">
        <div class="row-start-1 flex flex-wrap w-fit justify-evenly items-center">
          <span class="badge badge-primary uppercase m-0">{{ newsType }}</span>
          <h3 class="text-lg font-bold">{{ title }}</h3>
          <p>{{ date }}</p>
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
