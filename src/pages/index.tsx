import Home from "@/templates/Home";
import { NextSeo } from "next-seo";

export default function Index() {
  return (
    <main>
      <NextSeo title="Portfolio - Leonardo" description="Meu Portfólio :)." />
      <Home />
    </main>
  );
}
