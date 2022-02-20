

export const getSearchString = payload => ({type: 'app/lists/UPDATE_SEARCHSTRING', payload});

const createActionName = actionName => `app/lists/${actionName}`;
const UPDATE_SEARCHSTRING = createActionName('UPDATE_SEARCHSTRING');


const searchStringReducer = (statePart = '', action) => {
    switch(action.type) {
      case UPDATE_SEARCHSTRING:
        return action.payload
      default:
        return statePart;
    }
}
  
export default searchStringReducer;

