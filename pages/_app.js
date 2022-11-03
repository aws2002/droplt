import "../styles/main.scss";
import "../components/Skeleton/skeleton.scss"
import Layout from "../components/Layouts/Layout";
export default function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-bg_color text-white">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
