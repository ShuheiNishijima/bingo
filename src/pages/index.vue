<template>
  <div class="u-ph-10px">
    <h1 class="index-bingo__title u-mb-20px">Vue.js de BINGO</h1>
    <div class="index-bingo__panel u-mb-20px">
      <span v-if="done">FINISH!!!</span>
      <span v-else>{{ matchNumber }}</span>
    </div>
    <Button v-if="slotButton" class="u-mb-20px" @click="spinSlot">START</Button>
    <Button v-else class="u-mb-20px" @click="stopSlot">STOP</Button>
    <div class="index-numberset__flex u-mb-40px">
      <div class="index-numberset__item">
        <TextInput v-model.number="inputNumber" :disabled="isPlay" placeholder="Please Set." />
      </div>
      <div class="index-numberset__item">
        <Button v-show="!isPlay" @click="setupHandler">SET</Button>
        <Button v-show="isPlay" @click="reset">RESET</Button>
      </div>
    </div>
    <NumberList :items="items" :selected-items="hitItems" />
    <Dialog>
      <template #default>
        <p class="u-mb-20px">半角数字のみを入力してください。</p>
        <Button @click="dialog = false">OK</Button>
      </template>
    </Dialog>
  </div>
</template>

<script lang="js" src="@/pages/index.js" />
<style lang="scss" src="@/pages/index.scss" scoped />
