<template>
  <div class="navbar bg-neutral px-10 h-24 flex">
    <div class="flex-1 justify-center">
      <a class=" w-[100px] sm:w-[130px]" href="/">
        <img class="object-fit h-auto" src="./../../static/assets/lt_logo.png" />
      </a>
    </div>
    <span class="hidden md:inline-flex flex-1 justify-center text-slate-50 text-2xl hover:text-primary"><a> About </a></span>
    <span class="hidden md:inline-flex flex-1 justify-center text-slate-50 text-2xl hover:text-primary"><a href="#"> News </a></span>
    <span class="hidden md:inline-flex flex-1 justify-center text-slate-50 text-2xl hover:text-primary"><a href="#"> Update </a></span>
    <span class="hidden md:inline-flex flex-1 justify-center text-slate-50 text-2xl hover:text-primary"><a href="#"> Media </a></span>
    <span class="hidden md:inline-flex flex-1 justify-center text-slate-50 text-2xl hover:text-primary"><a href="#"> Forums </a></span>
    <button class="hidden md:inline-flex flex-1 btn btn-lg btn-primary rounded-none h-24 text-4xl">Play Now</button>
  </div>
</template>

<style>
a:hover {
  cursor: pointer;
}
</style>
