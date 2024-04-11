import { combineReducers } from 'redux';
import authReducer from '../reducers/authReducer'; // Importa il reducer dell'autenticazione

const rootReducer = combineReducers({
  auth: authReducer, // Aggiungi il reducer dell'autenticazione al rootReducer
  // Altri reducers...
});

export default rootReducer;