<template>
  <div class="catalog-page">
    <div class="container">
      <div class="page-title">Аниме</div>
      <div class="page-subtitle">Ну тупа топ</div>
      <Catalog />
    </div>
  </div>
</template>

<script>
import Catalog from '@/components/Sections/Catalog.vue'

export default {
  components: {
    Catalog,
  },
}
</script>

<style>
</style>