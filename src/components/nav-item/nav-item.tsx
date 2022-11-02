import React from "react"
import { Link } from "react-router-dom"

import "./Nav-item.scss"

type Props = {
  className?: string
  style?: any
  isActive?: boolean
  label?: string
  to?: string
}

export const NavItem = React.memo(
  ({
    className = '',
    style = {},
    isActive = false,
    label = '',
    to = '',
  }: Props) => {
    return (
      <Link
        className={`link${isActive ? ' active' : ''} ${className}`}
        style={style}
        to={to}
      >
        {label}
      </Link>
    );
  },
)
