<template>
  <div class="navbar bg-neutral sm:px-10 h-24 flex z-10">
    <label for="my-drawer" class="btn btn-ghost drawer-button md:hidden text-white px-3">
      <svgMenuVue />
    </label>
    <div class="flex-1 justify-center">
      <RouterLink class="w-[100px] md:w-[130px]" :to="{ name: 'home' }">
        <img class="object-fit h-auto" :src="logoURL" />
      </RouterLink>
    </div>
    <div class="btn btn-ghost drawer-button md:hidden px-3 invisible"><svgMenuVue /></div>
    <div
      class="hidden md:inline-flex flex-1 justify-center text-slate-50 text-2xl hover:text-primary"
      v-for="page in links"
    >
      <RouterLink :to="{ name: page.name }"> {{ page.title }} </RouterLink>
    </div>
    <a :href="discordURL" class="pl-1 hidden md:inline-flex flex-1 justify-center text-slate-50 text-2xl hover:text-primary">
      Forums
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-4 h-4 opacity-50"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
      </svg>
    </a>
    <button class="hidden md:inline-flex flex-1 btn btn-lg btn-primary rounded-none h-24 text-4xl">
      <RouterLink :to="{ name: 'download' }">Play Now</RouterLink>
    </button>
  </div>
</template>

<script>
import svgMenuVue from "./svgMenu.vue"
import contents_url from '../../static/assets/contents_url.json'

export default {
  props: ["links"],
  components: {
    svgMenuVue,
  },
  data() {
    return { 
      discordURL: contents_url.discordURL,
      logoURL: contents_url.logoURL
    }}
}
</script>

<style>
a:hover {
  cursor: pointer;
}
</style>
