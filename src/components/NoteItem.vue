<script lang="ts">

interface Note {
  title: string,
  text: string,
  id: number,
  createdAt: string,
  isLiked: boolean,
}

export default {
  name: 'NoteItem',
  data() {
    return {
      note: {} as Note,
      text: '' as string,
    };
  },
  methods: {
    hideNoteItem() {
      this.$store.commit("visibleNoteItem", false);
    },
    editNote() {
      const newNote = {
        text: this.text,
        id: this.note.id,
        createdAt: this.note.createdAt,
        title: this.note.title,
        isLiked: this.note.isLiked
      };
      fetch(`https://6536b157bb226bb85dd28259.mockapi.io/api/v1/notes/${Number(this.$route.params.id)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newNote)
      })
        .then((res) => res.json())
        .then(() => this.$store.commit('success', true))
        .then(() => setTimeout(() => {
          this.$store.commit('success', false)
        }, 2900))
        .catch((err) => console.log(err.message));
    },
  },
  mounted() {
    this.$store.commit('loading', true);
    fetch(`https://6536b157bb226bb85dd28259.mockapi.io/api/v1/notes/${Number(this.$route.params.id)}`)
      .then((res) => res.json())
      .then((data) => (this.note = data))
      .then((data) => (this.text = data.text))
      .catch((err) => console.log(err.message))
      .finally(() => (this.$store.commit('loading', false)));
  },
}
</script>

<template>
  <form class="noteitem" @submit.prevent="editNote" name="editForm">
    <slot></slot>
    <h2 v-if="!this.$store.state.loading" class="noteitem__title">{{ note.title }}</h2>
    <textarea v-if="!this.$store.state.loading" class="noteitem__text" :value="text"
      @input="event => text = (event.target as HTMLInputElement).value"></textarea>
    <div class="noteitem__wrapper" v-if="!this.$store.state.loading">
      <button class="noteitem__btn" @click.prevent="$router.back()">Назад</button>
      <button type="submit" class="noteitem__btn">Сохранить</button>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.loader {
  width: 48px;
  height: 48px;
  border: 3px solid #FFF;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  align-self: center;
}

.loader::after {
  content: '';
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-bottom-color: var(--color-green);
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.noteitem {
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 80vh;
  -ms-overflow-style: none;
  scrollbar-width: none;
  width: 90%;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 768px) {
    gap: 1rem;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }

  &__title {
    font-size: 2rem;

    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  &__text {
    padding: 1rem;
    height: fit-content;
    min-height: 60vh;
    background: var(--color-background);
    border-radius: 6px;
    z-index: 5;
    border: 1px solid var(--color-green);
    color: var(--color-text);
    resize: vertical;
    font-size: 1.3rem;

    &:focus-visible {
      outline: 1px solid var(--color-green);
    }

    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }

  &__wrapper {
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
      gap: 1rem;
    }
  }

  &__btn {
    min-height: 3rem;
    width: 10rem;
    padding: 1rem;
    font-weight: 600;
    background-color: var(--color-green);
    border: 1px solid var(--color-green);
    border-radius: 6px;
    cursor: pointer;
    color: rgb(24, 31, 22);
    transition: all .2s linear;
    text-transform: uppercase;
    font-family: "OpenSans", Arial, Helvetica, sans-serif;
    font-size: 1.1rem;

    &:hover {
      animation: shake 0.5s cubic-bezier(.36, .07, .19, .97) both;
      opacity: .8;
    }

    @media screen and (max-width: 768px) {
      width: 7rem;
      font-weight: 500;
      font-size: .8rem;
    }
  }

}
</style>