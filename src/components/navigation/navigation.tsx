import React, { useState } from "react";
import { avatarPropsRest, testNavItems } from "@/pages/home/Home";
import { NavStack } from "../nav-stack/Nav-stack";

import "./Navigation.scss";
import ArrowDropDown from "../arrow-drop-down/Arrow-drop-down";
import { Button } from "../button/Button";
import { Avatar, AvatarType } from "../avatar/Avatar";
import { Search } from "../search/Search";

type Props = {
  className?: string;
  style?: any;
  isLoggedIn?: boolean;
};

export const Navigation = React.memo(
  ({ className = "", style = {}, isLoggedIn = false }: Props) => {
    const [searchQuery, setSearchQuery] = useState("");
    return (
      <div className={`nav ${className}`} style={style}>
        <img className="logo" src="./icons/cascada.svg" alt="logo" />
        <NavStack links={testNavItems} />
        <div className="user-settings">
          {isLoggedIn ? (
            <>
              <Search
                value={searchQuery}
                onChange={(e: any) => setSearchQuery(e?.target?.value || "")}
                placeholder="Search ..."
                style={{ marginRight: 24 }}
              />
              <Button
                variant="secondary"
                size="default"
                iconLeft={<ArrowDropDown />}
                iconRight={<ArrowDropDown />}
              >
                Button
              </Button>
              <button className="avatar-btn">
                <Avatar
                  type={AvatarType.initials}
                  size="medium"
                  {...avatarPropsRest}
                />
                <ArrowDropDown />
              </button>
            </>
          ) : (
            <>
              <Button
                variant="secondary"
                size="default"
                iconLeft={<ArrowDropDown />}
                iconRight={<ArrowDropDown />}
              >
                Button
              </Button>
              <Button
                variant="primary"
                size="default"
                iconLeft={<ArrowDropDown />}
                iconRight={<ArrowDropDown />}
              >
                Button
              </Button>
            </>
          )}
        </div>
      </div>
    );
  }
);
