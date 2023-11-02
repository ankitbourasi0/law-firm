import "@/styles/globals.css";
import "../styles/homepage.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Layout >
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
