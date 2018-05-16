function saveState (state) {
  window.chrome.storage.local.set({ state: JSON.stringify(state) })
}

// todos unmarked count
function setBadge (todos) {
  if (window.chrome.browserAction) {
    const count = todos.filter(todo => !todo.marked).length
    window.chrome.browserAction.setBadgeText({ text: count > 0 ? count.toString() : '' })
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
