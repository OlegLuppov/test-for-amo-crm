export interface IButton {
	buttonName?: string
	onClick: React.MouseEventHandler<HTMLElement>
}

export interface IButtonCollaps extends IButton {
	toggler: boolean
}

export interface IButtonNav extends IButton {
	route: string
}
