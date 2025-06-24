import{j as r}from"./jsx-runtime-NIw3RUqN.js";import{r as i}from"./iframe-BNk8vyCC.js";import{c as h}from"./clsx-B-dksMZM.js";import{b as x}from"./X-Cw1YsLRD.js";const u=i.createContext(null),c=({children:e,triggerType:n="click",closeOnBlur:a=!1})=>{const[t,s]=i.useState(!1),o=()=>{s(!0)},l=()=>{s(!1)},p=()=>{t?l():o()};return r.jsx(u.Provider,{value:{open:t,triggerType:n,openList:o,closeList:l,toggleList:p},children:r.jsx("div",{tabIndex:a?0:void 0,style:{position:"relative"},onMouseOver:n==="hover"?o:void 0,onMouseLeave:n==="hover"?l:void 0,onBlur:n==="click"&&a?l:void 0,children:e})})},y=({children:e})=>{const n=i.useContext(u);if(!n)throw Error("Dropdown 안에서 호출해주세요.");const{triggerType:a,toggleList:t}=n;return r.jsx("div",{onClick:a==="click"?t:void 0,children:e})},b=({animation:e="fade",children:n,className:a})=>{const t=i.useRef(null),s=i.useRef(null),o=i.useContext(u);if(!o)throw Error("Dropdown 안에서 호출해주세요.");const{open:l}=o;return i.useEffect(()=>{t.current&&s.current&&(t.current.style.height=l?`${s.current.clientHeight}px`:"0px")},[l]),r.jsx("ul",{ref:t,className:h(e==="fade"&&`${l?"scale-y-100 opacity-100":"scale-y-0 opacity-0"} transition-opacity duration-75 ease-linear`,e==="slide-down"&&`${l?"opacity-100":"opacity-0"} transition-[height, opacity] h-0 origin-top duration-100 ease-linear`,a),children:r.jsx("div",{ref:s,children:n})})},j=({children:e,className:n,onClick:a})=>{const t=i.useContext(u);if(!t)throw Error("Dropdown 안에서 호출해주세요.");const{closeList:s}=t,o=()=>{a==null||a(),s()};return r.jsx("li",{className:h(n),onClick:o,onMouseDown:l=>l.preventDefault(),children:e})};c.Trigger=y;c.List=b;c.Item=j;c.__docgenInfo={description:"",methods:[{name:"Trigger",docblock:null,modifiers:["static"],params:[{name:"{ children }: PropsWithChildren<DropdownTriggerProps>",optional:!1,type:{name:"PropsWithChildren",elements:[{name:"signature",type:"object",raw:`{
  triggerType?: DropdownTriggerType;
}`,signature:{properties:[{key:"triggerType",value:{name:"union",raw:'"click" | "hover"',elements:[{name:"literal",value:'"click"'},{name:"literal",value:'"hover"'}],required:!1}}]}}],raw:"PropsWithChildren<DropdownTriggerProps>",alias:"PropsWithChildren"}}],returns:null},{name:"List",docblock:null,modifiers:["static"],params:[{name:`{
  animation = "fade",
  children,
  className,
}: PropsWithChildren<DropdownListProps>`,optional:!1,type:{name:"PropsWithChildren",elements:[{name:"signature",type:"object",raw:`{
  animation?: "fade" | "slide-down";
  className?: string;
}`,signature:{properties:[{key:"animation",value:{name:"union",raw:'"fade" | "slide-down"',elements:[{name:"literal",value:'"fade"'},{name:"literal",value:'"slide-down"'}],required:!1}},{key:"className",value:{name:"string",required:!1}}]}}],raw:"PropsWithChildren<DropdownListProps>",alias:"PropsWithChildren"}}],returns:null},{name:"Item",docblock:null,modifiers:["static"],params:[{name:"{ children, className, onClick }: PropsWithChildren<DropdownItemProps>",optional:!1,type:{name:"PropsWithChildren",elements:[{name:"signature",type:"object",raw:`{
  className?: string;
  onClick?: () => void;
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:"PropsWithChildren<DropdownItemProps>",alias:"PropsWithChildren"}}],returns:null}],displayName:"Dropdown",props:{triggerType:{required:!1,tsType:{name:"union",raw:'"click" | "hover"',elements:[{name:"literal",value:'"click"'},{name:"literal",value:'"hover"'}]},description:"",defaultValue:{value:'"click"',computed:!1}},closeOnBlur:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const C=()=>{const e=i.useContext(u);if(!e)throw Error("Dropdown 안에서 호출해주세요.");const{open:n}=e;return{open:n}},L=({placeholder:e,selectedOption:n,width:a})=>{const{open:t}=C();return r.jsxs("div",{className:"typo-body1-medium flex h-[54px] min-w-[120px] items-center justify-between gap-1 rounded-lg border border-neutral-300 pl-4 pr-3",style:{width:a},children:[r.jsx("span",{className:"text-neutral-800",children:n||e}),r.jsx("span",{className:h("text-neutral-600 transition-transform duration-100 ease-linear",t?"rotate-180":"rotate-0"),children:r.jsx(x,{})})]})},f=({options:e,placeholder:n,selectedOption:a,width:t,onSelect:s})=>{var p;const o=(p=e.find(d=>d.value===a))==null?void 0:p.label,l=d=>()=>{s==null||s(d)};return r.jsxs(c,{closeOnBlur:!0,children:[r.jsx(c.Trigger,{children:r.jsx(L,{placeholder:n,selectedOption:o||void 0,width:t})}),r.jsx(c.List,{className:"typo-body1-regular absolute left-0 z-[100] max-h-[200px] w-full overflow-y-auto bg-white text-center shadow-[0px_4px_8px_0px_#00000014]",children:e.map(d=>r.jsx(c.Item,{className:"cursor-pointer p-2.5",onClick:l(d.value),children:d.label},d.value))})]})};f.__docgenInfo={description:"",methods:[],displayName:"Select",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"Option[]"},description:""},selectedOption:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"number"},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const N={title:"common/Select",component:f},m={args:{options:[{label:"Label 1",value:"Value 1"},{label:"Label 2",value:"Value 2"},{label:"Label 3",value:"Value 3"},{label:"Label 4",value:"Value 4"},{label:"Label 5",value:"Value 5"}],placeholder:"Select an option",selectedOption:"Value 1"},render:e=>{const[n,a]=i.useState(e.selectedOption),t=s=>{a(s)};return r.jsx("div",{className:"flex justify-center",children:r.jsx(f,{...e,selectedOption:n,onSelect:t})})}};var v,g,w;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
    placeholder: "Select an option",
    selectedOption: "Value 1"
  },
  render: args => {
    const [selectedOption, setSelectedOption] = useState(args.selectedOption);
    const handleSelect = (value: string) => {
      setSelectedOption(value);
    };
    return <div className="flex justify-center">
        <Select {...args} selectedOption={selectedOption} onSelect={handleSelect} />
      </div>;
  }
}`,...(w=(g=m.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};const S=["Basic"];export{m as Basic,S as __namedExportsOrder,N as default};
