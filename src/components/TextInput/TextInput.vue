<template>
  <input
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="disabled"
    type="text"
    class="text-input"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script lang="js" src="@/components/TextInput/TextInput.js" />
<style lang="scss" src="@/components/TextInput/TextInput.scss" scoped />
