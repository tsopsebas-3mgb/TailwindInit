<script setup lang="ts">
import {Filter} from 'lucide-vue-next'
import Button from "../components/Button.vue";
import {useIsMobile} from '../utils/isMobile.ts'
import MovieCard from "../components/MovieCard.vue";
import {moviesData} from '../data/movies.ts'
import {favourites} from "../data/favourites.ts";


const {isMobile} = useIsMobile()
const navLong=ref(true)
const box = ref<HTMLDivElement | null>(null)
import {computed, type ComputedRef, nextTick, onMounted, type Ref, ref, watch} from "vue"
import {genres} from '../data/genre.ts'
import type {Movie} from "../Types/movie.ts";
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
const searchQuery = ref('');
const selectedGenre = ref('All');
const filteredMovies: ComputedRef<Movie[]> = computed(()=>{
  let list = selectedGenre.value==='All'
      ? moviesData
      : moviesData.filter(movie=>movie
          .genre
          .includes(selectedGenre.value));
  if(searchQuery.value){
    list=list.filter(movie => movie.title.toLowerCase().includes(searchQuery.value.toLowerCase()));
  }
  return list;

})
</script>

<template>
  <main class="size-full flex flex-col bg-primary !mt-18 ">
    <section class="relative flex flex-col !px-4 !py-20 bg-linear-150 gap-5 from-pink-950/30 via-purple-950/30 to-blue-950/30 items-center justify-center w-full">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-10 left-10 text-6xl">☁️</div>
        <div class="absolute top-32 right-20 text-4xl">🌸</div>
        <div class="absolute bottom-20 left-1/4 text-5xl">⭐</div>
        <div class="absolute bottom-10 right-1/3 text-4xl">✨</div>
      </div>
      <h2 class="font-['Bangers'] linear-secondary bg-clip-text text-transparent text-5xl">Discover Amazing Anime Films!</h2>
      <p class="text-xl !px-2 text-pink-100 font-['Poppins'] ">Your gateway to the best anime movies. Watch, rate, and save your favorites! 🎬

      </p>
      <input
          placeholder="Search for anime movies..."
          class="!mt-8 px-5 py-3 relative z-9 "
          v-model="searchQuery"
      />
      <div class="w-full flex  flex-wrap !py-5 !px-3 items-center justify-center gap-3 ">
        <Filter class="size-5 text-purple-300 "/>
        <span
            v-for="(genre , index) in genres "
            :key="index"
            @click="selectedGenre=genre"
        >
          <Button
              :class="`${genre===selectedGenre?'linear-primary ':''} relative z-9 hover:bg-purple-800 active:scale-115 transition-all duration-100 bg-opacity  `"
              @click="()=>{
                searchQuery=''
                selectedGenre=genre
              }"
          >
          {{genre}}
        </Button>
        </span>

      </div>
    </section>
    <section class="relative flex flex-col gap-10 !px-5 !py-10 bg-primary items-start justify-center w-full">
      <div class="w-full flex justify-between items-center ">
        <h3 class=" font-['Bangers'] linear-primary bg-clip-text text-transparent text-3xl">
          ALL MOVIES
        </h3>
        <span class="text-purple-300/50 font-semibold ">{{filteredMovies.length}} movie{{filteredMovies.length>1?'s':''}} </span>
      </div>
      <div class="grid place-items-center  w-full  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div class=" " v-for="movie in filteredMovies">
          <MovieCard :title='movie.title' :year="movie.year" :genre="movie.genre" :id="movie.id" :poster="movie.poster" :rating="movie.rating" />
        </div>
      </div>
    </section>
  </main>

</template>

<style scoped>

</style>