import React from 'react'
import Questionnaire from './Questionnaire'

const mapToquestionnairesList = (questionnaires)=>{
  return Object.keys(questionnaires).map((key,i)=>{
    return <Questionnaire key={i} {...questionnaires[key]} />
  })
}

export const QuestionnaireList = (props) => (
  <div style={{
    margin: '0 auto'
  }}>
    <ul>
      {mapToquestionnairesList(props.questionnaire)}
    </ul>
  </div>
)

QuestionnaireList.propTypes = {
  questionnaire: React.PropTypes.object.isRequired
}

export default QuestionnaireList
