import { LOCAL_STORAGE_NAME } from "src/config"

class LocalStorage {
  constructor(keyword) {
    this.key = keyword
  }

  get state() {
    return localStorage.getItem(this.key) || "{}"
  }

  get token() {
    return this.getData("token")
  }

  set token(token) {
    this.setData("token", token)
  }

  getData(key) {
    return this.state ? JSON.parse(this.state)?.[key] ?? undefined : undefined
  }

  setData(key, data) {
    localStorage.setItem(
      this.key,
      JSON.stringify({ ...JSON.parse(this.state), [key]: data }),
    )
  }

  clearData(key) {
    const state = JSON.parse(this.state)
    if (Object.prototype.hasOwnProperty.call(state, key)) {
      delete state[key]
      localStorage.setItem(this.key, JSON.stringify(state))
    }
  }

  clear(){
    localStorage.removeItem(this.key)
  }
}

export const appLocalStorage = new LocalStorage(LOCAL_STORAGE_NAME)