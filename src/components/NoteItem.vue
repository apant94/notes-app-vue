<script lang="ts">
export default {
  name: 'NoteItem',
  methods: {
    hideNoteItem() {
      this.$store.commit("visibleNoteItem", false);
    }
  },
}
</script>

<template>
  <form class="noteitem" v-if="this.$store.state.visibleNoteItem">
    <h2 class="noteitem__title">заметка</h2>
    <textarea class="noteitem__text">текст</textarea>
  </form>
  <button class="noteitem__close">X</button>
</template>

<style lang="scss" scoped>
.noteitem {
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 80vh;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 768px) {
    gap: 1rem;
  }


}
</style>