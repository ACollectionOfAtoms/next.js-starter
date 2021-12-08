import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/global.css";
import { ChakraProvider } from "@chakra-ui/react";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        {getLayout(<Component {...pageProps} />)}
      </QueryClientProvider>
    </ChakraProvider>
  );
}
