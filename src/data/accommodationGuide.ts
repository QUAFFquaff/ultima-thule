export type AccommodationTip = {
  area: string;
  why: string;
  tradeoff: string;
  search: string;
};

export const accommodationGuide: Record<number, AccommodationTip> = {
  0: { area: "KEF 机场附近（Excel 待确认）", why: "Excel 写明大家住机场酒店，并优先考虑 Aurora Hotel。", tradeoff: "同一行又写了雷克雅未克，且提车时间有 25 日晚与 26 日早两个版本；页面保留冲突。", search: "hotels near Keflavik International Airport Iceland" },
  1: { area: "Stykkishólmur 斯蒂基斯霍尔米", why: "Excel 指定入住“白日梦想家小镇”，也是次日向阿克雷里出发的起点。", tradeoff: "Day 1 点位很多，优先选择可较晚入住且带停车位的住宿。", search: "hotels Stykkisholmur Iceland" },
  2: { area: "Akureyri 阿克雷里", why: "Excel 当前计划直接住阿克雷里，餐饮和补给集中。", tradeoff: "表中也讨论过继续开到胡萨维克，但没有作为当前住宿落点。", search: "hotels Akureyri Iceland parking" },
  3: { area: "Mývatn 米湖周边", why: "观鲸结束后前往米湖，便于晚上泡温泉并衔接次日地热区。", tradeoff: "Excel 提到 Vogafjós Farm Resort；是否预订仍以实际订单为准。", search: "hotels Myvatn Iceland" },
  4: { area: "Egilsstaðir 埃伊尔斯塔济", why: "Excel 推荐东部服务中心落脚，避开塞济斯菲厄泽进出和补给不便。", tradeoff: "当天点位非常密集，晚到风险较高。", search: "hotels Egilsstadir Iceland" },
  5: { area: "Höfn 霍芬附近", why: "Excel 写明霍芬附近已经预订，且为分开的两家酒店。", tradeoff: "页面只标住宿区域，不推断或公开具体酒店订单。", search: "hotels Hofn Iceland" },
  6: { area: "Jökulsárlón 冰河湖附近", why: "Excel 写明已订，可衔接快艇和次日冰川徒步。", tradeoff: "快艇可能临时取消，注意订单邮件。", search: "hotels near Jokulsarlon Glacier Lagoon Iceland" },
  7: { area: "Vík 维克", why: "冰川徒步后沿南岸向西，Excel 指定在维克入住。", tradeoff: "徒步约 6 小时，当天峡谷停留要服从集合和结束时间。", search: "hotels Vik Iceland" },
  8: { area: "Selfoss 塞尔福斯", why: "Excel 指定南岸瀑布之后在塞尔福斯落脚。", tradeoff: "表内也出现“间歇泉附近”的想法，但当前住宿列仍为塞尔福斯。", search: "hotels Selfoss Iceland" },
  9: { area: "Reykjavík 雷克雅未克", why: "完成黄金圈后回到首都，方便次日市区和雷克雅内斯半岛。", tradeoff: "市中心停车条件差异较大，订房时核对停车。", search: "hotels Reykjavik Iceland parking" },
  10: { area: "KEF 机场附近", why: "Excel 写明 10 月 5 日晚还车并住机场附近，服务次日 07:40 航班。", tradeoff: "还车、加油和酒店接驳时间需要按租车订单确认。", search: "hotels near Keflavik Airport Iceland" },
  11: { area: "无需住宿", why: "当天由 KEF 经伦敦返程。", tradeoff: "注意跨夜航班和行李直挂规则。", search: "Keflavik International Airport Iceland" }
};
