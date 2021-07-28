import { proxy } from 'valtio'

const state = proxy({
  name: '',
  email: '',
})

export { state }
