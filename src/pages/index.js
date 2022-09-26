/* eslint-disable key-spacing */
/* eslint-disable no-multi-spaces */
import Button from '@/components/Button/Button.vue'
import Dialog from '@/components/Dialog/Dialog.vue'
import TextInput from '@/components/TextInput/TextInput.vue'
import NumberList from '@/components/NumberList/NumberList.vue'

export default {
  components: {
    Button,
    Dialog,
    TextInput,
    NumberList,
  },
  data() {
    return {
      done: false,
      isPlay: false,
      items: [],
      hitItems: [],
      inputNumber: null,
      matchNumber: null,
      matchIndex: 0,
      slotButton: true,
      selectTimer: false,
      checkState: true,
    }
  },
  methods: {
    setupHandler() {
      if (!this.inputNumber && !this.isPlay) return
      this.isPlay = true
      this.setItems()
    },
    /**
     * 抽選番号の配列を作成するメソッド
     * @param {void}
     * @return {void}
     */
    setItems() {
      for (let i = 0; i < this.inputNumber; i++) {
        this.items.push(i + 1)
      }
    },
    /**
     * ビンゴをリセットするメソッド
     * @return {void}
     */
    reset() {
      this.done = false
      this.isPlay = false
      this.items = []
      this.hitItems = []
      this.inputNumber = null
      this.matchNumber = null
      this.matchIndex = 0
      this.slotButton = true
      this.selectTimer = false
    },
    /**
     * ランダムに番号を算出（被ってないかもチェック）するメソッド
     * @return {void}
     */
    randomChoice() {
      this.matchNumber = Math.floor(Math.random() * this.items.length) + 1
      this.matchIndex = this.items.indexOf(this.matchNumber)
      if (this.hitItems.includes(this.matchIndex)) this.randomChoice()
    },
    /**
     * 抽選を開始するメソッド
     * @return {boolean} true
     */
    spinSlot() {
      if (!this.items.length) return
      if (this.items.length <= this.hitItems.length + 1) {
        this.done = true
        return
      }
      this.slotButton = false
      this.randomChoice()
      this.selectTimer = setTimeout(this.spinSlot, 100)
    },
    /**
     * 抽選を確定するメソッド
     * @return {void}
     */
    stopSlot() {
      this.slotButton = true
      clearTimeout(this.selectTimer)
      this.hitItems.push(this.matchIndex)
    },
  },
}
