import React from "react"
import { NavItem } from "../nav-item/Nav-item"

import "./Nav-stack.scss"

export type NavLink = {
  label: string,
  to: string,
  isActive: boolean,
}

type Props = {
  className?: string
  style?: any
  links?: NavLink []
}

export const NavStack = React.memo(
  ({
    className = '',
    style = {},
    links = [],
  }: Props) => {
    return (
      <nav
        className={`nav-stack ${className}`}
        style={style}
      >
        {links.map((linkItem) => (
          <NavItem {...linkItem} />
        ))}
      </nav>
    );
  },
)
