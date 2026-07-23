import { useEffect, useMemo, useRef, useState } from "react";
import { roadbook } from "../data/roadbook";
import { accommodationGuide } from "../data/accommodationGuide";
import { tripStops } from "../data/tripMap";
import { gods, mythSources } from "../data/learning";
import { godStories } from "../data/mythologyStories";
import { sagaStories, sagaSources } from "../data/sagaStories";
import { geographyAtlas, geographySources } from "../data/geographyAtlas";
import { googleDirectionsUrl, googleMapsSearchUrl, segmentDirectionsUrl } from "../lib/maps";

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
          <p className="mt-2 text-lg font-bold text-white sm:text-xl">{roadbook.subtitle}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="rounded-full border border-cyan-200/25 bg-cyan-200/10 px-3 py-1.5 text-xs font-bold text-cyan-50">{roadbook.dates}</span>
            <span className="rounded-full border border-emerald-200/25 bg-emerald-200/10 px-3 py-1.5 text-xs font-bold text-emerald-50">↻ {roadbook.routeMode}</span>
          </div>
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
      {activeTab === "weather" && <TravelToolsPanel />}
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
  const day = days.find((item) => item.day === selectedDay) ?? days[0];
  const stops = tripStops[selectedDay] ?? [];

  return (
    <div className="glass overflow-hidden rounded-2xl p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/60">interactive route</p>
          <h2 className="mt-1 text-xl font-bold text-white">Day {day.day} · 每日点位与顺序</h2>
          <p className="mt-1 text-xs leading-5 text-cyan-50/55">点标记展示 Excel 的顺序；连线仅为示意，正式驾驶请打开 Google Maps。</p>
        </div>
        <span className="shrink-0 rounded-xl border border-emerald-300/25 bg-emerald-300/10 px-3 py-2 text-xs text-emerald-100">{day.distance}</span>
      </div>

      <RouteMap day={day} stops={stops} />

      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {stops.map((stop, index) => (
          <a
            key={`${stop.name}-${index}`}
            href={googleMapsSearchUrl(stop.query)}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-white/10 bg-white/8 p-3 transition hover:border-cyan-200/40 hover:bg-white/12"
          >
            <div className="flex items-start gap-3">
              <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-black ${stop.type === "stay" ? "bg-orange-300 text-slate-950" : stop.type === "start" ? "bg-emerald-300 text-slate-950" : "bg-cyan-300/15 text-cyan-100"}`}>{index + 1}</span>
              <span>
                <span className="block text-sm font-bold text-white group-hover:text-cyan-100">{stop.name} ↗</span>
                <span className="mt-1 block text-xs leading-5 text-cyan-50/60">{stop.note}</span>
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="hide-scrollbar mt-3 flex gap-2 overflow-x-auto">
        {days.map((item) => (
          <button key={item.day} onClick={() => onSelect(item.day)} className={`shrink-0 rounded-xl px-3 py-2 text-xs font-bold ${item.day === selectedDay ? "bg-cyan-200 text-slate-950" : "bg-white/10 text-cyan-50/65"}`}>
            D{item.day}
          </button>
        ))}
      </div>
    </div>
  );
}

function RouteMap({ day, stops }) {
  const containerRef = useRef(null);

  useEffect(() => {
    let map;
    let timer;
    let cancelled = false;

    const mount = () => {
      if (cancelled || !containerRef.current) return;
      if (!window.L) {
        timer = window.setTimeout(mount, 120);
        return;
      }

      const L = window.L;
      map = L.map(containerRef.current, { zoomControl: true, scrollWheelZoom: false });
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: "&copy; OpenStreetMap contributors"
      }).addTo(map);

      const coordinates = stops.map((stop) => [stop.lat, stop.lng]);
      if (coordinates.length > 1) {
        L.polyline(coordinates, { color: "#67e8f9", weight: 4, opacity: 0.85, dashArray: "8 6" }).addTo(map);
        map.fitBounds(coordinates, { padding: [34, 34], maxZoom: 9 });
      } else if (coordinates[0]) {
        map.setView(coordinates[0], 10);
      }

      stops.forEach((stop, index) => {
        const color = stop.type === "stay" ? "#fdba74" : stop.type === "start" ? "#6ee7b7" : "#67e8f9";
        const icon = L.divIcon({
          className: "trip-map-marker",
          html: `<span style="background:${color}">${index + 1}</span>`,
          iconSize: [30, 30],
          iconAnchor: [15, 15]
        });
        L.marker([stop.lat, stop.lng], { icon })
          .bindPopup(`<strong>${stop.name}</strong><br><span>${stop.note}</span>`)
          .addTo(map);
      });
    };

    mount();
    return () => {
      cancelled = true;
      if (timer) window.clearTimeout(timer);
      if (map) map.remove();
    };
  }, [day.day, stops]);

  return (
    <div className="relative mt-4 overflow-hidden rounded-2xl border border-cyan-200/20 bg-slate-950/55">
      <div ref={containerRef} className="h-[360px] w-full sm:h-[430px]" aria-label={`Day ${day.day} 路线地图`} />
      <div className="pointer-events-none absolute bottom-3 left-3 z-[500] rounded-xl bg-slate-950/80 px-3 py-2 text-[11px] text-cyan-50/75 backdrop-blur">绿色出发 · 蓝色景点 · 橙色住宿</div>
    </div>
  );
}

function TodayPanel({ day, baseUrl, openChecklist, setOpenChecklist }) {
  const stops = tripStops[day.day] ?? [];
  const lodging = accommodationGuide[day.day];
  const routeUrl = googleDirectionsUrl(stops.map((stop) => stop.query));

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
        <a className="flex-1 rounded-2xl bg-cyan-300 px-4 py-3 text-center text-sm font-black text-slate-950 transition hover:bg-cyan-200" href={routeUrl} target="_blank" rel="noreferrer">{stops.length > 1 ? roadbook.mapButton : "在 Google Maps 查看地点"} ↗</a>
        <a className="rounded-2xl border border-white/10 px-4 py-3 text-sm font-bold text-cyan-50" href={`${baseUrl}itinerary/${day.slug}/`}>详情</a>
      </div>
      <p className="mt-2 text-xs leading-5 text-cyan-50/48">全程按钮适合预览；实际开车建议使用下方每一段的“导航”，手机端更稳定。</p>
      {lodging && (
        <section className="mt-4 rounded-2xl border border-orange-300/25 bg-orange-300/10 p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-100/65">今晚住哪里</p>
              <h3 className="mt-1 text-lg font-black text-white">{lodging.area}</h3>
            </div>
            <span className="rounded-lg bg-orange-200 px-2 py-1 text-xs font-black text-slate-950">住宿选址</span>
          </div>
          <p className="mt-3 text-sm leading-6 text-orange-50/80">{lodging.why}</p>
          <p className="mt-2 text-xs leading-5 text-orange-100/60">取舍：{lodging.tradeoff}</p>
          <a className="mt-3 inline-flex rounded-xl border border-orange-200/25 bg-orange-200/10 px-3 py-2 text-sm font-bold text-orange-50 transition hover:bg-orange-200/20" href={googleMapsSearchUrl(lodging.search)} target="_blank" rel="noreferrer">在 Google Maps 查看这一带住宿 ↗</a>
        </section>
      )}
      <Timeline segments={day.segments} />
      {day.planNotes?.length > 0 && (
        <section className="mt-4 rounded-2xl border border-amber-300/30 bg-amber-300/10 p-4">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-bold text-amber-50">Excel 待确认 / 修改意见</h3>
            <span className="rounded-lg bg-amber-200 px-2 py-1 text-[10px] font-black text-slate-950">尚未改计划</span>
          </div>
          <ul className="mt-2 space-y-2 text-sm leading-6 text-amber-50/80">
            {day.planNotes.map((note) => <li key={note}>• {note}</li>)}
          </ul>
        </section>
      )}
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
  if (!segments.length) return null;

  return (
    <div className="mt-4">
      <h3 className="mb-2 text-sm font-bold text-cyan-50/90">路线时间线</h3>
      <div className="space-y-2">
        {segments.map((segment, index) => (
          <div key={`${segment.from}-${segment.to}`} className="grid grid-cols-[36px_1fr_auto] items-center gap-3 rounded-2xl bg-white/10 p-3">
            <span className="text-xs font-bold text-emerald-100">#{index + 1}</span>
            <div>
              <p className="text-sm font-bold text-white">{segment.from} → {segment.to}</p>
              <p className="mt-1 text-xs text-cyan-50/60">{segment.distance} / {segment.driveTime}</p>
            </div>
            <a className="rounded-xl border border-cyan-200/20 bg-cyan-200/10 px-3 py-2 text-xs font-black text-cyan-50 transition hover:bg-cyan-200 hover:text-slate-950" href={segmentDirectionsUrl(segment.from, segment.to)} target="_blank" rel="noreferrer" aria-label={`导航 ${segment.from} 到 ${segment.to}`}>导航 ↗</a>
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

function TravelToolsPanel() {
  const tools = [
    { icon: "🌦️", title: "天气与预警", body: "看区域预报、风速和黄色/橙色预警。", action: "打开 Veður", url: "https://en.vedur.is/" },
    { icon: "🛣️", title: "实时道路", body: "看封路、路面状态、风和沿途摄像头。", action: "打开 Umferðin", url: "https://umferdin.is/en" },
    { icon: "⚠️", title: "旅行警报", body: "火山、徒步与临时危险信息，以官方警报为准。", action: "打开 SafeTravel", url: "https://safetravel.is/" },
    { icon: "🌌", title: "极光云图", body: "绿色代表云层，白色区域才更有机会看到极光。", action: "打开极光预报", url: "https://en.vedur.is/weather/forecasts/aurora/" }
  ];

  return (
    <section className="glass rounded-2xl p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/60">live travel desk</p>
      <h2 className="mt-2 text-3xl font-black text-white">每天出发前的 3 分钟检查</h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-cyan-50/70">先看天气预警，再看整段道路，最后看 SafeTravel。Google Maps 负责导航，不负责判断冰岛的路是否适合今天开。</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {tools.map((tool) => (
          <a key={tool.title} href={tool.url} target="_blank" rel="noreferrer" className="group rounded-2xl border border-white/10 bg-white/8 p-4 transition hover:-translate-y-0.5 hover:border-cyan-200/40 hover:bg-white/12">
            <span className="text-2xl">{tool.icon}</span>
            <h3 className="mt-3 font-black text-white">{tool.title}</h3>
            <p className="mt-2 text-sm leading-6 text-cyan-50/65">{tool.body}</p>
            <p className="mt-3 text-sm font-black text-cyan-100">{tool.action} ↗</p>
          </a>
        ))}
      </div>
      <div className="mt-4 rounded-2xl border border-rose-300/20 bg-rose-300/10 p-4 text-sm leading-6 text-rose-50/80">
        <strong className="text-white">决策顺序：</strong>出现官方警报或封路时，以取消、等待或改走为先；紧急情况拨打 112。
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
