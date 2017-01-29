const objectAssign = require('object-assign');
// ------------------------------------
// Constants
// ------------------------------------
export const QUESTIONNAIRE_SET_ALL = 'QUESTIONNAIRE_SET_ALL'
export const QUESTIONNAIRE_SET_CHOICE = 'QUESTIONNAIRE_SET_CHOICE'

// ------------------------------------
// Actions
// ------------------------------------

export const fetchQuestionnaires = () => {
  return (dispatch, getState) => {
    return fetch('https://tk-minato.firebaseio.com/questionnaire.json').then(function(response) {
      return response.json();
    }).then(function(questionnaires) {
      dispatch({type: QUESTIONNAIRE_SET_ALL, payload: questionnaires})
      dispatch(fetchEachChoice(questionnaires))
    });
  }
}

const fetchEachChoice = (questionnaires) => {
  return (dispatch, getState) => {
    Object.keys(questionnaires).forEach((key, i) => {
      Object.keys(questionnaires[key].choice).forEach((choiceId) => {
        fetch(`https://tk-minato.firebaseio.com/choice/${choiceId}.json`).then(function(response) {
          return response.json();
        }).then(function(choice) {
          dispatch({
            type: QUESTIONNAIRE_SET_CHOICE,
            payload: {
              questionnaireId: key,
              choiceId,
              choice
            }
          })
        });
      })
    })
  }
}

export const actions = {
  fetchQuestionnaires
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [QUESTIONNAIRE_SET_ALL]: (state, action) => action.payload,
  [QUESTIONNAIRE_SET_CHOICE]: (state, action) => {
    const {questionnaireId, choiceId, choice} = action.payload
    state[questionnaireId].choice[choiceId] = choice
    return objectAssign({}, state)
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
export default function counterReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler
    ? handler(state, action)
    : state
}
