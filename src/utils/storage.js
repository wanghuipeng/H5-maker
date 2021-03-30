export default {
    getSession(name) {
        window.sessionStorage.getItem(name)
    },
    setSession(name, value) {
        window.sessionStorage.setItem(name, value)
    },
    removeSessionItem(key) {
        window.sessionStorage.removeItem(key)
    },
    clearSessionAll() {
        window.sessionStorage.clear()
    },
    getLocation(name) {
        window.localStorage.getItem(name)
    },
    setLocation(name, value) {
        window.localStorage.setItem(name, value)
    },
    removeLocalItem(key) {
        window.localStorage.removeItem(key)
    },
    clearLocalAll() {
        window.localStorage.clear()
    }
}