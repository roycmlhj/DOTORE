import { InjectedConnector } from "@web3-react/injected-connector";

// export enum ConnectorNames {
//     Metamask = 'Metamask',
// }

// const POLLING_INTERVAL = 12000;
// const RPC_URLS: { [chainId: number]: string } = {
//     31221: process.env.REACT_APP_RPC_URL_31 as string,
// }

export const injected = new InjectedConnector({ supportedChainIds: [31221] });

// export const connectorsByName: { [connectorName in ConnectorNames]: any } = {
//     [ConnectorNames.Metamask]: injected,
// }

// const networks = {
//     ssafy: {
//         // 31221
//         // 0x79f5
//         chainId: `0x${Number(31221).toString(16)}`,
//         chainName: "SSAFY 테스트넷",
//         nativeCurrency: {
//             name: "SSF",
//             symbol: "SSF",
//             decimal: 31221,
//             // decimal: 18,
//         },
//         rpcUrls: ["http://20.196.209.2:8545"],
//         // blockExplorerUrls: [""]
//     }
// }