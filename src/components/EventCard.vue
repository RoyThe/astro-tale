<template>
  <label :for="modalId">
    <div class="card card-compact mx-2 bg-base-100 shadow-xl hover:bg-base-200 hover:cursor-pointer">
      <figure class="my-1"><img :src="imgUrl" :alt="altText" /></figure>
      <div class="card-body items-center">
        <span v-if="newsType === 'patch'" class="badge badge-primary uppercase m-0 relative -top-8">{{ newsType }}</span>
        <span v-else-if="newsType === 'event'" class="badge badge-secondary uppercase m-0 relative -top-8">{{ newsType }}</span>
        <span v-else class="badge badge-accent uppercase m-0 relative -top-8">{{ newsType }}</span>
        <h2 class="card-title -mt-6 w-fit text-sm md:text-lg text-center">{{ title }}</h2>
        <p>{{ date }}</p>
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
