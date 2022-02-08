<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    Search by word: <input type="text" v-model="keyword" />
    <button v-if="!disableCache" @click="search">Search</button>
    <ul>
      <li>Search word: {{keyword}}</li>
      <li>Category: {{currentCategory}}</li>
    </ul>
    <div class=".container">
      <div class="row">
        <div class="col-2 categories">
          Search by category
          <div v-for="c in config.categoryConfig"
                   :key="c">
            <div class="row">
              <button @click="this.cached=false;currentCategory=c.name">{{c.caption}}</button>
            </div>
          </div>
        </div>
        <div class="col-10 settings">
          <section v-for="(setting, name) in enumSettings"
                  :key="name">
            <h2 v-if="category2first[setting.name]">{{setting.category2}} - section</h2>
            <h3>{{setting.caption}}</h3>
            <article>{{setting.description}}</article>
            <div>
              <Component
                :is="setting.component"
                :name="setting.name"
                :options="Object.assign(config.componentConfig[setting.options], setting)"
                :modelValue="values[setting.name]"
                @input="values[setting.name]=$event;$emit('updateValue', {key:setting.name, value:$event})"
                />
            </div>
            Current Input value({{setting.name}}): {{values[setting.name]}}
            <hr />
          </section>
        </div>
      </div>
    </div>
  </div>
  color: {{values}}
</template>

<script>
import { JsonFormSetup } from '../form-setup'

export default {
  name: 'Setting',
  emits: ['updateValue'],
  props: {
    msg: String,
    /**
     * Setting items to be displayed on the screen Settings related to the UI.
     * Import 'options.js' on the parent component side and set it as: <Setting :config="__LoadFromOptionsJs" />
     * @type Object
     */
    config: Object,
    modelValue: Object,
    /**
     * Disable caching in the Settings list.
     * Keyword changes are reflected immediately.
     * @type Boolean
     */
    disableCache: Boolean
  },
  setup(props, context) {
    return JsonFormSetup(props, context)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
