(function(){
  var G = window.AIFUN_GAMES || [];
  var online = G.filter(function(g){return g.enabled && g.status==="在线"}).length;
  var grid = document.getElementById("grid");
  var countEl = document.getElementById("count");
  var track = document.getElementById("track");

  countEl.textContent = "已上机 " + online + " 款 · 持续更新";

  var names = G.filter(function(g){return g.enabled && g.url}).map(function(g){return g.name});
  var msgs = ["AI FUN · AI 做的游戏，一键开玩", "本日推荐：几猫港区"];
  track.innerHTML = msgs.concat(names).join(" <i>◆</i> ") + " <i>◆</i> ";

  G.forEach(function(g){
    if(!g.enabled) return;
    var card = document.createElement("a");
    var isOff = g.status!=="在线";
    card.className = "card" + (isOff ? " disabled" : "");
    card.style.setProperty("--h", g.hue || "200");
    card.title = g.desc;

    var badgeClass = g.status==="在线" ? "" : (g.status==="敬请期待" ? "coming" : "off");
    var badge = '<span class="badge ' + badgeClass + '">' + g.status + '</span>';
    var cover = g.cover
      ? '<img class="cover" src="'+g.cover+'" alt="'+g.name+'">'
      : '<div class="cover-fallback"><span class="emoji">'+g.emoji+'</span><h3>'+g.name+'</h3><div class="tag">'+g.tag+'</div></div>';

    card.innerHTML = cover + badge;

    if(g.url && !isOff){
      card.href = g.url;
      card.addEventListener("click", function(e){
        e.preventDefault();
        openLightbox(g);
      });
    }
    grid.appendChild(card);
  });

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
})();
