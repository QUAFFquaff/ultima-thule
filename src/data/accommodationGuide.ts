export type AccommodationTip = {
  area: string;
  why: string;
  tradeoff: string;
  search: string;
};

export const accommodationGuide: Record<number, AccommodationTip> = {
  1: { area: "101 市中心 / Hlíðar 东侧", why: "首次到访住 101 最方便步行；自驾更看重停车时，可向 Hlíðar 或 Laugavegur 东段找。", tradeoff: "订房前确认是否含停车位，以及夜间停车规则。", search: "hotels 101 Reykjavik Iceland parking" },
  2: { area: "Selfoss 镇中心、1 号公路附近", why: "餐饮、超市和加油集中，第二天向南岸出发不用折返。", tradeoff: "比乡村住宿少一点景观感，但补给和应急最省心。", search: "hotels Selfoss Iceland" },
  3: { area: "Vík 镇内 / 镇东侧", why: "黑沙滩行程结束后很快入住，次日继续向 Skaftafell 方向也顺路。", tradeoff: "热门且房量有限，优先订可取消房型。", search: "hotels Vik Iceland" },
  4: { area: "Höfn 镇中心或港口附近", why: "餐厅、加油和超市集中；完成冰河湖长途日后无需再走乡间支路。", tradeoff: "如果次日想更早进东峡湾，镇东北侧也可，但餐饮选择更少。", search: "hotels Hofn Iceland" },
  5: { area: "Egilsstaðir 1 号公路 / Lagarfljót 湖畔", why: "东部服务最齐全，适合作为两晚基地并往返 Seyðisfjörður。", tradeoff: "湖畔更安静，镇中心补给更方便；优先避免每天换房。", search: "hotels Egilsstadir Iceland" },
  6: { area: "续住 Egilsstaðir 原酒店", why: "当天是往返缓冲日，同住一处能少搬一次行李，也便于根据山口天气取消或调整。", tradeoff: "若执意住 Seyðisfjörður，次日需要再翻一次山口。", search: "hotels Egilsstadir Iceland" },
  7: { area: "Reykjahlíð / 米湖东北岸", why: "靠近补给和主要道路，第二天去 Húsavík 也更直接。", tradeoff: "米湖住宿分散，不能只看直线距离，要核对实际入口和餐厅营业时间。", search: "hotels Reykjahlid Myvatn Iceland" },
  8: { area: "Akureyri 市中心下城", why: "餐厅和海滨步行范围集中，长途后可以停好车再步行。", tradeoff: "部分街区有坡度和停车限制，带大件行李时确认酒店入口。", search: "hotels Akureyri city centre Iceland parking" },
  9: { area: "Grundarfjörður 镇内", why: "位于斯奈山北岸中段，教会山近，第二天完整绕半岛也方便。", tradeoff: "选择少于 Stykkishólmur，建议两晚一起锁定。", search: "hotels Grundarfjordur Iceland" },
  10: { area: "续住 Grundarfjörður", why: "完成半岛环线后回同一房间，能保留教会山清晨或傍晚机位。", tradeoff: "如果第二天特别想早到雷市，也可住 Borgarnes，但会牺牲半岛晚间体验。", search: "hotels Grundarfjordur Iceland" },
  11: { area: "101 市中心 / Vesturbær", why: "101 适合最后两天步行；Vesturbær 更安静，仍靠近老城和港口。", tradeoff: "开车进中心要先解决停车，再比较房价。", search: "hotels Reykjavik 101 Vesturbaer parking" },
  12: { area: "续住雷克雅未克；早班机才考虑 KEF", why: "不换房最灵活，可把雷克雅内斯当作天气允许才执行的半日环线。", tradeoff: "若次日航班很早，住 Keflavík 可降低误机压力，但会少一晚市区时间。", search: "hotels Reykjavik Iceland parking" },
  13: { area: "无需住宿", why: "按国际航班时间倒推离店、加油、还车和安检。", tradeoff: "特别早的航班可把前一晚改到 Keflavík / 机场周边。", search: "hotels near Keflavik Airport Iceland" }
};
