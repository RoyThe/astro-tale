<template>
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <NavBarVue />
      <RouterView />
    </div>
    <div class="drawer-side">
      <label for="my-drawer" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 bg-neutral text-base-content">
        <div class="flex justify-between items-start py-2">
          <a class="w-[100px]" href="/">
            <img class="object-fit h-auto" src="./../../static/assets/lt_logo.png" />
          </a>
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

        <li><a>About</a></li>
        <li><a>News</a></li>
        <li><a>Update</a></li>
        <li><a>Media</a></li>
        <li><a>Forums</a></li>
        <li>
          <button class="btn btn-lg btn-primary rounded-none h-24 text-4xl font-mono text-neutral">Play Now</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import NavBarVue from "./NavBar.vue"
import svgMenuVue from "./svgMenu.vue"
import HomeVue from "./../views/Home.vue"

export default {
  components: {
    NavBarVue,
    svgMenuVue,
    HomeVue,
  },
}
</script>
