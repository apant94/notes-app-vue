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
      <div class="form__close" @click="hideForm">Х</div>
      <h2>Создать заметочку</h2>
      <input type="text" v-model="title">
      <textarea name="text" v-memo="text"></textarea>
      <button type="submit">Создать</button>
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
  transition: all .6s linear;
}

.form {
  display: flex;
  flex-direction: column;
  width: 282px;
  min-height: 322px;
  background: #FFFFFF;
  border-radius: 10px;
  z-index: 5;
}
</style>