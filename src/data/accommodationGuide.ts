export type AccommodationStay = {
  name: string;
  locality: string;
  search: string;
  note?: string;
};

export type AccommodationTip = {
  area: string;
  why: string;
  tradeoff: string;
  stays: AccommodationStay[];
};

export const accommodationGuide: Record<number, AccommodationTip> = {
  0: {
    area: "Sandgerði · KEF 机场西侧",
    why: "新版 Excel 已录入 Cozy apartment near the airport，落地后直接在机场周边休息。",
    tradeoff: "“住哪里”列仍写雷克雅未克，但预订地址在 Sandgerði；页面按已订住宿展示并保留冲突提醒。",
    stays: [{ name: "Cozy apartment near the airport", locality: "Sandgerði 245", search: "Sandgerdi Iceland", note: "私人住宿：精确门牌和预订链接保留在 Excel，不在公开网站展示。" }]
  },
  1: {
    area: "Ólafsvík · 斯奈山半岛西北部",
    why: "已订 Apartment in Snæfellsnes，次日直接从斯奈山半岛向阿克雷里出发。",
    tradeoff: "Stykkishólmur 在新版 Excel 中标记为“可能不去了”，已不再作为住宿终点。",
    stays: [{ name: "Apartment in Snæfellsnes", locality: "Ólafsvík 355", search: "Olafsvik Iceland", note: "私人住宿：精确门牌和预订链接保留在 Excel。" }]
  },
  2: {
    area: "Akureyri 市中心",
    why: "Hotel Akureyri 位于市中心，便于长途抵达后的晚餐和次日早出发。",
    tradeoff: "当天 Hvítserkur 仍是可放弃支线，不应影响酒店入住。",
    stays: [{ name: "Hotel Akureyri", locality: "Hafnarstræti 67, Akureyri", search: "Hotel Akureyri Iceland" }]
  },
  3: {
    area: "Mývatn 湖畔",
    why: "Dimmuborgir Guesthouse 位于米湖东南岸，可衔接 18:00 米湖温泉和次日地热环线。",
    tradeoff: "酒店不在 Reykjahlíð 镇中心，晚餐、加油和温泉往返要按真实位置规划。",
    stays: [{ name: "Dimmuborgir Guesthouse", locality: "Geiteyjarströnd 1, Mývatn 660", search: "Dimmuborgir Guesthouse Iceland" }]
  },
  4: {
    area: "Hallormsstaður · Lagarfljót 湖东岸",
    why: "已订 Hotel Hallormsstadur，位于 Egilsstaðir 以南的森林与湖区。",
    tradeoff: "它不是 Egilsstaðir 镇中心；完成 Stuðlagil 后仍需继续向南开到酒店。",
    stays: [{ name: "Hotel Hallormsstadur", locality: "Hallormsstaður 701", search: "Hotel Hallormsstadur Iceland" }]
  },
  5: {
    area: "Höfn 周边 · 两组住宿",
    why: "新版 Excel 为同行人员录入两处已订住宿，页面同时保留，避免导航时互相走错。",
    tradeoff: "Nypugardar 在 Höfn 西侧乡间，Höfn Guesthouse 在镇内；出发和集合前要先确认各自车辆与房间。",
    stays: [
      { name: "Guesthouse Nypugardar", locality: "Nypugardar 781, Höfn", search: "Guesthouse Nypugardar Iceland" },
      { name: "Höfn Guesthouse", locality: "Hafnarbraut, Höfn 780", search: "Hofn Guesthouse Iceland" }
    ]
  },
  6: {
    area: "Höfn 与 Jökulsárlón 之间",
    why: "Hótel Smyrlabjörg 位于冰河湖以东约 34 km，适合衔接当天 11:20 快艇和次日 09:00 徒步。",
    tradeoff: "它不在冰河湖步行范围内，活动集合时间需要包含往返车程。",
    stays: [{ name: "Hótel Smyrlabjörg", locality: "Þjóðvegur 781, Hornafjörður", search: "Hotel Smyrlabjorg Iceland" }]
  },
  7: {
    area: "Kirkjubæjarklaustur / Road 208",
    why: "已订 Holiday House 7，位于 Skaftártunguvegur 一带，是冰川区前往南岸途中的住宿。",
    tradeoff: "Excel 的“住哪里”仍写 Vík，但实际预订不在 Vík 镇内；若当天继续去 Vík，会产生额外往返。",
    stays: [{ name: "Holiday House 7", locality: "Skaftártunguvegur / Road 208", search: "Skaftartunguvegur Road 208 Iceland", note: "私人住宿：精确门牌和 Airbnb 链接保留在 Excel。" }]
  },
  8: {
    area: "Selfoss 镇中心",
    why: "Bella Apartments & Rooms 位于 Selfoss 主街，南岸行程结束后补给方便。",
    tradeoff: "新版 Excel 已把 Gullfoss 与 Geysir 移到 Day 9，Day 8 可按时抵达。",
    stays: [{ name: "Bella Apartments & Rooms", locality: "Austurvegur 33-35, Selfoss 800", search: "Bella Apartments and Rooms Selfoss Iceland" }]
  },
  9: {
    area: "Reykjavík · Laugavegur",
    why: "Alda Hotel Reykjavik 位于市中心主街，黄金圈结束后可停车入住再步行。",
    tradeoff: "市中心停车与卸行李规则需按酒店通知执行。",
    stays: [{ name: "Alda Hotel Reykjavik", locality: "Laugavegur 66-68, Reykjavík", search: "Alda Hotel Reykjavik Iceland" }]
  },
  10: {
    area: "Ásbrú · KEF 机场附近",
    why: "Konvin Hotel 已订，适合 10 月 5 日晚还车后入住并衔接次日 07:40 航班。",
    tradeoff: "酒店不在航站楼步行范围内，确认酒店接驳或出租车方案。",
    stays: [{ name: "Konvin Hotel by Reykjavik Keflavik Airport", locality: "Keilisbraut 762, Reykjanesbær", search: "Konvin Hotel Keflavik Iceland" }]
  },
  11: {
    area: "无需住宿",
    why: "当天由 KEF 经伦敦返程。",
    tradeoff: "注意跨夜航班、转机机场和行李直挂规则。",
    stays: []
  }
};
