<script setup lang="ts">
import { DotIcon, Star,Trash2Icon } from "lucide-vue-next";
import {favourites} from "../data/favourites.ts";
import type {Movie} from "../Types/movie.ts";
import { Motion } from '@motionone/vue'
const removeFromFavourite = (movie: Movie) => {
  favourites.value=favourites.value.filter(fav => fav.id !== movie.id);
}

defineProps<{
  id: string;
  title: string;
  year: string;
  rating: number;
  poster: string;
  genre: string[];
  synopsis: string;
}>()



</script>

<template>
  <Motion
      :initial="{opacity:0,x:-50}"
      :animate="{opacity:1,x:0}"
      :transition="{ duration: 0.5, easing: 'ease-out',delay:Number(id)*0.2 }"
  >
    <div
        class="group relative grid sm:flex gap-5 justify-start p-4 rounded-3xl border border-border bg-card shadow-md transition-transform duration-200 hover:scale-[1.02] hover:shadow-lg"
    >
    <span
        @click="removeFromFavourite($props)"
        class="absolute top-5 right-5 p-2 rounded-full bg-opacity hover:bg-purple-800/30 transition-all duration-200 cursor-pointer ">
          <Trash2Icon class="text-purple-400 size-6 rounded-full "/>
    </span>
      <!-- Poster -->
      <div class="flex relative  items-start rounded-2xl overflow-hidden sm:w-36 sm:h-48">
        <img
            :alt="title"
            :src="poster"
            class="object-cover w-full group-hover:brightness-40  h-full rounded-[inherit] transition-all duration-300 group-hover:scale-110"
        />
      </div>

      <!-- Info -->
      <section class="flex flex-col gap-3 justify-between items-start px-2 w-full text-purple-300">
        <h3 class="font-bold text-left text-pink-200 text-2xl group-hover:text-pink-400 transition-colors">
          {{ title }}
        </h3>

        <div class="flex text-xl gap-2 font-semibold  text-muted-foreground">
          <span>{{ year }}</span>
          <DotIcon />
          <span class="flex gap-1 items-center">
          <Star class="fill-yellow-400 text-yellow-400 w-4 h-4" />
          {{ rating }}
        </span>
        </div>

        <!-- Genres -->
        <div class="flex gap-2 flex-wrap">
        <span
            v-for="g in genre"
            :key="g"
            class="px-3 py-1 text-sm rounded-full bg-secondary border border-purple-600"
        >
          {{ g }}
        </span>
        </div>

        <!-- Synopsis -->
        <p class="text-lg  text-left line-clamp-2">
          {{ synopsis }}
        </p>
      </section>
    </div>

  </Motion>
</template>

<style scoped>
/* Keep only advanced hover effects here */
</style>
