<script lang="ts">
import { defineComponent } from 'vue';

interface Note {
  title: string,
  text: string,
  id: number,
}

export default defineComponent({
  name: 'NotesList',
  data() {
    return {
      notes: [] as Array<Note>,
    }
  },
  mounted() {
    fetch("https://6536b157bb226bb85dd28259.mockapi.io/api/v1/notes")
      .then((res) => res.json())
      .then((data) => (this.notes = data))
      .catch((err) => console.log(err.message));
  },
})
</script>

<template>
  <ul class="notes">
    <li v-for="note in notes" v-bind:key="note.id" class="note">
      <h3 class="note__title">{{ note.title }}</h3>
      <p class="note__text">{{ note.text }}</p>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.notes {
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem 3.3%;
  height: 80vh;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.note {
  list-style: none;
  padding: 1rem;
  border: 1px solid var(--color-text);
  background-color: var(--color-background);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 31%;
  border-radius: 10px;

  &__title {
    color: var(--color-heading);
    font-size: 2rem;
  }

  &__text {
    font-size: 1.5rem;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--color-text);
    height: 10rem;
  }
}
</style>