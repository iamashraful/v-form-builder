<script>
import AbstractField from '@/components/fields/AbstractField'

export default {
  name: 'PositiveNumberInputField',
  extends: AbstractField,
  methods: {
    isValid () {
      const _data = this.$super(AbstractField).isValid()
      let _val = _data[_data['field'].name]
      if (_val === '') return _data
      let __val = parseInt(_val)
      if (isNaN(__val)) {
        this.errorText = 'Invalid number format.'
        _data['status'] = false
      }
      if (_val < 0) {
        this.errorText = 'This should be positive number.'
        _data['status'] = false
      }
      _data[_data['field'].name] = _val
      return _data
    }
  }
}
</script>
