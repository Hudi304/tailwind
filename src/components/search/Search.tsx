import React from "react";

import "./Search.scss";

type Props = {
  className?: string;
  style?: any;
  value?: any;
  onChange?: any;
  placeholder?: string;
};

export const Search = React.memo(
  ({
    value = "",
    onChange = () => {},
    className = "",
    style = {},
    placeholder = "Search",
  }: Props) => (
    <div className={`search ${className}`} style={style}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.9928 1.6175C13.6265 3.89261 14.0493 7.81015 11.9613 10.5918L11.9423 10.6108L15.7192 14.3765C15.8989 14.5542 16 14.796 16 15.0483C16 15.3006 15.8989 15.5425 15.7192 15.7201C15.5411 15.8992 15.2985 16 15.0455 16C14.7924 16 14.5499 15.8992 14.3717 15.7201L10.5906 11.9502C7.8027 14.0044 3.89526 13.576 1.6223 10.9603C-0.659564 8.33436 -0.518398 4.39672 1.94568 1.93993C4.40976 -0.516865 8.35908 -0.657614 10.9928 1.6175ZM3.2515 9.97117C5.10263 11.8184 8.10477 11.8209 9.95902 9.9768C10.8515 9.08925 11.353 7.88411 11.353 6.62733C11.353 5.37054 10.8515 4.16541 9.95902 3.27785C8.10477 1.43376 5.10263 1.43628 3.2515 3.28349C1.40038 5.1307 1.40038 8.12396 3.2515 9.97117Z"
          fill="#5B7A79"
        />
      </svg>

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />

      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.8332 1.34166L10.6582 0.166664L5.99984 4.825L1.3415 0.166664L0.166504 1.34166L4.82484 6L0.166504 10.6583L1.3415 11.8333L5.99984 7.175L10.6582 11.8333L11.8332 10.6583L7.17484 6L11.8332 1.34166Z"
          fill="#5B7A79"
        />
      </svg>
    </div>
  )
);
