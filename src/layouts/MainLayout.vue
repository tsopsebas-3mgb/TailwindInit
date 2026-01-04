<script setup lang="ts">
import {Sparkles,Heart,Sun,Menu} from 'lucide-vue-next'
import Button from "../components/Button.vue";
import {useIsMobile} from '../utils/isMobile.ts'
import {favourites} from "../data/favourites.ts";

const {isMobile} = useIsMobile()
const navLong=ref(true)
const box = ref<HTMLDivElement | null>(null)
import {nextTick, onMounted, ref, watch} from "vue"

const setScroll = () => {
  if (box.value && isMobile.value) {
    box.value.scrollTo({
      left: box.value.scrollWidth - box.value.clientWidth,
      behavior: "smooth"
    })
  }
}

watch(navLong, async () => {
  if(isMobile.value){
    await nextTick()
    box.value?.addEventListener("transitionend", () => { setScroll() })

  }
}
)
onMounted( () => {
  window.addEventListener('resize', ()=>{
    !isMobile.value && (navLong.value=true);
  })
  isMobile.value && setScroll()
})

</script>

<template>
    <header class="w-full md:!px-5 border-b border-b-pink-600/20 fixed top-0 bg-primary left-0 z-50 h-18 flex justify-between ">
      <nav class="flex gap-5 relative  [&>*]:h-full [&>*]:!px-5  items-center w-full justify-between">
        <div class="flex items-center justify-between">
          <router-link  to="/" class="flex items-center justify-between gap-3 ">
            <Sparkles class="h-8 w-8 text-pink-400 hover:rotate-10 duration-100"/>
            <span class="text-3xl font-['Bangers'] text-transparent linear-secondary bg-clip-text  ">
              FLIXAKUFILMS
            </span>
          </router-link>
        </div>
        <div ref="box" :class="`transition-all duration-500 overflow-x-scroll flex  items-center gap-5 lg:gap-5 [&>*]:!text-gray-200 absolute right-0 z-51 bg-primary  ${navLong ? '!w-65  ':'w-14' } `">
          <router-link  to="/" class="">
            Home
          </router-link>
          <router-link  to="/favourites" class="relative  ">
            <div  :class="`${favourites.length?'p-[3px]':'opacity-0'} transition-all duration-200 border-red-600  absolute  flex justify-center items-center text-black top-0 right-0 translate-x-1/2 -translate-y-1/2 text-sm font-bold  m-1 bg-primary rounded-full   `">
              <div :class="`${favourites.length?'':'!w-0 !h-0'} transition-all duration-200 w-4 h-4  rounded-full  flex justify-center items-center bg-pink-700 `">
                {{favourites.length}}
              </div>
            </div>
            <Heart/>
          </router-link>
          <router-link to="/login">
            <Button class="linear-primary">
              Login
            </Button>
          </router-link>
          <span :class="` rounded-full !p-1.5 bg-opacity ${isMobile && 'fixed bottom-5 right-5 '}`">
            <Sun class="w-5 h-5 text-amber-300 " />
          </span>
          <span
              v-if="isMobile"
              @click="navLong=!navLong"
              :class="`  `">
            <Menu class="w-5 h-5  " />
          </span>
        </div>
      </nav>

    </header>
    <router-view />
</template>

<style scoped>

</style>