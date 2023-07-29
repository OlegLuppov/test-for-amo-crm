import React, { useEffect, useState } from 'react'
import classNames from 'classnames'

import './buttons.scss'
import { IButtonCollaps } from '../../interfaces/intetfaces'

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
