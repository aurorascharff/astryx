import{ah as s,aI as ee,a1 as e,a6 as oe,af as ne,ay as te,a3 as se}from"./iframe-fBpDkZ7d.js";import{r as le,D as ie,a as i}from"./renderDropdownItems-CFIkbUvY.js";import{u as re}from"./useListFocus-DSnjuQx-.js";import{D as N}from"./Divider-CCMcXYA5.js";import{F as w}from"./PencilIcon-CvqrnkbG.js";import{F as z}from"./DocumentDuplicateIcon-B2hQhMVu.js";import{F as v}from"./TrashIcon-B6yl0Hx5.js";import{F as $}from"./ShareIcon-CDC50wCD.js";import{F as O,a as T}from"./ScissorsIcon-Du3LakkW.js";import{F as A}from"./ClipboardDocumentIcon-DTFy82AO.js";import{F as ae}from"./ArrowDownTrayIcon-fXIWLTkM.js";import"./preload-helper-Ct5FWWRu.js";import"./Item-DW1ykRR_.js";import"./computeTargetAndRel-BlG0ENK0.js";const j={menu:{kB7OPa:"astryx9f619",k1xSpc:"astryx78zum5",kXwgrk:"astryxdt5ytf",kOIVth:"astryx1lsbc85",kskxy:"astryxuyqlj2",kORKVm:"astryx1odjw0f","--_dropdown-menu-radius":"astryx1fcsqxe","--_dropdown-menu-padding":"astryxgory14",kmVPX3:"astryx9epnlk",kaIpWk:"astryx1n97fys",kWkggS:"astryx1prclbq",kGVxlE:"astryx1i5ehqx",kSiTet:"astryx1hc1fzr",k1ekBW:"astryx19991ni",kIyJzY:"astryxuedmi6",kAMwcw:"astryxlr8y92",$$css:!0},popover:{k7Eaqz:"astryx5w4yej",$$css:!0},popoverCustomWidth:n=>[{k7Eaqz:(typeof n=="number"?`${n}px`:n)!=null?"astryxkj4a21":typeof n=="number"?`${n}px`:n,$$css:!0},{"--x-minWidth":(l=>typeof l=="number"?l+"px":l??void 0)(typeof n=="number"?`${n}px`:n)}]};function o({children:n,menuWidth:l,size:M="md",hasAutoFocus:I=!0,isDisabled:R=!1,onOpenChange:d,ref:V,className:_,style:B,xstyle:K,"data-testid":L,...r}){const X=("items"in r?r.items:void 0)??[],J="menuContent"in r?r.menuContent:void 0,Y=s.useId(),D=s.useRef({x:0,y:0}),[E,P]=s.useState(!1),a=ee({mode:"fixed",onHide:s.useCallback(()=>{P(!1),d?.(!1)},[d]),onShow:s.useCallback(()=>{P(!0),d?.(!0)},[d]),lightDismiss:!1}),c=s.useCallback(()=>{a.hide()},[a]),{listRef:S,handleKeyDown:F,focusFirst:W}=re({itemSelector:'[role="menuitem"]:not([aria-disabled="true"])',wrap:!1,onEscape:c});s.useEffect(()=>{if(!E)return;const t=u=>{const q=S.current;q&&!q.contains(u.target)&&c()};return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}},[E,c,S]);const G=s.useCallback(t=>{if(t.key==="Enter"||t.key===" "){t.preventDefault();const u=document.activeElement;u?.getAttribute("role")==="menuitem"&&u.click();return}F(t)},[F]),H=s.useCallback(t=>{R||(t.preventDefault(),D.current={x:t.clientX,y:t.clientY},a.show(),I&&requestAnimationFrame(()=>W()))},[R,a,I,W]),Q=l?j.popoverCustomWidth(l):j.popover,U=s.useMemo(()=>({closeMenu:c,menuSize:M}),[c,M]),Z=r.items!==void 0?le(X):J;return e.jsxs(e.Fragment,{children:[e.jsx("div",{ref:V,onContextMenu:H,"aria-haspopup":"menu","data-testid":L,children:n}),a.render(e.jsx("div",{ref:S,id:Y,role:"menu",onKeyDown:G,...oe(te("context-menu"),ne(j.menu,K),_,B),children:e.jsx(ie,{value:U,children:Z})}),{x:D.current.x,y:D.current.y,xstyle:[Q,se.below]})]})}o.displayName="ContextMenu";o.__docgenInfo={description:`A context menu component that appears on right-click at cursor position.

Supports two modes:
- **Data-driven**: pass \`items\` for static menus
- **Compound-component**: pass \`menuContent\` JSX for dynamic menus

Both modes share the same DOM-based keyboard navigation via useListFocus.

@example
\`\`\`
<ContextMenu
  items={[
    { label: 'Cut', onClick: () => handleCut() },
    { label: 'Copy', onClick: () => handleCopy() },
    { type: 'divider' },
    { label: 'Paste', onClick: () => handlePaste() },
  ]}
>
  <div>Right-click this area</div>
</ContextMenu>
\`\`\``,methods:[],displayName:"ContextMenu",props:{size:{defaultValue:{value:"'md'",computed:!1},required:!1},hasAutoFocus:{defaultValue:{value:"true",computed:!1},required:!1},isDisabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const De={title:"Core/ContextMenu",component:o,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{items:{description:"Menu items (items, dividers, or sections)"},menuWidth:{control:"text",description:"Custom menu width (number for px or CSS string)"},size:{control:"select",options:["sm","md","lg"],description:"Menu item size"},isDisabled:{control:"boolean",description:"Disable custom context menu"},"data-testid":{control:"text",description:"Test ID for testing frameworks"}}},p={render:()=>e.jsx(o,{items:[{label:"Cut",onClick:()=>console.log("Cut")},{label:"Copy",onClick:()=>console.log("Copy")},{label:"Paste",onClick:()=>console.log("Paste")}],children:e.jsx("div",{className:"x1o8uwn5 xdh2fpr xbsl7fq x1y0avi5 xur7f20 x2b8uid x93p4j0 x87ps6o",children:"Right-click this area"})})},m={render:()=>e.jsx(o,{items:[{label:"Cut",icon:O,onClick:()=>console.log("Cut")},{label:"Copy",icon:A,onClick:()=>console.log("Copy")},{label:"Paste",icon:T,onClick:()=>console.log("Paste")},{type:"divider"},{label:"Delete",icon:v,onClick:()=>console.log("Delete")}],children:e.jsx("div",{className:"x1o8uwn5 xdh2fpr xbsl7fq x1y0avi5 xur7f20 x2b8uid x93p4j0 x87ps6o",children:"Right-click for actions"})})},x={render:()=>e.jsx(o,{items:[{type:"section",title:"Edit",items:[{label:"Cut",icon:O,onClick:()=>console.log("Cut")},{label:"Copy",icon:A,onClick:()=>console.log("Copy")},{label:"Paste",icon:T,onClick:()=>console.log("Paste")}]},{type:"section",title:"Share",items:[{label:"Share",icon:$,onClick:()=>console.log("Share")},{label:"Download",icon:ae,onClick:()=>console.log("Download")}]}],children:e.jsx("div",{className:"x1o8uwn5 xdh2fpr xbsl7fq x1y0avi5 xur7f20 x2b8uid x93p4j0 x87ps6o",children:"Right-click for grouped actions"})})},C={render:()=>e.jsx(o,{items:[{label:"Edit",onClick:()=>console.log("Edit")},{label:"Duplicate",onClick:()=>console.log("Duplicate")},{type:"divider"},{label:"Delete",onClick:()=>console.log("Delete")}],children:e.jsx("div",{className:"x1o8uwn5 xdh2fpr xbsl7fq x1y0avi5 xur7f20 x2b8uid x93p4j0 x87ps6o",children:"Right-click this area"})})},g={render:()=>e.jsx(o,{items:[{label:"Edit",icon:w,onClick:()=>console.log("Edit")},{label:"Duplicate",icon:z,onClick:()=>console.log("Duplicate")},{label:"Delete (no permission)",icon:v,isDisabled:!0}],children:e.jsx("div",{className:"x1o8uwn5 xdh2fpr xbsl7fq x1y0avi5 xur7f20 x2b8uid x93p4j0 x87ps6o",children:"Right-click this area"})})},h={render:()=>e.jsx(o,{menuWidth:280,items:[{label:"This is a longer option that needs more space",onClick:()=>console.log("Option 1")},{label:"Another long option",onClick:()=>console.log("Option 2")},{label:"Short",onClick:()=>console.log("Option 3")}],children:e.jsx("div",{className:"x1o8uwn5 xdh2fpr xbsl7fq x1y0avi5 xur7f20 x2b8uid x93p4j0 x87ps6o",children:"Right-click for wide menu"})})},b={render:()=>e.jsx(o,{size:"sm",items:[{label:"Cut",onClick:()=>console.log("Cut")},{label:"Copy",onClick:()=>console.log("Copy")},{label:"Paste",onClick:()=>console.log("Paste")}],children:e.jsx("div",{className:"x1o8uwn5 xdh2fpr xbsl7fq x1y0avi5 xur7f20 x2b8uid x93p4j0 x87ps6o",children:"Right-click for compact menu"})})},k={render:()=>e.jsx(o,{isDisabled:!0,items:[{label:"Cut",onClick:()=>console.log("Cut")},{label:"Copy",onClick:()=>console.log("Copy")}],children:e.jsx("div",{className:"x1o8uwn5 xdh2fpr xbsl7fq x1y0avi5 xur7f20 x2b8uid x93p4j0 x87ps6o",children:"Right-click shows native menu (disabled)"})})},y={render:()=>e.jsx(o,{menuContent:e.jsxs(e.Fragment,{children:[e.jsx(i,{icon:w,label:"Edit",onClick:()=>console.log("Edit")}),e.jsx(i,{icon:z,label:"Duplicate",onClick:()=>console.log("Duplicate")}),e.jsx(N,{}),e.jsx(i,{icon:v,label:"Delete",onClick:()=>console.log("Delete")})]}),children:e.jsx("div",{className:"x1o8uwn5 xdh2fpr xbsl7fq x1y0avi5 xur7f20 x2b8uid x93p4j0 x87ps6o",children:"Right-click for compound menu"})})},f={render:()=>e.jsx(o,{menuWidth:280,menuContent:e.jsxs(e.Fragment,{children:[e.jsx(i,{icon:w,label:"Edit",description:"Modify this item",onClick:()=>console.log("Edit")}),e.jsx(i,{icon:$,label:"Share",description:"Share with others",onClick:()=>console.log("Share")}),e.jsx(N,{}),e.jsx(i,{icon:v,label:"Delete",description:"Permanently remove",onClick:()=>console.log("Delete")})]}),children:e.jsx("div",{className:"x1o8uwn5 xdh2fpr xbsl7fq x1y0avi5 xur7f20 x2b8uid x93p4j0 x87ps6o",children:"Right-click for detailed menu"})})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu items={[{
    label: 'Cut',
    onClick: () => console.log('Cut')
  }, {
    label: 'Copy',
    onClick: () => console.log('Copy')
  }, {
    label: 'Paste',
    onClick: () => console.log('Paste')
  }]}>
      <div {...stylex.props(triggerStyles.area)}>Right-click this area</div>
    </ContextMenu>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu items={[{
    label: 'Cut',
    icon: ScissorsIcon,
    onClick: () => console.log('Cut')
  }, {
    label: 'Copy',
    icon: ClipboardDocumentIcon,
    onClick: () => console.log('Copy')
  }, {
    label: 'Paste',
    icon: ClipboardIcon,
    onClick: () => console.log('Paste')
  }, {
    type: 'divider'
  }, {
    label: 'Delete',
    icon: TrashIcon,
    onClick: () => console.log('Delete')
  }]}>
      <div {...stylex.props(triggerStyles.area)}>Right-click for actions</div>
    </ContextMenu>
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu items={[{
    type: 'section',
    title: 'Edit',
    items: [{
      label: 'Cut',
      icon: ScissorsIcon,
      onClick: () => console.log('Cut')
    }, {
      label: 'Copy',
      icon: ClipboardDocumentIcon,
      onClick: () => console.log('Copy')
    }, {
      label: 'Paste',
      icon: ClipboardIcon,
      onClick: () => console.log('Paste')
    }]
  }, {
    type: 'section',
    title: 'Share',
    items: [{
      label: 'Share',
      icon: ShareIcon,
      onClick: () => console.log('Share')
    }, {
      label: 'Download',
      icon: ArrowDownTrayIcon,
      onClick: () => console.log('Download')
    }]
  }]}>
      <div {...stylex.props(triggerStyles.area)}>
        Right-click for grouped actions
      </div>
    </ContextMenu>
}`,...x.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu items={[{
    label: 'Edit',
    onClick: () => console.log('Edit')
  }, {
    label: 'Duplicate',
    onClick: () => console.log('Duplicate')
  }, {
    type: 'divider'
  }, {
    label: 'Delete',
    onClick: () => console.log('Delete')
  }]}>
      <div {...stylex.props(triggerStyles.area)}>Right-click this area</div>
    </ContextMenu>
}`,...C.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu items={[{
    label: 'Edit',
    icon: PencilIcon,
    onClick: () => console.log('Edit')
  }, {
    label: 'Duplicate',
    icon: DocumentDuplicateIcon,
    onClick: () => console.log('Duplicate')
  }, {
    label: 'Delete (no permission)',
    icon: TrashIcon,
    isDisabled: true
  }]}>
      <div {...stylex.props(triggerStyles.area)}>Right-click this area</div>
    </ContextMenu>
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu menuWidth={280} items={[{
    label: 'This is a longer option that needs more space',
    onClick: () => console.log('Option 1')
  }, {
    label: 'Another long option',
    onClick: () => console.log('Option 2')
  }, {
    label: 'Short',
    onClick: () => console.log('Option 3')
  }]}>
      <div {...stylex.props(triggerStyles.area)}>Right-click for wide menu</div>
    </ContextMenu>
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu size="sm" items={[{
    label: 'Cut',
    onClick: () => console.log('Cut')
  }, {
    label: 'Copy',
    onClick: () => console.log('Copy')
  }, {
    label: 'Paste',
    onClick: () => console.log('Paste')
  }]}>
      <div {...stylex.props(triggerStyles.area)}>
        Right-click for compact menu
      </div>
    </ContextMenu>
}`,...b.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu isDisabled items={[{
    label: 'Cut',
    onClick: () => console.log('Cut')
  }, {
    label: 'Copy',
    onClick: () => console.log('Copy')
  }]}>
      <div {...stylex.props(triggerStyles.area)}>
        Right-click shows native menu (disabled)
      </div>
    </ContextMenu>
}`,...k.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu menuContent={<>
          <ContextMenuItem icon={PencilIcon} label="Edit" onClick={() => console.log('Edit')} />
          <ContextMenuItem icon={DocumentDuplicateIcon} label="Duplicate" onClick={() => console.log('Duplicate')} />
          <Divider />
          <ContextMenuItem icon={TrashIcon} label="Delete" onClick={() => console.log('Delete')} />
        </>}>
      <div {...stylex.props(triggerStyles.area)}>
        Right-click for compound menu
      </div>
    </ContextMenu>
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <ContextMenu menuWidth={280} menuContent={<>
          <ContextMenuItem icon={PencilIcon} label="Edit" description="Modify this item" onClick={() => console.log('Edit')} />
          <ContextMenuItem icon={ShareIcon} label="Share" description="Share with others" onClick={() => console.log('Share')} />
          <Divider />
          <ContextMenuItem icon={TrashIcon} label="Delete" description="Permanently remove" onClick={() => console.log('Delete')} />
        </>}>
      <div {...stylex.props(triggerStyles.area)}>
        Right-click for detailed menu
      </div>
    </ContextMenu>
}`,...f.parameters?.docs?.source}}};const Se=["Default","WithIcons","WithSections","WithDividers","WithDisabledItems","CustomWidth","SmallSize","Disabled","CompoundBasic","CompoundWithDescriptions"];export{y as CompoundBasic,f as CompoundWithDescriptions,h as CustomWidth,p as Default,k as Disabled,b as SmallSize,g as WithDisabledItems,C as WithDividers,m as WithIcons,x as WithSections,Se as __namedExportsOrder,De as default};
