import React, { useState } from "react"

import "./avatar.scss"

export enum AvatarType {
  photo = "photo",
  placeholder = "placeholder",
  initials = "initials",
  icon = "icon",
}

type Props = {
  className?: string
  style?: any
  size?: "xs" | "small" | "medium" | "large" | "xl"
  type?: AvatarType
  src?: string
  initials?: string
  icon?: React.ReactNode
  showStatus?: boolean
  status?: "online" | "busy" | "offline"
}

export const Avatar = ({
  className = "",
  style = {},
  size = "medium",
  type = AvatarType.placeholder,
  src = "",
  initials = "",
  icon = null,
  showStatus = false,
  status = "offline",
}: Props) => {
  const [state, setState] = useState<AvatarType>(type)

  return (
    <div className={`avatar ${type} ${size} ${status} ${className}`} style={style}>
      {
        {
          [AvatarType.photo]: <img src={src} />,
          [AvatarType.placeholder]: <img src="./icons/default_avatar.png" />,
          [AvatarType.initials]: <div>{initials}</div>,
          [AvatarType.icon]: <div>{icon}</div>,
        }[state]
      }
      {showStatus && <div className="status" />}
    </div>
  )
}
