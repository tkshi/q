// ------------------------------------
// Constants
// ------------------------------------
export const QUESTIONNAIRE_SET_ALL = 'QUESTIONNAIRE_SET_ALL'

// ------------------------------------
// Actions
// ------------------------------------

export const fetchQuestionnaires = () => {
  return (dispatch, getState) => {
    return fetch('https://tk-minato.firebaseio.com/questionnaire.json').then(function(response) {
      return response.json();
    }).then(function(questionnaires) {
      dispatch({type: QUESTIONNAIRE_SET_ALL, payload: questionnaires})
    });
  }
}

export const actions = {
  fetchQuestionnaires
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [QUESTIONNAIRE_SET_ALL]: (state, action) => action.payload
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = []
export default function counterReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler
    ? handler(state, action)
    : state
}
