<template>
  <section id="hero" class="w-full py-12">
    <div class="mx-auto w-full max-w-2xl space-y-8">
      <div class="flex items-center justify-between gap-2">
        <div class="flex flex-1 flex-col space-y-1.5">
          <div class="flex">
            <span class="mb-2 inline-block text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
              {{ t('hero.greeting') }}
            </span>
          </div>
          <div class="flex">
            <span class="inline-block max-w-[600px] md:text-xl">
              {{ t('hero.description') }}
            </span>
          </div>
          <div class="flex flex-wrap gap-3 pt-2">
            <button
              type="button"
              @click="toggleLang"
              class="inline-flex cursor-pointer items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-all hover:bg-black/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span v-if="locale.startsWith('fr')" class="flex items-center gap-2">
                <!-- UK flag SVG -->
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" class="h-4 w-4" aria-hidden="true" role="img">
                  <rect width="60" height="30" fill="#012169"/>
                  <path d="M0 0 L60 30 M60 0 L0 30" stroke="#fff" stroke-width="6"/>
                  <path d="M0 0 L60 30 M60 0 L0 30" stroke="#C8102E" stroke-width="3"/>
                  <path d="M30 0 L30 30 M0 15 L60 15" stroke="#fff" stroke-width="10"/>
                  <path d="M30 0 L30 30 M0 15 L60 15" stroke="#C8102E" stroke-width="6"/>
                </svg>
                EN
              </span>
              <span v-else class="flex items-center gap-2">
                <!-- FR flag SVG -->
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" class="h-4 w-4" aria-hidden="true" role="img">
                  <rect width="1" height="2" x="0" y="0" fill="#0055A4"/>
                  <rect width="1" height="2" x="1" y="0" fill="#FFFFFF"/>
                  <rect width="1" height="2" x="2" y="0" fill="#EF4135"/>
                </svg>
                FR
              </span>
            </button>
            <a
              href="https://github.com/Aleksyc"
              target="_blank"
              rel="noreferrer"
              class="inline-flex cursor-pointer items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-all hover:bg-black/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M12 2a10 10 0 0 0-3.16 19.48c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.36-1.34-3.36-1.34-.45-1.15-1.1-1.45-1.1-1.45-.9-.62.07-.6.07-.6 1 .07 1.52 1.03 1.52 1.03.9 1.52 2.36 1.08 2.94.83.1-.65.35-1.08.64-1.33-2.22-.25-4.56-1.12-4.56-4.98 0-1.1.4-2 1.03-2.7-.1-.26-.45-1.3.1-2.7 0 0 .83-.27 2.72 1.03a9.4 9.4 0 0 1 4.96 0c1.88-1.3 2.7-1.03 2.7-1.03.56 1.4.2 2.44.1 2.7.64.7 1.03 1.6 1.03 2.7 0 3.87-2.34 4.72-4.58 4.96.36.3.68.92.68 1.86v2.76c0 .27.18.59.7.48A10 10 0 0 0 12 2z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/alexis-cocquerel-04898a353/"
              target="_blank"
              rel="noreferrer"
              class="inline-flex cursor-pointer items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-all hover:bg-black/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M4.98 3.5A2.48 2.48 0 1 1 5 8.46 2.48 2.48 0 0 1 4.98 3.5zM3 9h4v12H3zM9 9h3.8v1.64h.05c.53-1 1.83-2.06 3.76-2.06C20 8.58 21 10.64 21 13.34V21h-4v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.5V21H9z" />
              </svg>
              LinkedIn
            </a>
            <button
              type="button"
              @click="isButOpen = true"
              class="inline-flex cursor-pointer items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-all hover:bg-black/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M8 5.5v13l11-6.5-11-6.5z" />
              </svg>
              {{ t('hero.but180') }}
            </button>
          </div>
        </div>
        <div>
          <span class="relative flex size-36 shrink-0 overflow-hidden rounded-full">
            <img class="aspect-square h-full w-full" alt="Photo Alexis COCQUEREL" src="../assets/me.png" />
          </span>
        </div>
      </div>
    </div>
  </section>

  <teleport to="body">
    <div
      v-if="isButOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Video Mon BUT"
      @click.self="isButOpen = false"
    >
      <div class="relative w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-xl">
        <button
          type="button"
          class="absolute right-3 top-3 inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-input bg-white text-lg leading-none transition-colors hover:bg-gray-200"
          aria-label="Fermer"
          @click="isButOpen = false"
        >
          x
        </button>
        <div class="aspect-video w-full">
          <iframe
            class="h-full w-full"
            src="https://www.youtube.com/embed/3cT5Mb-ykhY?si=3lPW1RfQ-bfwDkBe"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const isButOpen = ref(false)

function toggleLang() {
  locale.value = locale.value.startsWith('fr') ? 'en' : 'fr'
}
</script>