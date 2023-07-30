import React, { useEffect, useState } from 'react'
import classNames from 'classnames'

import './buttons.scss'
import { IButtonCollaps, IButtonNav } from '../../interfaces/intetfaces'
import { NavLink } from 'react-router-dom'

export const ButtonCollaps: React.FC<IButtonCollaps> = (props) => {
  const [toggler, setToggler] = useState(true)

  useEffect(() => {
    setToggler(props.toggler)
  }, [props.toggler])

  return (
    <button
      onClick={props.onClick}
      type="button"
      className={classNames('button-collaps', {
        'button-collaps--show': toggler,
      })}
    ></button>
  )
}

export const ButtonNav: React.FC<IButtonNav> = (props) => {
  return (
    <button onClick={props.onClick} type="button" className="button-nav">
      <NavLink className="nav-bar__link" to={props.route}>
        {props.buttonName}
      </NavLink>
    </button>
  )
}
