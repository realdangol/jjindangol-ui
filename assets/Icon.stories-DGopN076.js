import{j as s}from"./jsx-runtime-DhD5-yw1.js";import{c as d}from"./colors-CfNvarvK.js";import{A as g,a as u,b as f,c as x,d as b,C as h,e as I,f as j,g as w,h as C,i as y,j as S,k as A,D as L,l as _,m as k,E as v,n as D,H as M,I as P,L as E,M as N,o as O,p as z,q as R,P as U,r as p,s as q,S as H,t as T,V,X as G}from"./X-Drzcmfd-.js";import"./iframe-P9oukJHd.js";const X=Object.freeze(Object.defineProperty({__proto__:null,Alarm:g,ArrowDown:u,ArrowLeft:f,ArrowRight:x,ArrowUp:b,Calendar:h,CheckLine:I,Clip:j,Clipboard:w,ClipboardCheck:C,ClipboardDelete:y,Clockwise:S,Comment:A,Dots:L,DoubleArrowLeft:_,DoubleArrowRight:k,Eye:v,EyeSlash:D,Heart:M,Information:P,Logout:E,MagnifyingGlass:N,Menu:O,Minus:z,MyPage:R,Pan:U,Plus:p,PlusSquare:q,Setting:H,Share:T,Vehicle:V,X:G},Symbol.toStringTag,{value:"Module"})),B=p,W={title:"common/Icon",component:B,argTypes:{size:{control:"select",options:["16","20","24"],description:"아이콘 크기"},color:{control:"text",description:"아이콘 컬러"}}},a={args:{size:"24",color:"pink"}},e=()=>s.jsx("div",{className:"flex flex-wrap gap-8",children:Object.entries(X).map(([o,m])=>s.jsxs("div",{className:"flex flex-col items-center gap-1",children:[s.jsx("p",{children:o}),s.jsx(m,{color:d.brand700})]},o))});e.__docgenInfo={description:"",methods:[],displayName:"IconList"};var r,n,t;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    size: "24",
    color: "pink"
  }
}`,...(t=(n=a.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};var c,i,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <div className="flex flex-wrap gap-8">
      {Object.entries(Icons).map(([name, Icon]) => <div key={name} className="flex flex-col items-center gap-1">
          <p>{name}</p>
          <Icon color={colors["brand700"]} />
        </div>)}
    </div>;
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const Y=["Usage","IconList"];export{e as IconList,a as Usage,Y as __namedExportsOrder,W as default};
