<script lang="ts">
import DeletedIcon from './icons/DeletedIcon.vue';
import FavoriteIcon from './icons/FavoriteIcon.vue';

export default {
  name: 'NavigationMenu',
  components: { FavoriteIcon, DeletedIcon }
}
</script>

<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li>
        <RouterLink class="nafigation__link" to="#">
          <FavoriteIcon />
        </RouterLink>
      </li>
      <li>
        <RouterLink class="nafigation__link" to="#">
          <DeletedIcon />
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.navigation {
  width: 10%;  

  &__list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 0;

    @media screen and (max-width: 480px) {
      flex-direction: row;
    }
  }

  & li {
    display: flex;
    list-style-type: none;
  }

  &__link {
    cursor: pointer;
    width: 15px;
    height: 15px;
    & svg {
      height: 15px;
      width: 15px;
    }
  }
}
</style>