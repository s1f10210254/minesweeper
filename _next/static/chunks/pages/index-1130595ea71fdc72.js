(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(85)}])},85:function(e,n,t){"use strict";t.r(n);var l=t(5893),o=t(7294),r=t(2729),s=t.n(r);let a=()=>{let[e,n]=(0,o.useState)([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),[t,r]=(0,o.useState)([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),a=[[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1]],i=e.some(e=>e.some(e=>0!==e)),c=e.some((e,n)=>e.some((e,l)=>1===e&&1===t[n][l])),[_,d]=(0,o.useState)(0);(0,o.useEffect)(()=>{let e;return i&&(e=setInterval(()=>{d(e=>e+1)},1e3)),c&&clearInterval(e),()=>{clearInterval(e)}},[i,c]);let f=e=>"".concat(String(Math.floor(e/60)).padStart(2,"0"),":").concat(String(e%60).padStart(2,"0")),m=e.flat().filter(e=>1===e).length,h=e.flat().filter(e=>3===e).length,x=[[-1,0],[-1,-1],[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1]],g=(e,n)=>{let l=0;for(let[o,r]of x){let s=e+o,a=n+r;s>=0&&s<t[0].length&&a>=0&&a<t.length&&1===t[s][a]&&l++}if(a[e][n]=l,0===l)for(let[l,o]of x){let r=e+l,s=n+o;r>=0&&r<t[0].length&&s>=0&&s<t.length&&-1===a[r][s]&&g(r,s)}},u=!1,v=!1,b=()=>{for(let n=0;n<e.length;n++)for(let l=0;l<e[n].length;l++)1===e[n][l]?(1===t[n][l]&&(a[n][l]=11,u=!0,a.forEach((e,n)=>e.forEach((e,l)=>{1===t[n][l]&&(a[n][l]=11)})),console.log("ゲームオーバー")),0===t[n][l]&&g(n,l)):3===e[n][l]?a[n][l]=10:a.some(e=>e.includes(-1))||(v=!0);return a};b();let j=0===e.flat().filter(e=>1===e).length,N=(l,o)=>{console.log(l,o);for(let n=0;n<e.length;n++)for(let t=0;t<e[n].length;t++)if(11===a[n][t]||a.every(e=>e.every(e=>-1!==e)))return;let s=[...e];if(s[l][o]=1,n(s),console.log("ターン変わった！"),console.log("userInput↓"),console.table(e),j){let e=[...t],n=0;for(;n<10;){let t=Math.floor(9*Math.random()),s=Math.floor(9*Math.random());t!==l&&s!==o&&1!==e[t][s]&&(e[t][s]=1,n++),r(e)}}console.log("BombMap↓"),console.table(t),b(),console.log("board↓"),console.table(a)},p=(t,l,o)=>{t.preventDefault();for(let n=0;n<e.length;n++)for(let t=0;t<e[n].length;t++)if(11===a[n][t])return;let r=[...e];0===r[l][o]?r[l][o]=3:3===r[l][o]&&(r[l][o]=0),n(r)};return(0,l.jsxs)("div",{className:s().container,children:[(0,l.jsx)("div",{children:i&&!c&&(0,l.jsxs)("div",{children:["Time: ",f(_)]})}),u&&(0,l.jsx)("div",{className:s().gameover,children:(0,l.jsx)("div",{children:(0,l.jsxs)("p",{children:["ゲームオーバー",(0,l.jsx)("br",{}),"時間:",f(_),"秒 ",(0,l.jsx)("br",{}),"クリック数：",m," + ",h]})})}),v&&(0,l.jsx)("div",{className:s().gamewin,children:(0,l.jsx)("div",{children:(0,l.jsxs)("p",{children:["おめでとう！",(0,l.jsx)("br",{}),"時間:○○秒 ",(0,l.jsx)("br",{}),"クリック数:",m," + ",h]})})}),(0,l.jsx)("div",{className:s().board,children:a.map((e,n)=>e.map((e,t)=>(0,l.jsxs)("div",{className:s().cell,onClick:()=>N(n,t),onContextMenu:e=>p(e,n,t),children:[-1===e&&(0,l.jsx)("div",{className:s().stone}),0===e&&(0,l.jsx)("div",{className:s().stone0,style:{}}),e>0&&e<9&&(0,l.jsx)("div",{className:s().number,style:{backgroundPosition:-30*e+30}}),10===e&&(0,l.jsx)("div",{className:s().flag}),11===e&&(0,l.jsx)("div",{className:s().bom})]},"".concat(n,"-").concat(t))))})]})};n.default=a},2729:function(e){e.exports={container:"index_container__gnN1f",timer:"index_timer__azvpY",timer1:"index_timer1__FTNBs",gameover:"index_gameover__2nrQv",gamewin:"index_gamewin__4k7yS",board:"index_board__2d6xe",cell:"index_cell__3W8ZQ",stone:"index_stone__oeDmm",number:"index_number__l0yF_",stone0:"index_stone0__GU0r7",bom:"index_bom__ERRzB",flag:"index_flag__Bsg_z",hoge:"index_hoge__UVxRa"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);