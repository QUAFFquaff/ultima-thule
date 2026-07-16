export type TripStop = {
  name: string;
  query: string;
  lat: number;
  lng: number;
  note: string;
  type?: "start" | "sight" | "stay";
};

export const tripStops: Record<number, TripStop[]> = {
  1: [
    { name: "凯夫拉维克机场 KEF", query: "Keflavik International Airport, Iceland", lat: 63.9978, lng: -22.6242, note: "取车后先确认保险、轮胎和油量。", type: "start" },
    { name: "雷克雅未克 Reykjavík", query: "Reykjavik, Iceland", lat: 64.1466, lng: -21.9426, note: "首日只做补给和轻量步行，把体力留给环岛。", type: "stay" }
  ],
  2: [
    { name: "雷克雅未克", query: "Reykjavik, Iceland", lat: 64.1466, lng: -21.9426, note: "从 101 市中心出发。", type: "start" },
    { name: "辛格维利尔 Þingvellir", query: "Thingvellir National Park, Iceland", lat: 64.2559, lng: -21.1299, note: "欧亚与北美板块裂谷，也是冰岛古议会所在地。" },
    { name: "盖歇尔 Geysir", query: "Geysir, Iceland", lat: 64.3103, lng: -20.302, note: "真正频繁喷发的是旁边的 Strokkur 间歇泉。" },
    { name: "黄金瀑布 Gullfoss", query: "Gullfoss, Iceland", lat: 64.3271, lng: -20.1199, note: "两级跌水切入峡谷，是黄金圈的压轴景观。" },
    { name: "塞尔福斯 Selfoss", query: "Selfoss, Iceland", lat: 63.9333, lng: -20.9989, note: "南岸最大的补给节点之一，适合在一号公路旁落脚。", type: "stay" }
  ],
  3: [
    { name: "塞尔福斯 Selfoss", query: "Selfoss, Iceland", lat: 63.9333, lng: -20.9989, note: "早点出发，为海岸天气留余量。", type: "start" },
    { name: "塞里雅兰瀑布 Seljalandsfoss", query: "Seljalandsfoss, Iceland", lat: 63.6156, lng: -19.9926, note: "条件允许时可绕到瀑布后方，地面湿滑。" },
    { name: "斯科加瀑布 Skógafoss", query: "Skogafoss, Iceland", lat: 63.532, lng: -19.5114, note: "落差约 60 米，晴天常能看到水雾彩虹。" },
    { name: "雷尼斯黑沙滩 Reynisfjara", query: "Reynisfjara Beach, Iceland", lat: 63.4057, lng: -19.0715, note: "玄武岩柱很经典，但必须远离突袭浪。" },
    { name: "维克 Vík", query: "Vik, Iceland", lat: 63.4186, lng: -19.006, note: "小镇补给方便，第二天向冰川区出发也顺路。", type: "stay" }
  ],
  4: [
    { name: "维克 Vík", query: "Vik, Iceland", lat: 63.4186, lng: -19.006, note: "今天车程长，尽量天亮后尽早出发。", type: "start" },
    { name: "斯卡夫塔山 Skaftafell", query: "Skaftafell, Iceland", lat: 64.016, lng: -16.9653, note: "瓦特纳冰川国家公园的重要徒步入口。" },
    { name: "杰古沙龙冰河湖 Jökulsárlón", query: "Jokulsarlon Glacier Lagoon, Iceland", lat: 64.0484, lng: -16.1797, note: "冰山随潮汐漂向海洋，活动需提前预约。" },
    { name: "钻石沙滩 Diamond Beach", query: "Diamond Beach, Iceland", lat: 64.0445, lng: -16.1788, note: "冰块散落黑沙滩，注意浪况与湿滑冰面。" },
    { name: "霍芬 Höfn", query: "Hofn, Iceland", lat: 64.2539, lng: -15.2122, note: "港口小镇服务完整，也是龙虾料理集中地。", type: "stay" }
  ],
  5: [
    { name: "霍芬 Höfn", query: "Hofn, Iceland", lat: 64.2539, lng: -15.2122, note: "进入东峡湾前加满油。", type: "start" },
    { name: "迪皮沃古尔 Djúpivogur", query: "Djupivogur, Iceland", lat: 64.6561, lng: -14.2859, note: "安静的东峡湾渔村，适合午餐和短暂停靠。" },
    { name: "布雷兹达斯维克 Breiðdalsvík", query: "Breiddalsvik, Iceland", lat: 64.792, lng: -14.006, note: "峡湾公路的自然休息点，视天气决定停留。" },
    { name: "埃伊尔斯塔济 Egilsstaðir", query: "Egilsstadir, Iceland", lat: 65.2669, lng: -14.3948, note: "东部服务中心，连住两晚可减少搬运行李。", type: "stay" }
  ],
  6: [
    { name: "埃伊尔斯塔济 Egilsstaðir", query: "Egilsstadir, Iceland", lat: 65.2669, lng: -14.3948, note: "轻装往返峡湾。", type: "start" },
    { name: "塞济斯菲厄泽 Seyðisfjörður", query: "Seydisfjordur, Iceland", lat: 65.2606, lng: -14.005, note: "彩虹街和彩色木屋之外，翻山路本身也很漂亮。" },
    { name: "埃伊尔斯塔济 Egilsstaðir", query: "Egilsstadir, Iceland", lat: 65.2669, lng: -14.3948, note: "回到同一住宿点，为次日长途恢复体力。", type: "stay" }
  ],
  7: [
    { name: "埃伊尔斯塔济 Egilsstaðir", query: "Egilsstadir, Iceland", lat: 65.2669, lng: -14.3948, note: "先确认高地边缘道路开放情况。", type: "start" },
    { name: "黛提瀑布 Dettifoss", query: "Dettifoss West Side, Iceland", lat: 65.8147, lng: -16.3846, note: "西岸 862 路通常更便于普通环岛车辆通行，仍需看实时路况。" },
    { name: "赫维尔地热区 Hverir", query: "Hverir, Iceland", lat: 65.6406, lng: -16.8093, note: "泥浆泉与硫气孔密集，只走标记步道。" },
    { name: "米湖 Mývatn", query: "Reykjahlid, Iceland", lat: 65.6035, lng: -17.0078, note: "住 Reykjahlíð 一带便于补给和次日出发。", type: "stay" }
  ],
  8: [
    { name: "米湖 Mývatn", query: "Reykjahlid, Iceland", lat: 65.6035, lng: -17.0078, note: "按观鲸班次倒推早餐和出发时间。", type: "start" },
    { name: "胡萨维克 Húsavík", query: "Husavik Harbor, Iceland", lat: 66.0449, lng: -17.3389, note: "冰岛代表性的观鲸港口，海上体感温度更低。" },
    { name: "众神瀑布 Goðafoss", query: "Godafoss, Iceland", lat: 65.6829, lng: -17.5502, note: "名字来自冰岛皈依基督教的历史传说。" },
    { name: "阿克雷里 Akureyri", query: "Akureyri, Iceland", lat: 65.6826, lng: -18.0907, note: "北部最大的城市，市中心可步行逛完。", type: "stay" }
  ],
  9: [
    { name: "阿克雷里 Akureyri", query: "Akureyri, Iceland", lat: 65.6826, lng: -18.0907, note: "长途日，上午不要塞进额外景点。", type: "start" },
    { name: "布伦迪欧斯 Blönduós", query: "Blonduos, Iceland", lat: 65.6599, lng: -20.2848, note: "一号公路上的可靠休息和补给点。" },
    { name: "博尔加内斯 Borgarnes", query: "Borgarnes, Iceland", lat: 64.5435, lng: -21.9264, note: "转入斯奈山前最后一个大型补给节点。" },
    { name: "格伦达菲厄泽 Grundarfjörður", query: "Grundarfjordur, Iceland", lat: 64.9215, lng: -23.2542, note: "位于半岛北岸中段，适合连住两晚。", type: "stay" }
  ],
  10: [
    { name: "格伦达菲厄泽", query: "Grundarfjordur, Iceland", lat: 64.9215, lng: -23.2542, note: "教会山清晨通常更从容。", type: "start" },
    { name: "萨克斯霍尔火山口 Saxhóll", query: "Saxholl Crater, Iceland", lat: 64.851, lng: -23.906, note: "短阶梯即可登顶，看半岛西侧火山地貌。" },
    { name: "沉船湾 Djúpalónssandur", query: "Djupalonssandur, Iceland", lat: 64.749, lng: -23.91, note: "黑卵石滩保留沉船遗迹，海浪危险。" },
    { name: "阿尔纳斯塔皮 Arnarstapi", query: "Arnarstapi, Iceland", lat: 64.768, lng: -23.624, note: "玄武岩海蚀崖与石桥步道。" },
    { name: "黑教堂 Búðakirkja", query: "Budakirkja, Iceland", lat: 64.8218, lng: -23.3841, note: "黑色木教堂与熔岩荒原形成强烈对比。" },
    { name: "海豹沙滩 Ytri Tunga", query: "Ytri Tunga, Iceland", lat: 64.891, lng: -23.689, note: "保持距离观察海豹，不下到湿滑礁石。" },
    { name: "格伦达菲厄泽", query: "Grundarfjordur, Iceland", lat: 64.9215, lng: -23.2542, note: "返回同一住宿，减少换酒店。", type: "stay" }
  ],
  11: [
    { name: "斯奈山半岛", query: "Grundarfjordur, Iceland", lat: 64.9215, lng: -23.2542, note: "离开半岛前加油。", type: "start" },
    { name: "雷克雅未克", query: "Reykjavik, Iceland", lat: 64.1466, lng: -21.9426, note: "可先放行李，再按预约时间去温泉。" },
    { name: "蓝湖 Blue Lagoon", query: "Blue Lagoon Iceland", lat: 63.8804, lng: -22.4495, note: "必须按预约和官方开放状态决定是否前往。" },
    { name: "雷克雅未克", query: "Reykjavik, Iceland", lat: 64.1466, lng: -21.9426, note: "回市区休息。", type: "stay" }
  ],
  12: [
    { name: "雷克雅未克", query: "Reykjavik, Iceland", lat: 64.1466, lng: -21.9426, note: "把今天当成天气缓冲日。", type: "start" },
    { name: "雷克雅内斯灯塔 Reykjanesviti", query: "Reykjanes Lighthouse, Iceland", lat: 63.8192, lng: -22.6803, note: "冰岛最早灯塔所在地附近，海岸风通常很强。" },
    { name: "贡努赫维尔 Gunnuhver", query: "Gunnuhver Hot Springs, Iceland", lat: 63.819, lng: -22.687, note: "强烈地热区，只走栈道并遵守封控。" },
    { name: "雷克雅未克", query: "Reykjavik, Iceland", lat: 64.1466, lng: -21.9426, note: "最后一晚整理行李和加油计划。", type: "stay" }
  ],
  13: [
    { name: "雷克雅未克", query: "Reykjavik, Iceland", lat: 64.1466, lng: -21.9426, note: "预留还车与机场手续时间。", type: "start" },
    { name: "凯夫拉维克机场 KEF", query: "Keflavik International Airport, Iceland", lat: 63.9978, lng: -22.6242, note: "还车前按租车要求加油并拍照。", type: "stay" }
  ]
};
