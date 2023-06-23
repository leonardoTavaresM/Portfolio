import { GlobalStyle } from "@/components/global/GlobalStyle";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  // Personalize o comportamento do componente App aqui
  // Adicione provedores de contexto, estilos globais, configurações, etc.

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />{" "}
    </>
  );
}

export default MyApp;
