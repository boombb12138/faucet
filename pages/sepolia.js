import { useRouter } from "next/router";
import Layout from "../components/Layout";
import RightSection from "../components/RightSection";

export default function Sepolia() {
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
