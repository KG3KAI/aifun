// AI FUN 游戏清单 —— 配置化入口
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
  { id:"wukong-guanyu", name:"黑神话·关羽", tag:"动作", desc:"AI 版关二爷，暂时失联待重启。", url:"https://ai-native-d9gyz4kr613a26c4f-1344763503.tcloudbaseapp.com/", local:false, enabled:true, status:"维护中", emoji:"🗡️", hue:"92", category:"动作", cover:"assets/covers/wukong-guanyu.svg" },
  // —— 开源网页移植大作 ——
  { id:"amongus", name:"Among Us", tag:"社交推理", desc:"太空狼人杀，和朋友一起找出内鬼。", url:"https://wasm.rip/files/amongus/index.html", local:false, enabled:true, status:"在线", emoji:"🚀", hue:"38", category:"派对" },
  { id:"celeste", name:"Celeste 蔚蓝", tag:"平台跳跃", desc:"登山少女的极限跳跃，手感一流。", url:"https://celeste.r58playz.dev/", local:false, enabled:true, status:"在线", emoji:"🏔️", hue:"198", category:"动作" },
  { id:"diablo", name:"暗黑破坏神", tag:"ARPG", desc:"经典刷刷刷，地牢砍怪掉装备。", url:"https://d07riv.github.io/diabloweb/", local:false, enabled:true, status:"在线", emoji:"🔥", hue:"0", category:"冒险" },
  { id:"doom", name:"毁灭战士 DOOM", tag:"FPS", desc:"FPS 开山之作，网页版丝滑运行。", url:"https://raz0red.github.io/webprboom/", local:false, enabled:true, status:"在线", emoji:"👾", hue:"12", category:"射击" },
  { id:"portal", name:"传送门 Portal", tag:"解谜 FPS", desc:"用传送枪解开空间谜题。", url:"https://yikes.pw/portal/", local:false, enabled:true, status:"在线", emoji:"🌀", hue:"262", category:"解谜" },
  { id:"geometrydash", name:"几何冲刺", tag:"音游跑酷", desc:"节奏感拉满的魔鬼跑酷。", url:"https://web-dashers.github.io/", local:false, enabled:true, status:"在线", emoji:"🔺", hue:"140", category:"休闲" },
  { id:"pvz", name:"植物大战僵尸", tag:"塔防", desc:"国民级塔防，网页版原汁原味。", url:"https://gn-math.dev/?id=842", local:false, enabled:true, status:"在线", emoji:"🌻", hue:"95", category:"塔防" },
  { id:"hollowknight", name:"空洞骑士", tag:"银河恶魔城", desc:"精致手绘的受苦探索神作。", url:"https://gn-math.dev/?id=468", local:false, enabled:true, status:"在线", emoji:"🕷️", hue:"210", category:"冒险" },
  { id:"gettingoverit", name:"掘地求升", tag:"受苦攀爬", desc:"一个男人一把锤，血压拉满。", url:"https://gn-math.dev/?id=557", local:false, enabled:true, status:"在线", emoji:"🔨", hue:"20", category:"休闲" },
  // —— 占位 ——
  { id:"coming-soon", name:"敬请期待", tag:"新机器", desc:"AI 正在开发下一款游戏…", url:"", local:false, enabled:true, status:"敬请期待", emoji:"👾", hue:"300", category:"其他" },
];
