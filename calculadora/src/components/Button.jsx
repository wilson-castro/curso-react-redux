/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './Button.css'

export default props => {

  let classesArray = 'button '
  const filterCssClasses = (propsKey) =>
    propsKey !== 'click' && propsKey !== 'label'

  classesArray += (Object.keys(props).filter(filterCssClasses) + '')

  return (
    <button
      onClick={event => props.click && props.click(props.label)}
      className={classesArray}>
      {props.label}
    </button>
  )
}