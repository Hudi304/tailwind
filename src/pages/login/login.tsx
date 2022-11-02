import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { QRCodeCanvas } from "qrcode.react";
import { v4 as getUUIDv4 } from "uuid";

import { readDeviceData } from "@/common/device-data";
import { ConfirmLoginResponse, AccountDataResponse, addAccountToLS } from "@/hooks/manageAccounts";

const BASE_URL = 'https://test-api-directory.cascada.services';

export const Login = () => {
  const navigate = useNavigate();
  const [canLogin, setCanLogin] = useState(false);

  const [UUID1, setUUID1] = useState('');
  const [UUID2, setUUID2] = useState('');
  const [showQr, setShowQr] = useState(false);

  const [poolLoginDataCounter, setPoolLoginDataCounter] = useState(0);

  const [isConfirmed, setIsConfirmed] = useState(false);


  function generateUUIDs() {
    setUUID1(getUUIDv4());
    setUUID2(getUUIDv4());
  };

  function login() {
    setCanLogin(true);
    setShowQr(false);
    generateUUIDs();
  };

  function registerKey() {
    const data = {
      sessionKey: UUID1,
    };
    axios
      .post(`${BASE_URL}/api/account/registerLoginWithDeviceKey`, JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        if (res.status == 200) {
          setShowQr(true);
        }
      })
      .catch((e) => {
        console.log(e);
        setCanLogin(false);
        setShowQr(false);
      });
  };

  function poolLoginData() {
    if (canLogin && showQr) {
      const data = {
        sessionKey: UUID1,
      }

      axios
        .post(`${BASE_URL}/api/account/poolLoginWithDeviceKey`, JSON.stringify(data), {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then((res) => {
          if (res.data?.isConfirmed === true) {
            setShowQr(false);
            setPoolLoginDataCounter(0);
            confirmLogin();
          }
        })
        .catch((e) => {
          console.log(e);
          setShowQr(false);
          setPoolLoginDataCounter(0);
          login();
        });
    } else setPoolLoginDataCounter(0);
  }

  function confirmLogin() {
    setCanLogin(false);
    setShowQr(false);

    const data = {
      sessionKey: UUID1,
      confirmationKey: UUID2,
    }

    axios
      .post(`${BASE_URL}/api/account/confirmLoginWithDeviceKey`, JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        const { data: token }: { data: ConfirmLoginResponse } = res;
        // console.log(token);
        setShowQr(false);
        getAccountData(token);
        // setIsConfirmed(true);
      })
      .catch((e) => {
        console.log(e);
        setShowQr(false);
        setPoolLoginDataCounter(0);
        if (canLogin) {
          login();
        }
      });
  };

  function getAccountData(token: ConfirmLoginResponse) {
    const deviceData = readDeviceData();
    axios
      .post(`${BASE_URL}/api/account`, deviceData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token?.accessToken}`,
        }
      })
      .then((res) => {
        const { data: accountData }: { data: AccountDataResponse } = res;
        const accountAddress = addAccountToLS(token, accountData);
        setIsConfirmed(true);
        // console.log(accountData);
        // to do redirect
        navigate(`/account/${accountAddress}`);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  // useEffect(() => {
  //   const token: ConfirmLoginResponse = {
  //     accessToken: 'access',
  //     accountAddress: 'adr2',
  //     refreshToken: 'refresh',
  //   };
  //   const accountData: AccountDataResponse = {
  //     keyAccounts: [
  //       { address: 'adr1', keyName: 'us1', registrationStatus: 4, userId: 'us1' },
  //       { address: 'adr2', keyName: 'us2', registrationStatus: 4, userId: 'us2' },
  //       { address: 'adr3', keyName: 'us3', registrationStatus: 4, userId: 'us3' },
  //     ],
  //     user: {
  //       id: '1',
  //       firstName: 'first',
  //       lastName: 'last',
  //     }
  //   }
  //   const accountAddress = addAccountToLS(token, accountData);
  //   navigate(`/account/${accountAddress}`);
  // }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPoolLoginDataCounter((prev) => (prev + 1));
    }, 10000);

    login();

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (UUID1) {
      registerKey();
    }
  }, [UUID1]);
  
  useEffect(() => {
    if (poolLoginDataCounter) {
      poolLoginData();
    }
  }, [poolLoginDataCounter]);

  // useEffect(() => {
  //   if (isConfirmed) {
  //     getAccountData();
  //   }
  // }, [isConfirmed]);

  return (
    <div style={{ padding: 10 }}>
      <div>Login</div>
      {isConfirmed && <h3>Logged in successfully</h3>}
      {showQr && (
        <>
          <div>{`generated code: ${UUID1}:${UUID2}`}</div>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: 10,
            padding: 20,
          }}>
            <h3>Scan the code with mobile device</h3>
            <QRCodeCanvas value={`${UUID1}:${UUID2}`} size={200} />
          </div>
        </>
      )}
    </div>
  )
}
