<template>
    <div class="example">
        <h2 class="title">Example 1</h2>
        <v-form-builder
                submitBtnText="Save"
                :config="config"
        />
    </div>
</template>

<script>
import VFormBuilder from '../components/VFormBuilder'

export default {
  name: 'Example',
  components: { VFormBuilder },
  data () {
    return {
      config: {
        props: [
          {
            group: 'Basic Information',
            fields: [
              {
                title: 'First Name',
                type: 'text',
                name: 'first_name',
                required: true
              },
              {
                title: 'Last Name',
                type: 'text',
                name: 'last_name'
              },
              {
                title: 'Email',
                type: 'text',
                name: 'email',
                required: true
              }
            ]
          },
          {
            group: 'Location Information',
            fields: [
              {
                title: 'Address',
                type: 'text',
                name: 'address'
              }
            ]
          }

        ]
      }
    }
  }
}
</script>

<style scoped lang="scss">
    .example {
        width: 550px;
        margin: 0 auto;
        .title {
            text-align: center;
        }
    }
</style>
