import { FC, memo } from "react"
import "./icon.scss"

export const ICONS = {}

type Props = {
  icon: any
  className?: string
  size?: number
}

export const Icon: FC<Props> = memo(({ icon, className, size = 5 }: Props) => {
  const IconComp = icon
  if (!icon) return null
  return (
    <IconComp
      className={className}
      style={{
        width: `${size * 4}px`,
        height: `${size * 4}px`,
      }}
    />
  )
})
