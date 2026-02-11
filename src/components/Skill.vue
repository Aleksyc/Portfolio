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
      <input type="radio" name="skill-category" value="DevOps" class="sr-only peer" v-model="selectedCategory">
      <span class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-input bg-background shadow-sm h-8 rounded-md text-xs px-4 py-2 hover:bg-black/10 peer-checked:bg-black peer-checked:text-white peer-checked:border-black peer-checked:hover:bg-black">
        DevOps
      </span>
      </label>
      <label class="cursor-pointer">
      <input type="radio" name="skill-category" value="Practices" class="sr-only peer" v-model="selectedCategory">
      <span class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-input bg-background shadow-sm h-8 rounded-md text-xs px-4 py-2 hover:bg-black/10 peer-checked:bg-black peer-checked:text-white peer-checked:border-black peer-checked:hover:bg-black">
        Practices
      </span>
      </label>
      <label class="cursor-pointer">
      <input type="radio" name="skill-category" value="Networking" class="sr-only peer" v-model="selectedCategory">
      <span class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-input bg-background shadow-sm h-8 rounded-md text-xs px-4 py-2 hover:bg-black/10 peer-checked:bg-black peer-checked:text-white peer-checked:border-black peer-checked:hover:bg-black">
        Networking
      </span>
      </label>

      <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 max-w-4xl">
        <ul>
        <li v-for="skill in skills.filter(s => s.category === selectedCategory)" :key="skill.name" class="inline-block bg-card text-card-foreground rounded-full px-4 py-2 m-2 text-sm">
          {{ skill.name }}
        </li>
      </ul>
    </div>
    </div>
  </section> 
</template>

<script setup lang="ts">
import { ref } from 'vue'

export interface Skill {
  name: string;
  category: string;
}

const selectedCategory = ref('Frontend')
const skills = ref<Skill[]>([
  { name: "Vue.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "Agile Methodologies", category: "Practices" },
  { name: "CI/CD", category: "Practices" },
  { name: "TCP/IP", category: "Networking" },
  { name: "DNS", category: "Networking" },
])

</script>