import http from 'axios';
import paths from './paths';

function isLoggedIn() {
  return http.get(paths.LOGIN_CHECK).then(() => {
    return true;
  }).catch((error) => {
    if (401 === error.response.status) {
      return Promise.resolve(false);
    } else {
      throw new Error('Unknown error');
    }
  });
}

module.exports = {
  isLoggedIn
};
