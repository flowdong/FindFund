let defaultToken = '111'
try {
  if (localStorage.token) {
    defaultToken = localStorage.token
  }
} catch (e) {}

export default {
  token: defaultToken
}
