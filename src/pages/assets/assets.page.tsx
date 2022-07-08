import {useState, useEffect, PropsWithChildren} from "react";
import LineChart from "../../components/LineChart";
import {useAppSelector} from "../../hooks/base.hooks";
import {IAssetHistory} from "../../models/Asset";

const AssetsPage: React.FC = (props: PropsWithChildren<{}>) => {
    const selectedAsset = useAppSelector((state) => state.asset.selectedAsset);

    const [aprHistory, setAprHistory] = useState<IAssetHistory[]>([])

    const [tvlHistory, setTvlHistory] = useState<IAssetHistory[]>([])

    useEffect(() => {
        let history = selectedAsset?.selected_farm?.[0]?.tvlStakedHistory?.map((history) => {
            return {
                date: history.date,
                value: history.value
            }
        })
        const tvlHistory = history ? history : []
        setTvlHistory(tvlHistory)

        const aprHistory = tvlHistory.map((item:IAssetHistory, index:number) => ({
            ...item,
            value: tvlHistory.length - 1 - index + index * 0.5
        }))
        setAprHistory(aprHistory)
    }, [selectedAsset]);

    return (
        <div className="flex w-full">
            <div className="w-1/2 border-2 ml-4 mt-4 mr-2">
                <LineChart history={aprHistory} label="Asset APR(y)"/>
            </div>
            <div className="w-1/2 border-2 ml-2 mt-4 mr-4">
                <LineChart history={tvlHistory} label="Asset TVL"/>
            </div>
        </div>
    )
};

export default AssetsPage;
