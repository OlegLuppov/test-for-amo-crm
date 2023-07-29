import React, { useState } from 'react'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import './navBar.scss'
import { ButtonCollaps } from '../buttons/Buttons'

export const NavBar: React.FC = () => {
  const [togglerButtonCollaps, setTogglerButtonCollaps] = useState(true)

  const handlerButtonCollaps = () => {
    setTogglerButtonCollaps(!togglerButtonCollaps)
  }

  return (
    <div
      className={classNames('nav-bar__wrapper', {
        'nav-bar__wrapper--hide': !togglerButtonCollaps,
      })}
    >
      <ButtonCollaps toggler={togglerButtonCollaps} onClick={handlerButtonCollaps} />
      <ul className="nav-bar__list-nav">
        <li>
          <NavLink className="nav-bar__link" to={'/test1'}>
            test_1
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-bar__link" to={'/test2'}>
            test__2
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
