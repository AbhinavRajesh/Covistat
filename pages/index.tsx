import type { InferGetStaticPropsType } from "next";

import Layout from "../components/Layout";
import DistrictTable from "../components/DistrictTable";
import GraphData from "../components/GraphData";

import { getData } from "../lib/getData";

const Index = ({
  lastUpdated,
  histories,
  summary,
  districtData,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Layout title="Covistats - Home" lastUpdated={lastUpdated}>
    <DistrictTable data={districtData} />
    <GraphData data={histories} total={summary.summary} today={summary.delta} />
  </Layout>
);

export const getStaticProps = async () => {
  const { lastUpdated, histories, summary, districtData } = await getData();

  return {
    props: {
      lastUpdated,
      histories,
      summary,
      districtData,
    },
  };
};

export default Index;
