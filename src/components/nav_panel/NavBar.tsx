import React, { useState } from 'react'
import classNames from 'classnames'
import './navBar.scss'
import { ButtonCollaps, ButtonNav } from '../buttons/Buttons'

export const NavBar: React.FC = () => {
  const [togglerButtonCollaps, setTogglerButtonCollaps] = useState(false)

  const handlerForButtonNavAndCollaps = () => {
    setTogglerButtonCollaps(!togglerButtonCollaps)
  }

  return (
    <div
      className={classNames('nav-bar__wrapper', {
        'nav-bar__wrapper--hide': !togglerButtonCollaps,
      })}
    >
      <ButtonCollaps toggler={togglerButtonCollaps} onClick={handlerForButtonNavAndCollaps} />
      <ul className="nav-bar__list-nav">
        <li>
          <ButtonNav onClick={handlerForButtonNavAndCollaps} buttonName="task_1" route="/task_1" />
        </li>
        <li>
          <ButtonNav onClick={handlerForButtonNavAndCollaps} buttonName="task_2" route="/task_2" />
        </li>
      </ul>
    </div>
  )
}
