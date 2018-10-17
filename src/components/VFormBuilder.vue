<template>
    <div class="form-builder">
        <div v-for="(each, _i) in config.props" :key="_i">
            <h4 class="group-title">{{ each.group }}</h4>
            <div class="field-item" v-for="(item, index) in each.fields" :key="index">
                <text-input-field
                    v-if="item.type === fieldTypes.text"
                    :title="item.title"/>
            </div>
        </div>
    </div>
</template>

<script>
import './fields'
import fieldTypes from '@/mappings/field-types'

export default {
  name: 'VFormBuilder',
  props: ['config'],
  data () {
    return {
      fieldTypes: fieldTypes
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
    }
</style>
