import { ref, onMounted, computed, toRefs } from 'vue'
import { countEmpty, groupBy, isArray } from '../helpers'
import { getRecords, create } from './airtable'

export function useParts() {
  const parts = ref([])

  const loading = ref(false)
  const error = ref('')

  const limit = ref(100)

  onMounted(async () => {
    loading.value = true

    parts.value = await getRecords('Parts', limit.value)

    loading.value = false
  })

  const createPart = async (props = {}) => {
    const result = await create('Parts', props)
    devmode && console.log('result', result)
    return result
  }

  return {
    parts,
    loading,
    error,

    // api
    limit,
    createPart
  }
}

export default useParts
