import React, { useEffect, useState } from 'react'
import './taskOne.scss'
import { formatedSecondInTime } from '../../../constans/contans'

export const TaskOne: React.FC = () => {
	const [secondsValue, setSecondsValue] = useState('')
	const [timerValue, setTimerValue] = useState('')
	const [buttonToggler, setButtonToggler] = useState(true)

	// обработчик на input (удаляем все кроме цифр)
	const handlerSeconds = (e: React.ChangeEvent<HTMLInputElement>) => {
		const regExp = /[^0-9]/g
		setSecondsValue(e.target.value.replace(regExp, ''))
	}

	const createTimerAnimator = () => {
		setButtonToggler(!buttonToggler)
	}

	let timer: NodeJS.Timeout

	const tickTockTimer = (seconds: number) => {
		timer = setTimeout(() => {
			tickTockTimer(seconds)
		}, 1000)

		// метод formatedSecondInTime принимает секунды в виде строки и возвращает время (Лучше бы использовать momentJS библиотеку конечно если постоянно нужны конвертации)
		const time = formatedSecondInTime(+seconds)

		setTimerValue(time)

		seconds--

		if (seconds < 0) clearTimeout(timer)
	}

	useEffect(() => {
		if (secondsValue === '' || +secondsValue === 0) {
			setTimerValue('00:00:00')
			return
		}

		tickTockTimer(+secondsValue)
		return () => {
			clearTimeout(timer) // при размонтировании очистить Timeout
		}
	}, [buttonToggler])

	return (
		<div className='task-one__wrapper'>
			<input onChange={handlerSeconds} value={secondsValue} placeholder='Seconds' type='text' />
			<button onClick={createTimerAnimator} className='task-one__button task-one__button--start'>
				Start
			</button>
			<br />
			<br />
			<span>{timerValue}</span>
		</div>
	)
}
