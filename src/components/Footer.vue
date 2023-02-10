<template>
  <footer class="footer p-10 bg-neutral text-neutral-content">
    <a :href="astrogameURL">
      <img class="h-16 w-auto rounded-lg" :src="astrogameLogo" />
    </a>
    <SocialsMenuSecondary />
  </footer>
</template>

<script>
import SocialsMenuSecondary from "./SocialsMenuSecondary.vue"
import contents_url from '../../static/assets/contents_url.json'

export default {
  components: {
    SocialsMenuSecondary,
  },
  data() {
    return { 
      discordURL: contents_url.discordURL,
      logoURL: contents_url.logoURL,
      astrogameURL: contents_url.astrogameURL,
      astrogameLogo: contents_url.astrogameLogo
    }}
}
</script>
