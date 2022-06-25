<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <NuxtLink to="/"><Logo /></NuxtLink>
        <nav class="header__nav">
          <div class="header__nav-item">
            <NuxtLink to="/catalog" class="header__nav-link">
              Каталог
            </NuxtLink>
          </div>
          <div class="header__nav-item">
            <NuxtLink to="/user" class="header__nav-link">
              Пользователь
            </NuxtLink>
          </div>
        </nav>

        <div class="header__login">
          <h2>Войти</h2>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NuxtHeader',
}
</script>

<style lang="scss" scoped>
.header {
  &__inner {
    display: flex;
    align-items: stretch;
  }

  &__nav {
    display: flex;
    margin-left: 40px;
    margin-top: 0.4rem;
  }
  &__nav-item {
    display: flex;
    align-items: center;
    justify-content: center;
    color: $font;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover .header__nav-link {
      color: $font-light;
    }
  }
  &__nav-link {
    display: block;
    height: 80%;
    padding: 15px;
    font-size: 1.2rem;
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__login {
    margin-left: auto;
  }
}
</style>