import{j as e}from"./jsx-runtime-DyC-Y_Rg.js";import{r as U}from"./iframe-11IpYRhv.js";import{c as t}from"./colors-CfNvarvK.js";const W=({disabled:r})=>{const s=r?t.neutral200:t.brand700;return e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsxs("g",{clipPath:"url(#clip0_33_666)",children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"4",fill:s,stroke:s,strokeWidth:"1.5"}),e.jsx("path",{d:"M17 10L10.3333 16L7 13",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_33_666",children:e.jsx("rect",{width:"24",height:"24",fill:"white"})})})]})},$=({disabled:r})=>e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("g",{clipPath:"url(#clip0_33_659)",children:e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"4",fill:r?t.neutral100:t.white,stroke:r?t.neutral300:t.neutral200,strokeWidth:"1.5"})}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_33_659",children:e.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),F=({checked:r,disabled:s})=>e.jsx(e.Fragment,{children:r?e.jsx(W,{disabled:s}):e.jsx($,{disabled:s})}),I=({label:r,checked:s=!1,disabled:c=!1,id:d,className:O,onChange:l,...P})=>{const S=U.useId(),q=E=>{c||l==null||l(E)};return e.jsxs("label",{htmlFor:d,className:`inline-flex w-[fit-content] cursor-pointer items-center gap-2 ${c?"cursor-not-allowed":"cursor-pointer"} ${O}`,children:[e.jsx("input",{type:"checkbox",...P,id:d||S,checked:s,disabled:c,className:"hidden",onChange:q}),e.jsx(F,{checked:s,disabled:c}),r&&e.jsx("span",{className:`${c?"text-neutral-400":"text-neutral-800"} typo-body3-regular`,children:r})]})};I.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},checked:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};const M={title:"common/CheckBox",component:I,argTypes:{label:{control:"text",description:"체크박스 라벨"},checked:{control:"boolean",description:"체크박스 체크 여부"},disabled:{control:"boolean",description:"체크박스 비활성화 여부"},onChange:{action:"changed",description:"체크 상태 변경 이벤트"}},args:{label:"체크박스 라벨",checked:!1,disabled:!1}},o={args:{label:"체크됨",checked:!0,disabled:!0}},a={args:{label:"비활성화됨 (체크X)",disabled:!0,checked:!1}},n={args:{label:"비활성화됨 (체크O)",disabled:!0,checked:!0}},i={args:{label:void 0}};var h,p,u,m,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: "체크됨",
    checked: true,
    disabled: true
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source},description:{story:"체크된 상태의 체크박스",...(x=(m=o.parameters)==null?void 0:m.docs)==null?void 0:x.description}}};var f,g,k,b,j;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: "비활성화됨 (체크X)",
    disabled: true,
    checked: false // 명시적으로 설정
  }
}`,...(k=(g=a.parameters)==null?void 0:g.docs)==null?void 0:k.source},description:{story:"비활성화된 상태의 체크박스",...(j=(b=a.parameters)==null?void 0:b.docs)==null?void 0:j.description}}};var w,y,_,C,v;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: "비활성화됨 (체크O)",
    disabled: true,
    checked: true
  }
}`,...(_=(y=n.parameters)==null?void 0:y.docs)==null?void 0:_.source},description:{story:"비활성화되고 체크된 상태의 체크박스",...(v=(C=n.parameters)==null?void 0:C.docs)==null?void 0:v.description}}};var N,B,L,R,D;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: undefined
  }
}`,...(L=(B=i.parameters)==null?void 0:B.docs)==null?void 0:L.source},description:{story:"라벨이 없는 체크박스",...(D=(R=i.parameters)==null?void 0:R.docs)==null?void 0:D.description}}};const z=["Checked","DisabledUnchecked","DisabledChecked","NoLabel"];export{o as Checked,n as DisabledChecked,a as DisabledUnchecked,i as NoLabel,z as __namedExportsOrder,M as default};
