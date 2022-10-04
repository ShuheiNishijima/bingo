export default {
  name: 'NumberList',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    selectedItems: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    /**
     * 当選済にクラスを付与する参照プロパティ
     * @param {number} value
     * @return {boolean}
     */
    isSelected() {
      return (value) => this.selectedItems.includes(value)
    },
  },
};
