const LS_KEY_ACCOUNTS = 'ACCOUNTS';
const SS_KEY_ACTIVE_ACCESS_TOKEN = 'ACTIVE_ACCESS_TOKEN';
const SS_KEY_ACTIVE_REFRESH_TOKEN = 'ACTIVE_REFRESH_TOKEN';

export type ConfirmLoginResponse = {
  accessToken: string
  accountAddress: string | null
  refreshToken: string
}

export type AccountDataResponse = {
  keyAccounts: KeyAccount[]
  user: AccountUser
}

export type KeyAccount = {
  address: string
  keyName: string
  registrationStatus: number
  userId: string
}

export type AccountUser = {
  id: string
  firstName: string
  lastName: string
}

export type Token = {
  accessToken: string
  refreshToken: string
}

export type AccountData = {
  token: Token
  keyAccounts: KeyAccount[]
  user: AccountUser
}

interface Tokens {
  [key: string]: Token
}

// -------- functions --------

export function addAccountToLS(
  confirmLogin: ConfirmLoginResponse,
  accountData: AccountDataResponse,
): string {
  // add account with token
  const accounts = getAllAccountsFromLS();
  const newAccounts = accounts.filter((act) => (act?.user?.id !== accountData?.user?.id));

  const token: Token = {
    accessToken: confirmLogin.accessToken,
    refreshToken: confirmLogin.refreshToken,
  }

  const fullAccountData = {
    ...accountData,
    token,
  }

  newAccounts.push(fullAccountData);
  localStorage.setItem(LS_KEY_ACCOUNTS, JSON.stringify(newAccounts));

  // set active token
  sessionStorage.setItem(SS_KEY_ACTIVE_ACCESS_TOKEN, confirmLogin.accessToken);
  sessionStorage.setItem(SS_KEY_ACTIVE_REFRESH_TOKEN, confirmLogin.refreshToken);
  
  // return active accountAddress
  return confirmLogin.accountAddress || accountData.keyAccounts[0].address;
}

export function setAccountsInLS(accounts: AccountData[]) {
  localStorage.setItem(LS_KEY_ACCOUNTS, JSON.stringify(accounts));
}

export function removeAccountFromLS(accountAddress: string) {
  const accounts = getAllAccountsFromLS();
  const account = getAccountFromAccounts(accountAddress, accounts);
  if (account !== null) {
    const newAccounts = accounts.filter((act) => (act?.user?.id !== account?.user?.id));
    setAccountsInLS(newAccounts);
    if (newAccounts.length === 0) {
      removeActiveTokenInSS();
    }
  }
}

export function getAccountFromAccounts(accountAddress: string, accounts: AccountData[]): AccountData | null {
  const accountArr = accounts.filter((act: AccountData) => {
    const actAddressArr = act.keyAccounts.filter((keyAccount: KeyAccount) => (keyAccount.address === accountAddress));
    return (actAddressArr.length > 0);
  });

  if (accountArr.length > 0) {
    return accountArr[0];
  }

  return null;
}

export function getAccountFromLS(accountAddress: string): AccountData | null {
  const accounts = getAllAccountsFromLS();
  if (Array.isArray(accounts) && accounts?.length > 0) {
    return getAccountFromAccounts(accountAddress, accounts);
  }
  return null;
}

export function getAllAccountsFromLS(): AccountData[] {
  const accountsStr = localStorage.getItem(LS_KEY_ACCOUNTS);
  if (typeof accountsStr === "string") {
    const accounts = JSON.parse(accountsStr);
    if (Array.isArray(accounts) && accounts?.length > 0) {
      return accounts;
    }
  }
  return [];
}

export function getAccountTokenFromLS(accountAddress: string): Token | null {
  const accounts = getAllAccountsFromLS();
  const account = getAccountFromAccounts(accountAddress, accounts);
  return account !== null ? account.token : null;
}

export function refreshAccountTokenInLS(accountAddress: string, token: Token) {
  const accounts = getAllAccountsFromLS();
  const account = getAccountFromAccounts(accountAddress, accounts);
  const accountIndex = accounts.findIndex((act: AccountData): boolean => (act.user?.id === account?.user?.id));
  if (accountIndex !== -1) {
    accounts[accountIndex].token = token;
    setAccountsInLS(accounts);
  }

  // update active token in SS
  sessionStorage.setItem(SS_KEY_ACTIVE_ACCESS_TOKEN, token.accessToken);
  sessionStorage.setItem(SS_KEY_ACTIVE_REFRESH_TOKEN, token.refreshToken);
}

export function setActiveTokenInSS(accountAddress: string) {
  const token = getAccountTokenFromLS(accountAddress);
  if (token !== null) {
    sessionStorage.setItem(SS_KEY_ACTIVE_ACCESS_TOKEN, token.accessToken);
    sessionStorage.setItem(SS_KEY_ACTIVE_REFRESH_TOKEN, token.refreshToken);
  }
}

export function removeActiveTokenInSS() {
  sessionStorage.removeItem(SS_KEY_ACTIVE_ACCESS_TOKEN);
  sessionStorage.removeItem(SS_KEY_ACTIVE_REFRESH_TOKEN);
}

export function getActiveAccessToken(accountAddress: string): string | null {
  const token = sessionStorage.getItem(SS_KEY_ACTIVE_ACCESS_TOKEN);
  return token ? token : null;
}

export function getActiveRefreshToken(accountAddress: string): string | null {
  const token = sessionStorage.getItem(SS_KEY_ACTIVE_REFRESH_TOKEN);
  return token ? token : null;
}






// export function addAccount(
//   confirmLogin: ConfirmLoginResponse,
//   accountData: AccountDataResponse,
// ) {
//   // add account with token
//   const accounts = getAccounts();
//   const newAccounts = accounts.filter((act) => (act?.user?.id !== accountData?.user?.id));
//   newAccounts.push(accountData);
//   localStorage.setItem(LS_KEY_ACCOUNTS, JSON.stringify(newAccounts));

//   // add token
//   const tokens = getAccountTokens();
//   const addedToken: Token = {
//     accessToken: confirmLogin.accessToken,
//     refreshToken: confirmLogin.refreshToken,
//   }
//   const newTokens = { ...tokens };
//   // add same token for each of user addresses
//   accountData.keyAccounts.forEach((act: KeyAccount) => {
//     newTokens[act.address] = addedToken
//   });
//   localStorage.setItem(LS_KEY_TOKENS, JSON.stringify(newTokens));

//   console.log(newAccounts, newTokens);

//   // set active account
// }

//---------------

// export function getAccountTokens(): Tokens {
//   const tokensStr = localStorage.getItem(LS_KEY_TOKENS);
//   if (typeof tokensStr === "string") {
//     const tokens = JSON.parse(tokensStr);
//     if (typeof tokens === "object") {
//       return tokens;
//     }
//   }
//   return {};
// }
