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
    stop("机场附近酒店", "Aurora Hotel at Reykjavik-Keflavik Airport Iceland", 63.999, -22.6232, "Excel 优先写了机场旁 Aurora Hotel；最终酒店仍待确认。", "stay")
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
    stop("斯蒂基斯霍尔米 Stykkishólmur", "Stykkisholmur Iceland", 65.0743, -22.7303, "“白日梦想家小镇”，今晚住宿。", "stay")
  ],
  2: [
    stop("斯蒂基斯霍尔米", "Stykkisholmur Iceland", 65.0743, -22.7303, "长途向北，Excel 估计约 5-6 小时。", "start"),
    stop("犀牛石 Hvítserkur", "Hvitserkur Iceland", 65.6064, -20.6352, "途经可选；路况较难时可不去。"),
    stop("阿克雷里 Akureyri", "Akureyri Iceland", 65.6826, -18.0907, "北部主要城市，今晚住宿。", "stay")
  ],
  3: [
    stop("阿克雷里", "Akureyri Iceland", 65.6826, -18.0907, "早上出发。", "start"),
    stop("众神瀑布 Goðafoss", "Godafoss Iceland", 65.6829, -17.5502, "Excel 当前顺序为先瀑布。"),
    stop("胡萨维克 Húsavík", "Husavik Harbor Iceland", 66.0449, -17.3389, "计划参加下午观鲸团，需提前预订。"),
    stop("米湖 Mývatn", "Reykjahlid Myvatn Iceland", 65.6035, -17.0078, "晚上泡米湖，今晚住宿。", "stay")
  ],
  4: [
    stop("米湖", "Reykjahlid Myvatn Iceland", 65.6035, -17.0078, "Excel 估算全部走完约 12 小时。", "start"),
    stop("伪火山口 Skútustaðagígar", "Skutustadagigar Iceland", 65.5714, -17.0337, "米湖南岸伪火山口群。"),
    stop("惠尔山 Hverfjall", "Hverfjall Iceland", 65.6051, -16.874, "登顶约 20 分钟；时间紧不绕完整一圈。"),
    stop("硫磺泉 Hverir", "Hverir Iceland", 65.6406, -16.8093, "只走标记步道。"),
    stop("克拉布拉火山 Krafla", "Krafla Iceland", 65.7142, -16.7303, "属于当天待取舍点位。"),
    stop("黛提瀑布 Dettifoss", "Dettifoss West Side Iceland", 65.8147, -16.3846, "Excel 推荐西岸 862 号路，仍需看实时路况。"),
    stop("Stuðlagil 玄武岩峡谷", "Studlagil Canyon Iceland", 65.1623, -15.3081, "当天长线中的重要取舍点。"),
    stop("埃伊尔斯塔济 Egilsstaðir", "Egilsstadir Iceland", 65.2669, -14.3948, "东部中转小镇，今晚住宿。", "stay")
  ],
  5: [
    stop("埃伊尔斯塔济", "Egilsstadir Iceland", 65.2669, -14.3948, "先确认塞济斯菲厄泽折返是否合适。", "start"),
    stop("塞济斯菲厄泽 Seyðisfjörður", "Seydisfjordur Iceland", 65.2606, -14.005, "彩虹街、彩色木屋；属于折返支线。"),
    stop("Hvalnes 灯塔", "Hvalnes Lighthouse Iceland", 64.4068, -14.5488, "Excel 的东部海岸点。"),
    stop("Hvalnes 自然保护区海滩", "Hvalnes Nature Reserve Beach Iceland", 64.4059, -14.5519, "Excel 评价为人少、景观壮观。"),
    stop("蝙蝠山与维京村 Vestrahorn", "Vestrahorn Viking Village Iceland", 64.2761, -14.9498, "Excel 写“蝙蝠山 viking village”。"),
    stop("霍芬 Höfn", "Hofn Iceland", 64.2539, -15.2122, "今晚住霍芬附近已订住宿。", "stay")
  ],
  6: [
    stop("霍芬", "Hofn Iceland", 64.2539, -15.2122, "从已订住宿出发。", "start"),
    stop("杰古沙龙冰河湖 Jökulsárlón", "Jokulsarlon Glacier Lagoon Iceland", 64.0484, -16.1797, "冰河湖快艇集合区域；关注取消邮件。"),
    stop("钻石沙滩 Diamond Beach", "Diamond Beach Iceland", 64.0445, -16.1788, "与冰河湖相邻。"),
    stop("冰河湖附近住宿", "hotels near Jokulsarlon Glacier Lagoon Iceland", 64.071, -16.212, "Excel 写明已订。", "stay")
  ],
  7: [
    stop("冰川徒步集合区域", "Skaftafell glacier hike meeting point Iceland", 64.016, -16.9653, "约 6 小时，集合点以订单邮件为准。", "start"),
    stop("羽毛峡谷 Fjaðrárgljúfur", "Fjadrargljufur Iceland", 63.7726, -18.1737, "徒步结束后视时间决定停留。"),
    stop("Eldhraun 苔藓熔岩原", "Eldhraun Lava Field Iceland", 63.6936, -18.2201, "沿途可见，不必特地导航；请勿踩踏苔藓。"),
    stop("维克 Vík", "Vik Iceland", 63.4186, -19.006, "小镇高处可俯瞰，今晚住宿。", "stay")
  ],
  8: [
    stop("维克", "Vik Iceland", 63.4186, -19.006, "开始向西走南岸。", "start"),
    stop("雷尼斯黑沙滩 Reynisfjara", "Reynisfjara Beach Iceland", 63.4057, -19.0715, "警惕突袭浪，不要背对大海。"),
    stop("Loftsalahellir Cave", "Loftsalahellir Cave Iceland", 63.422, -19.152, "Excel 标注为拍照洞穴。"),
    stop("斯科加瀑布 Skógafoss", "Skogafoss Iceland", 63.532, -19.5114, "旁边可安排吃饭。"),
    stop("塞里雅兰瀑布 Seljalandsfoss", "Seljalandsfoss Iceland", 63.6156, -19.9926, "瀑布周边湿滑。"),
    stop("黄金瀑布 Gullfoss", "Gullfoss Iceland", 64.3271, -20.1199, "当前列在 Day 8，也保留改到 Day 9 的讨论。"),
    stop("盖歇尔 Geysir", "Geysir Iceland", 64.3103, -20.302, "当前列在 Day 8，也保留改到 Day 9 的讨论。"),
    stop("塞尔福斯 Selfoss", "Selfoss Iceland", 63.9333, -20.9989, "今晚住宿。", "stay")
  ],
  9: [
    stop("塞尔福斯", "Selfoss Iceland", 63.9333, -20.9989, "从南部中转镇出发。", "start"),
    stop("盖歇尔 Geysir", "Geysir Iceland", 64.3103, -20.302, "Excel 在 Day 9 再次列出，保留原计划重复。"),
    stop("蓝瀑布 Brúarfoss", "Bruarfoss Iceland", 64.2642, -20.5159, "黄金圈支线瀑布。"),
    stop("凯瑞斯火山口湖 Kerið", "Kerid Crater Iceland", 64.041, -20.8846, "火山口湖。"),
    stop("辛格韦德利 Þingvellir", "Thingvellir National Park Iceland", 64.2559, -21.1299, "是否浮潜仍待确认。"),
    stop("雷克雅未克 Reykjavík", "Reykjavik Iceland", 64.1466, -21.9426, "今晚回到首都。", "stay")
  ],
  10: [
    stop("雷克雅未克", "Reykjavik Iceland", 64.1466, -21.9426, "最后完整游览日。", "start"),
    stop("雷克雅内斯灯塔 Reykjanesviti", "Reykjanes Lighthouse Iceland", 63.8192, -22.6803, "雷克雅内斯半岛点位。"),
    stop("半岛黑沙滩 Valahnúkamöl", "Valahnukamol Reykjanes Iceland", 63.8128, -22.7163, "按 Excel 的 Reykjanes Black Sand Beach 标记。"),
    stop("特约宁湖 Tjörnin", "Tjornin Reykjavik Iceland", 64.1445, -21.9423, "雷克雅未克市区。"),
    stop("哈尔格林姆教堂 Hallgrímskirkja", "Hallgrimskirkja Iceland", 64.1418, -21.9267, "Excel 推荐登顶。"),
    stop("彩虹街 Skólavörðustígur", "Skolavordustigur Reykjavik Iceland", 64.1441, -21.9299, "市区步行点。"),
    stop("KEF 机场附近", "Keflavik International Airport Iceland", 63.9978, -22.6242, "晚上还车并住机场附近。", "stay")
  ],
  11: [
    stop("凯夫拉维克机场 KEF", "Keflavik International Airport Iceland", 63.9978, -22.6242, "07:40 起飞，经伦敦返回北京。", "start")
  ]
};
