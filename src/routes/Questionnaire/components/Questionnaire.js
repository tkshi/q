import React from 'react'

const mapToChoiceList = (choices)=>{
  return Object.keys(choices).map((key,i)=>{
    return <li key={i} >{choices[key].content}:{choices[key].vote}</li>
  })
}

export const Questionnaire = (props) => (
  <li>
    {props.title}
    <ul>
      {mapToChoiceList(props.choice)}
    </ul>
  </li>
)

Questionnaire.propTypes = {
  title: React.PropTypes.string.isRequired
}

export default Questionnaire
