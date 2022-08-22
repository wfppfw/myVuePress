import{U as F,V as R,W as z,_ as S,f as D,I as j,g as C,H as I,X as Q,r as T,o as s,c as n,i as e,s as B,x as m,a as _,F as x,E as A,y as U,Y as W,t as h,e as k,b as O,k as N,Q as X,j as P,G,w as Y,O as Z,C as q,L as J,M as K,Z as ee,l as te,z as w,h as ae}from"./app.ea06ade8.js";import{f as se}from"./resolveTime.d3dccc00.js";const ne=i=>!F(i)||/github\.com/.test(i)?"GitHub":/bitbucket\.org/.test(i)?"Bitbucket":/gitlab\.com/.test(i)?"GitLab":/gitee\.com/.test(i)?"Gitee":null,re={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},oe=({docsRepo:i,editLinkPattern:u})=>{if(u)return u;const d=ne(i);return d!==null?re[d]:null},ie=({docsRepo:i,docsBranch:u,docsDir:d,filePathRelative:t,editLinkPattern:p})=>{if(!t)return null;const l=oe({docsRepo:i,editLinkPattern:p});return l?l.replace(/:repo/,F(i)?i:`https://github.com/${i}`).replace(/:branch/,u).replace(/:path/,R(`${z(d)}/${t}`)):null},le={class:"article-header-content"},ce={key:0,class:"article-tags"},ue=["onClick"],de={class:"article-title"},me={key:1,class:"article-subtitle"},he={class:"article-icons"},_e={key:0,class:"article-icon"},pe={key:1,class:"article-icon"},ge={key:2,class:"article-icon"},ve={key:1,class:"article-image-credit"},fe=["href"],ke={key:1},be=D({__name:"ArticleHeader",props:{currentTag:{type:String,default:""}},setup(i){const u=j(),d=C(),t=I(),p=N(),l=Q(),b=o=>{u.currentRoute.value.path!==l.value.map[o].path&&u.push({path:l.value.map[o].path})},g=()=>{const o={};return t.value.layout==="Post"&&t.value.useHeaderImage&&t.value.headerImage&&(o.backgroundImage=`url(${X(t.value.headerImage)})`),o},a=d.value.personalInfo;return(o,v)=>{const f=T("VIcon");return s(),n("div",{class:U(["article-header",{"use-image":e(t).useHeaderImage}]),style:B(g())},[e(t).useHeaderImage&&e(t).headerMask?(s(),n("div",{key:0,class:"article-header-mask",style:B({background:e(t).headerMask})},null,4)):m("",!0),_("div",le,[e(t).tags?(s(),n("div",ce,[(s(!0),n(x,null,A(e(t).tags,(r,c)=>(s(),n("span",{key:c,class:U(["article-tag",{active:i.currentTag==r}]),onClick:W(L=>b(r),["stop"])},h(r),11,ue))),128))])):m("",!0),_("h1",de,h(e(t).title),1),e(t).subtitle?(s(),n("p",me,h(e(t).subtitle),1)):m("",!0),_("div",he,[e(t).author||e(a).name?(s(),n("div",_e,[k(f,{name:"fa-regular-user",scale:"0.9"}),_("span",null,h(e(t).author||e(a).name),1)])):m("",!0),e(t).date?(s(),n("div",pe,[k(f,{name:"fa-regular-calendar",scale:"0.9"}),_("span",null,h(e(se)(e(t).date)),1)])):m("",!0),e(p).readingTime?(s(),n("div",ge,[k(f,{name:"ri-timer-line",scale:"0.9"}),_("span",null,h(e(p).readingTime.minutes)+" min",1)])):m("",!0)])]),e(t).useHeaderImage&&e(t).headerImageCredit?(s(),n("div",ve,[O(h(e(d).headerImageCredit)+" ",1),e(t).headerImageCreditLink?(s(),n("a",{key:0,href:e(t).headerImageCreditLink,target:"_blank",rel:"noopener noreferrer"},h(e(t).headerImageCredit),9,fe)):(s(),n("span",ke,h(e(t).headerImageCredit),1))])):m("",!0)],6)}}});var ze=S(be,[["__file","ArticleHeader.vue"]]);const Le={class:"page-meta"},ye={key:0,class:"meta-item edit-link"},$e={key:1,class:"meta-item last-updated"},Ce={class:"meta-item-label"},Ie={class:"meta-item-info"},Pe={key:2,class:"meta-item contributors"},Te={class:"meta-item-label"},we={class:"meta-item-info"},xe=["title"],Ne=O(", "),Se=D({__name:"PageMeta",setup(i){const u=()=>{const a=C(),o=N(),v=I();return P(()=>{var M,E,V;if(!((E=(M=v.value.editLink)!=null?M:a.value.editLink)!=null?E:!0))return null;const{repo:r,docsRepo:c=r,docsBranch:L="main",docsDir:y="",editLinkText:$}=a.value;if(!c)return null;const H=ie({docsRepo:c,docsBranch:L,docsDir:y,filePathRelative:o.value.filePathRelative,editLinkPattern:(V=v.value.editLinkPattern)!=null?V:a.value.editLinkPattern});return H?{text:$!=null?$:"Edit this page",link:H}:null})},d=()=>{const a=C(),o=N(),v=I();return P(()=>{var c,L,y,$;return!((L=(c=v.value.lastUpdated)!=null?c:a.value.lastUpdated)!=null?L:!0)||!((y=o.value.git)!=null&&y.updatedTime)?null:new Date(($=o.value.git)==null?void 0:$.updatedTime).toLocaleString()})},t=()=>{const a=C(),o=N(),v=I();return P(()=>{var r,c,L,y;return((c=(r=v.value.contributors)!=null?r:a.value.contributors)!=null?c:!0)&&(y=(L=o.value.git)==null?void 0:L.contributors)!=null?y:null})},p=C(),l=u(),b=d(),g=t();return(a,o)=>{const v=T("VIcon"),f=T("ClientOnly");return s(),n("footer",Le,[e(l)?(s(),n("div",ye,[k(v,{name:"fa-pencil-alt",scale:"0.9"}),k(G,{class:"meta-item-label",item:e(l)},null,8,["item"])])):m("",!0),e(b)?(s(),n("div",$e,[_("span",Ce,h(e(p).lastUpdatedText)+": ",1),k(f,null,{default:Y(()=>[_("span",Ie,h(e(b)),1)]),_:1})])):m("",!0),e(g)&&e(g).length?(s(),n("div",Pe,[_("span",Te,h(e(p).contributorsText)+": ",1),_("span",we,[(s(!0),n(x,null,A(e(g),(r,c)=>(s(),n(x,{key:c},[_("span",{class:"contributor",title:`email: ${r.email}`},h(r.name),9,xe),c!==e(g).length-1?(s(),n(x,{key:0},[Ne],64)):m("",!0)],64))),128))])])):m("",!0)])}}});var De=S(Se,[["__file","PageMeta.vue"]]);const Ge={key:0,class:"page-nav"},He={class:"inner"},Me={key:0,class:"prev"},Ee={key:1,class:"next"},Ve=D({__name:"PageNav",setup(i){const u=a=>a===!1?null:J(a)?K(a):ee(a)?a:!1,d=(a,o,v)=>{const f=a.findIndex(r=>r.link===o);if(f!==-1){const r=a[f+v];return r!=null&&r.link?r:null}for(const r of a)if(r.children){const c=d(r.children,o,v);if(c)return c}return null},t=I(),p=Z(),l=q(),b=P(()=>{const a=u(t.value.prev);return a!==!1?a:d(p.value,l.path,-1)}),g=P(()=>{const a=u(t.value.next);return a!==!1?a:d(p.value,l.path,1)});return(a,o)=>e(b)||e(g)?(s(),n("nav",Ge,[_("p",He,[e(b)?(s(),n("span",Me,[k(G,{item:e(b)},null,8,["item"])])):m("",!0),e(g)?(s(),n("span",Ee,[k(G,{item:e(g)},null,8,["item"])])):m("",!0)])])):m("",!0)}});var Be=S(Ve,[["__file","PageNav.vue"]]);const Ue={class:"page"},Fe={class:"theme-gungnir-content"},Ae=D({__name:"Page",setup(i){const u=C(),d=I(),{isDarkMode:t}=te(),p=P(()=>t.value?u.value.giscusDarkTheme:u.value.giscusLightTheme);return(l,b)=>{const g=T("Content"),a=T("GungnirGiscus");return s(),n("main",Ue,[w(l.$slots,"top"),_("div",Fe,[w(l.$slots,"content-top"),k(g),w(l.$slots,"content-bottom")]),k(De),k(Be),w(l.$slots,"bottom"),e(d).giscus!==!1?(s(),ae(a,{key:0,theme:e(p)},null,8,["theme"])):m("",!0)])}}});var je=S(Ae,[["__file","Page.vue"]]);export{ze as A,je as P};
