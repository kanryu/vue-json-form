<template>
  <!--
    SettingRadio: 
      A collection of radio buttons with customizable choices.
      options.choices are defined in options.js.
  -->
  <template v-for="c in options.choices"
                   :key="c">
    <label :for="'id-'+name+'-'+c.idsub" class="jsonform-radio-type-label">
      <input
        type="radio"
        class="jsonform-radio-type"
        :id="'id-'+name+'-'+c.idsub"
        :name="name"
        :value="c.value"
        :checked="c.value === modelValue"
        @change="$emit('input', $event.target.value)"/>{{c.caption}}
    </label>
  </template>
</template>

<script>
export default {
  name: 'RadioType',
  props: {
    name: String, // It is a name attribute on the HTML Form tag, and the pair of value attributes of the radio button selected by the user is the Form input value.
    modelValue: String,
    options: Object // Data definition of the component defined in options.js. options. Choices is a definition of options.
  },
  emits: ['input']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
