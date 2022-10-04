<template>
  <ul class="number-list">
    <li
      v-for="(item, index) in items"
      :key="`number-list-${index}`"
      :class="{ 'is-selected': isSelected(item) }"
      class="number-list__item"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script lang="js" src="@/components/NumberList/NumberList.js" />
<style lang="scss" src="@/components/NumberList/NumberList.scss" scoped />
