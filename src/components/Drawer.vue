<template>
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <NavBarVue aboutUrl="{aboutUrl}" />
      <label
        for="my-drawer"
        class="btn btn-ghost hover:btn-accent drawer-button md:hidden absolute top-6 left-6 text-white px-3"
      >
        <svgMenuVue />
      </label>
    </div>
    <div class="drawer-side">
      <label for="my-drawer" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 bg-neutral text-base-content">
        <li>
          <a class="w-[130px]" href="/">
            <img class="object-fit h-auto" src="./../../static/assets/lt_logo.png" />
          </a>
        </li>
        <li><a>About</a></li>
        <li><a>News</a></li>
        <li><a>Update</a></li>
        <li><a>Media</a></li>
        <li><a>Forums</a></li>
        <li>
          <button class="btn btn-lg bg-primary rounded-none h-24 hover:bg-accent text-4xl font-mono text-neutral">
            Play Now
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import NavBarVue from "./NavBar.vue"
import svgMenuVue from "./svgMenu.vue"
export default {
  components: {
    NavBarVue,
    svgMenuVue,
  },
}
</script>
