export type TripCost = {
  category: "住宿" | "活动" | "交通";
  title: string;
  date: string;
  amount: number;
  currency: "RMB" | "ISK";
};

export const tripCosts: TripCost[] = [
  { category: "交通", title: "租车", date: "全程", amount: 11621.92, currency: "RMB" },
  { category: "活动", title: "冰川徒步", date: "10.02", amount: 7207.78, currency: "RMB" },
  { category: "活动", title: "米湖温泉", date: "09.28", amount: 33660, currency: "ISK" },
  { category: "活动", title: "冰河湖快艇", date: "10.01", amount: 67600, currency: "ISK" },
  { category: "活动", title: "Húsavík 观鲸", date: "09.28", amount: 74766, currency: "ISK" },
  { category: "住宿", title: "Hotel Akureyri", date: "09.27", amount: 3350.62, currency: "RMB" },
  { category: "住宿", title: "Dimmuborgir Guesthouse", date: "09.28", amount: 3372.96, currency: "RMB" },
  { category: "住宿", title: "Hotel Hallormsstadur", date: "09.29", amount: 3801.81, currency: "RMB" },
  { category: "住宿", title: "Guesthouse Nypugardar", date: "09.30", amount: 1216.6, currency: "RMB" },
  { category: "住宿", title: "Höfn Guesthouse", date: "09.30", amount: 1130.62, currency: "RMB" },
  { category: "住宿", title: "Hótel Smyrlabjörg", date: "10.01", amount: 3803.12, currency: "RMB" },
  { category: "住宿", title: "Alda Hotel Reykjavik", date: "10.04", amount: 2837.7, currency: "RMB" }
];

export const missingCostItems = [
  "09.25 Cozy apartment near the airport",
  "09.26 Apartment in Snæfellsnes",
  "10.02 Holiday House 7",
  "10.03 Bella Apartments & Rooms",
  "10.05 Konvin Hotel"
];
