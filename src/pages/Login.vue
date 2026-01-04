<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Mail, Lock, User, Sparkles } from 'lucide-vue-next'

const isSignup = ref(false )
</script>

<template>
  <div class="min-h-screen flex items-center justify-center relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br   from-pink-950/30  via-purple-950/30  to-blue-950/30">
      <div class="absolute top-20 left-10 text-6xl opacity-20 animate-pulse">🌸</div>
      <div class="absolute top-40 right-20 text-5xl opacity-20 animate-pulse delay-100">⭐</div>
      <div class="absolute bottom-20 left-1/4 text-7xl opacity-20 animate-pulse delay-200">☁️</div>
      <div class="absolute bottom-40 right-1/3 text-4xl opacity-20 animate-pulse delay-300">✨</div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl opacity-5">🎬</div>
    </div>

    <div class="relative z-10 w-full max-w-md mx-4">
      <div class="bg-black/30  backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-border p-8">
        <div class="text-center mb-8">
          <div class="flex items-center justify-center gap-2 mb-2">
            <Sparkles class="w-8 h-8  text-pink-400" />
            <h1 class="text-3xl font-['Bangers'] bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Flixakufilms
            </h1>
          </div>
          <p class="text-pink-300/30 font-bold">
            {{ isSignup ? 'Create your account' : 'Welcome back!' }}
          </p>
        </div>

        <!-- Form -->
        <form class="space-y-4" @submit.prevent>
          <div v-if="isSignup">
            <label class="block text-sm mb-2">Name</label>
            <div class="relative">
              <User class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                  type="text"
                  placeholder="Enter your name"
                  class="w-full pl-12 pr-4 py-3 rounded-full border-2 border-border bg-background   focus:border-pink-400 focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm mb-2">Email</label>
            <div class="relative">
              <Mail class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                  type="email"
                  placeholder="Enter your email"
                  class="w-full pl-12 pr-4 py-3 rounded-full border-2 border-border bg-background   focus:border-pink-400 focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm mb-2">Password</label>
            <div class="relative">
              <Lock class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                  type="password"
                  placeholder="Enter your password"
                  class="w-full pl-12 pr-4 py-3 rounded-full border-2 border-border bg-background   focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div v-if="!isSignup" class="flex items-center justify-between text-sm">
            <label class="flex items-center gap-2">
              <input type="checkbox" class="rounded" />
              <span class="text-muted-foreground">Remember me</span>
            </label>
            <a href="#" class="     hover:text-pink-300">
              Forgot password?
            </a>
          </div>

          <button
              type="submit"
              class="w-full py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:from-pink-600 hover:to-purple-600 transition-all hover:scale-105 shadow-lg"
          >
            {{ isSignup ? 'Sign Up' : 'Login' }}
          </button>
        </form>

        <!-- Toggle -->
        <div class="mt-6 text-center">
          <p class="text-sm text-muted-foreground">
            {{ isSignup ? 'Already have an account?' : "Don't have an account?" }}
            <button
                @click="isSignup = !isSignup"
                class="   text-pink-400  hover:text-pink-300 font-semibold"
            >
              {{ isSignup ? 'Login' : 'Sign Up' }}
            </button>
          </p>
        </div>

        <!-- Divider -->
        <div class="my-6 flex items-center gap-4">
          <div class="flex-1 h-px bg-border" />
          <span class="text-sm text-muted-foreground">or continue with</span>
          <div class="flex-1 h-px bg-border" />
        </div>

        <!-- Social Login -->
        <div class="grid grid-cols-2 gap-4">
          <button class="py-3 rounded-full border-2 border-border   hover:border-pink-400 transition-colors">
            <span>🎌 Google</span>
          </button>
          <button class="py-3 rounded-full border-2 border-border   hover:border-purple-400 transition-colors">
            <span>🌸 Discord</span>
          </button>
        </div>

        <!-- Back to Home -->
        <div class="mt-6 text-center">
          <RouterLink
              to="/"
              class="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to Home
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
