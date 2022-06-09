import { atom } from "recoil";

export const beeKeeperData = atom({
  key: 'beeKeeperData', // unique ID (with respect to other atoms/selectors)
  default: ' ', // default value (aka initial value)
});

export const currentFarmer = atom({
    key: 'currentFarmer', // unique ID (with respect to other atoms/selectors)
    default: ' ', // default value (aka initial value)
  });