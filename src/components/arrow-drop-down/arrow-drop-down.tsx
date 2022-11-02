import React from "react"

type Props = {
  className?: string
  style?: any
}

const ArrowDropDown = React.memo(
  () => (
    <svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.666672 0.333328L4 3.66666L7.33334 0.333328H0.666672Z"/>
    </svg>
  ),
)

export default ArrowDropDown;