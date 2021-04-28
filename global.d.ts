declare namespace Stats {
  type SummaryDelta = {
    hospital_obs: number;
    home_obs: number;
    total_obs: number;
    hospital_today: number;
    confirmed: number;
    recovered: number;
    deceased: number;
    active: number;
  };
  type Districts = {
    Alappuzha: SummaryDelta;
    Ernakulam: SummaryDelta;
    Idukki: SummaryDelta;
    Kannur: SummaryDelta;
    Kasargod: SummaryDelta;
    Kollam: SummaryDelta;
    Kottayam: SummaryDelta;
    Kozhikode: SummaryDelta;
    Malappuram: SummaryDelta;
    Palakkad: SummaryDelta;
    Pathanamthitta: SummaryDelta;
    Thiruvananthapuram: SummaryDelta;
    Thrissur: SummaryDelta;
    Wayanad: SummaryDelta;
  };
  type DistrictHistory = {
    summary: Districts;
    delta: Districts;
    date: string;
  };
  type SummaryHistory = {
    summary: SummaryDelta;
    delta: SummaryDelta;
    date: string;
  };
  type HistoriesJSON = {
    histories: DistrictHistory[];
    last_updated: string;
  };
  type Histories = SummaryHistory[];
  type DistrictHistories = DistrictHistory[];

  type DistrictSummary = {
    summary: Districts;
    delta: Districts;
    last_updated: string;
  };
}
