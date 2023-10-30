<script setup lang="ts">
import NavigationMenu from '../components/NavigationMenu.vue'
import NoteItem from '@/components/NoteItem.vue';
import Loader from '@/components/Loader.vue';
</script>

<template>
  <main class="main">
    <NavigationMenu />
    <NoteItem>
      <Loader />
    </NoteItem>
  </main>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  gap: 3rem;
  padding: 4rem 0 0;
  overflow: auto;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    gap: 1.5rem;
    padding: 2rem 0 0;
  }
}
</style>
