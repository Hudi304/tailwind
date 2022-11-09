import React from "react";
import "./card.scss";

interface Props {
  className?: string;
  children?: React.ReactNode;
  onClick?: any;
}

export const Card: React.FC<Props> = ({
  children,
  className = "",
  onClick,
  ...rest
}: Props): JSX.Element => {
  return (
    <div
      className={`simple-card ${className}`}
      onClick={(e) => {
        e.stopPropagation()
        onClick && onClick(e)
      }}
      {...rest}
    >
      {children}
    </div>
  );
};
