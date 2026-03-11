<template>
  <div class="flex h-screen flex-col items-center justify-center overflow-hidden">
    <div class="flex flex-col items-center space-y-8 text-center">
      <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
        Bienvenue
      </h1>
      <button
        @click="$emit('enter')"
        class="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-input bg-background px-8 py-4 text-lg font-semibold shadow-md transition-all duration-300 hover:bg-black/10 hover:scale-105 hover:shadow-lg active:scale-95"
      >
        Accéder au Portfolio →
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

defineEmits<{
  enter: []
}>()

onMounted(() => {
  document.documentElement.style.overflow = 'hidden'
  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  document.documentElement.style.overflow = ''
  document.body.style.overflow = ''
})
</script>