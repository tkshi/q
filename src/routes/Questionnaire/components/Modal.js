import React from 'react'

export const Modal = (props) => (
  <div style={{ margin: '0 auto' }} >
    <p>Hello</p>
    <button onClick={props.increment} />
  </div>
)

Modal.propTypes = {
  counter     : React.PropTypes.number.isRequired,
  doubleAsync : React.PropTypes.func.isRequired,
  fetchQuestionnaires : React.PropTypes.func.isRequired,
  increment   : React.PropTypes.func.isRequired
}

export default Modal
