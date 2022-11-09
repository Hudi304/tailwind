import { Loader } from "@/components/loader/loader"
import React from "react"

import "./button.scss"

export type ButtonVariant = "primary" | "secondary" | "icon-btn" | undefined

export type ButtonSize = "small" | "default" | "large" | undefined

type Props = {
  children?: React.ReactNode
  onClick?: any
  className?: string
  variant?: ButtonVariant
  size?: ButtonSize
  type?: "button" | "submit" | "reset"
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  disabled?: boolean
  loading?: boolean
  style?: any
}

export const Button = React.memo(
  ({
    children,
    className = "",
    variant = "primary",
    size = "default",
    onClick,
    type = "button",
    iconLeft = null,
    iconRight = null,
    disabled = false,
    loading = false,
    style = {},
    ...rest
  }: Props) => (
    <button
      type={type}
      style={style}
      className={`button${disabled ? " disabled" : ""}${type === "submit" ? " submit" : ""}${
        loading ? " loading" : ""
      } ${variant} ${size} ${className}`}
      disabled={disabled || loading}
      onClick={(e) => {
        e.stopPropagation()
        onClick && onClick(e)
      }}
      {...rest}
    >
      <span className={`btn-content ${loading ? "opacity-0" : ""}`}>
        {iconLeft}
        {children}
        {iconRight}
      </span>
      {loading && (
        <span className="absolute">
          <Loader size={7} />
        </span>
      )}
    </button>
  ),
)
