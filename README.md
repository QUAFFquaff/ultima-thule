# Ultima Thule

2026 国庆冰岛 Day 0-11 顺时针环岛自驾旅行应用。当前每日路线、住宿和点位以 `2026国庆冰岛必须行.xlsx` 的“顺时针行程”为基准，保持静态输出，可部署到 GitHub Pages。

## 本地运行

```powershell
npm install
npm run dev
npm run build
```

GitHub Pages 部署路径配置为 `/ultima-thule/`。如果本机 Node 版本过低，可以使用 Node 20 或更高版本。

## 修改行程

每日行程位于：

```text
src/content/itinerary/day00.md
...
src/content/itinerary/day11.md
```

修改路线、住宿、车程、风险、备选方案、路线分段和 Google Maps 链接，只需要编辑对应 Markdown 的 front matter。已订住宿位于 `src/data/accommodationGuide.ts`，活动预约和费用快照分别位于 `src/data/bookings.ts`、`src/data/tripCosts.ts`。

关键字段：

```yaml
day: 0
date: "2026-09-25"
route: "北京出发 → 欧洲转机 → KEF → 机场附近酒店"
distance: "机场短驳"
driveTime: "待提车方案确认"
accommodation: "KEF 机场附近（待确认）"
mapUrl: "https://www.google.com/maps"
learningRefs: ["odin", "aurora"]
planNotes: ["Excel 待确认或修改意见；不会自动改变计划"]
```

## 修改站点配置

站点标题、顶部 Tab、统计卡、按钮文案位于：

```text
src/data/roadbook.ts
```

北欧众神和冰岛地理知识位于：

```text
src/data/learning.ts
```

每日页面通过 `learningRefs` 关联这些知识内容。

## 部署 GitHub Pages

仓库包含 GitHub Actions 工作流：

```text
.github/workflows/astro.yaml
```

推送到 `main` 后，在 GitHub 仓库 `Settings > Pages` 中选择 `Source: GitHub Actions`。

常用命令：

```powershell
git add .
git commit -m "Migrate roadbook to Astro"
git push origin main
```

## 出发前检查

- 确认 4x4 SUV 和全险
- 不进入内陆 F 路
- 每天查看天气、道路和封控
- 黑沙滩不靠近湿沙线
- 冰川徒步、温泉、观鲸提前预约
- 核对页面黄色“Excel 待确认 / 修改意见”卡片
- 使用每日全程预览或每一段的 Google Maps 导航按钮
