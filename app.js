(function(){
var cfg=JSON.parse(document.getElementById("ch").textContent),lang=cfg.lang,sel=0;
var MSG={es:function(o,l,d,u){return "Hola, Carlos. Me interesa: "+o+". Lo he visto en "+u+". Estoy en "+(l||"la Axarquía")+(d?". Detalles: "+d:"")+". ¿Puedes asesorarme y darme presupuesto?"},
en:function(o,l,d,u){return "Hello Carlos. I'm interested in: "+o+". I saw it at "+u+". I'm in "+(l||"the Axarquía")+(d?". Details: "+d:"")+". Can you advise me and give me a quote?"},
de:function(o,l,d,u){return "Hallo Carlos, ich interessiere mich für: "+o+". Gesehen auf "+u+". Ich bin in "+(l||"der Axarquía")+(d?". Details: "+d:"")+". Können Sie mich beraten und ein Angebot erstellen?"}};
function $(s){return document.querySelector(s)}
function esc(s){return String(s).replace(/[&<>"]/g,function(m){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[m]})}
var pn=$("#pn");
function build(){
 pn.innerHTML='<div style="display:flex;gap:10px;align-items:center;margin-bottom:10px"><span style="display:block;width:44px;height:54px;flex:none">'+cfg.mas+'</span><h4 style="margin:0">'+esc(cfg.ph)+'</h4></div><div id="ops"></div><input id="loc" placeholder="'+esc(cfg.lp)+'" autocomplete="address-level2"><textarea id="det" rows="2" placeholder="'+esc(cfg.dp)+'"></textarea><button id="go" type="button">'+esc(cfg.go)+'</button><div class="note">'+esc(cfg.pn)+'</div>';
 var ops=$("#ops");cfg.ops.forEach(function(o,i){var b=document.createElement("button");b.type="button";b.className="op"+(i==sel?" s":"");b.textContent=o;b.onclick=function(){sel=i;var a=ops.children;for(var k=0;k<a.length;k++)a[k].className="op"+(k==sel?" s":"")};ops.appendChild(b)});
 $("#go").onclick=function(){var m=MSG[lang](cfg.ops[sel],$("#loc").value.trim(),$("#det").value.trim(),cfg.url);window.open("https://wa.me/"+cfg.num+"?text="+encodeURIComponent(m),"_blank","noopener")};
}
build();
function toggle(f){pn.classList.toggle("o",f)}
$("#wa").onclick=function(){toggle()};
var op=$("#open");if(op)op.onclick=function(){toggle(true)};
/* cookies */
var ck=$("#ck"),c=cfg.ck;
ck.innerHTML='<div class="in"><p>'+esc(c.ct)+' <a href="'+cfg.cookies+'" style="text-decoration:underline">'+esc(c.cl)+'</a>.</p><button id="ckr" type="button">'+esc(c.rj)+'</button><button class="a" id="cka" type="button">'+esc(c.ar)+'</button></div>';
function set(v){try{localStorage.setItem("ck",v)}catch(e){}ck.classList.remove("o")}
$("#cka").onclick=function(){set("all")};$("#ckr").onclick=function(){set("none")};
var s=$("#ckset");if(s)s.onclick=function(e){e.preventDefault();ck.classList.add("o")};
try{if(!localStorage.getItem("ck"))ck.classList.add("o")}catch(e){ck.classList.add("o")}
})();
