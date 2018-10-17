<template>
    <div class="text-input">
        <label>{{ field.title }}</label>
        <input type="text" v-model="value" />
        <span v-if="errorText !== ''" class="error">{{ errorText }}</span>
    </div>
</template>

<script>
export default {
  name: 'TextInputForm',
  props: [ 'field' ],
  data () {
    return {
      value: '',
      errorText: ''
    }
  },
  methods: {
    isValid (value, raiseExp = true) {
      let _status = false
      if (!raiseExp) {
        _status = false
      } else {
        if (this.field.required && value === '') {
          this.errorText = 'This field is required.'
          _status = false
        } else {
          this.errorText = ''
          _status = true
        }
      }
      this.$emit('checkValidation', _status)
    },
    validate () {
      this.isValid(this.value)
    }
  },
  watch: {
    value (newVal) {
      this.validate()
    }
  }
}
</script>

<style lang="scss" scoped>
    .text-input {
        input {
            width: 100%
        }
        .error {
            color: red;
        }
    }
</style>
