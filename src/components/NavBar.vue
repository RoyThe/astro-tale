<template>
  <div class="navbar bg-neutral sm:px-10 h-24 flex z-10">
    <label for="my-drawer" class="btn btn-ghost drawer-button md:hidden text-white px-3">
      <svgMenuVue />
    </label>
    <div class="flex-1 justify-center">
      <RouterLink class="w-[100px] md:w-[130px]" :to="{ name: 'home' }">
        <img class="object-fit h-auto" src="./../../static/assets/lt_logo.png" />
      </RouterLink>
    </div>
    <div class="btn btn-ghost drawer-button md:hidden px-3 invisible"><svgMenuVue /></div>
    <div
      class="hidden md:inline-flex flex-1 justify-center text-slate-50 text-2xl hover:text-primary"
      v-for="page in links"
    >
      <RouterLink :to="{ name: page.name }"> {{ page.title }} </RouterLink>
    </div>
    <button class="hidden md:inline-flex flex-1 btn btn-lg btn-primary rounded-none h-24 text-4xl">
      <RouterLink :to="{ name: 'download' }">Play Now</RouterLink>
    </button>
  </div>
</template>

<script>
import svgMenuVue from "./svgMenu.vue"

export default {
  props: ['links'],
  components: {
    svgMenuVue,
  },
}
</script>

<style>
a:hover {
  cursor: pointer;
}
</style>
