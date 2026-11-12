# AI FUN 项目交接文档

## 目标
做一个个人游戏门户小站「AI FUN」：首页是霓虹街机厅风格的游戏卡片墙，每个卡片=一款 AI 做的轻量化网页游戏，点击全屏开玩。支持配置化一键上下架。

## 已确认规则
- 站名：**AI FUN**，slogan：**AI 做的游戏，一键开玩**
- 定位：个人小站，自用入口，不商业化
- 游戏来源：现成网页游戏外链 + 本地托管「几猫港区」
- 代码仓库：GitHub 账号 KG3KAI，新建仓库保存
- 服务器：阿里云轻量服务器，**北京区（国内）**，需确认系统
- 固定本地路径：`/Users/mi/workspace/aifun`

## 已完成
- [x] 项目骨架 + git init（分支 main）
- [x] `index.html` 门户首页（街机厅风格）
- [x] `css/style.css` 霓虹视觉、卡片墙、灯箱、移动端适配
- [x] `js/games.js` 游戏配置清单（8 项：7 游戏 + 1 敬请期待）
- [x] `js/main.js` 渲染 + iframe 灯箱交互
- [x] `games/jimao-gangkou.html` 本地托管（1.4MB，自包含）
- [x] 本地 HTTP 验证全部 200

## 待办
- [ ] GitHub 授权：`gh` token 已失效、SSH 公钥未授权 → 需用户重登（见「关键命令」）
- [ ] 在 GitHub 建远程仓库并首次 push
- [ ] 确认服务器 SSH 登录（平台=阿里云轻量，地区=北京，系统/登录方式待确认）
- [ ] 部署到服务器（Nginx/静态托管）
- [ ] 域名：国内服务器绑域名需 ICP 备案，且仿制 IP 游戏过审风险 → 先用 IP 访问
- [ ] 生成 Logo / 封面图（用户尚未提供，可用 AI 自动生成占位）
- [ ] 确认「黑神话·关羽」链接 tcloudbaseapp.com 是否恢复（当前 15s 超时）

## 关键命令
```bash
# 本地预览
cd /Users/mi/workspace/aifun && python3 -m http.server 8765
# 打开 http://localhost:8765

# GitHub 重新授权（任选其一）
gh auth login -h github.com          # 浏览器授权
ssh -T git@github.com                # 测 SSH（当前 Permission denied）

# 添加远程并推送（授权后）
git remote add origin git@github.com:KG3KAI/aifun.git
git add -A && git commit -m "AI FUN 门户 v1" && git push -u origin main
```

## 游戏清单
| id | 名称 | 类型 | 状态 |
|---|---|---|---|
| jimao-gangkou | 几猫港区 | 本地 3D 射击 | 在线 |
| wukong | 黑神话·悟空 | 外链动作 | 在线 |
| lol-hex | 海克斯大乱斗 | 外链对战 | 在线 |
| qqfeiche | QQ飞车 3D | 外链竞速 | 在线 |
| cf-ship | 穿越火线·运输船 | 外链射击 | 在线 |
| pelican-bike | 鹈鹕骑自行车 | 外链休闲 | 在线 |
| wukong-guanyu | 黑神话·关羽 | 外链动作 | 维护中（链接失联）|
| coming-soon | 敬请期待 | 占位 | - |

## 安全红线
1. **不自动下单 / 不触碰付费**：本项目只做静态门户，不涉及交易
2. **版权风险**：仿制大 IP（黑神话/LOL/CF/QQ飞车）仅限个人学习试玩，公开推广前须评估；上下架开关已备好，随时可撤
3. **不伪造 ICP 备案**：国内服务器绑域名需正规备案，未备案前只用 IP 或海外域名
4. **服务器操作谨慎**：SSH 到阿里云后，任何 `rm -rf`、防火墙/安全组、系统级改动前先与用户确认

## 下一段可粘贴开场白
「继续 AI FUN 项目，先读 /Users/mi/workspace/aifun/CONTINUATION.md，当前卡在 GitHub 授权和服务器 SSH 确认。已搭好门户骨架并本地验证通过。」
