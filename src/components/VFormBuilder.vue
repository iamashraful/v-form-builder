<template>
    <div class="form-builder">
        <text-input-field :title="config.title"/>
    </div>
</template>


<script>
import TextInputField from './fields/TextInputField'

export default {
    name: 'VFormBuilder',
    props: ['config'],
    components: {TextInputField},
    data() {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
    .form-builder {
        width: 100%;
    }
</style>

