<template>
    <div class="form-builder">
        <form @submit.prevent="handleSubmit">
            <div v-for="(each, _i) in config.props" :key="_i">
                <h4 v-if="each.group !== undefined" class="group-title">{{ each.group }}</h4>
                <div class="field-item" v-for="(item, index) in each.fields" :key="index">
                    <text-input-field
                        :submitted="submitted"
                        :field="item" @validate="checkValidation">
                    </text-input-field>
                </div>
            </div>
            <button 
              class="submit-btn" 
              type="submit">{{ submitBtnText | setDefault('Submit') }}
            </button>
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
      errors: false,
      formData: {},
      submitted: false
    }
  },
  methods: {
    handleSubmit () {
      this.submitted = true
      this.runValidation().then(() => {
        console.log('submitted')
      }).catch((err) => {
        console.log(err)
      })
    },
    runValidation () {
      return new Promise((resolve, reject) => {
        let _error = false
        let errorItem = undefined
        Object.values(this.formData).map((item) => {
          if (!(item.status)) {
            _error = true
            errorItem = item
          }
        })
        if (_error) {
          reject(errorItem)
        }
        else {
          resolve(this.formData)
        }
      })
    },
    checkValidation (validatedData) {
      this.formData[validatedData['field']['name']] = validatedData
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
