<script lang="ts">
export default {
  name: 'PaletteItem',
  data() {
    return {
      colorsGradient: [
        'greenery',
        'sublime-vivid',
        'dimigo',
        'reef',
        'light-purple',
        'witching-hour',
        'titanium'
      ],
    }
  },
  emits: ["setTheme"],
  methods: {
    changeTheme(theme: string) {
      this.$store.commit("setNoteTheme", theme);
      this.$emit("setTheme", theme);
    },
    closePalette() {
      this.$store.commit("visiblePalette", false);
    },
    activeTheme(theme: string) {
      let activeThemeName = theme;
      return this.$store.state.noteTheme === theme ? `${activeThemeName} active-theme` : activeThemeName;
    },
  },
  mounted() {
    this.$store.commit("setNoteTheme", '');
  },
}
</script>

<template>
  <div v-if="this.$store.state.visiblePalette" class="palette">
    <div class="palette__container">
      <div class="palette__colours">
        <p>выбери details и shapes</p>
        <div class="theme-buttons">
          <button v-for="gradient in colorsGradient" :key="gradient" :class="activeTheme(gradient)"
            @click.prevent="changeTheme(gradient)">
          </button>
        </div>
      </div>
      <div class="palette__close" @click="closePalette">
        <svg class="palette__close-fill" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 50 50">
          <path
            d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z">
          </path>
        </svg>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.palette {
  position: absolute;
  bottom: 5rem;
  right: 1rem;
  z-index: 10;

  @media screen and (max-width: 768px) {
    bottom: 4rem;
    right: 5rem;
  }

  @media screen and (max-width: 425px) {
    bottom: 4rem;
    right: .2rem;
  }

  &__container {
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: 10px;

    @media screen and (max-width: 768px) {
      padding: .8rem;
    }

    & button {
      height: 2rem;
      width: 2rem;
      border-radius: 100%;
      position: relative;
      cursor: pointer;
      border: none;

      @media screen and (max-width: 768px) {
        width: 1.5rem;
        height: 1.5rem;
      }

      @media screen and (max-width: 425px) {
        width: 1.2rem;
        height: 1.2rem;
      }

      &::before {
        content: "";
        height: 100%;
        width: 100%;
        border: 2px solid white;
        border-radius: 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(1.2);
        opacity: 0;
      }
    }

    .active-theme::before {
      opacity: 1;
    }
  }

  &__colours {
    justify-content: space-between;
    flex-direction: column;


    &,
    .theme-buttons {
      display: flex;
      align-items: center;
      gap: 1rem;

      @media screen and (max-width: 768px) {
        gap: .8rem;
      }

      @media screen and (max-width: 425px) {
        gap: .6rem;
      }
    }

    .theme-buttons {
      justify-content: flex-end;
    }

    p {
      color: #fff;
      font-size: 1.2rem;

      @media screen and (max-width: 768px) {
        font-size: 1rem;
      }

      @media screen and (max-width: 425px) {
        font-size: .8rem;
      }
    }
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

    @media screen and (max-width: 425px) {
      top: .5rem;
      right: .5rem;
      width: 1rem;
      height: 1rem;
      transform: translateY(-40%);
    }
  }

  &__close-fill {
    fill: var(--color-text);
    height: 100%;
    width: 100%;
  }
}
</style>