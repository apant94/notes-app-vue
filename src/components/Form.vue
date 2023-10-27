<script lang="ts">
export default {
  name: 'FormWithSubmit',
  data() {
    return {
      title: '',
      text: '',
    }
  },
  methods: {
    hideForm() {
      this.$store.commit("visibleForm", false);
    }
  },
}
</script>

<template>
  <div class="layout" v-if="this.$store.state.visibleForm">
    <form class="form">
      <div class="form__close" @click="hideForm">
        <svg class="form__close-fill" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 50 50">
          <path
            d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z">
          </path>
        </svg>
      </div>
      <h2 class="form__title">Создать заметочку</h2>
      <input type="text" class="form__input-title" v-model="title">
      <textarea name="text" class="form__input-text" v-model="text"></textarea>
      <button type="submit" class="form__btn">Оки</button>
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
  z-index: 4;
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

    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
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
    padding: 0;
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
}
</style>