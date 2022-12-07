<template>
  <label :for="modalId">
    <div class="card card-compact w-44 md:w-60 min-[1200px]:w-96 bg-base-100 shadow-xl hover:bg-base-200">
      <figure class="my-1"><img :src="imgUrl" :alt="altText" /></figure>
      <div class="card-body items-center">
        <div class="badge badge-primary uppercase m-0 relative -top-8">{{ newsType }}</div>
        <h2 class="card-title -mt-6 w-fit text-sm md:text-lg text-center">{{ title }}</h2>
        <p>{{ date }}</p>

        <!-- TODO: only load necessary modal to match a given id -->
        <Modal
          :imgUrl="imgUrl"
          :altText="altText"
          :modalId="modalId"
          :newsType="newsType"
          :title="title"
          :date="date"
        />
      </div>
    </div>
  </label>
</template>

<script>
import Modal from "./NewsModal.vue"

export default {
  props: {
    modalId: String,
    imgUrl: String,
    altText: String,
    title: String,
    date: String,
    newsType: String,
  },
  components: {
    Modal,
  },
}
</script>
