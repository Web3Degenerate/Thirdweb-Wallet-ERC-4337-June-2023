import type { AppProps } from "next/app";
import { ThirdwebProvider, smartWallet, metamaskWallet, localWallet } from "@thirdweb-dev/react";
// import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { API_KEY, FACTORY_ADDRESS } from "../constant/addresses";


// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    
      <ThirdwebProvider
        // clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
        clientId={API_KEY}

        activeChain={activeChain}
        supportedWallets={[
          smartWallet({
            factoryAddress: FACTORY_ADDRESS,
            // thirdwebApiKey: API_KEY,
            gasless: true,
            // personalWallets:["metamask", "walletconnect", "walletlink"]
            personalWallets:[
                metamaskWallet(),
                localWallet()
            ]
          })
        ]}
      >
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>

      </ThirdwebProvider>
  );
}

export default MyApp;
