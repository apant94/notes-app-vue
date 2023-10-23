<script setup lang="ts">
import NotesList from '@/components/NotesList.vue';
import NavigationMenu from '../components/NavigationMenu.vue'
</script>

<template>
  <main class="main">
    <NavigationMenu />
    <NotesList />
  </main>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  gap: 3rem;
  padding: 4rem 0 0;
  overflow: auto;
}
</style>
