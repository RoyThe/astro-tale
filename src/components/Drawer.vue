<template>
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <NavBarVue :links="pages" class="flex-none" />
      <RouterView />
      <div class="flex-grow" />
      <FooterVue />
    </div>
    <div class="drawer-side">
      <label for="my-drawer" class="drawer-overlay"></label>
      <ul class="menu p-4 w-72 gap-1 bg-neutral text-base-content">
        <div class="flex justify-between items-start py-2">
          <RouterLink class="w-[100px]" :to="{ name: 'home' }">
            <img class="object-fit h-auto" src="https://astroLT.b-cdn.net/lt_logo.png " />
          </RouterLink>
          <label for="my-drawer" class="btn btn-ghost drawer-button md:hidden text-white px-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-9 w-9"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </label>
        </div>
        <div v-for="page in pages">
          <li>
            <RouterLink :to="{ name: page.name }">{{ page.title }}</RouterLink>
          </li>
        </div>
        <li>
          <a href="https://discord.gg/xN58dnpPJx">
            Forums
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4 opacity-50 -ml-2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        </li>
        <br />
        <li>
          <button class="btn btn-lg btn-primary rounded-none h-24 text-4xl">
            <RouterLink :to="{ name: 'download' }">Play Now</RouterLink>
          </button>
        </li>
        <br />
        <div class="flex-grow"></div>
        <a>
          <img class="h-16 w-auto rounded-lg" src="https://astroLT.b-cdn.net/ag-logo.png" />
        </a>
        <div class="mt-4">
          <SocialsMenuSecondary />
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import NavBarVue from "./NavBar.vue"
import svgMenuVue from "./svgMenu.vue"
import FooterVue from "./Footer.vue"
import SocialsMenuSecondary from "./SocialsMenuSecondary.vue"

export default {
  props: ["pages"],
  components: {
    NavBarVue,
    svgMenuVue,
    FooterVue,
    SocialsMenuSecondary,
  },
}
</script>
