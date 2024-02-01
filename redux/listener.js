import store from './store';
// import * as SecureStore from 'expo-secure-store';

// let currentAuth;

async function listener() {
  let previousAuth = currentAuth;

  // const token = await SecureStore.getItemAsync(TOKEN_KEY)

  currentAuth = store.getState().auth;

  if (currentAuth !== previousAuth) {
    localStorage.setItem('auth', JSON.stringify(currentAuth));
  }
}

function listen() {
  store.subscribe(listener);
}

export { listen };
