export default {
  name: 'Checkbox',
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    internalCheckbox: {
      get() {
        return this.checked
      },
      set(val) {
        this.$emit('input', val)
      },
    },
    isChecked() {
      return this.checked ? 'is-checked' : ''
    },
  },
}
