<template>
  <div class="md:hidden">
    <button
      @click="isOpen = !isOpen"
      class="text-gray-600 hover:text-primary focus:outline-none"
      aria-label="Toggle menu"
    >
      <svg
        class="h-6 w-6"
        :class="{ 'hidden': isOpen, 'block': !isOpen }"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <svg
        class="h-6 w-6"
        :class="{ 'block': isOpen, 'hidden': !isOpen }"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    <div
      :class="{ 'block': isOpen, 'hidden': !isOpen }"
      class="absolute top-16 left-0 w-full bg-white shadow-lg"
    >
      <div class="px-4 py-2 space-y-1">
        <a
          v-for="item in menuItems"
          :key="item.href"
          :href="item.href"
          class="block px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md"
          @click="isOpen = false"
        >
          {{ item.text }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const menuItems = [
  { href: '#summary', text: 'Summary' },
  { href: '#skills', text: 'Skills' },
  { href: '#experience', text: 'Experience' },
  { href: '#education', text: 'Education' },
  { href: '#certifications', text: 'Certifications' },
  { href: '#references', text: 'References' }
]
</script> 