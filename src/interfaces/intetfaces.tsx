export interface IButton {
  buttonName?: string
  onClick: React.MouseEventHandler<HTMLElement>
}

export interface IButtonCollaps extends IButton {
  toggler: boolean
}
