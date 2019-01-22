<template>
    <div class="text-input">
        <label>{{ field.title }}</label>
        <input type="text" v-model="value" />
        <span v-show="displayErrorMgs" v-if="errorText !== ''" class="error">{{ errorText }}</span>
    </div>
</template>

<script>
export default {
  name: 'TextInputForm',
  props: [ 'field', 'submitted' ],
  data () {
    return {
      value: '',
      errorText: '',
      displayErrorMgs: false
    }
  },
  methods: {
    isValid (value, raiseExp = true) {
      let _data = {
        field: this.field,
        [this.field.name]: value,
        status: false
      }
      if (!raiseExp) {
        _data['status'] = false
      } else {
        if (this.field.required && value === '') {
          this.errorText = 'This field is required.'
          _data['status'] = false
        } else {
          this.errorText = ''
          _data['status'] = true
        }
      }
      this.$emit('validate', _data)
    },
    validate () {
      this.isValid(this.value)
    }
  },
  mounted() {
    this.validate()
  },
  watch: {
    value (newVal) {
      this.displayErrorMgs = true
      this.validate()
    },
    submitted (newVal) {
      // This will call only once it'll trigger submit button
      if (newVal) {
        this.displayErrorMgs = true
        this.validate()
      }
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
