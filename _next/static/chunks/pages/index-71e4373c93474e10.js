(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o(85)}])},85:function(e,n,o){"use strict";o.r(n);var l=o(5893),t=o(7294),s=o(2729),a=o.n(s);let c=()=>{let[e,n]=(0,t.useState)([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),[o,s]=(0,t.useState)([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),c=[],r=[[-1,0],[-1,-1],[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1]],i=(e,n)=>{let l=0;for(let[t,s]of r){let a=e+t,c=n+s;a>=0&&a<o[0].length&&c>=0&&c<o.length&&1===o[c][a]&&l++}return l},_=1===e.flat().filter(e=>1===e).length,d=(l,t)=>{console.log(l,t);let a=[...e];if(a[t][l]=1,n(a),_){let e=[...o],n=0;for(;n<10;){let o=Math.floor(9*Math.random()),a=Math.floor(9*Math.random());o!==l&&a!==t&&1!==e[a][a]&&(e[a][o]=1,n++),s(e)}}console.log("BombMap"),console.table(o);for(let e=0;e<a.length;e++){let n=[];for(let l=0;l<a[e].length;l++)if(1===a[e][l]){if(1===o[e][l])n.push(11),console.log("ゲームオーバー");else{let o=i(e,l);n.push(o)}}else n.push(-1);c.push(n)}console.log("Board"),console.table(c)};return(0,l.jsx)("div",{className:a().container,children:(0,l.jsx)("div",{className:a().board,children:e.map((e,n)=>e.map((e,o)=>(0,l.jsx)("div",{className:a().cell,onClick:()=>d(o,n),children:0!==e&&(0,l.jsx)("div",{className:a().stone})},"".concat(o,"-").concat(n))))})})};n.default=c},2729:function(e){e.exports={container:"index_container__gnN1f",board:"index_board__2d6xe",cell:"index_cell__3W8ZQ",stone:"index_stone__oeDmm",hoge:"index_hoge__UVxRa"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);