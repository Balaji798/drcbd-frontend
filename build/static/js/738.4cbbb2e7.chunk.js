"use strict";(self.webpackChunkdrcbd_frontend=self.webpackChunkdrcbd_frontend||[]).push([[738],{4738:(e,t,i)=>{i.r(t),i.d(t,{default:()=>o});i(390);var d=i(5545),n=i(1750),l=i(9134),s=i(1778),r=i(2559);const o=e=>{var t,i,o,a,c;const p=(0,d.s0)(),m=(0,n.I0)(),h=(0,n.v9)((e=>e.cart));return(0,r.jsx)(r.Fragment,{children:0===(null===h||void 0===h||null===(t=h.cart)||void 0===t||null===(i=t.items)||void 0===i?void 0:i.length)||""===(null===h||void 0===h?void 0:h.cart)?(0,r.jsx)("h1",{style:{padding:"2rem 0",textAlign:"center"},children:"Cart is empty"}):(0,r.jsxs)("div",{className:"cart-container",children:[(0,r.jsx)("div",{className:"cart-items",children:null===(o=h.cart)||void 0===o||null===(a=o.items)||void 0===a?void 0:a.map((e=>{var t,i,d,n;return(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",borderBottom:"1px solid",padding:"1em 0"},children:[(0,r.jsx)("div",{style:{background:"#264043",width:"8em",height:"8em"},children:(0,r.jsx)("img",{src:null===e||void 0===e||null===(t=e.productId)||void 0===t?void 0:t.images[0],alt:null===e||void 0===e||null===(i=e.productId)||void 0===i?void 0:i.images[0],style:{width:"100%",height:"100%",objectFit:"contain"}})}),(0,r.jsxs)("div",{className:"items-detail",children:[(0,r.jsx)("h2",{style:{},children:null===e||void 0===e||null===(d=e.productId)||void 0===d?void 0:d.name}),(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap"},children:[(0,r.jsxs)("div",{style:{display:"flex",height:"100%",flexDirection:"column",justifyContent:"space-between"},children:[(0,r.jsx)("h2",{style:{fontSize:"1em",fontWeight:"bold"},children:null===e||void 0===e||null===(n=e.productId)||void 0===n?void 0:n.category}),(0,r.jsx)("div",{style:{maxWidth:100,fontSize:16,borderRadius:"5px",backgroundColor:"#005652",color:"white",padding:"2.5px 5px",cursor:"pointer"},onClick:()=>{var t;return(async e=>{try{const t=localStorage.getItem("token"),i={headers:{Authorization:"Bearer ".concat(t),"Content-Type":"application/json"}};return await l.Z.post("https://drcbd-backend-zgqu.onrender.com/cart/remove_item_from_cart",{productId:e},i),void await(0,s.dv)(m)}catch(t){alert(t.message)}})(null===e||void 0===e||null===(t=e.productId)||void 0===t?void 0:t._id)},children:"Remove"})]}),(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,r.jsx)("p",{style:{fontSize:"25px"},children:"Quantity :"}),(0,r.jsx)("p",{style:{padding:"0px 5px",margin:"10px",fontSize:"30px"},children:e.quantity})]})]}),(0,r.jsxs)("h2",{style:{fontSize:"22px"},className:"text-end",children:["PRICE :- ",e.itemPrice," \u0e3f"]})]})]},null===e||void 0===e?void 0:e._id)}))}),(0,r.jsx)("div",{children:(0,r.jsxs)("div",{style:{width:"18rem",padding:"2em 0",marginLeft:"7em",display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,r.jsx)("h1",{style:{textAlign:"end",width:"80%",borderBottom:"1px solid",fontSize:"2em",paddingBottom:"0.5em",fontWeight:900},children:"Summary"}),(0,r.jsxs)("p",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0.5em 0"},children:["CART SUBTOTAL :-",(0,r.jsxs)("span",{style:{fontSize:"2em",marginLeft:"2px"},children:[" ",null===(c=h.cart)||void 0===c?void 0:c.totalPrice," \u0e3f"]})]}),(0,r.jsx)("div",{className:"checkOut-button",onClick:async()=>{try{p("/order-address/"+h.cart._id)}catch(e){alert(e.message)}},children:"CHECK OUT"})]})})]})})}}}]);
//# sourceMappingURL=738.4cbbb2e7.chunk.js.map