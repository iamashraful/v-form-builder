<script>
import AbstractField from '@/components/fields/AbstractField'

export default {
  name: 'PositiveNumberInputField',
  extends: AbstractField,
  methods: {
    isValid () {
      const _data = this.$super(AbstractField).isValid()
      if (_data[_data['field'].name] < 0) {
        this.errorText = 'This should be positive number.'
        _data['status'] = false
      }
      return _data
    }
  }
}
</script>
