export type TripStop = {
  name: string;
  query: string;
  lat: number;
  lng: number;
  note: string;
  type?: "start" | "sight" | "stay";
};

const stop = (name: string, query: string, lat: number, lng: number, note: string, type?: TripStop["type"]): TripStop => ({ name, query, lat, lng, note, type });

export const tripStops: Record<number, TripStop[]> = {
  0: [
    stop("凯夫拉维克机场 KEF", "Keflavik International Airport Iceland", 63.9978, -22.6242, "两组航班均在 9 月 25 日抵达 KEF。", "start"),
    stop("Cozy apartment near the airport", "Sandgerdi Iceland", 64.0388, -22.7059, "已订私人住宿；精确门牌保留在 Excel。", "stay")
  ],
  1: [
    stop("KEF 机场附近", "Keflavik International Airport Iceland", 63.9978, -22.6242, "采购后开始顺时针环岛。", "start"),
    stop("博尔加内斯 Borgarnes", "Borgarnes Iceland", 64.5435, -21.9264, "雷市与斯奈山之间的吃饭、采购节点。"),
    stop("玄武岩壁 Gerðuberg", "Gerduberg Cliffs Iceland", 64.8606, -22.3633, "Excel 标注可仅路过。"),
    stop("海豹沙滩 Ytri Tunga", "Ytri Tunga Beach Iceland", 64.8031, -23.0805, "保持距离观察海豹。"),
    stop("黑教堂 Búðakirkja", "Budakirkja Iceland", 64.8218, -23.3841, "旁边 Hotel Búðir 可作为餐饮备选。"),
    stop("石桥 Gatklettur", "Gatklettur Arnarstapi Iceland", 64.766, -23.627, "Excel 写 Musagja/Arnarstapi Stone Bridge，步行时间待确认。"),
    stop("怪物海岸 Lóndrangar", "Londrangar View Point Iceland", 64.7324, -23.7839, "Excel 标注可不去。"),
    stop("沉船湾 Djúpalónssandur", "Djupalonssandur Iceland", 64.749, -23.91, "Excel 标注可不去，黑石滩注意海浪。"),
    stop("红教堂 Ingjaldshólskirkja", "Ingjaldsholskirkja Iceland", 64.9115, -23.8577, "Excel 中的“测视力房子”。"),
    stop("草帽山 Kirkjufell", "Kirkjufell Iceland", 64.9399, -23.3075, "斯奈山代表性山峰。"),
    stop("Apartment in Snæfellsnes · Ólafsvík", "Olafsvik Iceland", 64.8959, -23.7084, "已订私人住宿；Stykkishólmur 在新版 Excel 中可能取消。", "stay")
  ],
  2: [
    stop("Ólafsvík 住宿", "Olafsvik Iceland", 64.8959, -23.7084, "从已订斯奈山住宿出发，长途向北。", "start"),
    stop("犀牛石 Hvítserkur", "Hvitserkur Iceland", 65.6064, -20.6352, "途经可选；路况较难时可不去。"),
    stop("Hotel Akureyri", "Hotel Akureyri Iceland", 65.6814, -18.0899, "已订，位于阿克雷里市中心。", "stay")
  ],
  3: [
    stop("阿克雷里", "Akureyri Iceland", 65.6826, -18.0907, "早上出发。", "start"),
    stop("众神瀑布 Goðafoss", "Godafoss Iceland", 65.6829, -17.5502, "Excel 当前顺序为先瀑布。"),
    stop("胡萨维克 Húsavík", "Husavik Harbor Iceland", 66.0449, -17.3389, "12:30 观鲸已预订。"),
    stop("米湖温泉 Mývatn Nature Baths", "Myvatn Nature Baths Iceland", 65.6309, -16.8477, "18:00 温泉已预订。"),
    stop("Dimmuborgir Guesthouse", "Dimmuborgir Guesthouse Iceland", 65.6032, -16.9297, "已订，位于米湖东南岸。", "stay")
  ],
  4: [
    stop("米湖", "Reykjahlid Myvatn Iceland", 65.6035, -17.0078, "Excel 估算全部走完约 12 小时。", "start"),
    stop("伪火山口 Skútustaðagígar", "Skutustadagigar Iceland", 65.5714, -17.0337, "米湖南岸伪火山口群。"),
    stop("惠尔山 Hverfjall", "Hverfjall Iceland", 65.6051, -16.874, "登顶约 20 分钟；时间紧不绕完整一圈。"),
    stop("硫磺泉 Hverir", "Hverir Iceland", 65.6406, -16.8093, "只走标记步道。"),
    stop("克拉布拉火山 Krafla", "Krafla Iceland", 65.7142, -16.7303, "属于当天待取舍点位。"),
    stop("黛提瀑布 Dettifoss", "Dettifoss West Side Iceland", 65.8147, -16.3846, "Excel 推荐西岸 862 号路，仍需看实时路况。"),
    stop("Stuðlagil 玄武岩峡谷", "Studlagil Canyon Iceland", 65.1623, -15.3081, "当天长线中的重要取舍点。"),
    stop("埃伊尔斯塔济 Egilsstaðir", "Egilsstadir Iceland", 65.2669, -14.3948, "东部补给节点；酒店不在镇内。"),
    stop("Hotel Hallormsstadur", "Hotel Hallormsstadur Iceland", 65.0925, -14.7416, "已订，位于 Lagarfljót 湖东岸。", "stay")
  ],
  5: [
    stop("Hotel Hallormsstadur", "Hotel Hallormsstadur Iceland", 65.0925, -14.7416, "从已订酒店出发。", "start"),
    stop("埃伊尔斯塔济", "Egilsstadir Iceland", 65.2669, -14.3948, "补给后再决定是否走塞济斯菲厄泽支线。"),
    stop("塞济斯菲厄泽 Seyðisfjörður", "Seydisfjordur Iceland", 65.2606, -14.005, "彩虹街、彩色木屋；属于折返支线。"),
    stop("Hvalnes 灯塔", "Hvalnes Lighthouse Iceland", 64.4068, -14.5488, "Excel 的东部海岸点。"),
    stop("Hvalnes 自然保护区海滩", "Hvalnes Nature Reserve Beach Iceland", 64.4059, -14.5519, "Excel 评价为人少、景观壮观。"),
    stop("蝙蝠山与维京村 Vestrahorn", "Vestrahorn Viking Village Iceland", 64.2761, -14.9498, "Excel 写“蝙蝠山 viking village”。"),
    stop("Höfn Guesthouse", "Hofn Guesthouse Iceland", 64.2516, -15.2114, "同行一组已订镇内住宿。", "stay"),
    stop("Guesthouse Nypugardar", "Guesthouse Nypugardar Iceland", 64.2617, -15.4391, "同行另一组已订乡间住宿。", "stay")
  ],
  6: [
    stop("Höfn 两组住宿", "Hofn Iceland", 64.2539, -15.2122, "分别从 Nypugardar 与 Höfn Guesthouse 出发，在活动前会合。", "start"),
    stop("杰古沙龙冰河湖 Jökulsárlón", "Jokulsarlon Glacier Lagoon Iceland", 64.0484, -16.1797, "11:20 快艇已预订；关注取消邮件。"),
    stop("钻石沙滩 Diamond Beach", "Diamond Beach Iceland", 64.0445, -16.1788, "与冰河湖相邻。"),
    stop("Hótel Smyrlabjörg", "Hotel Smyrlabjorg Iceland", 64.2173, -15.7179, "已订，位于冰河湖以东约 34 km。", "stay")
  ],
  7: [
    stop("Hótel Smyrlabjörg", "Hotel Smyrlabjorg Iceland", 64.2173, -15.7179, "提前出发前往 09:00 徒步集合点。", "start"),
    stop("冰川徒步集合点 Jökulsárlón", "Jokulsarlon Glacier Lagoon Iceland", 64.0484, -16.1797, "09:00 徒步已预订；以订单邮件定位为准。"),
    stop("羽毛峡谷 Fjaðrárgljúfur", "Fjadrargljufur Iceland", 63.7726, -18.1737, "徒步结束后视时间决定停留。"),
    stop("Eldhraun 苔藓熔岩原", "Eldhraun Lava Field Iceland", 63.6936, -18.2201, "沿途可见，不必特地导航；请勿踩踏苔藓。"),
    stop("维克 Vík", "Vik Iceland", 63.4186, -19.006, "Excel 仍列为当日景点，但实际住宿不在镇内。"),
    stop("Holiday House 7 · Road 208", "Skaftartunguvegur Road 208 Iceland", 63.788, -18.057, "已订私人住宿；去 Vík 后需要回到住宿方向。", "stay")
  ],
  8: [
    stop("Holiday House 7 · Road 208", "Skaftartunguvegur Road 208 Iceland", 63.788, -18.057, "从已订住宿出发。", "start"),
    stop("维克 Vík", "Vik Iceland", 63.4186, -19.006, "进入南岸主线。"),
    stop("雷尼斯黑沙滩 Reynisfjara", "Reynisfjara Beach Iceland", 63.4057, -19.0715, "警惕突袭浪，不要背对大海。"),
    stop("Loftsalahellir Cave", "Loftsalahellir Cave Iceland", 63.422, -19.152, "Excel 标注为拍照洞穴。"),
    stop("斯科加瀑布 Skógafoss", "Skogafoss Iceland", 63.532, -19.5114, "旁边可安排吃饭。"),
    stop("塞里雅兰瀑布 Seljalandsfoss", "Seljalandsfoss Iceland", 63.6156, -19.9926, "瀑布周边湿滑。"),
    stop("Bella Apartments & Rooms", "Bella Apartments and Rooms Selfoss Iceland", 63.9373, -20.9919, "已订，位于 Selfoss 镇中心。", "stay")
  ],
  9: [
    stop("Bella Apartments & Rooms", "Bella Apartments and Rooms Selfoss Iceland", 63.9373, -20.9919, "从已订住宿出发。", "start"),
    stop("黄金瀑布 Gullfoss", "Gullfoss Iceland", 64.3271, -20.1199, "新版 Excel 已放到 Day 9。"),
    stop("盖歇尔 Geysir", "Geysir Iceland", 64.3103, -20.302, "Excel 连续写了两次，导航中透明去重一次。"),
    stop("蓝瀑布 Brúarfoss", "Bruarfoss Iceland", 64.2642, -20.5159, "黄金圈支线瀑布。"),
    stop("凯瑞斯火山口湖 Kerið", "Kerid Crater Iceland", 64.041, -20.8846, "火山口湖。"),
    stop("辛格韦德利 Þingvellir", "Thingvellir National Park Iceland", 64.2559, -21.1299, "是否浮潜仍待确认。"),
    stop("Alda Hotel Reykjavik", "Alda Hotel Reykjavik Iceland", 64.144, -21.9211, "已订，位于 Laugavegur。", "stay")
  ],
  10: [
    stop("雷克雅未克", "Reykjavik Iceland", 64.1466, -21.9426, "最后完整游览日。", "start"),
    stop("雷克雅内斯灯塔 Reykjanesviti", "Reykjanes Lighthouse Iceland", 63.8192, -22.6803, "雷克雅内斯半岛点位。"),
    stop("半岛黑沙滩 Valahnúkamöl", "Valahnukamol Reykjanes Iceland", 63.8128, -22.7163, "按 Excel 的 Reykjanes Black Sand Beach 标记。"),
    stop("特约宁湖 Tjörnin", "Tjornin Reykjavik Iceland", 64.1445, -21.9423, "雷克雅未克市区。"),
    stop("哈尔格林姆教堂 Hallgrímskirkja", "Hallgrimskirkja Iceland", 64.1418, -21.9267, "Excel 推荐登顶。"),
    stop("彩虹街 Skólavörðustígur", "Skolavordustigur Reykjavik Iceland", 64.1441, -21.9299, "市区步行点。"),
    stop("Konvin Hotel", "Konvin Hotel Keflavik Iceland", 63.9729, -22.5765, "已订；晚上还车后入住机场附近。", "stay")
  ],
  11: [
    stop("凯夫拉维克机场 KEF", "Keflavik International Airport Iceland", 63.9978, -22.6242, "07:40 起飞，经伦敦返回北京。", "start")
  ]
};
