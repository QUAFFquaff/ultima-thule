export type ActivityBooking = {
  day?: number;
  title: string;
  status: "confirmed" | "considering";
  time?: string;
  cost?: string;
  note: string;
};

export const activityBookings: ActivityBooking[] = [
  { day: 3, title: "Húsavík 观鲸", status: "confirmed", time: "12:30", cost: "74,766 ISK", note: "集合：Hafnarstétt 7, Húsavík 640；海况原因仍可能取消。" },
  { day: 3, title: "米湖温泉", status: "confirmed", time: "18:00", cost: "33,660 ISK", note: "地址：Jarðbaðshólar, 660 Mývatn；从观鲸结束时间倒推行车。" },
  { day: 6, title: "Jökulsárlón 冰河湖快艇", status: "confirmed", time: "11:20", cost: "67,600 ISK", note: "集合：冰河湖河流东侧主停车场；关注天气取消邮件。" },
  { day: 7, title: "冰川徒步 6 小时", status: "confirmed", time: "09:00", cost: "7,207.78 RMB", note: "集合点：Jökulsárlón, Höfn 781；以订单邮件定位为准。" },
  { day: 9, title: "Þingvellir 浮潜", status: "considering", note: "Excel 尚未填写价格或确认状态。" },
  { title: "黑沙滩 ATV / 雪地摩托", status: "considering", note: "尚未确认。" },
  { title: "火山内部 / 活火山徒步", status: "considering", note: "尚未确认。" },
  { title: "骑马", status: "considering", note: "Excel 中仍为讨论项。" }
];
