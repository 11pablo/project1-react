import { createStore, combineReducers  } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utils/strContains';

import listsReducer from './listsRedux';
import searchStringReducer from './searchStringRedux';
import columnsReducer from './columnsRedux';
import cardsReducer from './cardsRedux';

export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const getAllColumns = ({ columns }) => columns;

export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });

export const addCard = payload => ({ type: 'ADD_CARD', payload});

export const addList = payload => ({ type: 'ADD_LIST', payload });

export const getSearchString = payload => ({type: 'UPDATE_SEARCHSTRING', payload});

export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);

export const getAllLists = state => state.lists;

export const getColumnsByList = ({ columns }, listId ) => columns.filter(column => column.listId === listId);

export const getToggleCardFavorite = payload => ({type: 'TOGGLE_CARD_FAVORITE', payload});

export const getFavoriteCards = ({ cards }) => cards.filter(card => card.isFavorite === true);


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