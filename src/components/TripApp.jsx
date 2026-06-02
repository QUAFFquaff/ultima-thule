import { useMemo, useState } from "react";
import { roadbook } from "../data/roadbook";
import { geography, gods } from "../data/learning";

const toneClass = {
  amber: "border-amber-300/30 text-amber-100",
  cyan: "border-cyan-300/30 text-cyan-100",
  orange: "border-orange-300/30 text-orange-100",
  emerald: "border-emerald-300/30 text-emerald-100",
  sky: "border-sky-300/30 text-sky-100",
  slate: "border-slate-300/30 text-slate-100"
};

export default function TripApp({ days, baseUrl }) {
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
            <TodayPanel day={current} baseUrl={baseUrl} openChecklist={openChecklist} setOpenChecklist={setOpenChecklist} />
          </div>
        </section>
      )}

      {activeTab === "geography" && <LearningGrid title="冰岛地理速记" items={geography} />}
      {activeTab === "gods" && <GodsPanel />}
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
    [36, 78], [31, 67], [34, 57], [42, 47], [57, 42], [63, 34], [67, 25],
    [57, 20], [42, 24], [28, 34], [24, 50], [25, 63], [32, 75]
  ];
  const path = points.map(([x, y], index) => `${index === 0 ? "M" : "L"} ${x} ${y}`).join(" ");

  return (
    <div className="glass rounded-2xl p-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/60">light map</p>
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
        </defs>
        <path d="M20 80 C8 54 21 20 49 11 C75 3 94 24 91 49 C88 73 66 91 39 86 C30 84 24 82 20 80Z" fill="rgba(255,255,255,0.045)" stroke="rgba(255,255,255,0.16)" strokeWidth="1.2" />
        <path d={path} fill="none" stroke="url(#routeGlow)" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
        {points.map(([x, y], index) => {
          const day = days[index];
          const active = day.day === selectedDay;
          return (
            <g key={day.slug} onClick={() => onSelect(day.day)} className="cursor-pointer">
              <circle cx={x} cy={y} r={active ? 4.8 : 3.5} fill={active ? "#f7fbff" : "#071018"} stroke={active ? "#5ef4a6" : "#78e7ff"} strokeWidth="1.5" />
              <text x={x} y={y + 10} textAnchor="middle" fontSize="4" fill={active ? "#f7fbff" : "rgba(247,251,255,0.6)"}>{day.day}</text>
            </g>
          );
        })}
      </svg>
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

function GodsPanel() {
  return (
    <section className="glass rounded-2xl p-4">
      <h2 className="text-2xl font-black text-white">北欧众神谱系</h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {gods.map((god) => (
          <details key={god.id} className={`rounded-2xl border bg-white/10 p-4 ${toneClass[god.tone]}`}>
            <summary className="cursor-pointer list-none">
              <div className="text-3xl">{god.symbol}</div>
              <h3 className="mt-3 text-lg font-black text-white">{god.name}</h3>
              <p className="mt-1 text-xs opacity-70">{god.title}</p>
            </summary>
            <p className="mt-3 text-sm leading-6 text-cyan-50/70">{god.body}</p>
          </details>
        ))}
      </div>
    </section>
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
