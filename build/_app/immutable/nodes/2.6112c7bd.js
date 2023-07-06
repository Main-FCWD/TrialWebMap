import{s as S,n as b,o as j,f as V,b as H}from"../chunks/scheduler.b108d059.js";import{S as k,i as x,g as v,s as G,h,j as L,f as y,c as U,y as F,k as f,a as I,x as g,r as Y,u as X,v as K,d as Q,t as W,w as ee}from"../chunks/index.bb499846.js";import{_ as C}from"../chunks/preload-helper.41c905a7.js";const ae="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ra3p3b3lkYXBwcHB0amNqcXNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMwNTM3MDIsImV4cCI6MTk5ODYyOTcwMn0.hm94JMq-eHUA4cvvucxx1P5e_IV84ZJuQHNsyZK4re8";function le(u){let l,t,o,a,i='<span class="svelte-1a69ib0">Floyd County Water Department</span>';return{c(){l=v("main"),t=v("div"),o=G(),a=v("div"),a.innerHTML=i,this.h()},l(n){l=h(n,"MAIN",{class:!0});var s=L(l);t=h(s,"DIV",{class:!0}),L(t).forEach(y),o=U(s),a=h(s,"DIV",{class:!0,["data-svelte-h"]:!0}),F(a)!=="svelte-1cb11vx"&&(a.innerHTML=i),s.forEach(y),this.h()},h(){f(t,"class","svelte-1a69ib0"),f(a,"class","header-bg svelte-1a69ib0"),f(l,"class","svelte-1a69ib0")},m(n,s){I(n,l,s),g(l,t),u[1](t),g(l,o),g(l,a)},p:b,i:b,o:b,d(n){n&&y(l),u[1](null)}}}function te(u,l,t){let o,a;j(async()=>{{let Z=function(c,w){const e={},_={};w.forEach(d=>{const{Route:p,Condition:m,Longitude:se,Latitude:ce}=d,$=r.icon({iconUrl:`/Data/markers/rt${p}.svg`,iconSize:[25,25]}),z=r.icon({iconUrl:`/Data/markers/${m}_condition.png`,iconSize:[13,13]}),q=r.marker([d.Latitude,d.Longitude],{icon:$}),J=r.marker([d.Latitude,d.Longitude],{icon:z});e[p]||(e[p]=r.layerGroup()),_[m]||(_[m]=r.layerGroup()),q.addTo(e[p]),J.addTo(_[m])}),console.log(e);var E={label:"Meters",children:[{label:"Silver Creek",selectAllCheckbox:!0,collapsed:!0,children:[{label:"Route 10",layer:e[10]},{label:"Route 11",layer:e[11]},{label:"Route 12",layer:e[12]},{label:"Route 13",layer:e[13]},{label:"Route 14",layer:e[14]},{label:"Route 15",layer:e[15]},{label:"Route 16",layer:e[16]},{label:"Route 17",layer:e[17]},{label:"Route 18",layer:e[18]},{label:"Route 19",layer:e[19]},{label:"Route 20",layer:e[20]},{label:"Route 23",layer:e[23]},{label:"Route 24",layer:e[24]},{label:"Route 25",layer:e[25]},{label:"Route 26",layer:e[26]},{label:"Route 27",layer:e[27]},{label:"Route 28",layer:e[28]},{label:"Route 29",layer:e[29]}]},{label:"Lindale",selectAllCheckbox:!0,collapsed:!0,children:[{label:"Route 21",layer:e[21]},{label:"Route 22",layer:e[22]},{label:"Route 30",layer:e[30]},{label:"Route 31",layer:e[31]},{label:"Route 32",layer:e[32]},{label:"Route 33",layer:e[33]}]},{label:"Kingston",selectAllCheckbox:!0,collapsed:!0,children:[{label:"Route 42",layer:e[42]},{label:"Route 43",layer:e[43]},{label:"Route 44",layer:e[44]},{label:"Route 45",layer:e[45]},{label:"Route 46",layer:e[46]},{label:"Route 47",layer:e[47]},{label:"Route 48",layer:e[48]}]},{label:"Shannon",selectAllCheckbox:!0,collapsed:!0,children:[{label:"Route 50",layer:e[50]},{label:"Route 51",layer:e[51]},{label:"Route 52",layer:e[52]},{label:"Route 53",layer:e[53]},{label:"Route 61",layer:e[61]},{label:"Route 62",layer:e[62]}]},{label:"Armuchee",selectAllCheckbox:!0,collapsed:!0,children:[{label:"Route 68",layer:e[68]},{label:"Route 69",layer:e[69]},{label:"Route 70",layer:e[70]},{label:"Route 71",layer:e[71]},{label:"Route 72",layer:e[72]},{label:"Route 73",layer:e[73]},{label:"Route 74",layer:e[74]},{label:"Route 75",layer:e[75]},{label:"Route 77",layer:e[77]},{label:"Route 78",layer:e[78]},{label:"Route 79",layer:e[79]}]},{label:"Coosa",selectAllCheckbox:!0,collapsed:!0,children:[{label:"Route 80",layer:e[80]},{label:"Route 81",layer:e[81]},{label:"Route 82",layer:e[82]},{label:"Route 83",layer:e[83]},{label:"Route 84",layer:e[84]},{label:"Route 85",layer:e[85]},{label:"Route 91",layer:e[91]}]},{label:"Problems",selectAllCheckbox:!0,collapsed:!0,children:[{label:"Dead Head",layer:""},{label:"Error Code",layer:""},{label:"Manual Read",layer:""},{label:"Crew",layer:""}]}]};r.control.layers.tree(T,E,O).addTo(c);var N=document.querySelector("body > div > main > main > div > div.leaflet-control-container > div.leaflet-top.leaflet-right > div > section"),D='<div><img class="layerControlToggle" style="float:right;" src="/Data/images/lct_button.png"></div>';N.insertAdjacentHTML("afterbegin",D);var P=document.querySelector("body > div > main > main > div > div.leaflet-control-container > div.leaflet-top.leaflet-right > div > section > div:nth-child(1)");P.addEventListener("click",()=>{document.querySelector("div.header-bg > span").removeAttribute("leaflet-control-layers-expanded"),document.querySelector("body > div > main > main > div > div.leaflet-control-container > div.leaflet-top.leaflet-right > div").setAttribute("class","leaflet-control-layers leaflet-control-layers-collapsed leaflet-control")});var B=document.querySelector("div.header-bg"),M='<div class="titleSpanToggle" style="float:right;"></div>';B.insertAdjacentHTML("afterbegin",M),M.addEventListener("click",()=>{document.querySelector("body > div > main > main > div").removeAttribute("header-bg")})};const r=await C(()=>import("../chunks/leaflet-src.e35a4304.js").then(c=>c.l),[],import.meta.url);await C(()=>import("../chunks/L.Control.Layers.Tree.9578f986.js"),[],import.meta.url),await C(()=>Promise.resolve({}),["../assets/L.Control.Layers.Tree.87139324.css"],import.meta.url),a=r.map(o,{zoomControl:!0,maxZoom:35,minZoom:1}).setView([34.330395361608595,-85.2480697631836],11),r.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(a),a.createPane("pane_OSM");var n=r.tileLayer("http://tile.openstreetmap.org/{z}/{x}/{y}.png",{pane:"pane_OSM",opacity:1,attribution:'<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',minZoom:1,maxZoom:35,minNativeZoom:0,maxNativeZoom:19});a.createPane("pane_OSM_dark");var s=r.tileLayer("http://tile.openstreetmap.org/{z}/{x}/{y}.png",{className:"map-tiles",pane:"pane_OSM_dark",opacity:1,minZoom:1,maxZoom:35,minNativeZoom:0,maxNativeZoom:19});a.createPane("pane_GoogleSat");var A=r.tileLayer("https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",{pane:"pane_GoogleSat",opacity:1,attribution:"",minZoom:1,maxZoom:35,minNativeZoom:0,maxNativeZoom:19}),T={label:"Base Maps",children:[{label:"OpenStreetMap",layer:n},{label:"Google Satellite",layer:A},{label:"OpenStreetMap Dark Mode",layer:s}]},O={collapseAll:"",collapsed:!1};a.createPane("pane_FloydBorder"),fetch("/Data/FloydBorder.json").then(c=>c.json()).then(c=>{r.geoJSON(c,{style:{pane:"pane_FloydBorder",opacity:1,color:"rgba(188,35,35,1.0)",dashArray:"",lineCap:"square",lineJoin:"bevel",weight:5,fillOpacity:0,interactive:!1}}).addTo(a)});const R=await(await fetch("https://nkkzwoydapppptjcjqsm.supabase.co/rest/v1/GPS",{headers:{"Content-Type":"application/json",apikey:ae}})).json();console.log(R[0]),console.log(R[0].Route),Z(a,R)}}),V(async()=>{a&&(console.log("Unloading Leaflet map."),a.remove())});function i(n){H[n?"unshift":"push"](()=>{o=n,t(0,o)})}return[o,i]}class oe extends k{constructor(l){super(),x(this,l,te,le,S,{})}}function re(u){let l,t,o;return t=new oe({}),{c(){l=v("main"),Y(t.$$.fragment)},l(a){l=h(a,"MAIN",{});var i=L(l);X(t.$$.fragment,i),i.forEach(y)},m(a,i){I(a,l,i),K(t,l,null),o=!0},p:b,i(a){o||(Q(t.$$.fragment,a),o=!0)},o(a){W(t.$$.fragment,a),o=!1},d(a){a&&y(l),ee(t)}}}class pe extends k{constructor(l){super(),x(this,l,null,re,S,{})}}export{pe as component};
