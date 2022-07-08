import AssetsPage from "./assets/assets.page";
import TabBar from "../components/TabBar";
import {useGetAssetsQuery} from "../services/multifarm.service";
import {useEffect, useState} from "react";
import Swal from 'sweetalert2';
import LoadingSpinner from "../components/LoadingSpinner";

const MainPage: React.FC = () => {
    const { error, isLoading } = useGetAssetsQuery({pg:1, tvl_min:50000, sort:"tvlStaked", sort_order:"desc", staked_gte:10000000})

    useEffect(() => {
        if (error) {
            let errMsg:string | undefined = ''
            if ('status' in error) {
                errMsg = 'error' in error ? error.error : JSON.stringify(error.data)
            }
            else {
                errMsg = error.message
            }

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: errMsg,
            })
        }
    }, [error])

    return (
        <div className="flex flex-col w-screen h-screen overflow-auto text-gray-700 bg-gradient-to-tr from-green-200 via-indigo-200 to-pink-200">
            <TabBar />

            <AssetsPage />

            <LoadingSpinner loading={isLoading}/>
        </div>
    );
};

export default MainPage;
