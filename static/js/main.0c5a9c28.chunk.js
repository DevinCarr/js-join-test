(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(n,t,r){n.exports=r(3)},function(n,t,r){},,function(n,t,r){"use strict";r.r(t);r(1);var e,o,i=function(n){return n.id1+"|"+n.id2+"|"+n.id3},y=function(){for(var n=[],t=[],r=0;r<1e6;r++)n.push({id1:r.toString(),id2:(r+1).toString(),id3:r+2,entry1:(r+4).toString(),entry2:(r+3).toString(),entry3:r}),t.push({id1:r.toString(),id2:(r+1).toString(),id3:r+2,entry1:(r+3).toString(),entry2:(r+4).toString(),entry3:r});return[n,t]}(),a=(o=2,function(n){if(Array.isArray(n))return n}(e=y)||function(n,t){var r=[],e=!0,o=!1,i=void 0;try{for(var y,a=n[Symbol.iterator]();!(e=(y=a.next()).done)&&(r.push(y.value),!t||r.length!==t);e=!0);}catch(c){o=!0,i=c}finally{try{e||null==a.return||a.return()}finally{if(o)throw i}}return r}(e,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()),c=a[0],f=a[1];console.profile("joinByIndex");var u=function(n,t){var r=new Map;return n.forEach(function(n,t){r.set(i(n),t)}),t.map(function(t){var e=i(t),o=n[r.get(e)];return{hash:e,entry11:o.entry1,entry12:o.entry2,entry13:o.entry3,entry21:t.entry1,entry22:t.entry2,entry23:t.entry3}})}(c,f);console.profileEnd("joinByIndex"),u.forEach(function(n){if(n.entry13!==n.entry23)throw{message:"Invalid mapping (joinByIndex): ".concat(n.hash),name:"Invalid Join"}}),console.profile("joinByRef");var s=function(n,t){var r=new Map;return n.forEach(function(n){r.set(i(n),n)}),t.map(function(n){var t=i(n),e=r.get(t);return{hash:t,entry11:e.entry1,entry12:e.entry2,entry13:e.entry3,entry21:n.entry1,entry22:n.entry2,entry23:n.entry3}})}(c,f);console.profileEnd("joinByRef"),s.forEach(function(n){if(n.entry13!==n.entry23)throw{message:"Invalid mapping (joinByRef): ".concat(n.hash),name:"Invalid Join"}})}],[[0,1]]]);
//# sourceMappingURL=main.0c5a9c28.chunk.js.map