import { proxy } from 'valtio'

const state = proxy({
  isLoggedIn: false,
})

export { state }
