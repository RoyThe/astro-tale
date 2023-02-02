<template>
  <label :for="modalId">
    <div class="card card-compact max-w-fit min-w-[100px] mx-2 bg-base-100 shadow-xl hover:cursor-pointer">
      <figure class="my-1"><img :src="imgUrl" :alt="altText" /></figure>
      <div class="card-body items-center">
        <span v-if="position === 'patch'" class="badge badge-primary uppercase m-0 relative -top-8">{{ position }}</span>
        <span v-else-if="position === 'event'" class="badge badge-secondary uppercase m-0 relative -top-8">{{ position }}</span>
        <span v-else class="badge badge-accent uppercase m-0 relative -top-8">{{ position }}</span>
        <h2 class="card-title -mt-6 w-fit text-sm md:text-lg text-center">{{ title }}</h2>
        <p>{{ date }}</p>
        <Modal
          :imgUrl="imgUrl"
          :altText="altText"
          :modalId="modalId"
          :position="position"
          :title="title"
          :date="date"
          :content="content"
        />
      </div>
    </div>
  </label>
</template>

<script>
import Modal from "./CreatorModal.vue"

export default {
  props: {
    modalId: String,
    imgUrl: String,
    altText: String,
    title: String,
    date: String,
    position: String,
    content: String,
  },
  components: {
    Modal,
  },
}
</script>
