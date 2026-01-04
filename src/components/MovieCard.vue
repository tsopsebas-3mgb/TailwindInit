<script setup lang="ts">
import {Star,Heart,DotIcon} from 'lucide-vue-next'
import {type Movie} from "../Types/movie.ts";
import {favourites} from "../data/favourites.ts";

const addToFavourites = (movie:Movie):void => {
  const exist = favourites.value.some(fav => fav.id === movie.id);
  if (!exist){
    favourites.value.push(movie);
  }else {
    favourites.value=favourites.value.filter(fav => fav.id !== movie.id);
  }
}

defineProps<{
  id: string;
  title: string;
  year: string;
  rating: number;
  poster: string;
  genre: string[];
}>()

</script>
<template>
  <router-link
      :to="`/movie/${id}`"
      class="block relative group"
  >
    <div
        class="w-full flex flex-col rounded-2xl overflow-hidden border border-pink-400/30 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"
        :id="id"
    >
      <!-- Poster -->
      <div class="relative aspect-[2/3] overflow-hidden">
        <img
            :src="poster"
            :alt="title"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75"
        />

        <!-- Rating Badge -->
        <div
            class="flex items-center gap-2 absolute top-3 left-3 bg-yellow-400 text-orange-900 font-bold px-3 py-1 rounded-full shadow-md text-sm"
        >
          <Star class="w-4 h-4 fill-orange-900" />
          <span>{{ rating }}</span>
        </div>

        <!-- Favourite Button -->
        <button
            @click.stop.prevent="addToFavourites($props)"
            class="absolute top-3 right-3 rounded-full p-2 bg-purple-900/40 hover:bg-purple-700/60 transition"
        >
          <Heart
              :class="`w-6 h-6 transition-all duration-300 ${
              favourites.some(fav => fav.id === $props.id)
                ? 'fill-pink-500 text-pink-400'
                : 'text-purple-200'
            }`"
          />
        </button>
      </div>

      <!-- Info -->
      <div class="bg-purple-900/30 px-4 py-3 flex items-start flex-col gap-1">
        <h3
            class="text-purple-100 font-semibold text-lg transition-colors duration-300 group-hover:text-pink-400"
        >
          {{ title }}
        </h3>
        <div class="flex items-center text-sm text-purple-300 gap-2">
          <span>{{ year }}</span>
          <DotIcon class="w-4 h-4" />
          <span>
            {{
              genre.join(', ').length > 18
                  ? genre.join(', ').slice(0, 18) + '...'
                  : genre.join(', ')
            }}
          </span>
        </div>
      </div>
    </div>
  </router-link>
</template>

<style scoped>

</style>