// https://css-tricks.com/how-to-make-localstorage-reactive-in-vue/
//https://usehooks.com/useLocalStorage/
import { ref } from "vue";

// const [value, setValue] = ref(10)
export function useLocalStorage(key, initialValue) {

  const storage = ref(initialValue)

  /// TODO: Finish and test this!!!
  const setValue = computed({
    get: () => { return storage.value },
    set: (value) => {

      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        if (typeof window !== "undefined") {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
          storage.value = valueToStore
        }
      } catch (error) {
        console.log(`error trying to store ${key} in localstorage :>> `, error)
      }
    }
  })

  return [storage, setValue]
}

export default useLocalStorage;
