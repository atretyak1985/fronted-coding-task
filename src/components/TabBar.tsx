import {useAppDispatch, useAppSelector} from "../hooks/base.hooks";
import DropDown, {IDropDownItem} from "./DropDown";
import {useEffect, useState} from "react";
import { selectAsset } from "../slices/assets.slice";
import { v4 as uuidv4 } from "uuid";
import {sortArrayOfObjects} from "../utils/utils";

const TabBar: React.FC = () => {
    const dispatch = useAppDispatch();
    const assetsList = useAppSelector((state) => state.asset.assetsList);
    const selectedAsset = useAppSelector((state) => state.asset.selectedAsset);

    const [selects, setSelects] = useState<IDropDownItem[]>([])

    useEffect(() => {
        let selects = assetsList?.map((select) => {
            return {
                id: uuidv4(),
                name: select.assetId,
                value: select.asset
            }
        })
        selects = selects ? sortArrayOfObjects(selects, "value", "ascending") : []
        setSelects(selects.sort())

    }, [assetsList]);

    const changedCurrency = (item: IDropDownItem) => {
        const selectedAsset = assetsList?.filter((asset) => {
            return asset.assetId === item.name
        })?.[0];
        if(selectedAsset){
            dispatch(selectAsset(selectedAsset))
        }
    }

    return (
        <div className="flex items-center flex-shrink-0 w-full h-16 px-10 bg-white bg-opacity-75">
            <DropDown dataProvider={selects} onChange={changedCurrency}/>
            <span className="pl-4">{selectedAsset?.assetId}</span>
        </div>
    );
};

export default TabBar;
