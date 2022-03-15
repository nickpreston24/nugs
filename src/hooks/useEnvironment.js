import { devmode, prodmode } from '../helpers'
const modes = {
  DEV: 'dev',
  PROD: 'prod'
}

const next = function (db, key) {
  for (var i = 0; i < db.length; i++) {
    if (db[i].key === key) {
      return db[i + 1] && db[i + 1].value
    }
  }
}

export const environment = ref()

export const setEnviroment = (mode = 'dev' | 'prod') => {
  environment.value = mode
}

export const toggleEnvironment = computed(() => next(modes, environment.value))
