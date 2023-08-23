import React from "react"
import "./card.scss"

interface Props {
  className?: string
  children?: React.ReactNode
  onClick?: any
}

export const Card: React.FC<Props> = ({
  children,
  className = "",
  onClick,
  ...rest
}: Props): JSX.Element => {
  return (
    <div
      className={` rounded-2xl flex flex-col h-min p-10 shadow-2xl border bg-sky-900 border-gray-900 ${className}`}
      onClick={(e) => {
        e.stopPropagation()
        onClick && onClick(e)
      }}
      {...rest}
    >
      {children}
    </div>
  )
}
