<template>
  <Setting
    msg="The setting of the application" 
    :config="config" 
    v-model="values"
    :disableCache="true" 
    @updateValue="values[$event.key]=$event.value;updateIt($event)"
    />
</template>

<script>
import Setting from './components/Setting.vue'
import RadioType from './components/InputTypes/RadioType.vue'
import SelectType from './components/InputTypes/SelectType.vue'
import TextType from './components/InputTypes/TextType.vue'

import { SettingConfig }  from './options';
import { ref, computed } from 'vue'

export default {
  name: 'App',
  components: {
    Setting,
  },
  setup() {
    Setting.components = {
      RadioType,
      SelectType,
      TextType
    }
    // Gives the initial value of The form.
    // It could be given (e.g. script tag) when rendering the HTML, 
    // or it could be obtained from some Web API.
    let values = ref({
      drink: '1',
      snack: '0',
      nickname: 'admin2'
    })
    const updateIt = () => {
      // console.log(event)
      // console.log(values)
    }
    const currentValues = computed(() => {
      return JSON.stringify(values)
    })
    return {
      config: SettingConfig,
      values,
      updateIt,
      currentValues
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-left: 30px;
}
</style>
