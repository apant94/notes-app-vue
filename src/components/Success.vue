<script lang="ts">
export default {
  name: 'SuccessItem',
}
</script>

<template>
  <div v-if="this.$store.state.success" class="success">
    <p class="success__text">Успех!</p>
  </div>
</template>

<style lang="scss" scoped>
.success {
  position: absolute;
  bottom: 3rem;
  right: 1.5rem;
  width: 5rem;
  background-color: var(--color-background);
  border: 1px solid var(--color-green);
  width: fit-content;
  height: 3rem;
  padding: .5rem 1rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeLeft, fadeRight;
  animation-duration: .3s, .3s;
  animation-delay: 0s, 2.7s;
  z-index: 50;

  &__text {
    font-family: 'PressStart2P', Arial, Helvetica, sans-serif;
    font-size: 1rem;
    color: var(--color-text);
    margin: 0;
  }
}
</style>

