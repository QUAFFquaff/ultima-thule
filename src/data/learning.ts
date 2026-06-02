export const gods = [
  {
    id: "odin",
    name: "奥丁 Odin",
    title: "众神之父 / 智慧与旅人的守望者",
    symbol: "ᚨ",
    tone: "amber",
    body: "奥丁追求知识，也庇护旅人。把他放在路书里，像是在提醒每天出发前先查天气、道路和自己的体力。"
  },
  {
    id: "thor",
    name: "索尔 Thor",
    title: "雷霆与守护之神",
    symbol: "⚡",
    tone: "cyan",
    body: "索尔象征力量和保护。冰岛自驾里的大风、瀑布和高地边缘，都需要这种敬畏感。"
  },
  {
    id: "loki",
    name: "洛基 Loki",
    title: "变化、混乱与意外",
    symbol: "🔥",
    tone: "orange",
    body: "洛基很适合代表天气突变、封路和计划变化。看到洛基，就把备选方案拿出来。"
  },
  {
    id: "freya",
    name: "弗蕾雅 Freyja",
    title: "美、爱与极光想象",
    symbol: "✦",
    tone: "emerald",
    body: "弗蕾雅负责旅途中那些非必要但难忘的瞬间：极光、温泉、落日和突然放慢的下午。"
  },
  {
    id: "heimdall",
    name: "海姆达尔 Heimdall",
    title: "彩虹桥守卫者",
    symbol: "🌈",
    tone: "sky",
    body: "海姆达尔守望彩虹桥。放在这里代表边界意识：黑沙滩浪线、火山封控区、地热步道都不能越界。"
  },
  {
    id: "tyr",
    name: "提尔 Tyr",
    title: "勇气、秩序与判断",
    symbol: "ᛏ",
    tone: "slate",
    body: "提尔提醒驾驶者做克制的判断：不赶路、不夜车、不因一个景点牺牲安全余量。"
  }
];

export const geography = [
  {
    id: "rift",
    title: "板块裂谷",
    place: "Þingvellir",
    body: "冰岛位于北美板块和欧亚板块交界处，辛格维利尔能直观看到裂谷地貌。"
  },
  {
    id: "glacier",
    title: "冰川与冰河湖",
    place: "Skaftafell / Jökulsárlón",
    body: "冰川徒步必须跟团。冰河湖和钻石沙滩受天气、风和潮汐影响，适合预留机动时间。"
  },
  {
    id: "sneaker-waves",
    title: "Sneaker Waves",
    place: "Reynisfjara / 黑沙滩",
    body: "黑沙滩的突袭浪可能在看似平静时突然上岸。不要背对海浪，不要靠近湿沙线。"
  },
  {
    id: "geothermal",
    title: "地热区",
    place: "Hverir / Mývatn",
    body: "地热区的泥浆、蒸汽和地面都可能烫伤。只走明确步道，不踩彩色沉积层。"
  },
  {
    id: "volcano",
    title: "火山封控",
    place: "Reykjanes",
    body: "雷克雅内斯半岛可能出现临时道路封控。当天以官方道路和安全公告为准。"
  },
  {
    id: "aurora",
    title: "极光窗口",
    place: "全程夜间",
    body: "极光需要黑暗、低云量和足够活动指数。不要为了追光开远路或疲劳驾驶。"
  }
];

export const learningById = [...gods, ...geography].reduce((acc, item) => {
  acc[item.id] = item;
  return acc;
}, {} as Record<string, (typeof gods[number] | typeof geography[number])>);
