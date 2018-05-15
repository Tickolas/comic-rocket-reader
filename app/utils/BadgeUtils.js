import ComicsUtil from '../utils/ComicsUtil'

function getBadgeTextFor (comics) {
  let unreadPagesCount = ComicsUtil.countUnreadPages(comics) || ''
  if (Number.isInteger(unreadPagesCount) && unreadPagesCount > 999) {
    unreadPagesCount = '...'
  }
  return unreadPagesCount
}

function updateBadgeText (comics) {
  window.chrome.browserAction.setBadgeText(
    { text: getBadgeTextFor(comics) }
  )
}

module.exports = {
  updateBadgeText
}
