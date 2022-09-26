<template>
  <label class="checkbox__label" :class="isChecked">
    <input v-model="internalCheckbox" type="checkbox" class="checkbox" />
    <slot />
  </label>
</template>

<script lang="js" src="@/components/Checkbox/Checkbox.js" />
<style lang="scss" src="@/components/Checkbox/Checkbox.scss" scoped />
