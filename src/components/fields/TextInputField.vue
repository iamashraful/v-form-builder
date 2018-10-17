<template>
    <div class="text-input">
        <label>{{ title }}</label>
        <input type="text" v-model="value" />
        <span v-if="errorText !== ''" class="error">{{ errorText }}</span>
    </div>
</template>

<script>
export default {
  name: 'TextInputForm',
  props: [ 'title' ],
  data () {
    return {
      value: '',
      errorText: ''
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
