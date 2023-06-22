import Layout from "../components/Layout";
import { useRouter } from "next/router";
import RightSection from "../components/RightSection";

export default function Goerli() {
  const router = useRouter();
  const testnet = router.pathname.slice(1);
  return (
    <>
      <Layout>
        <RightSection testnet={testnet} />
      </Layout>
    </>
  );
}
