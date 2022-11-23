<template>
  <div class="navbar bg-neutral m-0 p-0 h-24 flex" data-theme="dark">
    <div class="flex-1 justify-center">
      <a class="w-[130px]" href="/">
        <img class="object-fit h-auto" src="./../../static/assets/lt_logo.png" />
      </a>
    </div>
    <span class="hidden md:inline-flex flex-1 justify-center text-slate-50 text-2xl hover:text-primary"><a href="#"> About </a></span>
    <span class="hidden md:inline-flex flex-1 justify-center text-slate-50 text-2xl hover:text-primary"><a href="#"> News </a></span>
    <span class="hidden md:inline-flex flex-1 justify-center text-slate-50 text-2xl hover:text-primary"><a href="#"> Update </a></span>
    <span class="hidden md:inline-flex flex-1 justify-center text-slate-50 text-2xl hover:text-primary"><a href="#"> Media </a></span>
    <span class="hidden md:inline-flex flex-1 justify-center text-slate-50 text-2xl hover:text-primary"><a href="#"> Forums </a></span>
    <button class="hidden md:inline-flex btn btn-lg bg-primary rounded-none h-24 hover:bg-accent text-4xl font-mono text-neutral">Play Now</button>
  </div>
</template>

<script>
export default {}
</script>

<style>
a:hover {
  cursor: pointer;
}
</style>
