// actions/authActions.js

// Definisci il tipo di azione per il login
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

// Azione per il login avvenuto con successo
export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});