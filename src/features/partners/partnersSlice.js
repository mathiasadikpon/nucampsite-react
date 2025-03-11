import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
// import { PARTNERS } from "../../app/shared/PARTNERS";
import {baseUrl} from "../../app/shared/baseUrl";
import { mapImageURL } from "../../utils/mapImageURL";


const initialState = {
  partnersArray: [],
};

const partnersSlice = createSlice({
  name: "partners",
  initialState,
});

export const partnersReducer = partnersSlice.reducer;

export const selectAllPartners = (state) => {
  return state.partners.partnersArray;
};

export const selectFeaturedPartner = (state) => {
  return state.partners.partnersArray.find((partner) => partner.featured);
};
