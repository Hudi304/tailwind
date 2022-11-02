import { v4 as getUUIDv4 } from "uuid";

const LS_KEY_DEVICE_DATA = 'DEVICE_DATA';

export const storeDeviceData = () => {
  const lsData = localStorage.getItem(LS_KEY_DEVICE_DATA);
  if (typeof lsData !== 'string') {
    const deviceDescription = `WEB ${navigator?.platform} ${navigator?.userAgent}`
    const UUID = getUUIDv4();
    const newLsData = `{"DeviceDescription":"${deviceDescription
    }","NotificationToken":"${UUID
    }","DeviceType":1}`;
    localStorage.setItem(LS_KEY_DEVICE_DATA, newLsData);
  }
}

export const readDeviceData = () => {
  const lsData = localStorage.getItem(LS_KEY_DEVICE_DATA);
  if (typeof lsData !== 'string') {
    storeDeviceData();
    const newLsData = localStorage.getItem(LS_KEY_DEVICE_DATA);
    return newLsData;
  }
  return lsData;
}