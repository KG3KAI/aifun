// AI FUN 游戏清单 —— 配置化入口
// 加游戏：复制一个对象；下架：把 enabled 改成 false；维护：把 status 改成 "维护中"
window.AIFUN_GAMES = [
  { id:"jimao-gangkou", name:"几猫港区", tag:"3D 射击", desc:"AI 做的 3D 轻量化大作，潜入港区撤离。", url:"games/jimao-gangkou.html", local:true, enabled:true, status:"在线", emoji:"🚢", hue:"196" },
  { id:"wukong", name:"黑神话·悟空", tag:"动作", desc:"AI 版齐天大圣，直面天命。", url:"https://wukong.cnmwx.com/", local:false, enabled:true, status:"在线", emoji:"🐒", hue:"32" },
  { id:"lol-hex", name:"海克斯大乱斗", tag:"对战", desc:"英雄联盟 AI 轻量版，海克斯科技乱斗。", url:"https://lol.hanyue.io/", local:false, enabled:true, status:"在线", emoji:"⚔️", hue:"252" },
  { id:"qqfeiche", name:"QQ飞车 3D", tag:"竞速", desc:"AI 版飞车，氮气漂移一把梭。", url:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nulojnulwlo/qqfeiche3d/index.html", local:false, enabled:true, status:"在线", emoji:"🏎️", hue:"200" },
  { id:"cf-ship", name:"穿越火线·运输船", tag:"射击", desc:"经典运输船，AI 复刻突突突。", url:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nulojnulwlo/cf-transport-ship/transport-ship.html", local:false, enabled:true, status:"在线", emoji:"🔫", hue:"0" },
  { id:"pelican-bike", name:"鹈鹕骑自行车", tag:"休闲", desc:"一只鹈鹕的爆笑骑行挑战。", url:"https://lf3-static.bytednsdoc.com/obj/eden-cn/nulojnulwlo/pelican-bike/index.html", local:false, enabled:true, status:"在线", emoji:"🚲", hue:"152" },
  { id:"wukong-guanyu", name:"黑神话·关羽", tag:"动作", desc:"AI 版关二爷，暂时失联待重启。", url:"https://ai-native-d9gyz4kr613a26c4f-1344763503.tcloudbaseapp.com/", local:false, enabled:true, status:"维护中", emoji:"🗡️", hue:"92" },
  { id:"coming-soon", name:"敬请期待", tag:"新机器", desc:"AI 正在开发下一款游戏…", url:"", local:false, enabled:true, status:"敬请期待", emoji:"👾", hue:"300" },
];
