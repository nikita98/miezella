<template>
  <div class="catalog">
    <h1>123</h1>
    <CatalogItem />
    <CatalogItem />
    <CatalogItem />
    <CatalogItem />
    <CatalogItem />
    <CatalogItem />
    <CatalogItem />
    <CatalogItem />
    <CatalogItem />
    <CatalogItem />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      animeList: [],
    }
  },
  mounted() {
    this.animeList = this.fetchAnime()
    console.log(this.animeList)
  },
  methods: {
    ...mapActions({ fetchAnime: 'anime/fetchAnime' }),
  },
}
</script>

<style>
</style>