<template>
  <div data-theme="dark">
    <DrawerVue :pages="pages"/>
  </div>
</template>

<script>
import DrawerVue from "./components/Drawer.vue"
const pages = [
  { title: "About", name: "about" },
  { title: "News", name: "news" },
  { title: "Media", name: "media" },
  { title: "Updates", name: "update" },
  { title: "Forums", name: "forums" },
]

export default {
  data() {
    return { pages }
  },
  components: {
    DrawerVue,
  },
}
</script>
