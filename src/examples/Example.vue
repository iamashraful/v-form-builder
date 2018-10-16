<template>
    <div class="example">
        <h2 class="title">Example 1</h2>
        <v-form-builder :config="config"/>
    </div>
</template>

<script>
import VFormBuilder from '../components/VFormBuilder'

export default {
  name: 'Example',
  components: {VFormBuilder},
  data() {
      return {
          config: {
              title: 'A Test Title'
          }
      }
  }
}
</script>

<style scoped lang="scss">
    .example {
        .title {
            text-align: center;
        }
    }
</style>
