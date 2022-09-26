export default {
  name: 'TextInput',
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    placeholder: {
      type: String,
      default: 'Default Placeholder.',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
}
