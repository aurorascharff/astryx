import{a6 as W,af as q,ay as H,a1 as e,T as C,I as b}from"./iframe-fBpDkZ7d.js";import{C as d}from"./Card-diXSjdlh.js";import{S as s}from"./Section-DGGKljWU.js";import{F as j}from"./CheckCircleIcon-BJEZhLiV.js";import"./preload-helper-Ct5FWWRu.js";import"./container.stylex-uilBL6DE.js";import"./padding.stylex-ENVgbwco.js";const c={base:{k1xSpc:"astryx78zum5",$$css:!0},inline:{k1xSpc:"astryx3nfvp2",$$css:!0},alignItemsCenter:{kGNEyG:"astryx6s0dn4",$$css:!0},justifyContentCenter:{kjj79g:"astryxl56j7k",$$css:!0}},N={sizing:(n,a,o,l)=>[{kzqmXN:n!=null?"astryx5lhr3w":n,kZKoxP:a!=null?"astryx16ye13r":a,ks0D6T:o!=null?"astryxf68679":o,kAzted:l!=null?"astryx82snj4":l,$$css:!0},{"--x-width":(r=>typeof r=="number"?r+"px":r??void 0)(n),"--x-height":(r=>typeof r=="number"?r+"px":r??void 0)(a),"--x-maxWidth":(r=>typeof r=="number"?r+"px":r??void 0)(o),"--x-minHeight":(r=>typeof r=="number"?r+"px":r??void 0)(l)}]};function t({axis:n="both",width:a,height:o,maxWidth:l,minHeight:r,isInline:v=!1,children:w,xstyle:k,className:S,style:z,ref:T,...I}){const B=W(H("center",{axis:n}),q(v?c.inline:c.base,(n==="both"||n==="vertical")&&c.alignItemsCenter,(n==="both"||n==="horizontal")&&c.justifyContentCenter,N.sizing(a??null,o??null,l??null,r??null),k),S,z);return e.jsx("div",{ref:T,...B,...I,children:w})}t.displayName="Center";t.__docgenInfo={description:`Center component for centering children horizontally and/or vertically.

Uses flexbox for centering. By default, centers on both axes.
Use the \`axis\` prop to center on only one axis.

@example
\`\`\`
<Center width={300} height={200}>
  <Content />
</Center>
\`\`\``,methods:[],displayName:"Center",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"Ref forwarded to the root element"},axis:{required:!1,tsType:{name:"union",raw:"'both' | 'horizontal' | 'vertical'",elements:[{name:"literal",value:"'both'"},{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Center axis - which direction(s) to center.\n- `both`: Center both horizontally and vertically (default)\n- `horizontal`: Center horizontally only (justifyContent: center)\n- `vertical`: Center vertically only (alignItems: center)\n@default 'both'",defaultValue:{value:"'both'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Width of the container.
Numbers are treated as pixels, strings are used as-is (e.g., '100%').`},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Height of the container.
Numbers are treated as pixels, strings are used as-is (e.g., '100%').`},maxWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Maximum width of the container.
Numbers are treated as pixels, strings are used as-is (e.g., '100%').`},minHeight:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Minimum height of the container.
Numbers are treated as pixels, strings are used as-is (e.g., '100%').`},isInline:{required:!1,tsType:{name:"boolean"},description:`Whether to make the container inline-flex (useful for text/icons).
@default false`,defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:"Content to render inside the center container."}},composes:["Omit"]};const A={iconWrapper:{kWkggS:"x1o0wnni",kMwMTN:"x1vvqiwl",kmVPX3:"xlsj2fj",kg3NbH:null,kuDDbn:null,kE3dHu:null,kP0aTx:null,kpe85a:null,k8WAf4:null,kLKAdn:null,kGO01o:null,kaIpWk:"xh6dtrn",krdFHd:null,kfmiAY:null,kVL7Gh:null,kT0f0o:null,kIxVMA:null,ksF3WI:null,kqGeR4:null,kYm2EN:null,$$css:!0}},i=({children:n})=>e.jsx("div",{className:"x1o0wnni x1vvqiwl xmkeg23 x1y0btm7 xlee4gx x1na6nto xm7rs69 xh6dtrn xk50ysn",children:n}),E={title:"Core/Center",component:t,tags:["autodocs"],argTypes:{axis:{control:"select",options:["both","horizontal","vertical"],description:"Which direction(s) to center"},width:{control:"text",description:"Width of the container (number for px, string for any unit)"},height:{control:"text",description:"Height of the container (number for px, string for any unit)"},isInline:{control:"boolean",description:"Whether to render as inline-flex"}}},h={args:{axis:"both",width:"100%",height:200,children:null},render:n=>e.jsx(s,{variant:"muted",width:"100%",children:e.jsx(t,{...n,children:e.jsx(i,{children:"Centered Content"})})})},u={args:{axis:"horizontal",width:"100%",children:null},render:n=>e.jsx(s,{variant:"muted",width:"100%",children:e.jsx(t,{...n,children:e.jsx(i,{children:"Horizontal Center"})})})},x={args:{axis:"vertical",height:150,width:"100%",children:null},render:n=>e.jsx(s,{variant:"muted",width:"100%",children:e.jsx(t,{...n,children:e.jsx(i,{children:"Vertical Center"})})})},m={args:{axis:"both",width:"100%",height:300,children:null},render:n=>e.jsx(s,{variant:"muted",children:e.jsx(t,{...n,children:e.jsx(i,{children:"Full Width, Fixed Height"})})})},p={args:{isInline:!0,children:null},render:n=>e.jsx(s,{variant:"muted",children:e.jsx(d,{children:e.jsxs(C,{type:"body",children:["Text with inline centered icon:"," ",e.jsx(t,{...n,xstyle:A.iconWrapper,children:e.jsx(b,{icon:j,size:"sm"})})," ","and more text after."]})})})},g={args:{axis:"both",width:300,height:200,children:null},render:n=>e.jsx(s,{variant:"muted",children:e.jsx(t,{...n,children:e.jsx("div",{className:"x1o0wnni x1vvqiwl xlsj2fj xh6dtrn",children:e.jsx(b,{icon:j,size:"lg"})})})})},y={args:{height:150,children:null},render:n=>e.jsx(s,{variant:"muted",children:e.jsx(d,{children:e.jsx(t,{...n,children:e.jsx(i,{children:"Centered in Card"})})})})},f={args:{children:null},render:()=>e.jsx(s,{variant:"muted",children:e.jsxs("div",{className:"x78zum5 xdt5ytf x1qh66ti",children:[e.jsxs(d,{children:[e.jsx(C,{type:"supporting",display:"block",children:"axis: both (default)"}),e.jsx(t,{axis:"both",width:300,height:150,children:e.jsx(i,{children:"Both Axes"})})]}),e.jsxs(d,{children:[e.jsx(C,{type:"supporting",display:"block",children:"axis: horizontal"}),e.jsx(t,{axis:"horizontal",width:300,children:e.jsx(i,{children:"Horizontal Only"})})]}),e.jsxs(d,{children:[e.jsx(C,{type:"supporting",display:"block",children:"axis: vertical"}),e.jsx(t,{axis:"vertical",height:150,children:e.jsx(i,{children:"Vertical Only"})})]})]})})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    axis: 'both',
    width: '100%',
    height: 200,
    children: null
  },
  render: args => <Section variant="muted" width="100%">
      <Center {...args}>
        <Box>Centered Content</Box>
      </Center>
    </Section>
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    axis: 'horizontal',
    width: '100%',
    children: null
  },
  render: args => <Section variant="muted" width="100%">
      <Center {...args}>
        <Box>Horizontal Center</Box>
      </Center>
    </Section>
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    axis: 'vertical',
    height: 150,
    width: '100%',
    children: null
  },
  render: args => <Section variant="muted" width="100%">
      <Center {...args}>
        <Box>Vertical Center</Box>
      </Center>
    </Section>
}`,...x.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    axis: 'both',
    width: '100%',
    height: 300,
    children: null
  },
  render: args => <Section variant="muted">
      <Center {...args}>
        <Box>Full Width, Fixed Height</Box>
      </Center>
    </Section>
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    isInline: true,
    children: null
  },
  render: args => <Section variant="muted">
      <Card>
        <Text type="body">
          Text with inline centered icon:{' '}
          <Center {...args} xstyle={styles.iconWrapper}>
            <Icon icon={CheckCircleIcon} size="sm" />
          </Center>{' '}
          and more text after.
        </Text>
      </Card>
    </Section>
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    axis: 'both',
    width: 300,
    height: 200,
    children: null
  },
  render: args => <Section variant="muted">
      <Center {...args}>
        <div {...stylex.props(styles.iconWrapper)}>
          <Icon icon={CheckCircleIcon} size="lg" />
        </div>
      </Center>
    </Section>
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    height: 150,
    children: null
  },
  render: args => <Section variant="muted">
      <Card>
        <Center {...args}>
          <Box>Centered in Card</Box>
        </Center>
      </Card>
    </Section>
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <Section variant="muted">
      <div {...stylex.props(styles.storyWrapper)}>
        <Card>
          <Text type="supporting" display="block">
            axis: both (default)
          </Text>
          <Center axis="both" width={300} height={150}>
            <Box>Both Axes</Box>
          </Center>
        </Card>
        <Card>
          <Text type="supporting" display="block">
            axis: horizontal
          </Text>
          <Center axis="horizontal" width={300}>
            <Box>Horizontal Only</Box>
          </Center>
        </Card>
        <Card>
          <Text type="supporting" display="block">
            axis: vertical
          </Text>
          <Center axis="vertical" height={150}>
            <Box>Vertical Only</Box>
          </Center>
        </Card>
      </div>
    </Section>
}`,...f.parameters?.docs?.source}}};const P=["Default","HorizontalOnly","VerticalOnly","FullSize","Inline","WithIcon","InsideACard","AllAxisModes"];export{f as AllAxisModes,h as Default,m as FullSize,u as HorizontalOnly,p as Inline,y as InsideACard,x as VerticalOnly,g as WithIcon,P as __namedExportsOrder,E as default};
