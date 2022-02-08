import { ref, toRefs, unref, computed } from 'vue'

export const JsonFormSetup = (props, context) => {
    // const { config, modelValue, disableCache } = toRefs(props)
    const { config, disableCache } = toRefs(props)
    const { modelValue } = unref(props)
    const { settingItemsConfig } = unref(config)
    let values = ref({})
    let cached = ref(false)
    let resultCache = ref([])
    let currentCategory = ref(undefined)
    let keyword = ref('')
    let category2first = ref({})
    console.log(modelValue)

    let lastCategory2 = undefined
    let lastCategory2name = ''
    for (let s of settingItemsConfig) {
      // Show additional captions only on the first category2 input if the same category2 is consecutive
      if (lastCategory2 && s.category2 && lastCategory2 == s.category2) {
        category2first.value[lastCategory2name] = lastCategory2
      }
      lastCategory2 = s.category2
      lastCategory2name = s.name

      if (modelValue[s.name] === undefined) {
        context.emit('updateValue', {key:s.name, value:s.default})
        values.value[s.name] = s.default
      } else {
        values.value[s.name] = modelValue[s.name]
      }
    }
    // methods:
    let search = () => {
      cached = false
    }
    let updateCache = (newer) => {
      cached = true
      return resultCache = newer
    }

    // computed:
    const enumSettings = computed(() => {
      // A simple cache mechanism is provided for narrowing down the list.
      // This is because enumSettings take a long time to process when the number of this.settings exceeds 1000, 
      // and the response when the keyword is rewritten with the keyboard deteriorates. 
      // When the keyword is changed, the cache before the change is returned. 
      // Recalculate when the search button is pressed.
      if (!disableCache && cached.value) {
        return resultCache
      }
      if (!keyword.value && !currentCategory.value) {
        return updateCache(settingItemsConfig)
      }
      let sections = settingItemsConfig.filter(function(s){
        return (!currentCategory.value || currentCategory.value == s.category) && s.name.indexOf(keyword.value) >= 0
      })
      return updateCache(sections)
    })

    return {
      keyword,
      currentCategory,
      cached,
      resultCache,
      category2first,
      values,
      // methods
      search,
      updateCache,
      // computed
      enumSettings
    }
}