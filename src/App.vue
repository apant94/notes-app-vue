<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Form from './components/Form.vue';
</script>

<template>
  <Header />
  <Form />
  <RouterView />
</template>

<style scoped></style>
