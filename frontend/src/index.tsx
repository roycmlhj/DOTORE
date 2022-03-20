import { ExternalProvider, Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider, createWeb3ReactRoot } from "@web3-react/core";
import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import App from "./App";

// import { Provider } from 'react-redux'
// import Blocklist from './components/Blocklist'
// import { NetworkContextName } from './constants/misc'
import { NetworkContextName } from "./constant/misc";
// import store from './state'
// import ApplicationUpdater from './state/application/updater'
// import ListsUpdater from './state/lists/updater'
// import LogsUpdater from './state/logs/updater'
// import TransactionUpdater from './state/transactions/updater'
// import UserUpdater from './state/user/updater'
// import ThemeProvider, { ThemedGlobalStyle } from './theme'
// import RadialGradientByChainUpdater from './theme/RadialGradientByChainUpdater'
import getLibrary from "./utils/getLibrary";
// export const NetworkContextName = 'NETWORK';
// const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName);

if (!!window.ethereum) {
  window.ethereum.autoRefreshOnNetworkChange = false
}


// function getLibrary(provide: ExternalProvider) {
//   const library = new Web3Provider(provide, "any");
//   return library;
// }

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <Web3ReactProvider getLibrary={getLibrary}>
      {/* <Web3ProviderNetwork getLibrary={getLibrary}> */}
      <RecoilRoot>
        <App />
      </RecoilRoot>
      {/* </Web3ProviderNetwork> */}
    </Web3ReactProvider>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// if (process.env.REACT_APP_SERVICE_WORKER !== 'false') {
//   serviceWorkerRegistration.register()
// }