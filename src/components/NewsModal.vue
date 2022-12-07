<template>
  <input type="checkbox" :id="modalId" class="modal-toggle" />
  <label :for="modalId" class="modal cursor-pointer">
    <label class="modal-box relative" for="">
      <h3 class="text-lg font-bold">{{ title }}</h3>
      <p class="py-4">{{ date }}</p>
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
