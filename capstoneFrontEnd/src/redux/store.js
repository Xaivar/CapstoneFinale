import { createStore } from 'redux';
import rootReducer from './reducers/bigIndex'; // Importa il rootReducer

const store = createStore(rootReducer);

export default store;