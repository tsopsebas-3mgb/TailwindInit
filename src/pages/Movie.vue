<script setup lang="ts">
import {useRoute} from 'vue-router';
import {moviesData} from "../data/movies.ts";
import {LucideArrowLeft,Star,Calendar1Icon,Users} from "lucide-vue-next";
import {Motion} from "@motionone/vue";

const route = useRoute();
const movieId = Number(route.params.id);
const movie = moviesData.find((movie) => Number(movie.id) === movieId);


</script>

<template>
  <Motion
  :initial="{opacity:0,y:50}"
  :animate="{opacity:1,y:0}"
  :transition="{duration:0.5,easing:'ease-out' }"
  >
    <div
        v-if="movie"
        class="min-h-screen bg-primary px-6 md:px-12 pt-25 pb-10 flex flex-col gap-8 items-start"
    >
      <!-- Back Button -->
      <router-link
          to="/"
          class="flex items-center gap-2 text-purple-400 hover:text-purple-200 transition-colors"
      >
        <LucideArrowLeft class="w-5 h-5" />
        <span class="font-semibold">Back</span>
      </router-link>

      <!-- Main Content -->
      <section
          class="w-full flex flex-col md:flex-row gap-10 items-center md:items-start justify-center max-w-6xl mx-auto"
      >
        <!-- Poster -->
        <div class="w-full md:w-1/3 rounded-2xl overflow-hidden shadow-lg border-4 border-pink-700">
          <img
              :alt="movie.title"
              :src="movie.poster"
              class="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        <!-- Details -->
        <div class="flex flex-col gap-6 text-left md:w-2/3">
          <!-- Title -->
          <h3
              class="text-4xl md:text-5xl font-['Bangers'] bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
          >
            {{ movie.title }}
          </h3>

          <!-- Rating & Year -->
          <div class="flex gap-4 items-center">
            <div
                class="flex items-center gap-2 text-yellow-300 border-2 border-yellow-400 bg-yellow-900/30 px-4 py-2 rounded-full font-bold"
            >
              <Star class="w-5 h-5 fill-yellow-300" />
              <span>{{ movie.rating }}</span>
            </div>
            <div
                class="flex items-center gap-2 text-purple-300 border-2 border-purple-400 bg-purple-900/30 px-4 py-2 rounded-full"
            >
              <Calendar1Icon class="w-5 h-5" />
              <span>{{ movie.year }}</span>
            </div>
          </div>

          <!-- Genres -->
          <div>
            <h3 class="text-purple-300 font-semibold text-xl mb-2">Genre</h3>
            <ul class="flex flex-wrap gap-3">
              <li
                  v-for="g in movie.genre"
                  :key="g"
                  class="px-4 py-1 rounded-full border-2 bg-linear-to-r from-pink-400/30 to-purple-500/30 brightness-50 border-purple-600 bg-purple-900/30 text-purple-200 text-sm"
              >
                {{ g }}
              </li>
            </ul>
          </div>

          <!-- Synopsis -->
          <div>
            <h4 class="text-pink-300 font-semibold text-lg mb-2">Synopsis</h4>
            <p class="text-gray-200 leading-relaxed">{{ movie.synopsis }}</p>
          </div>

          <!-- Cast -->
          <div>
          <span class="flex items-center gap-2 text-purple-300 font-semibold text-lg mb-2">
            <Users class="w-5 h-5" />
            Cast
          </span>
            <ul class="flex flex-wrap gap-3">
              <li
                  v-for="(c,i) in movie.cast"
                  :key="i"
                  class="p-5 font-semibold   rounded-lg  bg-purple-900/30 border border-purple-600 text-purple-200 text-sm"
              >
                {{ c }}
              </li>
            </ul>
          </div>

          <!-- Buttons -->
          <div class="flex gap-4 mt-4 [&>button]:rounded-full ">
            <button
                class="px-6 py-3 rounded-lg font-bold text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition"
            >
              Watch Now
            </button>
            <button
                class="px-6 py-3 rounded-lg font-bold border-2 border-purple-500 text-purple-300 hover:bg-purple-600 hover:text-white transition"
            >
              Add To Watchlist
            </button>
          </div>
        </div>
      </section>
    </div>

  </Motion>
  </template>


<style scoped>

</style>