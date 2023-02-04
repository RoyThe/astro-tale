<template>
  <footer class="footer p-10 bg-neutral text-neutral-content">
    <a>
      <img class="h-16 w-auto rounded-lg" src="https://astroLT.b-cdn.net/ag-logo.png" />
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
