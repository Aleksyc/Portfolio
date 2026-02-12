<template>
  <section id="work" class="w-full mb-8">
    <div class="mx-auto w-full max-w-2xl flex min-h-0 flex-col gap-y-3">
      <div class="mb-1">
        <h2 class="text-xl font-bold">Work Experience</h2>
      </div>

      <div v-for="(work, index) in works" :key="work.title" class="-mt-1 mb-2">
        <div class="block cursor-pointer" @click="toggleWork(index)">
          <div class="rounded-lg bg-card text-card-foreground flex">
            <div class="flex-none">
              <span class="relative flex shrink-0 overflow-hidden rounded-full size-12 m-auto bg-muted-background dark:bg-foreground">
                <img class="aspect-square h-full w-full object-contain" :alt="work.compagny" :src="work.logo" />
              </span>
            </div>
            <div class="flex-grow ml-4 items-center flex-col group">
              <div class="flex flex-col">
                <div class="flex items-center justify-between gap-x-2 text-base">
                  <h3 class="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                    {{work.title}}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-chevron-right size-4 transform transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100"
                      :class="expandedWork === index ? 'opacity-100 translate-x-1 rotate-90' : 'opacity-0 translate-x-0 rotate-0'"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </h3>
                  <div class="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">{{work.date}}</div>
                </div>
                <div class="font-sans text-xs">{{work.subtitle}}</div>
              </div>
            </div>
          </div>
        </div>
        <ul
          v-if="expandedWork === index"
          class="mt-2 ml-16 list-disc text-xs sm:text-sm text-muted-foreground space-y-1"
        >
          <li v-for="detail in work.details" :key="detail">{{ detail }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

export interface Work {
  title: string;
  subtitle: string;
  compagny: string;
  website: string;
  logo: string;
  date: string;
  details: string[];
}

const expandedWork = ref<number | null>(null)

const toggleWork = (index: number) => {
  expandedWork.value = expandedWork.value === index ? null : index
}

const works = ref<Work[]>([
  {
    title: "Veolia Eau",
    subtitle: "Full Stack & RPA Developer",
    compagny: "Veolia",
    website: "https://www.veolia.com",
    logo: new URL('../assets/veolia.png', import.meta.url).href,
    date: "Apr 2025 - Present",
    details: [

    ],
  }
])

</script>