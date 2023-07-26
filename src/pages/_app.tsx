import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import AOS from "aos";
import { useEffect } from "react";

import "aos/dist/aos.css";
const inter = Inter({ subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-out",
      once: false,
      offset: 100,
      delay: 0,
      mirror: true,
    });
  }, []);
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
