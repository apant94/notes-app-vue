<script setup lang="ts">
import NavigationMenu from '../components/NavigationMenu.vue'
import NoteItem from '@/components/NoteItem.vue';
import Loader from '@/components/Loader.vue';
import Success from '@/components/Success.vue';
</script>

<template>
  <main class="main">
    <NavigationMenu />
    <NoteItem>
      <Loader />
      <Success />
    </NoteItem>
  </main>
</template>
