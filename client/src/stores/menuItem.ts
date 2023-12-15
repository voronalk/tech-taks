import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { MenuItem } from '@/types/api.types'

export const useMenuItemStore = defineStore('counter', () => {
  const menuItems = ref<MenuItem[]>([])
  function updateMenuItems(value: MenuItem[]) {
    menuItems.value = value
  }
  function addMenuItem(value: MenuItem) {
    menuItems.value.push(value)
  }
  return { menuItems, addMenuItem, updateMenuItems }
})
