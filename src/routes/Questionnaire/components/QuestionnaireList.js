import React from 'react'
import Modal from './Modal'

const mapToquestionnairesList = (questionnaires)=>{
  console.log(questionnaires)
  return questionnaires.map((questionnaire,i)=>{
    return <li key={i}>{questionnaire.title}</li>
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
  questionnaire: React.PropTypes.array.isRequired
}

export default QuestionnaireList
