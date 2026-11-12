# AIPY 每日游戏检索 · 交接说明

> 目标：每天帮用户检索「轻量化大型游戏网页版 / 单文件可移植游戏」，验证后接入网站。

## 重点检索方向（用户明确要求）
**AI 原生（AI-native）游戏**：像「几猫港区」「黑神话悟空」这种 —— AI 生成/复刻的大型游戏轻量化网页版。
- 特征：AI 制作的 3A 轻量化版、大 IP 复刻、自包含 HTML（几猫港区就是 1.4MB 单文件、零外部依赖）
- 优先找：能下载成自包含单文件本地托管的；其次国内可达外链
- 关键词：AI game、AI 复刻、黑神话 网页版、AI 生成游戏、web AI game

## 检索来源（按优先级）
1. `Carter54git/Ultimate-Catalog-Of-Web-Game-Ports` —— 大型游戏网页移植目录（最全）
   - 读取 README：`gh api repos/Carter54git/Ultimate-Catalog-Of-Web-Game-Ports/readme --jq '.content' | base64 -d`
2. js13k 官网 —— 单文件 HTML 游戏（自包含、国内能玩、最适合本地托管）
   - 在线地址格式：`https://play.js13kgames.com/<slug>/`
3. GitHub 搜索 —— `gh search repos "关键词"`

## 验证标准（关键！血的教训）
- ❌ 不能只看 HTTP 200，那只能证明"链接通"，不能证明"能玩"
- ✅ 真正可玩 = 资源国内可达（不依赖 archive.org / raw.githack.com / workers.dev / vercel 等境外 CDN）
- ✅ 最稳的做法：像几猫港区那样，**下载成自包含单文件 HTML 本地托管**（`games/` 目录）

## 已踩过的坑
- GTA2 依赖 archive.org（国内连不上）→ 标"需代理"
- GTA3 依赖 raw.githack.com（国内连不上）→ 标"需代理"
- 几何冲刺依赖 workers.dev → 不稳
- gn-math.dev/?id=xxx 是导航站，参数无效 → 已删除
- 植物大战僵尸/空洞骑士/掘地求升 找不到国内可玩直链 → 标"维护中"
- truffled.lol / itch.io / vercel.app → 国内超时

## 状态体系
- `在线`：国内能直接玩
- `需代理`：境外资源，挂代理能玩（橙色角标，可点）
- `维护中`：暂不可用
- `敬请期待`：占位（无 URL，不可点）

## 本地托管 vs 外链
- 本地托管（local:true）：下载 HTML 到 games/，点击新标签页打开，最稳
- 外链（local:false）：iframe 灯箱打开，依赖对方站点稳定性

## 常用命令
```bash
# 本地预览
cd /Users/mi/workspace/aifun && python3 -m http.server 8765
# 打开 http://localhost:8765

# 提交推送
git add -A && git commit -m "xxx" && git push origin main
```

## 当前进度（2026-11-12）
- 共 35 款，29 款在线
- 本地托管 7 款：几猫港区 + 6款js13k
- 外链在线 22 款，需代理 2 款（GTA2/GTA3），维护/占位 4 款
- 域名 aipy.space 已绑定（HTTP 可用，HTTPS 证书待签）
