import{aQ as e,cQ as n,cO as t}from"./index.25aba1cb.js";function i(i,s=150,r){let a=()=>{i()};const[o,c]=e(a,s,r);a=o;const d=()=>{r&&r.immediate&&a(),window.addEventListener("resize",a)},m=()=>{window.removeEventListener("resize",a),c()};return n((()=>{d()})),t((()=>{m()})),[d,m]}export{i as u};