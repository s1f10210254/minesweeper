(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(85)}])},85:function(e,n,t){"use strict";t.r(n);var l=t(5893),s=t(7294),o=t(2729),a=t.n(o);let i=()=>{let[e,n]=(0,s.useState)([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),[t,o]=(0,s.useState)([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),i=[[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1]],r=e.some(e=>e.some(e=>0!==e)),c=e.some((e,n)=>e.some((e,l)=>1===e&&1===t[n][l])),d=!1,_=!1,[m,x]=(0,s.useState)(0);(0,s.useEffect)(()=>{let e;return r?e=setInterval(()=>{x(e=>e+1)},1e3):clearInterval(e),c&&clearInterval(e),()=>{clearInterval(e)}},[r,c]);let f=e=>{let n=Math.floor(e/60).toString().padStart(1,"0"),t=(e%60).toString().padStart(2,"0");return"".concat(n).concat(t)},g=e.flat().filter(e=>1===e).length,h=e.flat().filter(e=>3===e).length,u=[[-1,0],[-1,-1],[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1]],v=(e,n)=>{let l=0;for(let[s,o]of u){let a=e+s,i=n+o;a>=0&&a<t[0].length&&i>=0&&i<t.length&&1===t[a][i]&&l++}if(i[e][n]=l,0===l)for(let[l,s]of u){let o=e+l,a=n+s;o>=0&&o<t[0].length&&a>=0&&a<t.length&&-1===i[o][a]&&v(o,a)}},b=()=>{for(let n=0;n<e.length;n++)for(let l=0;l<e[n].length;l++)1===e[n][l]?(1===t[n][l]&&(i[n][l]=11,d=!0,i.forEach((e,n)=>e.forEach((e,l)=>{1===t[n][l]&&(i[n][l]=11)})),console.log("ゲームオーバー")),0===t[n][l]&&v(n,l)):3===e[n][l]&&(i[n][l]=10),i.some(e=>e.includes(-1))||(_=!0);return i};b();let j=0===e.flat().filter(e=>1===e).length,N=(l,s)=>{console.log(l,s);for(let n=0;n<e.length;n++)for(let t=0;t<e[n].length;t++)if(11===i[n][t]||!i.some(e=>e.includes(-1)))return;let a=[...e];if(a[l][s]=1,n(a),console.log("ターン変わった！"),console.log("userInput↓"),console.table(e),j){let e=[...t],n=0;for(;n<10;){let t=Math.floor(9*Math.random()),a=Math.floor(9*Math.random());t!==l&&a!==s&&1!==e[t][a]&&(e[t][a]=1,n++),o(e)}}console.log("BombMap↓"),console.table(t),b(),console.log("board↓"),console.table(i)},w=(t,l,s)=>{t.preventDefault();for(let n=0;n<e.length;n++)for(let t=0;t<e[n].length;t++)if(11===i[n][t]||!i.some(e=>e.includes(-1)))return;let o=[...e];0===o[l][s]?o[l][s]=3:3===o[l][s]&&(o[l][s]=0),n(o)};return(0,l.jsxs)("div",{className:a().container,children:[(0,l.jsxs)("div",{className:a().center,children:[(0,l.jsxs)("div",{className:a().top,children:[(0,l.jsx)("div",{className:a().left,children:(10-h).toString().padStart(3,"0")}),!d&&!_&&(0,l.jsx)("div",{className:a().betweensmile}),d&&(0,l.jsx)("div",{className:a().betweensad}),_&&(0,l.jsx)("div",{className:a().betweenwin}),(0,l.jsx)("div",{className:a().timelog,children:(0,l.jsx)("div",{children:f(m)})})]}),(0,l.jsx)("div",{className:a().board,children:i.map((e,n)=>e.map((e,t)=>(0,l.jsxs)("div",{className:a().cell,onClick:()=>N(n,t),onContextMenu:e=>w(e,n,t),children:[-1===e&&(0,l.jsx)("div",{className:a().stone}),0===e&&(0,l.jsx)("div",{className:a().stone0,style:{}}),e>0&&e<9&&(0,l.jsx)("div",{className:a().number,style:{backgroundPosition:-30*e+30}}),10===e&&(0,l.jsx)("div",{className:a().flag}),11===e&&(0,l.jsx)("div",{className:a().bom})]},"".concat(n,"-").concat(t))))})]}),(0,l.jsxs)("div",{className:a().rilog,children:[d&&(0,l.jsx)("div",{className:a().gameover,children:(0,l.jsx)("div",{children:(0,l.jsxs)("p",{children:["ゲームオーバー",(0,l.jsx)("br",{}),"時間:",f(m),(0,l.jsx)("br",{}),"クリック数：",g," + ",h]})})}),_&&(0,l.jsx)("div",{className:a().gamewin,children:(0,l.jsx)("div",{children:(0,l.jsxs)("p",{children:["おめでとう！",(0,l.jsx)("br",{}),"時間:",f(m)," ",(0,l.jsx)("br",{}),"クリック数:",g," + ",h]})})})]})]})};n.default=i},2729:function(e){e.exports={container:"index_container__gnN1f",center:"index_center__CCiNa",top:"index_top__uMqHF",left:"index_left__OQaUt",betweensmile:"index_betweensmile__8WRy6",betweensad:"index_betweensad__RuTSt",betweenwin:"index_betweenwin__TJR5s",timelog:"index_timelog___gLIh",rilog:"index_rilog__dB4d8",gameover:"index_gameover__2nrQv",gamewin:"index_gamewin__4k7yS",board:"index_board__2d6xe",cell:"index_cell__3W8ZQ",stone:"index_stone__oeDmm",number:"index_number__l0yF_",stone0:"index_stone0__GU0r7",bom:"index_bom__ERRzB",flag:"index_flag__Bsg_z",hoge:"index_hoge__UVxRa"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);