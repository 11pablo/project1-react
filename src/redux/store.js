import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utils/strContains';

//selectors
//export const getFilteredCards = (state, columnId) => state.cards //ma dostać się do kart centrali które pasują do podanej kolumny i wyszukiwania
  //.filter(card => card.columnId === columnId && card.title.toLowerCase().includes(state.searchString.toLowerCase())); // wyszukiwanie 
/*export const getFilteredCards = ({ cards, searchString }, columnId) => cards // dodanie destrukturyzacji
  .filter(card => card.columnId === columnId && card.title.toLowerCase().includes(searchString.toLowerCase()));*/
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const getAllColumns = ({ columns }) => columns;

export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });

const reducer = (state, action) => {  // (aktualny stan, rodzaj akcji)
    switch(action.type) {  //dodaje nową kolumnę (nowy obiekt)jeśli action ma type o wartości add_column jeśli inny zwruci stan bez zmian
        case 'ADD_COLUMN':
            return { ...state, columns: [...state.columns, { id: shortid(),...action.payload }]};
        case 'ADD_CARD':
            return {...state, cards: [...state.cards, { id: shortid(), ...action.payload}]};
        case 'UPDATE_SEARCHSTRING':
                return { ...state, searchString: action.payload };
      default:
        return state;
    }
  };

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;