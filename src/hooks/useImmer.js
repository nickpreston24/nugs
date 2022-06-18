// import produce from 'immer'
// import { shallowRef } from 'vue'

import { noop } from "@vueuse/core";

export function useImmer(baseState) {
  noop();
  // const state = shallowRef(baseState)

  // const setState = (updater) => {
  //     state.value = produce(state.value, updater)
  // }
  // return [
  //     state,
  //     setState
  // ]
}

export default useImmer;
