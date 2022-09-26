<template>
  <header class="header">
    <div class="header__logo">
      <router-link to="/">Vue.js de BINGO</router-link>
    </div>
    <slot />
  </header>
</template>

<script lang="js" src="@/components/Header/Header.js" />
<style lang="scss" src="@/components/Header/Header.scss" scoped />
