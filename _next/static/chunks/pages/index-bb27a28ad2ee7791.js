(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(85)}])},85:function(e,n,s){"use strict";s.r(n);var o=s(5893),t=s(7294),l=s(2729),a=s.n(l);let _=()=>{let[e,n]=(0,t.useState)([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),[s,l]=(0,t.useState)([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),_=[[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1]],i=[[-1,0],[-1,-1],[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1]],c=(n,o)=>{let t=0;for(let[e,l]of i){let a=n+e,_=o+l;a>=0&&a<s[0].length&&_>=0&&_<s.length&&1===s[a][_]&&t++}if(0===t)for(let[t,l]of(_[n][o]=0,i)){let a=n+t,i=o+l;a>=0&&a<s[0].length&&i>=0&&i<s.length&&0!==_[a][i]&&1!==e[a][i]&&c(a,i)}else _[n][o]=t},d=()=>{for(let n=0;n<e.length;n++)for(let o=0;o<e[n].length;o++)1===e[n][o]?1===s[n][o]?(_[n][o]=11,console.log("ゲームオーバー")):c(n,o):_[n][o]=-1;return _};d();let r=1===e.flat().filter(e=>1===e).length,x=(o,t)=>{console.log(o,t);let a=[...e];if(a[o][t]=1,n(a),r){let e=[...s],n=0;for(;n<10;){let s=Math.floor(9*Math.random()),a=Math.floor(9*Math.random());s!==o&&a!==t&&1!==e[a][a]&&(e[s][a]=1,n++),l(e)}}console.log("BombMap↓"),console.table(s),d(),console.log("board↓"),console.table(_)};return(0,o.jsx)("div",{className:a().container,children:(0,o.jsx)("div",{className:a().board,children:_.map((e,n)=>e.map((e,s)=>(0,o.jsxs)("div",{className:a().cell,onClick:()=>x(n,s),children:[0===e&&(0,o.jsx)("div",{className:a().stone0}),1===e&&(0,o.jsx)("div",{className:a().stone1}),2===e&&(0,o.jsx)("div",{className:a().stone2}),3===e&&(0,o.jsx)("div",{className:a().stone3}),4===e&&(0,o.jsx)("div",{className:a().stone4}),5===e&&(0,o.jsx)("div",{className:a().stone5}),6===e&&(0,o.jsx)("div",{className:a().stone6}),7===e&&(0,o.jsx)("div",{className:a().stone7}),8===e&&(0,o.jsx)("div",{className:a().stone8}),11===e&&(0,o.jsx)("div",{className:a().bom})]},"".concat(n,"-").concat(s))))})})};n.default=_},2729:function(e){e.exports={container:"index_container__gnN1f",board:"index_board__2d6xe",cell:"index_cell__3W8ZQ",stone0:"index_stone0__GU0r7",stone1:"index_stone1__rmNwL",stone2:"index_stone2__A6_Uu",stone3:"index_stone3__gWNaT",stone4:"index_stone4__lDdzX",stone5:"index_stone5__D5GxO",stone6:"index_stone6__u061e",stone7:"index_stone7__pau_w",stone8:"index_stone8__SfSLR",bom:"index_bom__ERRzB",hoge:"index_hoge__UVxRa"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);