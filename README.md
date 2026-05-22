# 冰岛 13 天环岛自驾路书

这是一个基于 Hugo 搭建的移动端优先静态路书网站，用于展示 2026-09-25 至 2026-10-07 的冰岛 13 天逆时针环岛自驾行程。页面重点突出每日路线、车程、住宿、天气风险与 Google Maps 导航入口，适合旅行途中在手机上快速查看。

## 项目结构

```text
iceland-roadbook/
├─ hugo.toml
├─ README.md
├─ .github/workflows/hugo.yaml
├─ layouts/
├─ content/
└─ static/
```

## 本地运行

先确认本机已经安装 Hugo Extended，再执行：

```powershell
hugo new site iceland-roadbook
cd iceland-roadbook
hugo server -D
```

生产构建命令：

```powershell
hugo --minify
```

如果你已经在当前仓库内，直接进入项目目录运行：

```powershell
cd iceland-roadbook
hugo server -D
```

## 新增或修改每日行程

每日内容位于 `content/itinerary/day01.md` 到 `day13.md`。

修改时主要更新两部分：

1. YAML Front Matter
   - `title`
   - `date`
   - `weight`
   - `params.route`
   - `params.distance`
   - `params.drive_time`
   - `params.accommodation`
   - `params.map_url`
   - `params.highlights`
   - `params.risks`
   - `params.backup`
   - `params.checklist`
   - `params.segments`
2. Markdown 正文
   - 今日概览
   - 推荐节奏
   - 景点说明
   - 餐食/补给建议
   - 天气与道路提醒
   - 备选方案
   - 晚间极光建议

新增页面时可参考：

```powershell
hugo new content/itinerary/day14.md
```

然后手动补齐 front matter，并设置正确的 `weight`，确保排序正常。

## 如何替换 Google Maps 链接

当前所有页面默认使用占位链接 `https://www.google.com/maps` 或更接近路线的占位跳转。

推荐替换方式：

1. 打开对应日期文件，例如 `content/itinerary/day04.md`
2. 修改 `params.map_url`
3. 保存后重新执行 `hugo server -D`

示例：

```yaml
params:
  map_url: "https://www.google.com/maps/dir/..."
```

建议每一天使用 Google Maps 的多点导航链接，至少包含起点、核心景点与住宿地。

## 部署到 GitHub Pages

1. 在 GitHub 创建仓库并推送代码：

```powershell
git init
git add .
git commit -m "Initial Hugo roadbook site"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

2. 仓库内已经包含 `.github/workflows/hugo.yaml`
3. 打开 GitHub 仓库页面
4. 进入 `Settings > Pages`
5. 在 `Build and deployment` 中选择 `Source: GitHub Actions`
6. 之后每次 push 到 `main` 分支都会自动构建并发布

## 出发前检查清单

- 确认租车为 4×4 SUV，且含全险
- 确认不进入内陆 F 路
- 出发前每日查看天气与道路状况
- 重点检查风速、晨霜、山路湿滑和火山区域封控
- 冰川徒步、温泉、观鲸等活动提前预订
- 保留每天的机动时间，避免夜车
- 在每个 `dayXX.md` 中补齐真实 Google Maps 导航链接
- 确认手机可离线访问站点页面或提前缓存关键页面

## 常用命令

```powershell
hugo new site iceland-roadbook
cd iceland-roadbook
hugo server -D
hugo --minify
git init
git add .
git commit -m "Initial Hugo roadbook site"
git push -u origin main
```
