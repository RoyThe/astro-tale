<template>
  <footer class="footer p-10 bg-neutral text-neutral-content">
    <a>
      <img class="h-16 w-auto rounded-lg" src="./../../static/assets/ag-logo.png" />
    </a>
    <SocialsMenuSecondary />
  </footer>
</template>

<script>
import SocialsMenuSecondary from "./SocialsMenuSecondary.vue"

export default {
  components: {
    SocialsMenuSecondary,
  },
}
</script>
