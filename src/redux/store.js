import { createStore, combineReducers  } from 'redux';
import initialState from './initialState';



import listsReducer from './listsRedux';
import searchStringReducer from './searchStringRedux';
import columnsReducer from './columnsRedux';
import cardsReducer from './cardsRedux';


  const subreducers = {
    lists: listsReducer,
    columns: columnsReducer,
    cards: cardsReducer,
    searchString: searchStringReducer
  }
  
  const reducer = combineReducers(subreducers);



const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;