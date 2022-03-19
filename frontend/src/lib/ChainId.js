import React, { useState, useEffect } from 'react';
import ErrorMessage from './ErrorMessage';
import web3 from 'web3';

const networks = {
    ssafy: {
        // 31221
        // 0x79f5
        chainId: `0x${Number(31221).toString(16)}`,
        chainName: "SSAFY 테스트넷",
        nativeCurrendy: {
            name: "SSF",
            symbol: "SSF",
            decimal: 18,
        },
        rpcUrls: ["http://20.196.209.2:8545"],
        // blockExplorerUrls: [""]
    }
}



const ChainId = () => {
    // const [error, setError] = useState("");
    const handleNetworkSwitch = async (networkName) => {
        // setError();
        // await changeNetwork({ networkName, setError });
        await changeNetwork({ networkName });
    };

    const networkChanged = (chainId) => {
        console.log({ chainId });
    };

    useEffect(() => {
        window.ethereum.on("chainChanged", networkChanged);

        return window.ethereum.removeListener("chainChanged", networkChanged);
        
    }, []);



    return (
        <div>

        </div>
    );
};

export default ChainId;

// export default function chainIDChange() {
//     // const [error, setError] = useState("");
//     const handleNetworkSwitch = async (networkName) => {
//         // setError();
//         // await changeNetwork({ networkName, setError });
//         await changeNetwork({ networkName });
//     }
//     const networkChanged = (chainId) => {
//         console.log({ chainId });
//     };

//     useEffect(() => {
//         window.ethereum.on("chainChanged", networkChanged);
//         window.eth

//         return () => {
//             window.ethereum.removeListener("chainChanged", networkChanged);
//         };
//     }, []);
// }

const changeNetwork = async ({ networkName, setError }) => {
    try {
        if (!window.ethereum) throw new Error("No crypto wallet found");
        await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
                {
                    ...networks[networkName]
                }
            ]
        });
    } catch (err) {
        // setError(err.message);
    }
}