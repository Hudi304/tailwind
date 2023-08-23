import React from "react"
// import Select from 'react-select'
// import ExpandMore from "../expand-more/expand-more"

// import "./input-field.scss"

// type Props = {
//   onChange?: any
//   className?: string
//   type?: "input" | "select"
//   icon?: React.ReactNode
//   style?: any
//   inputProps?: object
//   inputClass?: string
//   inputStyle?: any
//   filled?: boolean
//   disabled?: boolean
//   isError?: boolean
//   label?: string
//   hint?: string
//   errorHint?: string
//   showHint?: boolean
//   placeholder?: string
//   showExpandIcon?: boolean
// }

// export const InputField = React.memo(
//   ({
//     onChange,
//     className = '',
//     type = 'input',
//     icon = null,
//     style = {},
//     inputProps = {},
//     inputClass = '',
//     inputStyle = {},
//     filled = false,
//     disabled = false,
//     isError = false,
//     label = 'Type label',
//     hint = 'Add hint',
//     errorHint = 'Add error hint',
//     showHint = false,
//     placeholder = 'Type value',
//     showExpandIcon = false,
//   }: Props) => (
//     <div
//       className={`input_field ${filled ? ' filled' : ''
//       }${disabled ? ' disabled' : ''
//       }${isError ? ' error' : ''
//       } ${className}`}
//       style={style}
//     >
//       <label>{label}</label>
//       <div className={`input_container ${type}`}>
//         {icon !== null && (
//           <div className="icon">{icon}</div>
//         )}
//         {type === 'input'
//           ? (
//             <>
//               <input
//                 onChange={onChange}
//                 className={inputClass}
//                 placeholder={placeholder}
//                 style={inputStyle}
//                 disabled={disabled}
//                 {...inputProps}
//               />
//               <span/>
//             </>
//           )
//           : (
//             <Select
//               onChange={onChange}
//               className={inputClass}
//               placeholder={<div className="select-placeholder-text">{placeholder}</div>}
//               isDisabled={disabled}
//               {...inputProps}
//             />
//           )}
//         {showExpandIcon && <div className="expand-more-icon"><ExpandMore /></div>}
//       </div>
//       <div className="hint">{(showHint && (isError ? errorHint : hint)) ?? ''}</div>
//     </div>
//   ),
// )
