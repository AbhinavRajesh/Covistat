export const getHistories = async (): Promise<Stats.HistoriesJSON> => {
  const histories = await (
    await fetch("https://keralastats.coronasafe.live/histories.json")
  ).json();
  return histories;
};

export const getSummary = async (): Promise<Stats.SummaryHistory> => {
  const summary = await (
    await fetch("https://keralastats.coronasafe.live/summary.json")
  ).json();
  return summary;
};

export const getDistrictData = async (): Promise<Stats.DistrictSummary> => {
  const districtData = await (
    await fetch("https://keralastats.coronasafe.live/latest.json")
  ).json();
  return districtData;
};

export const getData = async (): Promise<{
  lastUpdated: string;
  histories: Stats.DistrictHistories;
  summary: Stats.SummaryHistory;
  districtData: Stats.DistrictSummary;
}> => {
  const { last_updated, histories: histories } = await getHistories();
  const summary = await getSummary();
  const districtData = await getDistrictData();
  return {
    lastUpdated: last_updated,
    histories,
    summary,
    districtData,
  };
};
