import {IAssetResponse, IAssetInput} from "../models/Asset";
import {api} from "./api.services";

export const multifarmApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAssets: builder.query<IAssetResponse, IAssetInput>({
            query: ({pg, tvl_min, sort, sort_order, staked_gte} ) => `/jay_flamingo_random_6ix_vegas/get_assets?pg=${pg}&tvl_min=${tvl_min}&sort=${sort}&sort_order=${sort_order}&farms_tvl_staked_gte=${staked_gte}`
        }),
    })
})

export const {
    useGetAssetsQuery,
} = multifarmApi;

export default multifarmApi;
