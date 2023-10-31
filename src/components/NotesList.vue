<script lang="ts">
import { defineComponent } from 'vue';
import TrashNote from './icons/TrashNote.vue';

interface Note {
  title: string,
  text: string,
  id: number,
  createdAt: string,
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
  methods: {
    deleteNote(id: number) {
      fetch(`https://6536b157bb226bb85dd28259.mockapi.io/api/v1/notes/${id}`, { method: 'DELETE' })
        .then((res) => res.json())
        .then(data => this.$store.commit("deleteNote", data.id))
        .catch((err) => console.log(err.message));
    },
  },
  components: { TrashNote }
})
</script>

<template>
  <slot></slot>
  <ul class="notes" v-if="!this.$store.state.loading">
    <li v-for="note in notesFromStore" v-bind:key="note.id" class="note">
      <RouterLink class="note__link" :to="{ name: 'note', params: { id: note.id } }">
        <h3 class="note__title">{{ note.title }}</h3>
        <p class="note__text">{{ note.text }}</p>
        <button class="note__trash" @click="deleteNote(note.id)">
          <TrashNote />
        </button>
      </RouterLink>
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
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 768px) {
    gap: 1rem 3.3%;
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
  transition: all .2s linear;
  cursor: pointer;

  &:hover {
    border: 1px solid var(--color-green);
  }

  @media screen and (min-width: 768px) {
    &:hover {
      transform: rotate(1deg);
    }
  }

  @media screen and (max-width: 768px) {
    width: 48%;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }

  &__link {
    text-decoration: none;
  }

  &__title {
    color: var(--color-heading);
    font-size: 2rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media screen and (max-width: 1024px) {
      font-size: 1.5rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
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

    @media screen and (max-width: 1024px) {
      font-size: 1.3rem;
      -webkit-line-clamp: 5;
    }

    @media screen and (max-width: 768px) {
      font-size: 1rem;
      height: 6.7rem;
      -webkit-line-clamp: 4;
    }
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

    @media screen and (max-width: 768px) {
      height: 1.5rem;
      width: 1.5rem;
    }

    &:hover {
      transform: scale(.8);
    }
  }
}
</style>