import { useState, useEffect } from "react";
import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";

interface DistrictTableProps {
  data: Stats.DistrictSummary;
}

interface TableData {
  key: number;
  district: string;
  confirmed: number;
  active: number;
  recovered: number;
  deceased: number;
  total_obs: number;
  home_obs: number;
  hospital_obs: number;
  hospital_today: number;
}

const DistrictTable = ({ data }: DistrictTableProps) => {
  const [districts, setDistricts] = useState<(keyof Stats.Districts)[]>([]);
  const [tableData, setTabledata] = useState<TableData[]>([]);
  const [sortedInfo, setSortedInfo] = useState({});

  useEffect(() => {
    const tempTableData: TableData[] = [];
    Object.keys(data.summary).map((district, key) => {
      tempTableData.push({
        key: key,
        district: district,
        confirmed: data.summary[district as keyof Stats.Districts].confirmed,
        active: data.summary[district as keyof Stats.Districts].active,
        recovered: data.summary[district as keyof Stats.Districts].recovered,
        deceased: data.summary[district as keyof Stats.Districts].deceased,
        total_obs: data.summary[district as keyof Stats.Districts].total_obs,
        home_obs: data.summary[district as keyof Stats.Districts].home_obs,
        hospital_obs:
          data.summary[district as keyof Stats.Districts].hospital_obs,
        hospital_today:
          data.summary[district as keyof Stats.Districts].hospital_today,
      });
    });
    setTabledata(tempTableData);
  }, []);

  const columns: ColumnsType<TableData> = [
    {
      title: "DISTRICT",
      width: 200,
      dataIndex: "district",
      key: "district",
      fixed: "left",
      sorter: (a, b) => a.district.localeCompare(b.district),
    },
    {
      title: "CONFIRMED",
      width: 130,
      dataIndex: "confirmed",
      key: "confirmed",
      sorter: (a, b) => a.confirmed - b.confirmed,
    },
    {
      title: "ACTIVE",
      dataIndex: "active",
      key: "active",
      width: 130,
      sorter: (a, b) => a.active - b.active,
    },
    {
      title: "RECOVERED",
      dataIndex: "recovered",
      key: "recovered",
      width: 130,
      sorter: (a, b) => a.recovered - b.recovered,
    },
    {
      title: "DEATHS",
      dataIndex: "deceased",
      key: "deceased",
      width: 130,
      sorter: (a, b) => a.deceased - b.deceased,
    },
    {
      title: "UNDER OBSERVATION",
      dataIndex: "total_obs",
      key: "total_obs",
      width: 150,
      sorter: (a, b) => a.total_obs - b.total_obs,
    },
    {
      title: "HOME ISOLATION",
      dataIndex: "home_obs",
      key: "home_obs",
      width: 150,
      sorter: (a, b) => a.home_obs - b.home_obs,
    },
    {
      title: "HOSPITAL ISOLATION",
      dataIndex: "hospital_obs",
      key: "hospital_obs",
      width: 150,
      sorter: (a, b) => a.hospital_obs - b.hospital_obs,
    },
    {
      title: "HOSPITALIZED TODAY",
      dataIndex: "hospital_today",
      key: "hospital_today",
      width: 150,
      sorter: (a, b) => a.hospital_today - b.hospital_today,
    },
  ];

  const handleChange = (pagination, _, sorter) => {
    setSortedInfo(sorter);
  };

  return (
    <>
      <p className="text-lg text-center font-bold m-5">District vise data</p>
      {districts && (
        <Table
          scroll={{ x: 800 }}
          columns={columns}
          dataSource={tableData}
          onChange={handleChange}
          pagination={false}
        />
      )}
    </>
  );
};

export default DistrictTable;
{
  /* <table className="rounded-t-lg m-5 w-full mx-auto bg-gray-800 overflow-scroll text-sm">
          <tr className="text-left border-b border-gray-300">
            <th className="px-4 py-3">DISTRICT</th>
            <th className="px-4 py-3">CONFIRMED</th>
            <th className="px-4 py-3">ACTIVE</th>
            <th className="px-4 py-3">RECOVERED</th>
            <th className="px-4 py-3">DEATHS</th>
            <th className="px-4 py-3">UNDER OBSERVATION</th>
            <th className="px-4 py-3">HOME ISOLATION</th>
            <th className="px-4 py-3">HOSPITAL ISOLATION</th>
            <th className="px-4 py-3">HOSPITALIZED TODAY</th>
          </tr>
          {districts.map((district) => (
            <tr className="bg-gray-700 border-b border-gray-600">
              <td className="px-4 py-3">{district}</td>
              <td className="px-4 py-3">{data.summary[district].confirmed}</td>
              <td className="px-4 py-3">{data.summary[district].active}</td>
              <td className="px-4 py-3">{data.summary[district].recovered}</td>
              <td className="px-4 py-3">{data.summary[district].deceased}</td>
              <td className="px-4 py-3">{data.summary[district].total_obs}</td>
              <td className="px-4 py-3">{data.summary[district].home_obs}</td>
              <td className="px-4 py-3">
                {data.summary[district].hospital_obs}
              </td>
              <td className="px-4 py-3">
                {data.summary[district].hospital_today}
              </td>
            </tr>
          ))}
        </table> */
}
