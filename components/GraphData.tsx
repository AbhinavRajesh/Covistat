import { useEffect, useState } from "react";

import Card from "./Card";

interface GraphDataProps {
  data: Stats.DistrictHistories;
  total: Stats.SummaryDelta;
  today: Stats.SummaryDelta;
}

interface Data {
  hospital_obs: number;
  home_obs: number;
  total_obs: number;
  hospital_today: number;
  confirmed: number;
  recovered: number;
  deceased: number;
  active: number;
  date: string;
}

const GraphData = ({ data, total, today }: GraphDataProps) => {
  const [totalData, setTotalData] = useState<Data[]>([]);
  useEffect(() => {
    let tempTotalData: Data[] = [];
    data.map((eachDate) => {
      let confirmed = 0,
        recovered = 0,
        active = 0,
        deceased = 0,
        total_obs = 0,
        hospital_obs = 0,
        home_obs = 0,
        hospital_today = 0;
      Object.values(eachDate.summary).map((d) => {
        confirmed += d.confirmed;
        recovered += d.recovered;
        active += d.active;
        deceased += d.deceased;
        total_obs += d.total_obs;
        hospital_obs += d.hospital_obs;
        home_obs += d.home_obs;
        hospital_today += d.hospital_today;
      });
      tempTotalData.push({
        confirmed,
        recovered,
        active,
        deceased,
        home_obs,
        hospital_obs,
        hospital_today,
        total_obs,
        date: eachDate.date,
      });
    });
    setTotalData(tempTotalData);
  }, []);

  const getTitle = (name: string) => {
    let title;
    if (name.split("_").length > 1) {
      if (name.split("_")[1] === "obs") {
        title =
          name.split("_")[0][0].toUpperCase() +
          name.split("_")[0].slice(1) +
          (name.split("_")[0] === "total" ? " Observation" : " Isolation");
      } else {
        title = "Hospitalized Today";
      }
    } else {
      if (name === "deceased") {
        title = "Deaths";
      } else {
        title = name[0].toUpperCase() + name.slice(1);
      }
    }
    return title;
  };

  return (
    <div>
      <h1 className="text-white font-semibold primary-color text-lg md:text-xl my-8 flex justify-center">
        Stats
      </h1>
      <div className="flex flex-wrap">
        {totalData.length > 1 &&
          Object.keys(totalData[0]).map((d) => {
            let title = getTitle(d);
            if (d === "date") return;
            return (
              <Card
                title={title}
                labels={totalData.map(({ date }) => date)}
                data={totalData.map((disp) => disp[d as keyof Data])}
                total={total[d as keyof Stats.SummaryDelta]}
                today={today[d as keyof Stats.SummaryDelta]}
              />
            );
          })}
      </div>
    </div>
  );
};

export default GraphData;
