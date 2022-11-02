import React from "react"

type Props = {
  className?: string
  style?: any
}

const ExpandMore = React.memo(
  () => (
    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.59 0.294998L6 4.875L1.41 0.294998L0 1.705L6 7.705L12 1.705L10.59 0.294998Z" fill="#5B7A79"/>
    </svg>
  ),
)

export default ExpandMore;