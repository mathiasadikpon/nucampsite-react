import { CAMPSITES } from "../../app/shared/CAMPSITES";

export const selectAllCampsites = () => CAMPSITES;

export const selectRandomCampsite = () => {
  return CAMPSITES[Math.floor(Math.random() * CAMPSITES.length)];
};
