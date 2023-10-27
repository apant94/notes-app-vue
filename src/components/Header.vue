<script lang="ts">
export default {
  name: 'HeaderItem',
  methods: {
    showForm() {
      this.$store.commit("noteIsNew", true);
      this.$store.commit("visibleForm", true);
    }
  },
}
</script>

<template>
  <header class="header">
    <RouterLink class="header__link" to="/">
      <img src="../assets/logo.svg" class="header__icon" />
      <h1 class="header__title">Заметочки</h1>
    </RouterLink>
    <button class="header__btn" @click="showForm">
      <span><svg viewBox="0 0 512 512">
          <path
            d="M480 224H288V32c0-17.673-14.327-32-32-32s-32 14.327-32 32v192H32c-17.673 0-32 14.327-32 32s14.327 32 32 32h192v192c0 17.673 14.327 32 32 32s32-14.327 32-32V288h192c17.673 0 32-14.327 32-32s-14.327-32-32-32z">
          </path>
        </svg>Создать</span>
      <span></span>
      <span></span>
    </button>
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;

  &__link {
    display: flex;
    gap: 1rem;
    align-items: center;
    text-decoration: none;
    color: var(--color-text);
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      opacity: .7;
    }
  }

  &__icon {
    width: 60px;
    height: 60px;

    @media screen and (max-width: 768px) {
      width: 32px;
      height: 32px;
    }

    @media screen and (max-width: 480px) {
      width: 50px;
      height: 50px;
    }
  }

  &__title {
    text-transform: uppercase;
    font-family: 'PressStart2P', Arial, Helvetica, sans-serif;
    font-size: 2rem;

    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 0;
    }
  }

  &__btn {
    position: relative;
    border: none;
    cursor: pointer;
    line-height: 0;
    padding: 0;

    &:hover span:first-of-type {
      background-color: var(--color-heading);
      color: var(--color-background);

      & svg {
        fill: var(--color-background);
      }
    }

    &:active span:first-of-type {
      transform: translate(1.2rem, 1.2rem);
    }

    & span {
      color: var(--color-text);
      display: inline-block;
      background-color: var(--color-background);
      border: 1px solid var(--color-text);
      position: absolute;
      width: 12rem;
      height: 100%;
      transition: all .2s;

      @media screen and (max-width: 768px) {
        width: 8rem;
        height: 2.5rem;
      }
    }

    & span:first-of-type {
      font-size: 1.4rem;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      gap: 0.5rem;
      justify-content: center;
      align-items: center;
      right: 2rem;
      top: 0;
      z-index: 3;

      @media screen and (max-width: 768px) {
        font-size: 1rem;
        right: 1rem;
        top: 0rem
      }

      & svg {
        fill: var(--color-text);
        transition: all .2s;
        height: 1.2rem;

        @media screen and (max-width: 768px) {
          height: .8rem;
        }
      }
    }

    & span:nth-of-type(2n) {
      right: 1.5rem;
      top: .5rem;
      z-index: 2;

      @media screen and (max-width: 768px) {
        right: 0.5rem;
        top: 0.5rem;
      }
    }

    & span:last-of-type {
      right: 1rem;
      top: 1rem;
      z-index: 1;

      @media screen and (max-width: 768px) {
        right: 0;
        top: 1rem;
      }
    }
  }
}
</style>