<script setup lang="ts">
import {favourites} from "../data/favourites.ts";
import {Heart} from 'lucide-vue-next'
import FavouriteCard from "../components/FavouriteCard.vue";
</script>

<template>
  <div v-if="favourites.length===0" class="min-h-screen flex justify-center py-20 items-center bg-primary  ">
    <div class="text-center max-w-md mx-auto px-4 ">
      <div class="text-8xl mb-6">💔</div>
      <h2 class="text-4xl font-['Bangers'] mb-4 bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400 bg-clip-text text-transparent">
        No Favorites Yet!
      </h2>
      <p class="text-pink-100/30 font-bold  mb-8">
        Start adding your favorite anime movies to build your collection!
      </p>
      <router-link
          to="/"
          class="inline-block cursor-pointer px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-lg !font-bold !text-amber-50 hover:from-pink-600 hover:to-purple-600 transition-all hover:scale-105 shadow-lg"
      >
        Discover Movies
      </router-link>
    </div>
  </div>
  <div v-else
  class="bg-primary min-h-screen w-full  flex flex-col items-center justify-start pt-30"
  >
    <div class="mb-12 text-center">
      <div class="flex items-center justify-center gap-3 mb-4">
        <Heart class="w-12 h-12 fill-pink-500 text-pink-500" />
        <h1 class="text-5xl font-['Bangers'] bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400 bg-clip-text text-transparent">
          My Favorites
        </h1>
      </div>
      <p class="text-purple-300 ">
        You have {{ favourites.length }} {{ favourites.length === 1 ? 'movie' : 'movies' }} in your collection
      </p>
    </div>
    <div class="flex flex-col px-10   w-full items-center justify-start gap-10 ">
      <div class="w-full" v-for="movie in favourites" :key="movie.id">
        <FavouriteCard :rating="movie.rating" :poster="movie.poster" :year="movie.year" :id="movie.id" :synopsis="movie.synopsis" :title="movie.title" :genre="movie.genre"   />
      </div>
    </div>
    <router-link
        to="/"
        class="mx-auto my-10">
      <button class="linear-primary px-8 py-4 rounded-full font-semibold text-pink-100   " >
        Discover More Movies
      </button>
    </router-link>
  </div>
</template>

<style scoped>

</style>