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
  const [tableData, setTabledata] = useState<TableData[]>([]);
  const [columns, setColumns] = useState<ColumnsType<TableData>>([]);

  useEffect(() => {
    if (window) {
      const columns: ColumnsType<TableData> = [
        {
          title: "DISTRICT",
          width: window.innerWidth > 500 ? 200 : 130,
          dataIndex: "district",
          key: "district",
          fixed: "left",
          sorter: (a, b) => a.district.localeCompare(b.district),
          ellipsis: true,
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
          width: window.innerWidth > 500 ? 150 : 130,
          sorter: (a, b) => a.total_obs - b.total_obs,
        },
        {
          title: "HOME ISOLATION",
          dataIndex: "home_obs",
          key: "home_obs",
          width: window.innerWidth > 500 ? 150 : 130,
          sorter: (a, b) => a.home_obs - b.home_obs,
        },
        {
          title: "HOSPITAL ISOLATION",
          dataIndex: "hospital_obs",
          key: "hospital_obs",
          width: window.innerWidth > 500 ? 150 : 130,
          sorter: (a, b) => a.hospital_obs - b.hospital_obs,
        },
        {
          title: "HOSPITALIZED TODAY",
          dataIndex: "hospital_today",
          key: "hospital_today",
          width: window.innerWidth > 500 ? 150 : 140,
          sorter: (a, b) => a.hospital_today - b.hospital_today,
        },
      ];
      setColumns(columns);
    }
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

  return (
    <>
      <h1 className="text-lg md:text-xl text-center font-bold my-8 primary-color">
        District wise COVID-19 cases
      </h1>
      <Table
        scroll={{ x: 800 }}
        columns={columns}
        dataSource={tableData}
        pagination={false}
        loading={tableData.length === 0}
      />
    </>
  );
};

export default DistrictTable;
