<template>
  <input type="checkbox" :id="modalId" class="modal-toggle" />
  <label :for="modalId" class="modal cursor-pointer">
    <label class="modal-box relative w-11/12 max-w-4xl">
      <div class="grid grid-cols-1 place-items-center">
        <div class="row-start-1 flex flex-wrap w-full items-center mb-4">
          <span v-if="position === 'patch'" class="badge badge-primary uppercase">{{ position }}</span>
          <span v-else-if="position === 'event'" class="badge badge-secondary uppercase">{{ position }}</span>
          <span v-else class="badge badge-accent uppercase">{{ position }}</span>
          <h3 class="text-2xl font-bold grow text-center">{{ title }}</h3>
          <p class="float-right grow-0 mr-4">{{ date }}</p>
          <label :for="modalId" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
        </div>
        <figure class="my-1 row-start-2 w-full"><img class="w-full h-auto" :src="imgUrl" :alt="altText" /></figure>
        <article class="prose row-start-3 justify-self-start p-4">
          <div v-html="content"/>
        </article>
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
    position: String,
    content: String,
  },
}
</script>
