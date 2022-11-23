<template>
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <NavBarVue />
      <label
        for="my-drawer"
        class="btn btn-ghost hover:btn-accent drawer-button md:hidden absolute top-6 left-6 text-white px-3"
      >
        <svgMenuVue />
      </label>
    </div>
    <div class="drawer-side">
      <label for="my-drawer" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 bg-base-100 text-base-content">
        <!-- Sidebar content here -->
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
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
