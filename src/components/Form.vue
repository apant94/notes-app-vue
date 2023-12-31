<script lang="ts">
import PaletteIcon from './icons/PaletteIcon.vue';
import Palette from './Palette.vue';

export default {
  name: 'FormWithSubmit',
  data() {
    return {
      title: '' as string,
      text: '' as string,
      theme: '' as string
    };
  },
  methods: {
    hideForm() {
      this.$store.commit("visibleForm", false);
    },
    clearForm() {
      this.title = '';
      this.text = '';
    },
    addNote() {
      const newNote = { title: this.title, text: this.text, theme: this.theme };
      fetch("https://6536b157bb226bb85dd28259.mockapi.io/api/v1/notes", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newNote)
      })
        .then((res) => res.json())
        .then((data) => this.$store.commit("addNote", data))
        .catch((err) => console.log(err.message));
      this.hideForm();
      this.clearForm();
    },
    togglePalette() {
      this.$store.commit("visiblePalette", !this.$store.state.visiblePalette);
    },
    onSetTheme(value: string) {
      this.theme = value;
    },
    selectedTheme(theme: string) {
      console.log(theme);
      return theme;
    },
  },
  components: { PaletteIcon, Palette }
}
</script>

<template>
  <div class="layout" v-if="this.$store.state.visibleForm">
    <form class="form" :class="selectedTheme(theme)" @submit.prevent="addNote" name="addForm">
      <div class="form__close" @click="hideForm">
        <svg class="form__close-fill" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 50 50">
          <path
            d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z">
          </path>
        </svg>
      </div>
      <h2 class="form__title">Создать заметочку</h2>
      <input type="text" class="form__input-title" v-model="title" placeholder="заголовок">
      <textarea name="text" class="form__input-text" v-model="text" placeholder="заметка"></textarea>
      <div class="form__btn-wrapper"><button type="submit" class="form__btn"
          :disabled="text === '' || title === ''">Оки</button>
        <button class="form__palette-btn" @click.prevent="togglePalette">
          <PaletteIcon />
        </button>
      </div>
      <Palette @setTheme="onSetTheme" />
    </form>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  min-width: 320px;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba($color: #000000, $alpha: .6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.form {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  width: 40%;
  height: fit-content;
  background: var(--color-background);
  border-radius: 6px;
  z-index: 5;
  gap: 2rem;
  border: 1px solid var(--color-text);

  @media screen and (max-width: 1024px) {
    width: 50%;
  }

  @media screen and (max-width: 768px) {
    width: calc(100% - 4rem);
    padding: 1.5rem;
    gap: 1rem;
  }

  &__close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    transition: all .3s linear;
    width: 2rem;
    height: 2rem;

    &:hover {
      transform: rotate(180deg);
    }

    @media screen and (max-width: 768px) {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  &__close-fill {
    fill: var(--color-text);
    height: 100%;
    width: 100%;
  }

  &__title {
    text-transform: uppercase;
    font-family: 'PressStart2P', Arial, Helvetica, sans-serif;
    font-size: 1rem;
    margin: 0;

    &::placeholder {
      opacity: .8;
    }

    @media screen and (max-width: 768px) {
      font-size: .7rem;
    }
  }

  &__input-title {
    height: 3rem;
    width: 100%;
    padding: .5rem;
    font-size: 1.5rem;
    background-color: var(--color-background);
    color: var(--color-text);
    border: 1px solid var(--color-green);
    border-radius: 4px;
    font-family:
      'OpenSans',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      sans-serif;

    &::placeholder {
      opacity: .8;
    }

    @media screen and (max-width: 768px) {
      font-size: 1rem;
      height: 2rem;
    }
  }

  &__input-text {
    height: 10rem;
    width: 100%;
    padding: .5rem;
    font-size: 1.5rem;
    background-color: var(--color-background);
    color: var(--color-text);
    border: 1px solid var(--color-green);
    border-radius: 4px;
    font-family:
      'OpenSans',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      sans-serif;

    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }

  &__btn-wrapper {
    display: flex;
    gap: 1.5rem;
    width: 100%;
  }

  &__btn {
    height: 3rem;
    border: 1px solid var(--color-text);
    border-radius: 4px;
    max-width: 200px;
    background-color: var(--color-background);
    color: var(--color-text);
    text-transform: uppercase;
    cursor: pointer;
    transition: all .2s linear;
    padding: 10px 2rem;
    font-size: 1rem;
    font-family: 'PressStart2P', Arial, Helvetica, sans-serif;

    &:active {
      transform: translate(.5rem, .5rem);
    }

    &:hover {
      background-color: var(--color-text);
      border: 1px solid var(--color-background);
      color: var(--color-background);
    }

    @media screen and (max-width: 768px) {
      font-size: .7rem;
      height: 2rem;
      max-width: 100px;
    }
  }

  &__palette-btn {
    height: 3rem;
    background-color: transparent;
    border: none;
    width: 3rem;
    cursor: pointer;

    & svg {
      fill: var(--color-text);
      transition: all .5s linear;
    }

    &:hover svg {
      fill: var(--color-violet);
    }

    @media screen and (max-width: 768px) {
      height: 2.4rem;
      width: 2.4rem;
    }
  }
}
</style>