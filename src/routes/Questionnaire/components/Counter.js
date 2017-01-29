import React from 'react'
import QuestionnaireList from './QuestionnaireList'

export const Counter = (props) => (
  <div style={{ margin: '0 auto' }} >
    <QuestionnaireList {...props}/>
    <button className='btn btn-default' onClick={props.fetchQuestionnaires}>
      fetchQuestionnaires (Async)
    </button>
  </div>
)

Counter.propTypes = {
  questionnaire     : React.PropTypes.array.isRequired,
  fetchQuestionnaires : React.PropTypes.func.isRequired,
}

export default Counter
