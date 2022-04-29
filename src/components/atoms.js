import { atom } from "recoil";

export const currentFarmer = atom({
    key: 'currentFarmer', // unique ID (with respect to other atoms/selectors)
    default: ' ', // default value (aka initial value)
  });