<template>
    <div class="form-builder">
        <form @submit.prevent="handleSubmit">
            <div v-for="(each, _i) in config.props" :key="_i">
                <h4 v-if="each.group !== undefined" class="group-title">{{ each.group }}</h4>
                <div class="field-item" v-for="(item, index) in each.fields" :key="index">
                    <text-input-field
                        v-if="item.type === fieldTypes.text"
                        :field="item" @validate="checkValidation">
                    </text-input-field>
                </div>
            </div>
            <button class="submit-btn" type="submit">{{ submitBtnText | setDefault('Submit') }}</button>
        </form>
    </div>
</template>

<script>
import './fields'
import fieldTypes from '@/mappings/field-types'

export default {
  name: 'VFormBuilder',
  props: ['config', 'submitBtnText'],
  data () {
    return {
      fieldTypes: fieldTypes,
      errors: false
    }
  },
  methods: {
    handleSubmit () {
      this.runValidation().then(() => {
        console.log('submitted')
      }).catch((err) => {
        console.log(err)
      })
    },
    runValidation () {
      return new Promise((resolve, reject) => {
        if (!this.errors) {
          resolve()
        } else {
          reject(this.errors)
        }
      })
    },
    checkValidation (status) {
      console.log(status)
      this.errors = !status
    }
  },
  filters: {
    setDefault (value, arg) {
      if (value === '' || value === undefined) {
        return arg
      }
      return value
    }
  }
}
</script>

<style lang="scss" scoped>
    .form-builder {
        width: 100%;
        .group-title {
            margin-bottom: 5px;
            margin-top: 1.5rem;
            border-bottom: 1px solid #1f1d1d
        }
        .field-item {
            padding-top: 8px
        }
        .submit-btn {
            margin-top: 1.5rem;
            padding: 5px 20px;
        }
    }
</style>
