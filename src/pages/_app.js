import "@/styles/globals.css";
import { DefaultSeo } from 'next-seo';
import { Inter } from "next/font/google";
import nextSeoConfig from "../../next-seo.config";
const inter = Inter({ subsets: ['latin'] })



export default function App({ Component, pageProps }) {
  return (
   
    <main className={inter.className}>
      <DefaultSeo {...nextSeoConfig} />
      <Component {...pageProps} />
    </main>

  )
}
