<script setup lang="ts">
import type { MenuItem } from '@/types/api.types'
import { ref } from 'vue'
import { useMenuItemStore } from '@/stores/menuItem'

const isLoading = ref(false)
const menuItemStore = useMenuItemStore()

defineProps({
  msg: String
})

const fetchData = async () => {
  isLoading.value = true
  try {
    const response = await fetch('/api')
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const json: { menu: MenuItem[] } = await response.json()
    menuItemStore.updateMenuItems(json.menu)
  } catch (e) {
    console.error('There has been a problem with your fetch operation:', e)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="hello">
    <button @click="fetchData">Click Me!</button>
    <div v-if="isLoading">Loading...</div>
    <ul>
      <li v-for="menuItem in menuItemStore.menuItems" :key="menuItem.id">
        {{ menuItem.name }}: {{ menuItem.description }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
button {
  padding: 20px 60px;
  font-size: 18px;
}
</style>
@/types/api.interfaces
