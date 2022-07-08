import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {IAsset} from "../models/Asset";
import multifarmApi from "../services/multifarm.service";

type initialStateType = {
  assetsList: IAsset[];
  selectedAsset?: IAsset;
};

const assetsList: IAsset[] = [];

const initialState: initialStateType = {
    assetsList
};

export const AssetsSlice = createSlice({
  name: "asset",
  initialState,
  reducers: {
    selectAsset: (state, action: PayloadAction<IAsset>) => {
      state.selectedAsset = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
        .addMatcher(multifarmApi.endpoints.getAssets.matchPending, (state, action) => {
          console.log('pending', action)
        })
        .addMatcher(multifarmApi.endpoints.getAssets.matchFulfilled, (state, action) => {
          console.log('fulfilled', action)
          state.assetsList = action.payload.data
        })
        .addMatcher(multifarmApi.endpoints.getAssets.matchRejected, (state, action) => {
          console.log('rejected', action)
        })
  },
});

export const { selectAsset } = AssetsSlice.actions;

export default AssetsSlice;
