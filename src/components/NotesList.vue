<script lang="ts">
import { defineComponent } from 'vue';
import TrashNote from './icons/TrashNote.vue';

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
    };
  },
  mounted() {
    fetch("https://6536b157bb226bb85dd28259.mockapi.io/api/v1/notes")
      .then((res) => res.json())
      .then((data) => (this.notes = data))
      .then(() => this.$store.commit("getNotes", this.notes))
      .catch((err) => console.log(err.message));
  },
  computed: {
    notesFromStore(): Array<Note> {
      return this.$store.state.userNotes;
    },
  },
  components: { TrashNote }
})
</script>

<template>
  <ul class="notes">
    <li v-for="note in notesFromStore" v-bind:key="note.id" class="note">
      <h3 class="note__title">{{ note.title }}</h3>
      <p class="note__text">{{ note.text }}</p>
      <button class="note__trash">
        <TrashNote />
      </button>
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
  position: relative;

  &__title {
    color: var(--color-heading);
    font-size: 2rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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

  &__trash {
    position: absolute;
    top: .5rem;
    right: .5rem;
    background-color: transparent;
    border: none;
    height: 2rem;
    width: 2rem;
    padding: 0;
    cursor: pointer;
    transition: transform .2s linear;

    &:hover {
      transform: scale(.8);
    }
  }
}
</style>