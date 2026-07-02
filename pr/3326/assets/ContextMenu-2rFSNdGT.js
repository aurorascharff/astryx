import{ah as n,aI as A,a1 as i,a6 as F,af as K,ay as L,a3 as W}from"./iframe-DE1nzcW1.js";import{r as X,D as $}from"./renderDropdownItems-DMmmM1iZ.js";import{u as O}from"./useListFocus-CKiYdC1S.js";const p={menu:{kB7OPa:"astryx9f619",k1xSpc:"astryx78zum5",kXwgrk:"astryxdt5ytf",kOIVth:"astryx1lsbc85",kskxy:"astryxuyqlj2",kORKVm:"astryx1odjw0f","--_dropdown-menu-radius":"astryx1fcsqxe","--_dropdown-menu-padding":"astryxgory14",kmVPX3:"astryx9epnlk",kaIpWk:"astryx1n97fys",kWkggS:"astryx1prclbq",kGVxlE:"astryx1i5ehqx",kSiTet:"astryx1hc1fzr",k1ekBW:"astryx19991ni",kIyJzY:"astryxuedmi6",kAMwcw:"astryxlr8y92",$$css:!0},popover:{k7Eaqz:"astryx5w4yej",$$css:!0},popoverCustomWidth:e=>[{k7Eaqz:(typeof e=="number"?`${e}px`:e)!=null?"astryxkj4a21":typeof e=="number"?`${e}px`:e,$$css:!0},{"--x-minWidth":(s=>typeof s=="number"?s+"px":s??void 0)(typeof e=="number"?`${e}px`:e)}]};function h({children:e,menuWidth:s,size:x="md",hasAutoFocus:y=!0,isDisabled:f=!1,onOpenChange:l,ref:M,className:w,style:D,xstyle:g,"data-testid":E,...o}){const q=("items"in o?o.items:void 0)??[],j="menuContent"in o?o.menuContent:void 0,I=n.useId(),c=n.useRef({x:0,y:0}),[k,C]=n.useState(!1),a=A({mode:"fixed",onHide:n.useCallback(()=>{C(!1),l?.(!1)},[l]),onShow:n.useCallback(()=>{C(!0),l?.(!0)},[l]),lightDismiss:!1}),r=n.useCallback(()=>{a.hide()},[a]),{listRef:d,handleKeyDown:v,focusFirst:b}=O({itemSelector:'[role="menuitem"]:not([aria-disabled="true"]), [role="menuitemradio"]:not([aria-disabled="true"])',wrap:!1,onEscape:r});n.useEffect(()=>{if(!k)return;const t=m=>{const u=d.current;u&&!u.contains(m.target)&&r()};return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}},[k,r,d]);const S=n.useCallback(t=>{if(t.key==="Enter"||t.key===" "){t.preventDefault();const m=document.activeElement,u=m?.getAttribute("role");(u==="menuitem"||u==="menuitemradio")&&m?.click();return}v(t)},[v]),V=n.useCallback(t=>{f||(t.preventDefault(),c.current={x:t.clientX,y:t.clientY},a.show(),y&&requestAnimationFrame(()=>b()))},[f,a,y,b]),R=s?p.popoverCustomWidth(s):p.popover,z=n.useMemo(()=>({closeMenu:r,menuSize:x}),[r,x]),P=o.items!==void 0?X(q):j;return i.jsxs(i.Fragment,{children:[i.jsx("div",{ref:M,onContextMenu:V,"aria-haspopup":"menu","data-testid":E,children:e}),a.render(i.jsx("div",{ref:d,id:I,role:"menu",onKeyDown:S,...F(L("context-menu"),K(p.menu,g),w,D),children:i.jsx($,{value:z,children:P})}),{x:c.current.x,y:c.current.y,xstyle:[R,W.below]})]})}h.displayName="ContextMenu";h.__docgenInfo={description:`A context menu component that appears on right-click at cursor position.

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
