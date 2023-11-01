<script setup lang="ts">
import NotesList from '@/components/NotesList.vue';
import NavigationMenu from '../components/NavigationMenu.vue'
import Loader from '@/components/Loader.vue';
</script>

<template>
  <main class="main">
    <NavigationMenu />
    <NotesList>
      <Loader />
    </NotesList>
  </main>
</template>
