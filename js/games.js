// AIPY 游戏清单 —— 配置化入口
// 加游戏：复制一个对象；下架：enabled 改 false；维护：status 改 "维护中"
// category 用于分类筛选；cover 留空则用 emoji 自动生成
window.AIFUN_GAMES = [
  // —— 本地大作 ——
  { id:"jimao-gangkou", name:"几猫港区", tag:"3D 射击", desc:"AI 做的 3D 轻量化大作，潜入港区撤离。", url:"games/jimao-gangkou.html", local:true, enabled:true, status:"在线", emoji:"🚢", hue:"196", category:"射击", cover:"assets/covers/jimao-gangkou.svg" },
  // —— AI 复刻 / 网页移植 ——
  { id:"wukong", name:"黑神话·悟空", tag:"动作", desc:"AI 版齐天大圣，直面天命。", url:"https://wukong.cnmwx.com/", local:false, enabled:true, status:"在线", emoji:"🐒", hue:"32", category:"动作", cover:"assets/covers/wukong.svg" },
  { id:"lol-hex", name:"海克斯大乱斗", tag:"对战", desc:"英雄联盟 AI 轻量版，海克斯科技乱斗。", url:"https://lol.hanyue.io/", local:false, enabled:true, status:"在线", emoji:"⚔️", hue:"252", category:"对战", cover:"assets/covers/lol-hex.svg" },
  { id:"qqfeiche", name:"QQ飞车 3D", tag:"竞速", desc:"AI 版飞车，氮气漂移一把梭。", url:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nulojnulwlo/qqfeiche3d/index.html", local:false, enabled:true, status:"在线", emoji:"🏎️", hue:"200", category:"竞速", cover:"assets/covers/qqfeiche.svg" },
  { id:"cf-ship", name:"穿越火线·运输船", tag:"射击", desc:"经典运输船，AI 复刻突突突。", url:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nulojnulwlo/cf-transport-ship/transport-ship.html", local:false, enabled:true, status:"在线", emoji:"🔫", hue:"0", category:"射击", cover:"assets/covers/cf-ship.svg" },
  { id:"pelican-bike", name:"鹈鹕骑自行车", tag:"休闲", desc:"一只鹈鹕的爆笑骑行挑战。", url:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nulojnulwlo/pelican-bike/index.html", local:false, enabled:true, status:"在线", emoji:"🚲", hue:"152", category:"休闲", cover:"assets/covers/pelican-bike.svg" },
  { id:"gta2", name:"GTA 2", tag:"动作", desc:"俯视角黑帮经典。游戏数据在境外，需挂代理才能玩。", url:"https://m1stermo.github.io/gta2/", local:false, enabled:true, status:"需代理", emoji:"🚗", hue:"280", category:"动作" },
  // —— 开源网页移植大作 ——
  { id:"amongus", name:"Among Us", tag:"社交推理", desc:"太空狼人杀，和朋友一起找出内鬼。", url:"https://wasm.rip/files/amongus/index.html", local:false, enabled:true, status:"在线", emoji:"🚀", hue:"38", category:"派对" },
  { id:"celeste", name:"Celeste 蔚蓝", tag:"平台跳跃", desc:"登山少女的极限跳跃，手感一流。", url:"https://celeste.r58playz.dev/", local:false, enabled:true, status:"在线", emoji:"🏔️", hue:"198", category:"动作" },
  { id:"diablo", name:"暗黑破坏神", tag:"ARPG", desc:"经典刷刷刷，地牢砍怪掉装备。", url:"https://d07riv.github.io/diabloweb/", local:false, enabled:true, status:"在线", emoji:"🔥", hue:"0", category:"冒险" },
  { id:"doom", name:"毁灭战士 DOOM", tag:"FPS", desc:"FPS 开山之作，网页版丝滑运行。", url:"https://raz0red.github.io/webprboom/", local:false, enabled:true, status:"在线", emoji:"👾", hue:"12", category:"射击" },
  { id:"portal", name:"传送门 Portal", tag:"解谜 FPS", desc:"用传送枪解开空间谜题。", url:"https://yikes.pw/portal/", local:false, enabled:true, status:"在线", emoji:"🌀", hue:"262", category:"解谜" },
  { id:"geometrydash", name:"几何冲刺", tag:"音游跑酷", desc:"节奏感拉满的魔鬼跑酷。", url:"https://web-dashers.github.io/", local:false, enabled:true, status:"在线", emoji:"🔺", hue:"140", category:"休闲" },
  { id:"pvz", name:"植物大战僵尸", tag:"塔防", desc:"国民级塔防，网页版原汁原味。", url:"https://gn-math.dev/?id=842", local:false, enabled:true, status:"维护中", emoji:"🌻", hue:"95", category:"塔防" },
  { id:"hollowknight", name:"空洞骑士", tag:"银河恶魔城", desc:"精致手绘的受苦探索神作。", url:"https://gn-math.dev/?id=468", local:false, enabled:true, status:"维护中", emoji:"🕷️", hue:"210", category:"冒险" },
  { id:"gettingoverit", name:"掘地求升", tag:"受苦攀爬", desc:"一个男人一把锤，血压拉满。", url:"https://gn-math.dev/?id=557", local:false, enabled:true, status:"维护中", emoji:"🔨", hue:"20", category:"休闲" },
  // —— 经典格斗 / 恐怖经典 ——
  { id:"sf-anniversary", name:"街头霸王·周年合集", tag:"格斗", desc:"经典街霸合集，网页版对战开打。", url:"https://streetfighteranniversary.online/", local:false, enabled:true, status:"在线", emoji:"🥊", hue:"0", category:"格斗" },
  { id:"sf3", name:"街头霸王3·三度冲击", tag:"格斗", desc:"格斗游戏巅峰之作，网页版还原。", url:"https://streetfighter3.online/", local:false, enabled:true, status:"在线", emoji:"👊", hue:"356", category:"格斗" },
  { id:"silenthill", name:"寂静岭·起源", tag:"恐怖", desc:"经典心理恐怖，网页版自动开始。", url:"https://silenthillorigins.zeliaopen.space/", local:false, enabled:true, status:"在线", emoji:"🌫️", hue:"220", category:"恐怖" },
  // —— 更多经典移植大作 ——
  { id:"tekken4", name:"铁拳4", tag:"格斗", desc:"3D格斗经典，网页版拳拳到肉。", url:"https://tekken4.online/", local:false, enabled:true, status:"在线", emoji:"🥋", hue:"4", category:"格斗" },
  { id:"tekken5", name:"铁拳5", tag:"格斗", desc:"铁拳巅峰之作，网页版还原对战。", url:"https://tekken5.online/", local:false, enabled:true, status:"在线", emoji:"👊", hue:"15", category:"格斗" },
  { id:"wwe2010", name:"WWE 2010", tag:"摔角", desc:"美式摔角，网页版擂台开打。", url:"https://wwe2010.online/", local:false, enabled:true, status:"在线", emoji:"🤼", hue:"45", category:"格斗" },
  { id:"ufc2", name:"UFC 2", tag:"格斗", desc:"综合格斗，网页版拳拳对决。", url:"https://ufc2.online/", local:false, enabled:true, status:"在线", emoji:"🥊", hue:"25", category:"格斗" },
  { id:"dragonball-bt3", name:"龙珠Z·武斗会3", tag:"格斗", desc:"龙珠格斗经典，网页版龟派气功。", url:"https://dragonballbudokai3.online/", local:false, enabled:true, status:"在线", emoji:"🐉", hue:"35", category:"格斗" },
  { id:"spiderman2", name:"蜘蛛侠2", tag:"动作", desc:"飞檐走壁，网页版荡蛛丝。", url:"https://spiderman2.online/", local:false, enabled:true, status:"在线", emoji:"🕸️", hue:"0", category:"动作" },
  { id:"residentevil4", name:"生化危机4", tag:"恐怖", desc:"经典生存恐怖，网页版重制。", url:"https://residentevil4.online/", local:false, enabled:true, status:"在线", emoji:"🧟", hue:"120", category:"恐怖" },
  { id:"crash-kart", name:"古惑狼卡丁车", tag:"竞速", desc:"欢乐卡丁车竞速，网页版开跑。", url:"https://crashnitrokart.online/", local:false, enabled:true, status:"在线", emoji:"🦊", hue:"30", category:"竞速" },
  // —— GTA 系列 ——
  { id:"gta3", name:"GTA 3", tag:"动作", desc:"3D开放世界开山作。核心代码在境外，需挂代理才能玩。", url:"https://wasm.rip/files/gta3/index.html", local:false, enabled:true, status:"需代理", emoji:"🌆", hue:"210", category:"动作" },
  // —— js13k 单文件获奖游戏（国内可玩）——
  { id:"highway404", name:"Highway 404", tag:"竞速", desc:"2020冠军，404高速飙车，本地托管秒开。", url:"games/highway-404.html", local:true, enabled:true, status:"在线", emoji:"🛣️", hue:"210", category:"竞速" },
  { id:"submersible2063", name:"潜水战舰2063", tag:"射击", desc:"2018冠军，潜艇大战，本地托管秒开。", url:"games/submersible-warship-2063.html", local:true, enabled:true, status:"在线", emoji:"🚢", hue:"200", category:"射击" },
  { id:"underrun", name:"Underrun", tag:"射击", desc:"2018获奖，暗黑射击生存，本地托管秒开。", url:"games/underrun.html", local:true, enabled:true, status:"在线", emoji:"🔦", hue:"140", category:"射击" },
  { id:"push-back", name:"Push Back", tag:"解谜", desc:"2019获奖，推箱子逻辑解谜，本地托管。", url:"games/push-back.html", local:true, enabled:true, status:"在线", emoji:"📦", hue:"30", category:"解谜" },
  { id:"track-not-found", name:"Track Not Found", tag:"竞速", desc:"2020获奖，极简竞速，本地托管秒开。", url:"games/track-not-found.html", local:true, enabled:true, status:"在线", emoji:"🏁", hue:"280", category:"竞速" },
  { id:"space13k", name:"Space", tag:"射击", desc:"2021获奖，太空射击，本地托管秒开。", url:"games/space.html", local:true, enabled:true, status:"在线", emoji:"🚀", hue:"260", category:"射击" },
  // —— AI 原生游戏（AI 写代码，打开即玩）——
  // —— 占位 ——
  { id:"coming-soon", name:"敬请期待", tag:"新机器", desc:"AI 正在开发下一款游戏…", url:"", local:false, enabled:true, status:"敬请期待", emoji:"👾", hue:"300", category:"其他" },
];
