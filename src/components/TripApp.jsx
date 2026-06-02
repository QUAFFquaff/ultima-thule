import { useMemo, useState } from "react";
import { roadbook } from "../data/roadbook";
import { gods, mythSources } from "../data/learning";
import { godStories } from "../data/mythologyStories";
import { sagaStories, sagaSources } from "../data/sagaStories";
import { geographyAtlas, geographySources } from "../data/geographyAtlas";

const toneClass = {
  amber: "border-amber-300/30 text-amber-100",
  cyan: "border-cyan-300/30 text-cyan-100",
  orange: "border-orange-300/30 text-orange-100",
  emerald: "border-emerald-300/30 text-emerald-100",
  sky: "border-sky-300/30 text-sky-100",
  slate: "border-slate-300/30 text-slate-100",
  rose: "border-rose-300/30 text-rose-100"
};

export default function TripApp({ days, baseUrl }) {
  const base = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
  const [activeTab, setActiveTab] = useState("itinerary");
  const [selectedDay, setSelectedDay] = useState(days[0]?.day ?? 1);
  const [openChecklist, setOpenChecklist] = useState(true);
  const current = useMemo(
    () => days.find((day) => day.day === selectedDay) ?? days[0],
    [days, selectedDay]
  );

  return (
    <div className="space-y-4">
      <section className="glass overflow-hidden rounded-2xl">
        <div className="relative p-5 sm:p-7">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-300 via-emerald-300 to-orange-300" />
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/70">aurora roadbook</p>
          <h1 className="aurora-text mt-3 text-4xl font-black leading-tight sm:text-6xl">{roadbook.title}</h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-cyan-50/80">{roadbook.summary}</p>
          <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {roadbook.stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/10 p-3">
                <p className="text-xs text-cyan-100/60">{stat.label}</p>
                <p className="mt-1 text-xl font-bold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <nav className="hide-scrollbar flex gap-2 overflow-x-auto pb-1">
        {roadbook.tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`shrink-0 rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
              activeTab === tab.id
                ? "border-cyan-200 bg-cyan-200 text-slate-950"
                : "border-white/10 bg-white/10 text-cyan-50/70"
            }`}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </nav>

      {activeTab === "itinerary" && (
        <section className="space-y-4">
          <DayRail days={days} selectedDay={selectedDay} onSelect={setSelectedDay} />
          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <RouteBoard days={days} selectedDay={selectedDay} onSelect={setSelectedDay} />
            <TodayPanel day={current} baseUrl={base} openChecklist={openChecklist} setOpenChecklist={setOpenChecklist} />
          </div>
        </section>
      )}

      {activeTab === "geography" && <GeographyPanel />}
      {activeTab === "gods" && <GodsPanel />}
      {activeTab === "sagas" && <SagaPanel />}
      {activeTab === "todo" && <TodoPanel days={days} />}
      {activeTab === "budget" && <PlaceholderPanel title="记账占位" body="这里预留给油费、住宿、温泉、餐饮和活动费用。v1 先不接数据库，后续可用 localStorage 做离线记账。" />}
      {activeTab === "weather" && <PlaceholderPanel title="天气占位" body="这里预留给 Vedur、road.is、极光指数和火山封控链接。v1 保持静态，避免旅行途中依赖不稳定接口。" />}
    </div>
  );
}

function DayRail({ days, selectedDay, onSelect }) {
  return (
    <div className="hide-scrollbar flex gap-2 overflow-x-auto rounded-2xl border border-white/10 bg-white/10 p-2">
      {days.map((day) => (
        <button
          key={day.slug}
          onClick={() => onSelect(day.day)}
          className={`min-w-[76px] rounded-2xl border px-3 py-3 text-center transition ${
            selectedDay === day.day
              ? "border-cyan-200 bg-cyan-200 text-slate-950"
              : "border-white/10 bg-slate-950/35 text-cyan-50/75"
          }`}
        >
          <div className="text-2xl">{day.icon}</div>
          <div className="mt-1 text-xs font-bold">Day {day.day}</div>
          <div className="text-[11px] opacity-70">{day.date.slice(5)}</div>
        </button>
      ))}
    </div>
  );
}

function RouteBoard({ days, selectedDay, onSelect }) {
  const points = [
    [31, 78], [39, 69], [45, 75], [55, 73], [70, 62], [76, 50], [70, 36],
    [60, 30], [45, 36], [30, 45], [22, 58], [25, 70], [31, 78]
  ];
  const terrain = [
    { label: "Vatnajokull", x: 62, y: 68, color: "#b7f7ff" },
    { label: "Myrdalsjokull", x: 42, y: 71, color: "#b7f7ff" },
    { label: "Myvatn", x: 68, y: 39, color: "#5ef4a6" },
    { label: "Snaefellsnes", x: 24, y: 57, color: "#ffb067" },
    { label: "Reykjavik", x: 31, y: 81, color: "#78e7ff" }
  ];
  const path = points.map(([x, y], index) => `${index === 0 ? "M" : "L"} ${x} ${y}`).join(" ");
  const coastline =
    "M19 78 C15 72 18 66 13 60 C18 55 18 49 24 44 C21 38 29 34 35 32 C41 24 51 27 57 22 C63 24 69 21 75 29 C83 31 86 39 82 47 C89 54 82 63 75 66 C70 77 59 80 49 78 C42 85 29 84 19 78Z";
  const highland =
    "M39 64 C35 56 38 45 47 40 C58 34 70 40 72 51 C75 63 65 71 53 70 C47 70 42 68 39 64Z";

  return (
    <div className="glass overflow-hidden rounded-2xl p-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/60">terrain map</p>
          <h2 className="mt-1 text-xl font-bold text-white">Iceland Ring Route</h2>
        </div>
        <span className="rounded-xl border border-emerald-300/25 bg-emerald-300/10 px-3 py-2 text-xs text-emerald-100">逆时针</span>
      </div>
      <svg className="mt-4 aspect-[4/3] w-full" viewBox="0 0 100 100" role="img" aria-label="冰岛环岛路线可视化">
        <defs>
          <linearGradient id="routeGlow" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#78e7ff" />
            <stop offset="55%" stopColor="#5ef4a6" />
            <stop offset="100%" stopColor="#ff8a4c" />
          </linearGradient>
          <linearGradient id="landGlow" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="rgba(120,231,255,0.2)" />
            <stop offset="50%" stopColor="rgba(15,23,42,0.72)" />
            <stop offset="100%" stopColor="rgba(94,244,166,0.16)" />
          </linearGradient>
          <radialGradient id="iceGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(247,251,255,0.9)" />
            <stop offset="100%" stopColor="rgba(120,231,255,0.05)" />
          </radialGradient>
          <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="1.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect x="0" y="0" width="100" height="100" rx="8" fill="rgba(2,6,23,0.28)" />
        <path d="M0 80 C22 62 44 74 66 54 C80 42 87 25 100 18 L100 100 L0 100Z" fill="rgba(94,244,166,0.035)" />
        <path d={coastline} fill="url(#landGlow)" stroke="rgba(181,247,255,0.38)" strokeWidth="0.8" />
        <path d={coastline} fill="none" stroke="rgba(120,231,255,0.18)" strokeWidth="2.8" filter="url(#softGlow)" />
        <path d={highland} fill="rgba(15,23,42,0.52)" stroke="rgba(255,255,255,0.12)" strokeDasharray="1.4 1.6" strokeWidth="0.45" />
        <path d="M57 61 C61 55 70 57 72 64 C74 71 65 76 58 73 C53 70 53 65 57 61Z" fill="url(#iceGlow)" opacity="0.78" />
        <path d="M38 67 C41 63 47 64 48 69 C49 74 42 77 38 73 C35 71 36 69 38 67Z" fill="url(#iceGlow)" opacity="0.55" />
        <path d="M17 62 C21 58 27 57 31 60" fill="none" stroke="rgba(120,231,255,0.24)" strokeWidth="0.6" strokeLinecap="round" />
        <path d="M69 29 C73 31 77 34 80 39" fill="none" stroke="rgba(120,231,255,0.24)" strokeWidth="0.6" strokeLinecap="round" />
        <path d={path} fill="none" stroke="rgba(2,6,23,0.75)" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d={path} fill="none" stroke="url(#routeGlow)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" filter="url(#softGlow)" />
        {terrain.map((item) => (
          <g key={item.label}>
            <circle cx={item.x} cy={item.y} r="1.2" fill={item.color} opacity="0.95" />
            <text x={item.x + 2.2} y={item.y + 1.2} fontSize="2.4" fill="rgba(226,249,255,0.62)">{item.label}</text>
          </g>
        ))}
        {points.map(([x, y], index) => {
          const day = days[index];
          const active = day.day === selectedDay;
          return (
            <g key={day.slug} onClick={() => onSelect(day.day)} className="cursor-pointer">
              <circle cx={x} cy={y} r={active ? 7 : 0} fill="none" stroke="rgba(94,244,166,0.45)" strokeWidth="1" />
              <circle cx={x} cy={y} r={active ? 4.5 : 3.2} fill={active ? "#f7fbff" : "#071018"} stroke={active ? "#5ef4a6" : "#78e7ff"} strokeWidth="1.4" />
              <text x={x} y={y + 8.2} textAnchor="middle" fontSize="3.2" fontWeight="700" fill={active ? "#f7fbff" : "rgba(247,251,255,0.66)"}>{day.day}</text>
            </g>
          );
        })}
      </svg>
      <div className="mt-3 grid grid-cols-3 gap-2 text-[11px] text-cyan-50/60">
        <span className="rounded-xl bg-white/10 px-2 py-2">glacier zones</span>
        <span className="rounded-xl bg-white/10 px-2 py-2">ring road</span>
        <span className="rounded-xl bg-white/10 px-2 py-2">13 day stops</span>
      </div>
    </div>
  );
}

function TodayPanel({ day, baseUrl, openChecklist, setOpenChecklist }) {
  return (
    <article className="glass rounded-2xl p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-cyan-100/60">Day {day.day} · {day.date}</p>
          <h2 className="mt-2 text-3xl font-black leading-tight text-white">{day.title}</h2>
          <p className="mt-2 text-sm leading-6 text-cyan-50/70">{day.route}</p>
        </div>
        <span className="text-4xl">{day.icon}</span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        <Metric label="车程" value={day.driveTime} />
        <Metric label="里程" value={day.distance} />
        <Metric label="住宿" value={day.accommodation} />
      </div>
      <div className="mt-4 flex gap-2">
        <a className="flex-1 rounded-2xl bg-cyan-300 px-4 py-3 text-center text-sm font-black text-slate-950" href={day.mapUrl} target="_blank" rel="noreferrer">{roadbook.mapButton}</a>
        <a className="rounded-2xl border border-white/10 px-4 py-3 text-sm font-bold text-cyan-50" href={`${baseUrl}itinerary/${day.slug}/`}>详情</a>
      </div>
      <Timeline segments={day.segments} />
      <section className="mt-4 rounded-2xl border border-rose-300/20 bg-rose-400/10 p-4">
        <h3 className="font-bold text-rose-50">风险提醒</h3>
        <ul className="mt-2 space-y-2 text-sm text-rose-50/80">
          {day.risks.map((risk) => <li key={risk}>• {risk}</li>)}
        </ul>
      </section>
      <button onClick={() => setOpenChecklist(!openChecklist)} className="mt-3 w-full rounded-2xl border border-white/10 px-4 py-3 text-left text-sm font-bold text-cyan-50">
        ☑️ 出发检查 {openChecklist ? "收起" : "展开"}
      </button>
      {openChecklist && (
        <ul className="mt-2 space-y-2 rounded-2xl bg-white/10 p-4 text-sm text-cyan-50/80">
          {day.checklist.map((item) => <li key={item}>• {item}</li>)}
        </ul>
      )}
    </article>
  );
}

function Metric({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-3">
      <p className="text-xs text-cyan-100/60">{label}</p>
      <p className="mt-1 text-sm font-bold text-white">{value}</p>
    </div>
  );
}

function Timeline({ segments }) {
  return (
    <div className="mt-4">
      <h3 className="mb-2 text-sm font-bold text-cyan-50/90">路线时间线</h3>
      <div className="space-y-2">
        {segments.map((segment, index) => (
          <div key={`${segment.from}-${segment.to}`} className="grid grid-cols-[48px_1fr] gap-3 rounded-2xl bg-white/10 p-3">
            <span className="text-xs font-bold text-emerald-100">#{index + 1}</span>
            <div>
              <p className="text-sm font-bold text-white">{segment.from} → {segment.to}</p>
              <p className="mt-1 text-xs text-cyan-50/60">{segment.distance} / {segment.driveTime}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LearningGrid({ title, items }) {
  return (
    <section className="glass rounded-2xl p-4">
      <h2 className="text-2xl font-black text-white">{title}</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <details key={item.id} className="rounded-2xl border border-white/10 bg-white/10 p-4">
            <summary className="cursor-pointer font-bold text-cyan-50">{item.title || item.name}</summary>
            {"place" in item && <p className="mt-2 text-xs text-emerald-100">{item.place}</p>}
            <p className="mt-2 text-sm leading-6 text-cyan-50/70">{item.body}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function GeographyPanel() {
  const [activeId, setActiveId] = useState(geographyAtlas[0]?.id);
  const activeItem = geographyAtlas.find((item) => item.id === activeId) ?? geographyAtlas[0];

  return (
    <section className="glass overflow-hidden rounded-2xl p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/60">iceland field notes</p>
          <h2 className="mt-2 text-3xl font-black text-white">冰岛地理图鉴</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-cyan-50/68">
            把旅途中会遇到的板块裂谷、冰川、黑沙滩、地热、火山、峡湾、极光和天气做成可读图卡。不是背知识点，而是让你到现场知道自己在看什么。
          </p>
        </div>
        <span className="rounded-xl border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-xs font-bold text-cyan-100">
          {geographyAtlas.length} notes
        </span>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="hide-scrollbar flex gap-2 overflow-x-auto pb-1 lg:grid lg:grid-cols-1 lg:overflow-visible">
          {geographyAtlas.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className={`min-w-[220px] rounded-2xl border p-3 text-left transition lg:min-w-0 ${
                activeItem.id === item.id
                  ? "border-cyan-200 bg-cyan-200/16 shadow-[0_0_28px_rgba(103,232,249,0.14)]"
                  : "border-white/10 bg-white/8 hover:border-cyan-200/40 hover:bg-white/12"
              }`}
            >
              <p className="text-[11px] uppercase tracking-[0.18em] text-cyan-100/48">{item.place}</p>
              <h3 className="mt-1 font-black text-white">{item.title}</h3>
              <p className="mt-1 text-xs leading-5 text-cyan-50/62">{item.travelDays.join(" / ")}</p>
            </button>
          ))}
        </div>

        {activeItem && (
          <article className="relative overflow-hidden rounded-2xl border border-cyan-300/20 bg-slate-950/52 p-4">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-300/10 blur-3xl" />
            <div className="relative grid gap-4 md:grid-cols-[220px_1fr]">
              <GeoIllustration type={activeItem.visual} tone={activeItem.tone} />
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-cyan-100/55">{activeItem.place}</p>
                <h3 className="mt-2 text-3xl font-black text-white">{activeItem.title}</h3>
                <p className="mt-4 text-sm leading-7 text-cyan-50/74">{activeItem.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {activeItem.travelDays.map((day) => (
                    <span key={day} className="rounded-full bg-cyan-200/10 px-2.5 py-1 text-[11px] font-bold text-cyan-100/72">{day}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative mt-4 grid gap-3 md:grid-cols-3">
              {activeItem.keyFacts.map((fact) => (
                <div key={fact} className="rounded-2xl border border-white/10 bg-white/8 p-3">
                  <p className="text-sm leading-6 text-cyan-50/72">{fact}</p>
                </div>
              ))}
            </div>

            <div className="relative mt-3 grid gap-3 md:grid-cols-2">
              <InfoBlock title="现场怎么看" body={activeItem.observe} />
              <InfoBlock title="安全提醒" body={activeItem.safety} />
            </div>
          </article>
        )}
      </div>

      <div className="mt-4 rounded-2xl border border-white/10 bg-white/8 p-4">
        <h3 className="text-sm font-black text-white">地理与安全资料入口</h3>
        <div className="mt-3 grid gap-2 md:grid-cols-2">
          {geographySources.map((source) => (
            <a
              key={source.title}
              href={source.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 bg-slate-950/32 p-3 transition hover:border-cyan-200/40 hover:bg-white/10"
            >
              <p className="text-sm font-bold text-cyan-50">{source.title}</p>
              <p className="mt-1 text-xs leading-5 text-cyan-50/60">{source.note}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function GeoIllustration({ type, tone }) {
  const accent = {
    cyan: "#78e7ff",
    sky: "#b7f7ff",
    slate: "#94a3b8",
    amber: "#fbbf24",
    orange: "#fb923c",
    emerald: "#5ef4a6"
  }[tone] ?? "#78e7ff";

  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-3">
      <svg className="aspect-square w-full" viewBox="0 0 120 120" role="img" aria-label={`${type} illustration`}>
        <defs>
          <linearGradient id={`geo-${type}`} x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor={accent} stopOpacity="0.72" />
            <stop offset="100%" stopColor="#020617" stopOpacity="0.2" />
          </linearGradient>
          <filter id={`glow-${type}`} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect width="120" height="120" rx="18" fill="rgba(2,6,23,0.28)" />
        <circle cx="92" cy="22" r="20" fill={accent} opacity="0.08" />
        {type === "rift" && (
          <>
            <path d="M15 92 L48 20 L54 92Z" fill="rgba(255,255,255,0.05)" stroke={accent} strokeOpacity="0.5" />
            <path d="M105 92 L72 20 L66 92Z" fill="rgba(255,255,255,0.05)" stroke={accent} strokeOpacity="0.5" />
            <path d="M58 18 C48 35 66 46 54 62 C47 72 61 82 52 98" fill="none" stroke={accent} strokeWidth="3" strokeLinecap="round" filter={`url(#glow-${type})`} />
          </>
        )}
        {type === "glacier" && (
          <>
            <path d="M18 82 C35 52 45 32 60 18 C78 35 93 58 104 86 Z" fill={`url(#geo-${type})`} stroke="rgba(255,255,255,0.3)" />
            <path d="M23 88 C43 80 61 86 79 78 C91 74 101 78 109 85" fill="none" stroke={accent} strokeWidth="3" strokeLinecap="round" />
            <path d="M45 38 L55 82 M63 35 L66 80 M76 51 L72 78" stroke="rgba(2,6,23,0.45)" strokeWidth="2" />
          </>
        )}
        {type === "waves" && (
          <>
            <path d="M18 80 C35 62 48 82 64 64 C78 48 94 66 105 52" fill="none" stroke={accent} strokeWidth="5" strokeLinecap="round" filter={`url(#glow-${type})`} />
            <path d="M18 92 C34 84 47 94 62 84 C78 74 92 84 106 76" fill="none" stroke="rgba(255,255,255,0.32)" strokeWidth="3" strokeLinecap="round" />
            <path d="M34 38 L53 78 L72 38 Z" fill="rgba(15,23,42,0.8)" stroke="rgba(255,255,255,0.25)" />
          </>
        )}
        {type === "geothermal" && (
          <>
            <ellipse cx="60" cy="88" rx="36" ry="12" fill={`url(#geo-${type})`} opacity="0.75" />
            <path d="M42 70 C32 54 52 52 44 36 M61 72 C52 55 72 50 62 30 M78 70 C69 56 88 50 78 38" fill="none" stroke={accent} strokeWidth="3" strokeLinecap="round" filter={`url(#glow-${type})`} />
            <circle cx="60" cy="88" r="5" fill="#020617" opacity="0.6" />
          </>
        )}
        {type === "volcano" && (
          <>
            <path d="M20 92 L49 38 L58 58 L70 34 L104 92Z" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.22)" />
            <path d="M57 58 C65 65 64 75 75 83 C84 89 93 88 103 94" fill="none" stroke={accent} strokeWidth="4" strokeLinecap="round" filter={`url(#glow-${type})`} />
            <path d="M62 30 C55 20 72 18 66 8" fill="none" stroke={accent} strokeWidth="3" strokeLinecap="round" opacity="0.8" />
          </>
        )}
        {type === "fjord" && (
          <>
            <path d="M18 94 L38 30 L58 94Z" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.22)" />
            <path d="M50 94 L75 24 L108 94Z" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" />
            <path d="M20 88 C40 75 51 83 62 70 C76 54 92 65 106 48" fill="none" stroke={accent} strokeWidth="4" strokeLinecap="round" filter={`url(#glow-${type})`} />
          </>
        )}
        {type === "aurora" && (
          <>
            <path d="M12 40 C32 18 50 70 72 38 C88 15 100 45 112 28" fill="none" stroke={accent} strokeWidth="5" strokeLinecap="round" filter={`url(#glow-${type})`} />
            <path d="M18 86 L37 58 L52 86Z M56 86 L78 50 L104 86Z" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" />
            <circle cx="28" cy="28" r="1.5" fill="white" opacity="0.8" />
            <circle cx="92" cy="42" r="1.2" fill="white" opacity="0.65" />
          </>
        )}
        {type === "wind" && (
          <>
            <path d="M16 42 C36 30 52 44 70 34 C86 25 99 32 108 42" fill="none" stroke={accent} strokeWidth="4" strokeLinecap="round" filter={`url(#glow-${type})`} />
            <path d="M24 64 H83 C99 64 99 48 88 48" fill="none" stroke="rgba(255,255,255,0.36)" strokeWidth="3" strokeLinecap="round" />
            <path d="M18 82 H68 C83 82 85 70 74 70" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="3" strokeLinecap="round" />
          </>
        )}
      </svg>
    </div>
  );
}

function GodsPanel() {
  const groups = ["All", "Aesir", "Vanir", "Jotnar"];
  const [activeGroup, setActiveGroup] = useState("All");
  const [activeId, setActiveId] = useState(gods[0]?.id);
  const visibleGods = activeGroup === "All" ? gods : gods.filter((god) => god.group.includes(activeGroup));
  const activeGod = gods.find((god) => god.id === activeId) ?? visibleGods[0] ?? gods[0];
  const activeStory = activeGod ? godStories[activeGod.id] : undefined;

  return (
    <section className="glass overflow-hidden rounded-2xl p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/60">norse mythology atlas</p>
          <h2 className="mt-2 text-3xl font-black text-white">北欧众神谱系</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-cyan-50/68">
            以《诗体埃达》《散文埃达》为核心线索，兼顾故事、关系、神职和学术注记。这里不是完整百科，而是旅行途中能读得下去的神话速写。
          </p>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {groups.map((group) => (
            <button
              key={group}
              onClick={() => {
                setActiveGroup(group);
                const nextGod = group === "All" ? gods[0] : gods.find((god) => god.group.includes(group));
                if (nextGod) setActiveId(nextGod.id);
              }}
              className={`shrink-0 rounded-xl border px-3 py-2 text-xs font-bold transition ${
                activeGroup === group ? "border-cyan-200 bg-cyan-200 text-slate-950" : "border-white/10 bg-white/10 text-cyan-50/70"
              }`}
            >
              {group}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
          {visibleGods.map((god) => (
            <button
              key={god.id}
              onClick={() => setActiveId(god.id)}
              className={`group rounded-2xl border p-3 text-left transition ${
                activeGod.id === god.id
                  ? "border-cyan-200 bg-cyan-200/16 shadow-[0_0_28px_rgba(103,232,249,0.14)]"
                  : "border-white/10 bg-white/8 hover:border-cyan-200/40 hover:bg-white/12"
              }`}
            >
              <div className="flex items-center gap-3">
                <GodSigil god={god} compact />
                <div>
                  <h3 className="font-black text-white">{god.name}</h3>
                  <p className="mt-1 line-clamp-2 text-xs leading-5 text-cyan-50/62">{god.title}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {activeGod && (
          <article className={`relative overflow-hidden rounded-2xl border bg-slate-950/52 p-4 ${toneClass[activeGod.tone]}`}>
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-300/10 blur-3xl" />
            <div className="relative grid gap-4 md:grid-cols-[180px_1fr]">
              <div className="rounded-2xl border border-white/10 bg-white/8 p-4">
                <GodSigil god={activeGod} />
                <div className="mt-4 flex flex-wrap gap-2">
                  {activeGod.domains.map((domain) => (
                    <span key={domain} className="rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-[11px] font-bold text-cyan-50/76">
                      {domain}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-cyan-100/55">{activeGod.group} · {activeGod.oldNorse}</p>
                <h3 className="mt-2 text-3xl font-black text-white">{activeGod.name}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-cyan-50/76">{activeGod.title}</p>
                <div className="mt-4 rounded-2xl border border-white/10 bg-white/8 p-4">
                  <h4 className="text-sm font-black text-white">神话导读</h4>
                  <p className="mt-2 text-sm leading-7 text-cyan-50/74">{activeGod.story}</p>
                </div>
              </div>
            </div>

            {activeStory && <StoryReader story={activeStory} />}

            <div className="relative mt-4 grid gap-3">
              <InfoBlock title="关键器物" body={activeGod.artifact} />
            </div>

            <div className="relative mt-3 rounded-2xl border border-white/10 bg-white/8 p-4">
              <h4 className="text-sm font-black text-white">神谱关系</h4>
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {activeGod.relations.map((relation) => (
                  <div key={`${relation.label}-${relation.name}`} className="rounded-xl bg-slate-950/35 p-3">
                    <p className="text-[11px] font-bold text-cyan-100/50">{relation.label}</p>
                    <p className="mt-1 text-sm leading-5 text-cyan-50/82">{relation.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <details className="relative mt-3 rounded-2xl border border-white/10 bg-white/8 p-4">
              <summary className="cursor-pointer text-sm font-black text-white">学术注记与资料线索</summary>
              <p className="mt-3 text-sm leading-7 text-cyan-50/72">{activeGod.scholarNote}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {activeGod.sourceRefs.map((source) => (
                  <span key={source} className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] text-cyan-50/64">{source}</span>
                ))}
              </div>
            </details>
          </article>
        )}
      </div>

      <div className="mt-4 rounded-2xl border border-white/10 bg-white/8 p-4">
        <h3 className="text-sm font-black text-white">资料来源与阅读线索</h3>
        <div className="mt-3 grid gap-2 md:grid-cols-2">
          {mythSources.map((source) => (
            <a
              key={source.title}
              href={source.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 bg-slate-950/32 p-3 transition hover:border-cyan-200/40 hover:bg-white/10"
            >
              <p className="text-sm font-bold text-cyan-50">{source.title}</p>
              <p className="mt-1 text-xs leading-5 text-cyan-50/60">{source.note}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function GodSigil({ god, compact = false }) {
  const sizeClass = compact ? "h-14 w-14" : "mx-auto h-36 w-36";
  return (
    <div className={`${sizeClass} relative grid shrink-0 place-items-center rounded-2xl border border-white/10 bg-slate-950/60`}>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <radialGradient id={`sigil-${god.id}`} cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="rgba(247,251,255,0.42)" />
            <stop offset="45%" stopColor="rgba(103,232,249,0.16)" />
            <stop offset="100%" stopColor="rgba(15,23,42,0)" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="42" fill={`url(#sigil-${god.id})`} />
        <path d="M50 9 L61 38 L91 50 L61 62 L50 91 L39 62 L9 50 L39 38Z" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <circle cx="50" cy="50" r="29" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" />
        <path d="M27 72 C38 78 62 78 73 72" fill="none" stroke="rgba(94,244,166,0.3)" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span className={compact ? "text-2xl font-black text-white" : "text-6xl font-black text-white"}>{god.symbol}</span>
    </div>
  );
}

function StoryReader({ story }) {
  return (
    <div className="relative mt-4 rounded-2xl border border-cyan-200/12 bg-slate-950/36 p-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-cyan-100/50">rest stop reading</p>
          <h4 className="mt-1 text-lg font-black text-white">神话故事</h4>
        </div>
        <span className="rounded-full bg-cyan-200/10 px-3 py-1 text-[11px] font-bold text-cyan-100/72">
          {story.chapters.length} chapters
        </span>
      </div>
      <p className="mt-3 text-sm leading-7 text-cyan-50/74">{story.intro}</p>
      <div className="mt-4 space-y-3">
        {story.chapters.map((chapter, index) => (
          <details key={chapter.title} className="rounded-2xl border border-white/10 bg-white/8 p-4" open={index === 0}>
            <summary className="cursor-pointer list-none">
              <div className="flex items-start gap-3">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-cyan-200 text-xs font-black text-slate-950">
                  {index + 1}
                </span>
                <h5 className="pt-0.5 text-sm font-black text-white">{chapter.title}</h5>
              </div>
            </summary>
            <p className="mt-3 text-sm leading-7 text-cyan-50/72">{chapter.body}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

function SagaPanel() {
  const types = [
    { id: "all", label: "全部" },
    { id: "heroic", label: "英雄" },
    { id: "family", label: "家族" },
    { id: "voyage", label: "航海" },
    { id: "outlaw", label: "流放" },
    { id: "haunting", label: "亡灵" }
  ];
  const [activeType, setActiveType] = useState("all");
  const [activeSagaId, setActiveSagaId] = useState(sagaStories[0]?.id);
  const visibleSagas = activeType === "all" ? sagaStories : sagaStories.filter((saga) => saga.type === activeType);
  const activeSaga = sagaStories.find((saga) => saga.id === activeSagaId) ?? visibleSagas[0] ?? sagaStories[0];

  return (
    <section className="glass overflow-hidden rounded-2xl p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/60">icelandic saga shelf</p>
          <h2 className="mt-2 text-3xl font-black text-white">Saga 英雄故事篇</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-cyan-50/68">
            Edda 更像神话与诗学源头，Saga 则把神话世界观落到人的生活里：家族、法律、复仇、航海、亡灵和名誉。这里把 Saga 和众神篇并排读。
          </p>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {types.map((type) => (
            <button
              key={type.id}
              onClick={() => {
                setActiveType(type.id);
                const nextSaga = type.id === "all" ? sagaStories[0] : sagaStories.find((saga) => saga.type === type.id);
                if (nextSaga) setActiveSagaId(nextSaga.id);
              }}
              className={`shrink-0 rounded-xl border px-3 py-2 text-xs font-bold transition ${
                activeType === type.id ? "border-cyan-200 bg-cyan-200 text-slate-950" : "border-white/10 bg-white/10 text-cyan-50/70"
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
          {visibleSagas.map((saga) => (
            <button
              key={saga.id}
              onClick={() => setActiveSagaId(saga.id)}
              className={`rounded-2xl border p-3 text-left transition ${
                activeSaga.id === saga.id
                  ? "border-cyan-200 bg-cyan-200/16 shadow-[0_0_28px_rgba(103,232,249,0.14)]"
                  : "border-white/10 bg-white/8 hover:border-cyan-200/40 hover:bg-white/12"
              }`}
            >
              <p className="text-[11px] uppercase tracking-[0.18em] text-cyan-100/48">{saga.period}</p>
              <h3 className="mt-1 font-black text-white">{saga.title}</h3>
              <p className="mt-1 line-clamp-2 text-xs leading-5 text-cyan-50/62">{saga.subtitle}</p>
            </button>
          ))}
        </div>

        {activeSaga && (
          <article className="relative overflow-hidden rounded-2xl border border-cyan-300/20 bg-slate-950/52 p-4">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-amber-300/10 blur-3xl" />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.22em] text-cyan-100/55">{activeSaga.period}</p>
              <h3 className="mt-2 text-3xl font-black text-white">{activeSaga.title}</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-cyan-50/76">{activeSaga.subtitle}</p>
              <p className="mt-4 text-sm leading-7 text-cyan-50/74">{activeSaga.summary}</p>
            </div>

            <div className="relative mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/8 p-4">
                <h4 className="text-sm font-black text-white">对应众神</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {activeSaga.pairedGods.map((god) => (
                    <span key={god} className="rounded-full bg-cyan-200/10 px-2.5 py-1 text-[11px] font-bold text-cyan-100/78">
                      {god}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/8 p-4">
                <h4 className="text-sm font-black text-white">主题关键词</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {activeSaga.themes.map((theme) => (
                    <span key={theme} className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-bold text-cyan-50/70">
                      {theme}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <StoryReader story={{ intro: "下面是适合旅途中分段阅读的 Saga 故事梗概。它保留叙事味道，但不替代完整译本。", chapters: activeSaga.chapters }} />

            <details className="relative mt-3 rounded-2xl border border-white/10 bg-white/8 p-4">
              <summary className="cursor-pointer text-sm font-black text-white">这篇 Saga 怎样和众神篇对应？</summary>
              <p className="mt-3 text-sm leading-7 text-cyan-50/72">
                众神篇讲的是神话母题：命运、誓言、边界、死亡、诗歌、海洋和混乱。Saga 篇把这些母题放进人的社会：家族争斗、法律赔偿、航海迁徙、亡灵恐惧、爱情选择和名誉压力。对应众神不是说故事里一定有神直接登场，而是说它们共享同一套文化想象。
              </p>
            </details>
          </article>
        )}
      </div>

      <div className="mt-4 rounded-2xl border border-white/10 bg-white/8 p-4">
        <h3 className="text-sm font-black text-white">Saga 资料来源与继续阅读</h3>
        <div className="mt-3 grid gap-2 md:grid-cols-2">
          {sagaSources.map((source) => (
            <a
              key={source.title}
              href={source.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 bg-slate-950/32 p-3 transition hover:border-cyan-200/40 hover:bg-white/10"
            >
              <p className="text-sm font-bold text-cyan-50">{source.title}</p>
              <p className="mt-1 text-xs leading-5 text-cyan-50/60">{source.note}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfoBlock({ title, body }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/8 p-4">
      <h4 className="text-sm font-black text-white">{title}</h4>
      <p className="mt-2 text-sm leading-6 text-cyan-50/72">{body}</p>
    </div>
  );
}

function TodoPanel({ days }) {
  const items = [...new Set(days.flatMap((day) => day.checklist))].slice(0, 14);
  return (
    <section className="glass rounded-2xl p-4">
      <h2 className="text-2xl font-black text-white">旅行待办</h2>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {items.map((item) => (
          <label key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-3 text-sm text-cyan-50/80">
            <input type="checkbox" className="h-4 w-4 accent-cyan-300" />
            {item}
          </label>
        ))}
      </div>
    </section>
  );
}

function PlaceholderPanel({ title, body }) {
  return (
    <section className="glass rounded-2xl p-5">
      <h2 className="text-2xl font-black text-white">{title}</h2>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-cyan-50/70">{body}</p>
    </section>
  );
}
