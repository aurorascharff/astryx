import{ah as n,aI as A,a1 as u,a6 as F,af as K,ay as L,a3 as W}from"./iframe-BqRM__rv.js";import{r as X,D as $}from"./renderDropdownItems-VY1N91ua.js";import{u as O}from"./useListFocus-ChQn0-1w.js";const d={menu:{kB7OPa:"astryx9f619",k1xSpc:"astryx78zum5",kXwgrk:"astryxdt5ytf",kOIVth:"astryx1lsbc85",kskxy:"astryxuyqlj2",kORKVm:"astryx1odjw0f","--_dropdown-menu-radius":"astryx1fcsqxe","--_dropdown-menu-padding":"astryxgory14",kmVPX3:"astryx9epnlk",kaIpWk:"astryx1n97fys",kWkggS:"astryx1prclbq",kGVxlE:"astryx1i5ehqx",kSiTet:"astryx1hc1fzr",k1ekBW:"astryx19991ni",kIyJzY:"astryxuedmi6",kAMwcw:"astryxlr8y92",$$css:!0},popover:{k7Eaqz:"astryx5w4yej",$$css:!0},popoverCustomWidth:e=>[{k7Eaqz:(typeof e=="number"?`${e}px`:e)!=null?"astryxkj4a21":typeof e=="number"?`${e}px`:e,$$css:!0},{"--x-minWidth":(s=>typeof s=="number"?s+"px":s??void 0)(typeof e=="number"?`${e}px`:e)}]};function h({children:e,menuWidth:s,size:p="md",hasAutoFocus:x=!0,isDisabled:y=!1,onOpenChange:i,ref:M,className:w,style:D,xstyle:g,"data-testid":E,...o}){const q=("items"in o?o.items:void 0)??[],j="menuContent"in o?o.menuContent:void 0,I=n.useId(),c=n.useRef({x:0,y:0}),[f,k]=n.useState(!1),a=A({mode:"fixed",onHide:n.useCallback(()=>{k(!1),i?.(!1)},[i]),onShow:n.useCallback(()=>{k(!0),i?.(!0)},[i]),lightDismiss:!1}),r=n.useCallback(()=>{a.hide()},[a]),{listRef:m,handleKeyDown:C,focusFirst:v}=O({itemSelector:'[role="menuitem"]:not([aria-disabled="true"])',wrap:!1,onEscape:r});n.useEffect(()=>{if(!f)return;const t=l=>{const b=m.current;b&&!b.contains(l.target)&&r()};return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}},[f,r,m]);const S=n.useCallback(t=>{if(t.key==="Enter"||t.key===" "){t.preventDefault();const l=document.activeElement;l?.getAttribute("role")==="menuitem"&&l.click();return}C(t)},[C]),V=n.useCallback(t=>{y||(t.preventDefault(),c.current={x:t.clientX,y:t.clientY},a.show(),x&&requestAnimationFrame(()=>v()))},[y,a,x,v]),z=s?d.popoverCustomWidth(s):d.popover,P=n.useMemo(()=>({closeMenu:r,menuSize:p}),[r,p]),R=o.items!==void 0?X(q):j;return u.jsxs(u.Fragment,{children:[u.jsx("div",{ref:M,onContextMenu:V,"aria-haspopup":"menu","data-testid":E,children:e}),a.render(u.jsx("div",{ref:m,id:I,role:"menu",onKeyDown:S,...F(L("context-menu"),K(d.menu,g),w,D),children:u.jsx($,{value:P,children:R})}),{x:c.current.x,y:c.current.y,xstyle:[z,W.below]})]})}h.displayName="ContextMenu";h.__docgenInfo={description:`A context menu component that appears on right-click at cursor position.

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
\`\`\``,methods:[],displayName:"ContextMenu",props:{size:{defaultValue:{value:"'md'",computed:!1},required:!1},hasAutoFocus:{defaultValue:{value:"true",computed:!1},required:!1},isDisabled:{defaultValue:{value:"false",computed:!1},required:!1}}};export{h as C};
