<template>
  <!--
    SettingRadio: 
      A collection of radio buttons with customizable choices.
      Choices are defined in options.js.
  -->
  <select
    class="jsonform-select-type"
    :name="name"
    :id="'id-'+name+'-select'"
    @change="$emit('input', $event.target.value)"
    >
    <template v-for="c in options.choices" :key="c">
      <option
       :value="c.value"
       :selected="c.value === modelValue"
      >{{c.caption}}</option>
    </template>
  </select>
  <label :for="'id-'+name+'-select'">{{options.description}}</label>
</template>

<script>
export default {
  name: 'SelectType',
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
