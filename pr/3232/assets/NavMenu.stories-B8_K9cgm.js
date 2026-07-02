import{ah as o,a1 as e,a6 as I,af as S,ay as j,a7 as R,aJ as E,aj as $,T as N}from"./iframe-fBpDkZ7d.js";import{u as C}from"./useListFocus-DSnjuQx-.js";import{u as A,a as q,b as F,F as G}from"./ChartBarIcon-8JX7bmHh.js";import{F as w}from"./UserIcon-G2Idm_14.js";import{F as z}from"./Cog6ToothIcon-DUKKjGyJ.js";import{F as P}from"./DocumentTextIcon-BycYk9v7.js";import{F as L}from"./ShieldCheckIcon-CT2R19YW.js";import"./preload-helper-Ct5FWWRu.js";const V={root:{k1xSpc:"astryx78zum5",kXwgrk:"astryxdt5ytf",kOIVth:"astryx1lsbc85",$$css:!0}},W={sm:{k7Eaqz:"astryx5w4yej",$$css:!0},md:{k7Eaqz:"astryx1jzhcrs",$$css:!0},lg:{k7Eaqz:"astryxlm99nl",$$css:!0}};function k({ref:s,children:r,size:n="md",minWidth:i,xstyle:c,className:m,style:t,"data-testid":x}){const l=A()?.closeMenu,{listRef:b,handleKeyDown:d}=C({onEscape:l}),u=o.useMemo(()=>({closeMenu:l??(()=>{}),size:n}),[l,n]),v=i!=null?{...t,minWidth:i}:t;return e.jsx(q,{value:u,children:e.jsx("div",{ref:R(s,b),role:"menu",onKeyDown:d,"data-testid":x,...I(j("nav-heading-menu",{size:n}),S(V.root,W[n],c),m,v),children:r})})}k.displayName="NavHeadingMenu";k.__docgenInfo={description:`Accessible menu container for nav heading popovers.

Provides \`role="menu"\` with arrow-key navigation (Home/End/Escape)
and a size context that flows to child items for consistent padding.
Pass as the \`menu\` prop of SideNavHeading or TopNavHeading.

The parent heading component injects the close callback via context,
so items automatically dismiss the popover on selection.

@example
\`\`\`
<SideNavHeading
  heading="Products"
  menu={
    <NavHeadingMenu size="lg">
      <NavHeadingMenuItem label="Dashboard" href="/dashboard" />
      <NavHeadingMenuItem label="Analytics" href="/analytics" />
    </NavHeadingMenu>
  }
/>
\`\`\``,methods:[],displayName:"NavHeadingMenu",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:"Menu items (NavHeadingMenuItem, dividers, custom content)."},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`Size — controls min-width and flows to items for padding.
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},minWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Minimum width override. Takes precedence over size-based defaults."}},composes:["Omit"]};const H={root:{kB7OPa:"astryx9f619",k1xSpc:"astryx78zum5",kGNEyG:"astryx6s0dn4",kOIVth:"astryx1txdalj",kzqmXN:"astryxh8yej3",kaIpWk:"astryxh6dtrn",kMv6JI:"astryx9ynric",kGuDYH:"astryxcr08ib",kMwMTN:"astryx1tgivj0",kWkggS:"astryxjbqb8w astryx1c52tdz astryxe9uy6x",kQgIW9:"astryx1gs6z28",kkrTdU:"astryx1ypdohk",k9WMMc:"astryxdpxx8g",kI3sdo:"astryx1a2a7pz",kybGjl:"astryx1hl2dhg",$$css:!0},disabled:{kSiTet:"astryxbyyjgo",kkrTdU:"astryx1h6gzvc",$$css:!0}},O={sm:{k8WAf4:"astryxu0wf1k",kLKAdn:null,kGO01o:null,kg3NbH:"astryxf314gf",kuDDbn:null,kE3dHu:null,kP0aTx:null,kpe85a:null,$$css:!0},md:{k8WAf4:"astryxce4md1",kLKAdn:null,kGO01o:null,kg3NbH:"astryxf314gf",kuDDbn:null,kE3dHu:null,kP0aTx:null,kpe85a:null,$$css:!0},lg:{k8WAf4:"astryx8o8v82",kLKAdn:null,kGO01o:null,kg3NbH:"astryxrrkdod",kuDDbn:null,kE3dHu:null,kP0aTx:null,kpe85a:null,$$css:!0}};function a({ref:s,icon:r,label:n,description:i,href:c,onClick:m,isDisabled:t=!1,xstyle:x,className:M,style:l,"data-testid":b}){const d=F(),u=d?.size??"md",v=o.useCallback(()=>{t||(m?.(),d?.closeMenu())},[t,m,d]),T=E(),D=c?T:"div";return e.jsxs(D,{ref:s,role:"menuitem",tabIndex:t?void 0:-1,"aria-disabled":t||void 0,href:c,onClick:v,"data-testid":b,...I(j("nav-heading-menu-item",{size:u}),S(H.root,O[u],t&&H.disabled,x),M,l),children:[r&&$(r,{size:"sm",color:"secondary"}),e.jsxs("span",{className:"astryx78zum5 astryxdt5ytf astryx98rzlu astryxeuugli",children:[typeof n=="string"?e.jsx(N,{type:"body",maxLines:1,children:n}):n,i&&e.jsx(N,{type:"supporting",maxLines:1,children:i})]})]})}a.displayName="NavHeadingMenuItem";a.__docgenInfo={description:`Menu item for nav heading popovers.

Reads size from the parent NavHeadingMenu for consistent padding.
Automatically dismisses the menu on click via context.
Renders as a link when \`href\` is provided.

@example
\`\`\`
<NavHeadingMenu>
  <NavHeadingMenuItem label="Dashboard" href="/dashboard" />
  <NavHeadingMenuItem label="Settings" icon={GearIcon} onClick={open} />
</NavHeadingMenu>
\`\`\``,methods:[],displayName:"NavHeadingMenuItem",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLElement>",elements:[{name:"HTMLElement"}]},description:""},icon:{required:!1,tsType:{name:"union",raw:"ReactNode | IconType",elements:[{name:"ReactNode"},{name:"ComponentType",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}],raw:"ComponentType<SVGProps<SVGSVGElement>>"}]},description:"Icon to display before the label."},label:{required:!0,tsType:{name:"ReactNode"},description:"Primary label text."},description:{required:!1,tsType:{name:"ReactNode"},description:"Secondary description text displayed below the label."},href:{required:!1,tsType:{name:"string"},description:"URL to navigate to. Renders as an anchor element when provided."},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when the item is selected."},isDisabled:{required:!1,tsType:{name:"boolean"},description:"Whether the item is disabled. @default false",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};function _({title:s,titleId:r,...n},i){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":r},n),s?o.createElement("title",{id:r},s):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"}))}const K=o.forwardRef(_),ae={title:"Core/NavMenu",component:k,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Size — controls min-width and flows to items for padding"},minWidth:{control:"number",description:"Minimum width override"}},decorators:[s=>e.jsx("div",{style:{padding:24,maxWidth:300},children:e.jsx(s,{})})]},p={args:{size:"md",children:e.jsxs(e.Fragment,{children:[e.jsx(a,{label:"Dashboard",href:"#"}),e.jsx(a,{label:"Analytics",href:"#"}),e.jsx(a,{label:"Settings",href:"#"})]})}},g={args:{size:"md",children:e.jsxs(e.Fragment,{children:[e.jsx(a,{label:"Profile",icon:w,href:"#"}),e.jsx(a,{label:"Documents",icon:P,href:"#"}),e.jsx(a,{label:"Analytics",icon:G,href:"#"}),e.jsx(a,{label:"Security",icon:L,href:"#"}),e.jsx(a,{label:"Settings",icon:z,href:"#"})]})}},h={args:{size:"lg",children:e.jsxs(e.Fragment,{children:[e.jsx(a,{label:"Profile",description:"Manage your account settings",icon:w,href:"#"}),e.jsx(a,{label:"Settings",description:"Configure application preferences",icon:z,href:"#"}),e.jsx(a,{label:"Sign out",description:"End your current session",icon:K})]})}},f={args:{size:"sm",children:e.jsxs(e.Fragment,{children:[e.jsx(a,{label:"Edit",href:"#"}),e.jsx(a,{label:"Duplicate",href:"#"}),e.jsx(a,{label:"Delete"})]})}},y={args:{size:"md",children:e.jsxs(e.Fragment,{children:[e.jsx(a,{label:"Dashboard",href:"#"}),e.jsx(a,{label:"Analytics",href:"#",isDisabled:!0}),e.jsx(a,{label:"Settings",href:"#"}),e.jsx(a,{label:"Admin",isDisabled:!0})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    children: <>
        <NavHeadingMenuItem label="Dashboard" href="#" />
        <NavHeadingMenuItem label="Analytics" href="#" />
        <NavHeadingMenuItem label="Settings" href="#" />
      </>
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    children: <>
        <NavHeadingMenuItem label="Profile" icon={UserIcon} href="#" />
        <NavHeadingMenuItem label="Documents" icon={DocumentTextIcon} href="#" />
        <NavHeadingMenuItem label="Analytics" icon={ChartBarIcon} href="#" />
        <NavHeadingMenuItem label="Security" icon={ShieldCheckIcon} href="#" />
        <NavHeadingMenuItem label="Settings" icon={Cog6ToothIcon} href="#" />
      </>
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    children: <>
        <NavHeadingMenuItem label="Profile" description="Manage your account settings" icon={UserIcon} href="#" />
        <NavHeadingMenuItem label="Settings" description="Configure application preferences" icon={Cog6ToothIcon} href="#" />
        <NavHeadingMenuItem label="Sign out" description="End your current session" icon={ArrowRightStartOnRectangleIcon} />
      </>
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    children: <>
        <NavHeadingMenuItem label="Edit" href="#" />
        <NavHeadingMenuItem label="Duplicate" href="#" />
        <NavHeadingMenuItem label="Delete" />
      </>
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    children: <>
        <NavHeadingMenuItem label="Dashboard" href="#" />
        <NavHeadingMenuItem label="Analytics" href="#" isDisabled />
        <NavHeadingMenuItem label="Settings" href="#" />
        <NavHeadingMenuItem label="Admin" isDisabled />
      </>
  }
}`,...y.parameters?.docs?.source}}};const ne=["Default","WithIcons","WithDescriptions","SmallSize","DisabledItems"];export{p as Default,y as DisabledItems,f as SmallSize,h as WithDescriptions,g as WithIcons,ne as __namedExportsOrder,ae as default};
