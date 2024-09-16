// import { BarLoader, BeatLoader, BounceLoader, HashLoader } from "react-spinners";

import { VscLoading } from "react-icons/vsc";

const Spinner = () => {
    return (
        <>
        {/* <div className="flex flex-col justify-center items-center"
        style={{
            minHeight: 'calc(100vh - 30rem)'
        }}
        >
           <span className="loading loading-spinner text-error"></span>
            <span className="text-xs text-gray-500 mt-3 italic">Hang On...</span>
        </div> */}
        <div className="w-full h-60 flex items-center justify-center bg-secondary/5 mt-10 rounded-2xl">
            <VscLoading className="animate-spin text-secondary text-7xl" />
          </div></>
    );
}

export default Spinner;