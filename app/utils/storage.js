function saveState (state) {
  window.chrome.storage.local.set({ state: JSON.stringify(state) })
}

// todos unmarked count
function setBadge (todos) {
  if (window.chrome.browserAction) {
  }
}

export default function () {
  return next => (reducer, initialState) => {
    const store = next(reducer, initialState)
    store.subscribe(() => {
      const state = store.getState()
      saveState(state)
      setBadge(state.todos)
    })
    return store
  }
}
