<template>
  <!--
    SettingRadio: 
      A collection of radio buttons with customizable choices.
      Choices are defined in options.js.
  -->
    <input
      type="text"
      class="jsonform-text-type"
      :id="'id-'+name+'-text'"
      :name="name"
      :value="modelValue"
      @input="$emit('input', $event.target.value)"
      v-bind="options.attributes"
      />
    <label :for="'id-'+name+'-text'">{{options.description}}</label>
</template>

<script>
export default {
  name: 'TextType',
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
