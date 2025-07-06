import{j as r}from"./jsx-runtime-Iu7Yd-KX.js";import{c as t}from"./clsx-B-dksMZM.js";import{r as a}from"./iframe-BvCYtD6h.js";import{a as p}from"./index-CRIi8hFt.js";const o=({checked:e,disabled:n,onToggle:s})=>r.jsx("button",{className:t("relative w-[110px] h-[60px] rounded-[30px] flex items-center px-1 disabled:cursor-not-allowed",e?n?"bg-brand-500":"bg-brand-700":n?"bg-neutral-300":"bg-neutral-500"),type:"button",role:"switch","aria-checked":e,disabled:n,onClick:s,children:r.jsx("span",{className:t("inline-block size-[52px] bg-white rounded-full transition-all",e?"translate-x-[50px]":"translate-x-0")})});o.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{checked:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},onToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const k={title:"common/Toggle",component:o},c={argTypes:{checked:{description:"체크 여부"},disabled:{description:"활성화 여부"},onToggle:{description:"Toggle 클릭시 호출되는 함수"}},args:{checked:!1,disabled:!1},render:e=>{const[n,s]=a.useState(e.checked);return a.useEffect(()=>{s(e.checked)},[e.checked]),r.jsx(o,{...e,checked:n,onToggle:()=>{s(!n),p(`checked: ${!n}`)()}})}};var d,i,l;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`{
  argTypes: {
    checked: {
      description: "체크 여부"
    },
    disabled: {
      description: "활성화 여부"
    },
    onToggle: {
      description: "Toggle 클릭시 호출되는 함수"
    }
  },
  args: {
    checked: false,
    disabled: false
  },
  render: args => {
    const [checked, setChecked] = useState(args.checked);
    useEffect(() => {
      setChecked(args.checked);
    }, [args.checked]);
    return <Toggle {...args} checked={checked} onToggle={() => {
      setChecked(!checked);
      action(\`checked: \${!checked}\`)();
    }} />;
  }
}`,...(l=(i=c.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const f=["Basic"];export{c as Basic,f as __namedExportsOrder,k as default};
