import{j as d}from"./jsx-runtime-Iu7Yd-KX.js";import{c}from"./clsx-B-dksMZM.js";import"./iframe-BvCYtD6h.js";const a=({size:r="medium",color:i="green",children:l})=>{const o=(()=>{switch(i){case"green":return"bg-success-100 text-success-600";case"neutral":return"bg-neutral-200 text-neutral-400";case"red":return"bg-error-100 text-error-600";case"brand":return"bg-brand-100 text-brand-700"}})();return d.jsx("div",{className:c("rounded-xs font-medium inline-flex items-center justify-center",r==="medium"?"h-[24px] px-xs text-[13px] leading-[18px] tracking-[-0.1px]":"h-[20px] px-xxs text-[12px] leading-[15px]",o),children:l})};a.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{size:{required:!1,tsType:{name:"union",raw:'"medium" | "small"',elements:[{name:"literal",value:'"medium"'},{name:"literal",value:'"small"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"green" | "neutral" | "red" | "brand"',elements:[{name:"literal",value:'"green"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"red"'},{name:"literal",value:'"brand"'}]},description:"",defaultValue:{value:'"green"',computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const x={title:"common/Badge",component:a},e={argTypes:{size:{description:"Badge 크기"},color:{description:"Badge Color"},children:{description:"Badge Text"}},render:r=>d.jsx(a,{...r,children:"Text"})};var n,t,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  argTypes: {
    size: {
      description: "Badge 크기"
    },
    color: {
      description: "Badge Color"
    },
    children: {
      description: "Badge Text"
    }
  },
  render: args => {
    return <Badge {...args}>Text</Badge>;
  }
}`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const g=["Basic"];export{e as Basic,g as __namedExportsOrder,x as default};
