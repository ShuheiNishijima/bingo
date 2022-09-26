<template>
  <transition>
    <span v-show="dialog">
      <div class="dialog__bg"></div>
      <dialog class="dialog">
        <slot />
      </dialog>
    </span>
  </transition>
</template>

<script lang="js" src="@/components/Dialog/Dialog.js" />
<style lang="scss" src="@/components/Dialog/Dialog.scss" scoped />
