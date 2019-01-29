<script>
import AbstractField from '@/components/fields/AbstractField'

export default {
  name: 'NumberInputField',
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
      _data[_data['field'].name] = _val
      return _data
    }
  }
}
</script>
</script>
