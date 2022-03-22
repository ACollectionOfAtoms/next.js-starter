import type { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
import type { NextComponentType } from "next";
import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/global.css";
import { ChakraProvider } from "@chakra-ui/react";

const queryClient = new QueryClient();
const App: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppLayoutProps) => {
  const getLayout = (Component.getLayout as any) || ((page) => page);
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        {getLayout(<Component {...pageProps} />)}
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default App;
