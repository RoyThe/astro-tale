<template>
  <div class="navbar bg-primary h-24" data-theme="latale">
    <div class="flex-none">
      <a class="px-2"><img src="./../static/assets/images/latale/lt_logo.png" class="w-[130px] h-auto" /></a>
    </div>
    <div class="flex-1 ">
      <a class="btn flex-1 px-2 mx-2"> Home </a>
      <a class="btn flex-1 px-2 mx-2"> Portfolio </a>
      <a class="btn flex-1 px-2 mx-2"> About </a>
      <a class="btn flex-1 px-2 mx-2"> Contact </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  data() {
    return {
      count: 1,
    }
  },
})
</script>
