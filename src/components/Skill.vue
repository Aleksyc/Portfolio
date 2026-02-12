<template>
  <section id="work" class="w-full mb-8">
    <div class="mx-auto w-full max-w-2xl flex min-h-0 flex-col gap-y-3">
      <div class="mb-1">
        <h2 class="text-xl font-bold">Skills</h2>
      </div>
    </div>

    <div class="flex flex-wrap justify-center gap-3 mt-4">
      <label class="cursor-pointer">
      <input type="radio" name="skill-category" value="Frontend" class="sr-only peer" v-model="selectedCategory">
      <span class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-input bg-background shadow-sm h-8 rounded-md text-xs px-4 py-2 hover:bg-black/10 peer-checked:bg-black peer-checked:text-white peer-checked:border-black peer-checked:hover:bg-black">
        Frontend
      </span>
      </label>
      <label class="cursor-pointer">
      <input type="radio" name="skill-category" value="Backend" class="sr-only peer" v-model="selectedCategory">
      <span class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-input bg-background shadow-sm h-8 rounded-md text-xs px-4 py-2 hover:bg-black/10 peer-checked:bg-black peer-checked:text-white peer-checked:border-black peer-checked:hover:bg-black">
        Backend
      </span>
      </label>
      <label class="cursor-pointer">
      <input type="radio" name="skill-category" value="Other" class="sr-only peer" v-model="selectedCategory">
      <span class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-input bg-background shadow-sm h-8 rounded-md text-xs px-4 py-2 hover:bg-black/10 peer-checked:bg-black peer-checked:text-white peer-checked:border-black peer-checked:hover:bg-black">
        Other
      </span>
      </label>
    </div>

    <div class="mt-6 flex justify-center">
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 max-w-4xl">
        <div
          v-for="skill in skills.filter(s => s.category === selectedCategory)"
          :key="skill.name"
          class="bg-card text-card-foreground rounded-xl border border-input shadow-sm p-4 flex flex-col items-center justify-center gap-2 hover:shadow-md transition-shadow w-32 h-32"
        >
          <img :src="skill.image" :alt="skill.name" class="h-12 w-12 object-contain" />
          <span class="text-sm font-medium text-center">{{ skill.name }}</span>
        </div>
      </div>
    </div>
  </section> 
</template>

<script setup lang="ts">
import { ref } from 'vue'

export interface Skill {
  category: string;
  name: string;
  image: string;
}

const selectedCategory = ref('Frontend')
const skills = ref<Skill[]>([
  { name: "HTML5", category: "Frontend", image: new URL('../assets/technology/html5.png', import.meta.url).href },
  { name: "CSS3", category: "Frontend", image: new URL('../assets/technology/css3.png', import.meta.url).href },
  { name: "Tailwind CSS", category: "Frontend", image: new URL('../assets/technology/tailwindcss.png', import.meta.url).href },
  { name: "Vue.js", category: "Frontend", image: new URL('../assets/technology/vue.png', import.meta.url).href },
  { name: "Angular", category: "Frontend", image: new URL('../assets/technology/angular.png', import.meta.url).href },
  { name: "Typescript", category: "Frontend", image: new URL('../assets/technology/typescript.png', import.meta.url).href },
  { name: "Node.js", category: "Backend", image: new URL('../assets/technology/nodejs.png', import.meta.url).href },
  { name: "FastAPI", category: "Backend", image: new URL('../assets/technology/fastapi.png', import.meta.url).href },
  { name: "PHP", category: "Backend", image: new URL('../assets/technology/php.png', import.meta.url).href },
  { name: "API REST", category: "Backend", image: new URL('../assets/technology/apirest.png', import.meta.url).href },
  { name: "Python", category: "Backend", image: new URL('../assets/technology/python.png', import.meta.url).href },
  { name: "SQL", category: "Backend", image: new URL('../assets/technology/sql.png', import.meta.url).href },
  { name: "PostgreSQL", category: "Backend", image: new URL('../assets/technology/postgresql.png', import.meta.url).href },
  { name: "Automation Anywhere", category: "Other", image: new URL('../assets/technology/automationanywhere.png', import.meta.url).href },
  { name: "Apps Script", category: "Other", image: new URL('../assets/technology/appsscript.png', import.meta.url).href },
])

</script>