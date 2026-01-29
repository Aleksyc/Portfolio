<script setup lang="ts">
import Education from './components/Education.vue';
import Hero from './components/Hero.vue';
import Skill from './components/Skill.vue';
import Work from './components/Work.vue';
</script>

<template>
   <main class="max-w-7xl mx-auto flex-1 w-full py-6 px-4 sm:px-6 lg:px-8">
      <Hero />
      <Work />
      <Education />
      <Skill />
   </main>
</template>