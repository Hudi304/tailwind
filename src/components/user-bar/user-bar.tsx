import {
  AccountData,
  AccountDataResponse,
  addAccountToLS,
  ConfirmLoginResponse,
  getAccountFromAccounts,
  getActiveAccessToken,
  getAllAccountsFromLS,
  refreshAccountTokenInLS,
  removeAccountFromLS,
  setActiveTokenInSS,
  Token,
} from "@/hooks/manageAccounts";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../button/Button";

import "./User-bar.scss";

type Props = {
  className?: string;
  style?: any;
};

export const UserBar = React.memo(({ className = "", style = {} }: Props) => {
  const { address } = useParams();
  const navigate = useNavigate();

  const [accounts, setAccounts] = useState<AccountData[]>([]);
  const [activeAccount, setActiveAccount] = useState<AccountData | null>();

  const parseAccountsFromLS = useCallback(() => {
    const newAccounts = getAllAccountsFromLS();
    if (Array.isArray(newAccounts) && newAccounts.length > 0) {
      setAccounts(newAccounts);
      if (typeof address === "string") {
        const activeAccount = getAccountFromAccounts(address, newAccounts);
        setActiveAccount(activeAccount);
        if (activeAccount !== null) {
          setActiveTokenInSS(address);
        } else {
          navigate("/login");
        }
      } else {
        setActiveAccount(null);
      }
    } else {
      setAccounts([]);
      navigate("/login");
    }
  }, [address]);

  useEffect(() => {
    // parseAccountsFromLS();
  }, [address]);

  return (
    // return accounts?.length > 0
    //   ? (
    <div className={`user_bar ${className}`} style={style}>
      {accounts.map((accountItem) => (
        <div
          className={`account${
            activeAccount?.user?.id === accountItem.user.id ? " active" : ""
          }`}
        >
          <div className="name">{accountItem.user.firstName}</div>
          {/* <div className="name">{`${accountItem.user.firstName} ${accountItem.user.lastName}`}</div> */}
          <div className="key_accounts">
            {accountItem.keyAccounts.map((keyAccount) => (
              <div
                className={`address${
                  keyAccount.address === address ? " active" : ""
                }`}
              >
                <Button
                  variant={
                    keyAccount.address === address ? "primary" : "secondary"
                  }
                  children={keyAccount.keyName}
                  onClick={() => {
                    navigate(`/account/${keyAccount.address}`);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      <Button
        disabled={typeof address !== "string"}
        children="Log Out"
        onClick={() => {
          if (typeof address === "string") {
            removeAccountFromLS(address);
            parseAccountsFromLS();
          }
          navigate("/login");
        }}
      />
      <Button
        children="Add user"
        onClick={() => {
          navigate("/login");
        }}
      />

      <hr />
      <Button
        children="home"
        onClick={() => {
          navigate("/");
        }}
      />
      <hr />
      <h3>for testing</h3>
      <hr />

      <Button
        children="add test user 1"
        onClick={() => {
          const token: ConfirmLoginResponse = {
            accessToken: "access",
            accountAddress: "adr2",
            refreshToken: "refresh",
          };
          const accountData: AccountDataResponse = {
            keyAccounts: [
              {
                address: "adr1",
                keyName: "us1",
                registrationStatus: 4,
                userId: "us1",
              },
              {
                address: "adr2",
                keyName: "us2",
                registrationStatus: 4,
                userId: "us2",
              },
              {
                address: "adr3",
                keyName: "us3",
                registrationStatus: 4,
                userId: "us3",
              },
            ],
            user: {
              id: "1",
              firstName: "first",
              lastName: "last",
            },
          };
          const accountAddress = addAccountToLS(token, accountData);
          navigate(`/account/${accountAddress}`);
        }}
      />

      <Button
        children="add test user 2"
        onClick={() => {
          const token: ConfirmLoginResponse = {
            accessToken: "access",
            accountAddress: null,
            refreshToken: "refresh",
          };
          const accountData: AccountDataResponse = {
            keyAccounts: [
              {
                address: "test address 1",
                keyName: "test user 1",
                registrationStatus: 4,
                userId: "test user 1",
              },
              {
                address: "test address 2",
                keyName: "test user 2",
                registrationStatus: 4,
                userId: "test user 2",
              },
              {
                address: "test address 3",
                keyName: "test user 3",
                registrationStatus: 4,
                userId: "test user 3",
              },
            ],
            user: {
              id: "2",
              firstName: "test 2",
              lastName: "last",
            },
          };
          const accountAddress = addAccountToLS(token, accountData);
          navigate(`/account/${accountAddress}`);
        }}
      />

      <hr />

      <Button
        children="user 1 adr 1"
        onClick={() => {
          navigate("/account/0x7f4cb0ee4db459ea27fcf060af848fa5e5a93b17");
        }}
      />
      <Button
        children="user 2 adr 1"
        onClick={() => {
          navigate("/account/0xff372a02771db8378f08cda3dc3ae37aa5b69780/");
        }}
      />
      <Button
        children="test user adr 2"
        onClick={() => {
          navigate("/account/adr2/");
        }}
      />
      <Button
        children="refresh token 2"
        onClick={() => {
          const token: Token = {
            accessToken: "access1",
            refreshToken: "refresh1",
          };
          refreshAccountTokenInLS("adr2", token);
        }}
      />
    </div>
  );
  // : null;
});
