import React from 'react';

import {ClipLoader} from "react-spinners";

interface Props {
    loading: boolean,

}

const LoadingSpinner = ({ loading } : Props) => {


    return loading ? (
            <div className={loading ? 'absolute top-0 left-0 w-full z-40' : 'hidden'}>
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-200 opacity-50"></div>
                </div>
                <div className="fixed transform transition-all inset-x-1/2 inset-y-1/2 -m-16">
                    <ClipLoader
                        size="40"
                        color={"#123abc"}
                        loading={loading}
                    />
                </div>
            </div>
    ) : null
};
export default LoadingSpinner;

