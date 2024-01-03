import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";

//
type ComponentWithLayout = {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};
//

export default function App({ Component, pageProps }: AppProps) {
  const getLayout =
    (Component as ComponentWithLayout).getLayout || ((page) => page);
  return (
    <SessionProvider session={pageProps.session}>
      <NextUIProvider>{getLayout(<Component {...pageProps} />)}</NextUIProvider>
    </SessionProvider>
  );
}
