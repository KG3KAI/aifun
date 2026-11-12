(function(){
  var G = window.AIFUN_GAMES || [];
  var arcade = document.getElementById("arcade");
  var countEl = document.getElementById("count");
  var track = document.getElementById("track");
  var catsEl = document.getElementById("cats");
  var searchEl = document.getElementById("search");
  var sClear = document.getElementById("s-clear");
  var secLabel = document.getElementById("sec-label");
  var secNote = document.getElementById("sec-note");
  var empty = document.getElementById("empty");

  var state = { q:"", cat:"全部" };

  var online = G.filter(function(g){return g.enabled && g.status==="在线"}).length;
  countEl.textContent = "已上机 " + online + " 款 · 持续更新";

  var names = G.filter(function(g){return g.enabled && g.url}).map(function(g){return g.name});
  var msgs = ["AI FUN · AI 做的游戏，一键开玩", "本日推荐：几猫港区"];
  track.innerHTML = msgs.concat(names).join(" <i>◆</i> ") + " <i>◆</i> ";

  // 分类（按配置出现顺序去重）
  var cats = ["全部"];
  G.forEach(function(g){ if(g.enabled && g.category && cats.indexOf(g.category)<0) cats.push(g.category); });

  function renderCats(){
    catsEl.innerHTML = "";
    cats.forEach(function(c){
      var b = document.createElement("button");
      b.className = "cat" + (state.cat===c ? " on" : "");
      b.textContent = c;
      b.addEventListener("click", function(){ state.cat=c; renderCats(); render(); });
      catsEl.appendChild(b);
    });
  }

  function makeCabinet(g){
    var isOff = g.status!=="在线";
    var el = document.createElement("div");
    el.className = "cab" + (isOff ? " disabled" : "");
    el.style.setProperty("--h", g.hue || "200");
    el.setAttribute("data-name", g.name.toLowerCase());
    el.setAttribute("data-cat", g.category || "");
    el.setAttribute("data-status", g.status);
    el.setAttribute("data-search", (g.name+" "+g.tag+" "+g.desc).toLowerCase());

    var badge = isOff
      ? '<span class="cab-badge '+(g.status==="敬请期待"?"coming":"off")+'">'+g.status+'</span>'
      : '<span class="cab-badge">● 在线</span>';

    var screen = g.cover
      ? '<div class="screen" style="background-image:url(\''+g.cover+'\')"></div>'
      : '<div class="screen"><span class="s-emoji">'+g.emoji+'</span></div>';

    el.innerHTML =
      '<div class="cabinet">'+
        '<div class="marquee-top"><span class="m-title">'+g.name+'</span></div>'+
        screen +
        '<div class="deck">'+
          '<div class="d-name">'+g.name+'</div>'+
          '<div class="d-tag">'+g.tag+'</div>'+
          '<div class="controls-row">'+
            '<span class="stick"></span>'+
            '<span class="btn red"></span><span class="btn blue"></span>'+
          '</div>'+
        '</div>'+
        badge +
      '</div>';

    if(g.url && !isOff){
      el.addEventListener("click", function(){ openLightbox(g); });
      el.setAttribute("role","button");
      el.setAttribute("tabindex","0");
      el.addEventListener("keydown", function(e){ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); openLightbox(g); } });
    }
    return el;
  }

  function render(){
    var q = state.q.trim().toLowerCase();
    var list = G.filter(function(g){
      if(!g.enabled) return false;
      if(state.cat!=="全部" && g.category!==state.cat) return false;
      if(q){
        var hay = (g.name+" "+g.tag+" "+g.desc+" "+g.category).toLowerCase();
        if(hay.indexOf(q)<0) return false;
      }
      return true;
    });
    arcade.innerHTML = "";
    list.forEach(function(g){ arcade.appendChild(makeCabinet(g)); });
    empty.style.display = list.length ? "none" : "block";
    secLabel.textContent = state.cat==="全部" ? "游戏大厅" : state.cat;
    secNote.textContent = list.length ? list.length + " 台机器" : "";
  }

  searchEl.addEventListener("input", function(){
    state.q = searchEl.value;
    sClear.style.display = searchEl.value ? "flex" : "none";
    render();
  });
  sClear.addEventListener("click", function(){
    searchEl.value = ""; state.q = ""; sClear.style.display="none"; render(); searchEl.focus();
  });

  // 灯箱
  var lb = document.getElementById("lightbox");
  var frame = document.getElementById("frame");
  var lbTitle = document.getElementById("lb-title");
  var lbClose = document.getElementById("lb-close");
  var lbBack = document.getElementById("lb-back");

  function openLightbox(g){
    lbTitle.textContent = g.name + " · " + g.tag;
    frame.src = g.url;
    lb.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeLightbox(){
    lb.classList.remove("open");
    frame.src = "about:blank";
    document.body.style.overflow = "";
  }
  lbClose.addEventListener("click", closeLightbox);
  lbBack.addEventListener("click", closeLightbox);
  lb.addEventListener("click", function(e){ if(e.target===lb) closeLightbox(); });
  document.addEventListener("keydown", function(e){ if(e.key==="Escape") closeLightbox(); });

  renderCats();
  render();
})();
