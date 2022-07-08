export interface IAsset {
    aprDaily: number,
    aprWeekly: number,
    aprYearly: number,
    apyYearly: number,
    asset: string,
    assetAddress: string,
    assetId: string,
    dateAdded: string,
    dateEnding: string,
    dateStarted: string,
    dateUpdated: string,
    selected_farm: {
        tvlStakedHistory: {
            date: Date,
            value: number
        }[]
    }[]
}

export interface IAssetResponse {
    data: IAsset[]
}

export interface IAssetInput {
    pg:number,
    tvl_min:number,
    sort: string,
    sort_order: string,
    staked_gte:number
}

export interface IAssetHistory {
    date:Date,
    value:number,
}
