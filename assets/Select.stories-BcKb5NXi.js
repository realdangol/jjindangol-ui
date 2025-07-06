import{j as t}from"./jsx-runtime-Iu7Yd-KX.js";import{r as c}from"./iframe-BvCYtD6h.js";import{c as f}from"./clsx-B-dksMZM.js";import{b as y}from"./X-ClW9DNYg.js";import{a as x}from"./index-CRIi8hFt.js";const m=c.createContext(null),d=({children:n,triggerType:a="click",closeOnBlur:l=!1})=>{const[r,e]=c.useState(!1),o=()=>{e(!0)},s=()=>{e(!1)},u=()=>{r?s():o()};return t.jsx(m.Provider,{value:{open:r,triggerType:a,openList:o,closeList:s,toggleList:u},children:t.jsx("div",{tabIndex:l?0:void 0,style:{position:"relative"},onMouseOver:a==="hover"?o:void 0,onMouseLeave:a==="hover"?s:void 0,onBlur:a==="click"&&l?s:void 0,children:n})})},b=({children:n})=>{const a=c.useContext(m);if(!a)throw Error("Dropdown 안에서 호출해주세요.");const{open:l,triggerType:r,toggleList:e}=a;return t.jsx("div",{onClick:r==="click"?e:void 0,children:typeof n=="function"?n(l):n})},j=({animation:n="fade",children:a,className:l})=>{const r=c.useRef(null),e=c.useRef(null),o=c.useContext(m);if(!o)throw Error("Dropdown 안에서 호출해주세요.");const{open:s}=o;return c.useEffect(()=>{r.current&&e.current&&(r.current.style.height=s?`${e.current.clientHeight}px`:"0px")},[s]),t.jsx("ul",{ref:r,className:f(n==="fade"&&`${s?"scale-y-100 opacity-100":"scale-y-0 opacity-0"} transition-opacity duration-75 ease-linear`,n==="slide-down"&&`${s?"opacity-100":"opacity-0"} transition-[height, opacity] h-0 origin-top duration-100 ease-linear`,l),children:t.jsx("div",{ref:e,children:a})})},k=({children:n,className:a,onClick:l})=>{const r=c.useContext(m);if(!r)throw Error("Dropdown 안에서 호출해주세요.");const{closeList:e}=r,o=()=>{l==null||l(),e()};return t.jsx("li",{className:f(a),onClick:o,onMouseDown:s=>s.preventDefault(),children:n})};d.Trigger=b;d.List=j;d.Item=k;d.__docgenInfo={description:"",methods:[{name:"Trigger",docblock:null,modifiers:["static"],params:[{name:"{ children }: DropdownTriggerProps",optional:!1,type:{name:"signature",type:"object",raw:`{
  children: ((open: boolean) => ReactElement) | ReactNode;
  triggerType?: DropdownTriggerType;
}`,signature:{properties:[{key:"children",value:{name:"union",raw:"((open: boolean) => ReactElement) | ReactNode",elements:[{name:"unknown"},{name:"ReactNode"}],required:!0}},{key:"triggerType",value:{name:"union",raw:'"click" | "hover"',elements:[{name:"literal",value:'"click"'},{name:"literal",value:'"hover"'}],required:!1}}]},alias:"DropdownTriggerProps"}}],returns:null},{name:"List",docblock:null,modifiers:["static"],params:[{name:`{
  animation = "fade",
  children,
  className,
}: PropsWithChildren<DropdownListProps>`,optional:!1,type:{name:"PropsWithChildren",elements:[{name:"signature",type:"object",raw:`{
  animation?: "fade" | "slide-down";
  className?: string;
}`,signature:{properties:[{key:"animation",value:{name:"union",raw:'"fade" | "slide-down"',elements:[{name:"literal",value:'"fade"'},{name:"literal",value:'"slide-down"'}],required:!1}},{key:"className",value:{name:"string",required:!1}}]}}],raw:"PropsWithChildren<DropdownListProps>",alias:"PropsWithChildren"}}],returns:null},{name:"Item",docblock:null,modifiers:["static"],params:[{name:"{ children, className, onClick }: PropsWithChildren<DropdownItemProps>",optional:!1,type:{name:"PropsWithChildren",elements:[{name:"signature",type:"object",raw:`{
  className?: string;
  onClick?: () => void;
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"PropsWithChildren<DropdownItemProps>",alias:"PropsWithChildren"}}],returns:null}],displayName:"Dropdown",props:{triggerType:{required:!1,tsType:{name:"union",raw:'"click" | "hover"',elements:[{name:"literal",value:'"click"'},{name:"literal",value:'"hover"'}]},description:"",defaultValue:{value:'"click"',computed:!1}},closeOnBlur:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const v=({options:n,placeholder:a,selectedOption:l,width:r,onSelect:e})=>{var u;const o=(u=n.find(i=>i.value===l))==null?void 0:u.label,s=i=>()=>{e==null||e(i)};return t.jsxs(d,{closeOnBlur:!0,children:[t.jsx(d.Trigger,{children:i=>t.jsxs("div",{className:"typo-body1-medium flex h-[54px] min-w-[120px] items-center justify-between gap-1 rounded-lg border border-neutral-300 pl-4 pr-3",style:{width:r},children:[t.jsx("span",{className:"text-neutral-800",children:o||a}),t.jsx("span",{className:f("text-neutral-600 transition-transform duration-100 ease-linear",i?"rotate-180":"rotate-0"),children:t.jsx(y,{})})]})}),t.jsx(d.List,{className:"typo-body1-regular absolute left-0 z-[100] max-h-[200px] w-full overflow-y-auto bg-white text-center shadow-[0px_4px_8px_0px_#00000014]",children:n.map(i=>t.jsx(d.Item,{className:"cursor-pointer p-2.5",onClick:s(i.value),children:i.label},i.value))})]})};v.__docgenInfo={description:"",methods:[],displayName:"Select",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"Option[]"},description:""},selectedOption:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"number"},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const q={title:"common/Select",component:v},p={args:{options:[{label:"Label 1",value:"Value 1"},{label:"Label 2",value:"Value 2"},{label:"Label 3",value:"Value 3"},{label:"Label 4",value:"Value 4"},{label:"Label 5",value:"Value 5"}],placeholder:"선택해주세요."},render:n=>{const[a,l]=c.useState(n.selectedOption),r=e=>{l(e),x(e)()};return t.jsx("div",{className:"flex justify-center",children:t.jsx(v,{...n,selectedOption:a,onSelect:r})})}};var g,h,w;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    options: [{
      label: "Label 1",
      value: "Value 1"
    }, {
      label: "Label 2",
      value: "Value 2"
    }, {
      label: "Label 3",
      value: "Value 3"
    }, {
      label: "Label 4",
      value: "Value 4"
    }, {
      label: "Label 5",
      value: "Value 5"
    }],
    placeholder: "선택해주세요."
  },
  render: args => {
    const [selectedOption, setSelectedOption] = useState(args.selectedOption);
    const handleSelect = (value: string) => {
      setSelectedOption(value);
      action(value)();
    };
    return <div className="flex justify-center">
        <Select {...args} selectedOption={selectedOption} onSelect={handleSelect} />
      </div>;
  }
}`,...(w=(h=p.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};const O=["Basic"];export{p as Basic,O as __namedExportsOrder,q as default};
