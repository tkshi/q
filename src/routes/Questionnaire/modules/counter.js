// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC'
export const QUESTIONNAIRE_SET_ALL = 'QUESTIONNAIRE_SET_ALL'

// ------------------------------------
// Actions
// ------------------------------------
export function increment(value = 1) {
  return {type: COUNTER_INCREMENT, payload: value}
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({type: COUNTER_DOUBLE_ASYNC, payload: getState().counter})
        resolve()
      }, 200)
    })
  }
}

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
  increment,
  fetchQuestionnaires,
  doubleAsync
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]: (state, action) => state + action.payload,
  [QUESTIONNAIRE_SET_ALL]: (state, action) => action.payload.length,
  [COUNTER_DOUBLE_ASYNC]: (state, action) => state * 2
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function counterReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler
    ? handler(state, action)
    : state
}
