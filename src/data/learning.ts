export const gods = [
  {
    id: "odin",
    name: "奥丁 Odin",
    oldNorse: "Oðinn",
    title: "众神之父 / 智慧、战争、诗歌与旅行者的守望者",
    group: "Aesir",
    symbol: "ᚨ",
    tone: "amber",
    domains: ["智慧", "战争", "诗歌", "远行"],
    artifact: "冈格尼尔 Gungnir、德罗普尼尔 Draupnir、两只渡鸦 Huginn 与 Muninn",
    relations: [
      { label: "妻子", name: "弗丽嘉 Frigg" },
      { label: "儿子", name: "索尔 Thor、巴德尔 Baldr" },
      { label: "义兄弟", name: "洛基 Loki" }
    ],
    story:
      "奥丁不是单纯的“王者”，而是为了知识愿意付出代价的神。他以一只眼换取密米尔之泉的智慧，又把自己悬挂在世界树上九夜，获得卢恩文字的秘密。",
    scholarNote:
      "《诗体埃达》和《散文埃达》中的奥丁形象并不完全统一：他既是贵族与战士的神，也带有巫术、狂喜和流浪者气质。维京时代的奥丁崇拜常与统治权、战争和诗歌灵感相连。",
    travelHook:
      "放在路书里，奥丁像每日出发前的“信息核查”：天气、道路、体力、备选路线，都要先问一遍。",
    sourceRefs: ["Poetic Edda", "Prose Edda", "Britannica", "Wikipedia"]
  },
  {
    id: "thor",
    name: "索尔 Thor",
    oldNorse: "Þórr",
    title: "雷霆、力量与守护之神",
    group: "Aesir",
    symbol: "ᚦ",
    tone: "cyan",
    domains: ["雷霆", "守护", "力量", "天气"],
    artifact: "雷神之锤 Mjolnir、力量腰带 Megingjord、铁手套 Jarngreipr",
    relations: [
      { label: "父亲", name: "奥丁 Odin" },
      { label: "妻子", name: "希芙 Sif" },
      { label: "宿敌", name: "约尔蒙冈德 Jormungandr" }
    ],
    story:
      "索尔是神话中最具行动力的保护者。他常带着锤子前往巨人国，守护阿斯加德与人类世界。诸神黄昏时，他会击杀世界蛇，但也会因蛇毒倒下。",
    scholarNote:
      "索尔在北欧民间信仰中极受欢迎，锤形护符在考古中也很常见。相比奥丁的精英与诗性气质，索尔更接近日常保护、天气和共同体安全。",
    travelHook:
      "冰岛自驾里的索尔，是对风、雨、瀑布水汽和山区路况的敬畏：能走不代表该走，安全感来自克制。",
    sourceRefs: ["Poetic Edda", "Prose Edda", "Britannica", "World History Encyclopedia"]
  },
  {
    id: "loki",
    name: "洛基 Loki",
    oldNorse: "Loki",
    title: "变形者、麻烦制造者与叙事推动者",
    group: "Jotnar / Aesir associate",
    symbol: "ᛚ",
    tone: "orange",
    domains: ["诡计", "变形", "边界", "意外"],
    artifact: "飞行鞋、变形能力，以及一张永远太会说话的嘴",
    relations: [
      { label: "伴侣", name: "西格恩 Sigyn" },
      { label: "子女", name: "芬里尔、约尔蒙冈德、海拉" },
      { label: "关系", name: "诸神的帮手与破坏者" }
    ],
    story:
      "洛基经常先制造问题，再用更危险的聪明才智解决问题。他帮助诸神获得宝物，也间接导致巴德尔之死，并最终站到诸神黄昏的对立面。",
    scholarNote:
      "洛基不是简单的“恶魔”。他更像神话结构中的边界人物：介于神与巨人、秩序与混乱、创造与毁坏之间。现代流行文化常把他浪漫化，但古代文本里的他更不稳定。",
    travelHook:
      "看到洛基，就把 Plan B 拿出来：封路、取消观鲸、火山警戒、天气突变，都是旅途里的洛基时刻。",
    sourceRefs: ["Prose Edda", "Poetic Edda", "Britannica", "Wikipedia"]
  },
  {
    id: "freya",
    name: "弗蕾雅 Freyja",
    oldNorse: "Freyja",
    title: "爱、美、魔法、战争与财富女神",
    group: "Vanir",
    symbol: "ᚠ",
    tone: "emerald",
    domains: ["爱与美", "Seidr 魔法", "战争", "财富"],
    artifact: "布里辛嘉曼 Brisingamen、猫拉战车、鹰羽斗篷",
    relations: [
      { label: "兄弟", name: "弗雷 Freyr" },
      { label: "父亲", name: "尼奥尔德 Njord" },
      { label: "居所", name: "Folkvangr" }
    ],
    story:
      "弗蕾雅并不只是温柔的爱神。她与魔法、欲望、财富和战死者有关，会接收一半阵亡战士。她的项链布里辛嘉曼常被视为美与代价的象征。",
    scholarNote:
      "弗蕾雅属于华纳神族，体现了北欧神话中丰饶、交换和魔法传统。她与弗丽嘉的关系在学界常被讨论：两者可能有重叠源流，也可能在不同传统中逐渐分化。",
    travelHook:
      "她适合代表极光、温泉、落日和那些“不必要但值得”的停留：旅途不只是抵达，也要留给美。",
    sourceRefs: ["Prose Edda", "Poetic Edda", "Wikipedia"]
  },
  {
    id: "frigg",
    name: "弗丽嘉 Frigg",
    oldNorse: "Frigg",
    title: "婚姻、预知与家庭秩序的女神",
    group: "Aesir",
    symbol: "ᚱ",
    tone: "sky",
    domains: ["婚姻", "预知", "家庭", "保护"],
    artifact: "纺锤、云与命运的隐喻",
    relations: [
      { label: "丈夫", name: "奥丁 Odin" },
      { label: "儿子", name: "巴德尔 Baldr" },
      { label: "侍女", name: "Fulla、Gna、Hlin 等" }
    ],
    story:
      "弗丽嘉预见巴德尔将死，于是让万物立誓不伤害他，却漏掉槲寄生。洛基利用这个漏洞，导致神话中最悲伤的死亡之一。",
    scholarNote:
      "弗丽嘉的形象强调预知但不一定能改变命运，这很符合北欧神话的悲剧感：知道结局，并不代表可以逃离结局。",
    travelHook:
      "她像每日清单和住宿确认：看似家务，其实是旅途稳定性的核心。",
    sourceRefs: ["Prose Edda", "Poetic Edda", "Wikipedia"]
  },
  {
    id: "heimdall",
    name: "海姆达尔 Heimdall",
    oldNorse: "Heimdallr",
    title: "彩虹桥守卫与边界之神",
    group: "Aesir",
    symbol: "ᛉ",
    tone: "sky",
    domains: ["守望", "边界", "警戒", "彩虹桥"],
    artifact: "加拉尔号角 Gjallarhorn、黄金牙齿、敏锐听觉",
    relations: [
      { label: "职责", name: "守卫 Bifrost 彩虹桥" },
      { label: "宿敌", name: "洛基 Loki" },
      { label: "末日", name: "诸神黄昏吹响号角" }
    ],
    story:
      "海姆达尔能听见草生长、羊毛生长。他守在彩虹桥边，等到诸神黄昏来临时吹响号角，提醒诸神最终之战到来。",
    scholarNote:
      "海姆达尔在文本中保留了不少难解片段，例如“九位母亲”出身和社会等级起源诗《Rigsthula》。他是边界、起源和警戒的复杂角色。",
    travelHook:
      "他代表边界意识：黑沙滩浪线、火山封控区、地热步道、冰川警戒线，都不能越界。",
    sourceRefs: ["Poetic Edda", "Prose Edda", "Wikipedia"]
  },
  {
    id: "tyr",
    name: "提尔 Tyr",
    oldNorse: "Tyr",
    title: "勇气、誓约与秩序之神",
    group: "Aesir",
    symbol: "ᛏ",
    tone: "slate",
    domains: ["勇气", "法律", "誓约", "牺牲"],
    artifact: "失去的右手、提瓦兹 Tiwaz 符文",
    relations: [
      { label: "关键故事", name: "束缚芬里尔" },
      { label: "对手", name: "巨狼芬里尔 Fenrir" },
      { label: "末日", name: "与加姆 Garmr 同归于尽" }
    ],
    story:
      "诸神要束缚芬里尔时，只有提尔愿意把手放进狼口作为保证。锁链成功，芬里尔咬断他的手。提尔因此成为勇气与代价的象征。",
    scholarNote:
      "提尔可能保留了更古老的天空神或法律神痕迹，但在现存文本里地位已被奥丁和索尔压过。他的少量故事反而非常集中地体现誓约伦理。",
    travelHook:
      "提尔提醒驾驶者做克制判断：不赶路、不夜车、不为一个景点牺牲安全余量。",
    sourceRefs: ["Poetic Edda", "Prose Edda", "Britannica"]
  },
  {
    id: "baldr",
    name: "巴德尔 Baldr",
    oldNorse: "Baldr",
    title: "光明、美善与不可避免的失落",
    group: "Aesir",
    symbol: "ᛒ",
    tone: "amber",
    domains: ["光明", "纯净", "悲剧", "重生希望"],
    artifact: "槲寄生、葬船 Hringhorni",
    relations: [
      { label: "父母", name: "奥丁与弗丽嘉" },
      { label: "兄弟", name: "霍德 Hodr" },
      { label: "死亡原因", name: "洛基的计谋" }
    ],
    story:
      "巴德尔梦见自己的死亡。众神以为万物都立誓不伤他，于是把向他投掷物品当作游戏。洛基用槲寄生做成武器，让盲眼的霍德误杀巴德尔。",
    scholarNote:
      "巴德尔之死是诸神黄昏前的关键转折：它让北欧神话的末日感从预言进入现实，也展示了命运、漏洞和集体盲点。",
    travelHook:
      "巴德尔适合代表冰岛短暂的晴窗：很美，但别假设它会一直在，看到就珍惜。",
    sourceRefs: ["Prose Edda", "Poetic Edda", "Wikipedia"]
  },
  {
    id: "njord",
    name: "尼奥尔德 Njord",
    oldNorse: "Njordr",
    title: "海、风、航行与财富之神",
    group: "Vanir",
    symbol: "ᚾ",
    tone: "cyan",
    domains: ["海洋", "航行", "风", "财富"],
    artifact: "海风、船只、港湾",
    relations: [
      { label: "子女", name: "弗雷 Freyr、弗蕾雅 Freyja" },
      { label: "神族", name: "华纳神族 Vanir" },
      { label: "婚姻", name: "与斯卡蒂 Skadi 的失败婚姻" }
    ],
    story:
      "尼奥尔德来自海边，斯卡蒂来自山中。他们婚后轮流住在海边和山里，却都无法忍受对方的环境，最终分开。",
    scholarNote:
      "尼奥尔德体现华纳神族的丰饶、财富与海上世界。他的故事也保留了北欧人对海洋经济和婚姻联盟的想象。",
    travelHook:
      "冰岛海岸风、观鲸取消、港口补给和峡湾驾驶，都可以交给尼奥尔德来解释。",
    sourceRefs: ["Prose Edda", "Wikipedia"]
  },
  {
    id: "skadi",
    name: "斯卡蒂 Skadi",
    oldNorse: "Skadi",
    title: "山地、冬季、滑雪与狩猎女神",
    group: "Jotnar / Aesir associate",
    symbol: "ᛋ",
    tone: "slate",
    domains: ["山地", "冬季", "狩猎", "独立"],
    artifact: "滑雪板、弓、雪山",
    relations: [
      { label: "父亲", name: "巨人 Thjazi" },
      { label: "丈夫", name: "尼奥尔德 Njord" },
      { label: "居所", name: "Thrymheim" }
    ],
    story:
      "斯卡蒂为父亲之死向诸神索赔。诸神允许她从脚来选择丈夫，她误以为最美的脚属于巴德尔，结果选中了尼奥尔德。",
    scholarNote:
      "斯卡蒂是少数保留强烈山地与冬季气质的女性神话人物。她跨越巨人与神的边界，体现北欧神话中婚姻、赔偿和联盟的社会逻辑。",
    travelHook:
      "她对应冰岛山路、晨霜和高地边缘：美，但冷静，不能轻慢。",
    sourceRefs: ["Prose Edda", "Wikipedia"]
  },
  {
    id: "hel",
    name: "海拉 Hel",
    oldNorse: "Hel",
    title: "冥界统治者",
    group: "Jotnar",
    symbol: "ᚺ",
    tone: "rose",
    domains: ["死亡", "冥界", "阴影", "边缘"],
    artifact: "Helheim、半明半暗的身体意象",
    relations: [
      { label: "父亲", name: "洛基 Loki" },
      { label: "兄弟", name: "芬里尔、约尔蒙冈德" },
      { label: "领域", name: "非战死者的冥界" }
    ],
    story:
      "海拉统治地下世界。巴德尔死后，诸神试图让她释放巴德尔；她提出若万物都为巴德尔哭泣，他就能返回。最终条件没有达成。",
    scholarNote:
      "Hel 同时指冥界与其统治者。后世基督教语境常把她误读成地狱恶魔，但北欧材料中的 Hel 更像冷静、不可谈判的死亡秩序。",
    travelHook:
      "海拉提醒人别把旅行安全浪漫化：危险不是故事滤镜，是需要规避的现实。",
    sourceRefs: ["Prose Edda", "Wikipedia"]
  }
];

export const geography = [
  {
    id: "rift",
    title: "板块裂谷",
    place: "Thingvellir",
    body: "冰岛位于北美板块和欧亚板块交界处，辛格维利尔能直观看到裂谷地貌。它不是“两个大陆一脚踩一个”的简单打卡，而是大西洋中脊露出海面的窗口。"
  },
  {
    id: "glacier",
    title: "冰川与冰河湖",
    place: "Skaftafell / Jokulsarlon",
    body: "冰川徒步必须跟团。冰河湖和钻石沙滩受天气、风和潮汐影响，适合预留机动时间。冰川地貌很美，但冰裂缝、落冰和低温都不适合自行冒险。"
  },
  {
    id: "sneaker-waves",
    title: "Sneaker Waves",
    place: "Reynisfjara / 黑沙滩",
    body: "黑沙滩的突袭浪可能在看似平静时突然上岸。不要背对海浪，不要靠近湿沙线，不要为了拍照站到玄武岩柱附近的危险区域。"
  },
  {
    id: "geothermal",
    title: "地热区",
    place: "Hverir / Myvatn",
    body: "地热区的泥浆、蒸汽和地面都可能烫伤。只走明确步道，不踩彩色沉积层。风大时蒸汽方向会快速变化，镜头和眼睛都要保护。"
  },
  {
    id: "volcano",
    title: "火山封控",
    place: "Reykjanes",
    body: "雷克雅内斯半岛可能出现临时道路封控。当天以官方道路和安全公告为准。新熔岩地带看起来凝固，也可能高温、塌陷或释放气体。"
  },
  {
    id: "aurora",
    title: "极光窗口",
    place: "全程夜间",
    body: "极光需要黑暗、低云量和足够活动指数。不要为了追光开远路或疲劳驾驶。最好的极光策略是住处附近找安全开阔点，等待天气窗口。"
  }
];

export const mythSources = [
  {
    title: "Poetic Edda",
    note: "北欧神话核心诗歌材料，许多神话母题来自其中的诗篇。",
    url: "https://en.wikipedia.org/wiki/Poetic_Edda"
  },
  {
    title: "Prose Edda",
    note: "Snorri Sturluson 编写的中世纪冰岛文本，是理解神谱和叙事结构的重要来源。",
    url: "https://en.wikipedia.org/wiki/Prose_Edda"
  },
  {
    title: "Britannica: Germanic religion and mythology",
    note: "用于校对 Aesir、Loki、Thor、Odin 等条目的二级资料。",
    url: "https://www.britannica.com/topic/Germanic-religion-and-mythology"
  },
  {
    title: "World History Encyclopedia: Norse Mythology",
    note: "适合作为入门级历史背景和神话世界观说明。",
    url: "https://www.worldhistory.org/Norse_Mythology/"
  }
];

export const learningById = [...gods, ...geography].reduce((acc, item) => {
  acc[item.id] = item;
  return acc;
}, {} as Record<string, (typeof gods[number] | typeof geography[number])>);
