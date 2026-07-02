import{ah as d,a1 as r}from"./iframe-CBnz7Ixu.js";import{P as u}from"./PowerSearch-DDZufD9A.js";import{u as m}from"./usePowerSearchConfig-Ld8e8W_G.js";import{T as h,f as p,p as c}from"./Table-DAJxctVs.js";import"./preload-helper-Ct5FWWRu.js";import"./Tokenizer-CUP0anQL.js";import"./BaseTypeahead-B7iN5X-u.js";import"./usePopover-Da46UFfZ.js";import"./TypeaheadItem-Dik7wdqO.js";import"./getKey-DyRdrWhf.js";import"./Field-CBnhjNUP.js";import"./FieldStatus-BDjWwLyP.js";import"./inputStyles.stylex-Bpqcd25J.js";import"./InputClearButton-BF4gPK1H.js";import"./Token-BJAd85St.js";import"./useInteractiveRole-DnA5erzo.js";import"./OverflowList-BLEAbJpi.js";import"./Avatar-Cot4PC8Z.js";import"./Selector-DxoZYwP7.js";import"./Divider-Dt9hTJAH.js";import"./utils-_uNaBhDK.js";import"./hooks-BfujniEo.js";import"./Item-SWmeMMoG.js";import"./computeTargetAndRel-BlG0ENK0.js";import"./TreeList-fsSBjJTa.js";import"./TextInput-B9vXVPu_.js";import"./groupStyles-D2KAGt9z.js";import"./useInputContainer-nybQxxrM.js";import"./useClickableContainer-D9NnFpu_.js";import"./NumberInput-Vc7odwCp.js";import"./DateInput-DtA0twgM.js";import"./Calendar-DqKThJCl.js";import"./plainDate-C-ANv9VG.js";import"./dateParser-XTIqkafj.js";import"./TimeInput-COWo-DCJ.js";import"./timeParser-CAi7zy_b.js";import"./Typeahead-DJQvNl5S.js";import"./VStack-Bjqmrmxw.js";import"./Stack-DLjLMtwq.js";import"./stack.stylex-BlarxY2N.js";import"./HStack-YjBfR_2g.js";import"./ContextMenu-BQ3znGot.js";import"./renderDropdownItems-2AQquPgB.js";import"./useListFocus-B3Llgq1g.js";import"./EmptyState-C4xaALCj.js";const y=[{value:"fiction",label:"Fiction"},{value:"non-fiction",label:"Non-Fiction"},{value:"sci-fi",label:"Science Fiction"},{value:"fantasy",label:"Fantasy"},{value:"mystery",label:"Mystery"},{value:"romance",label:"Romance"},{value:"biography",label:"Biography"},{value:"history",label:"History"}],f=[{key:"title",type:"string",label:"Title"},{key:"author",type:"string",label:"Author"},{key:"year",type:"number",label:"Publication Year"},{key:"genre",type:"enum",label:"Genre",enumValues:y}],g=[{id:"1",title:"Dune",author:"Frank Herbert",year:1965,genre:"sci-fi"},{id:"2",title:"Pride and Prejudice",author:"Jane Austen",year:1813,genre:"romance"},{id:"3",title:"The Great Gatsby",author:"F. Scott Fitzgerald",year:1925,genre:"fiction"},{id:"4",title:"1984",author:"George Orwell",year:1949,genre:"sci-fi"},{id:"5",title:"To Kill a Mockingbird",author:"Harper Lee",year:1960,genre:"fiction"},{id:"6",title:"The Hobbit",author:"J.R.R. Tolkien",year:1937,genre:"fantasy"},{id:"7",title:"Sapiens",author:"Yuval Noah Harari",year:2011,genre:"non-fiction"},{id:"8",title:"The Name of the Wind",author:"Patrick Rothfuss",year:2007,genre:"fantasy"},{id:"9",title:"Gone Girl",author:"Gillian Flynn",year:2012,genre:"mystery"},{id:"10",title:"Steve Jobs",author:"Walter Isaacson",year:2011,genre:"biography"},{id:"11",title:"A Brief History of Time",author:"Stephen Hawking",year:1988,genre:"non-fiction"},{id:"12",title:"The Shining",author:"Stephen King",year:1977,genre:"mystery"},{id:"13",title:"The Handmaid's Tale",author:"Margaret Atwood",year:1985,genre:"sci-fi"},{id:"14",title:"Outlander",author:"Diana Gabaldon",year:1991,genre:"romance"},{id:"15",title:"The Guns of August",author:"Barbara Tuchman",year:1962,genre:"history"}],b=[{key:"title",header:"Title",width:p(2)},{key:"author",header:"Author",width:p(2)},{key:"year",header:"Year",width:c(100)},{key:"genre",header:"Genre",width:c(140),renderCell:e=>y.find(t=>t.value===e.genre)?.label??e.genre}],ce={title:"Core/PowerSearchWithTable",tags:["autodocs"],decorators:[e=>r.jsx("div",{style:{width:800},children:r.jsx(e,{})})]},o={render:()=>{const[e,t]=d.useState([]),{config:l,applyFilters:s}=m(f,"Books"),i=s(e,g);return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[r.jsx(u,{config:l,filters:e,onChange:n=>t([...n]),placeholder:"Filter books by title, author, year, genre...",resultCount:i.length}),r.jsx(h,{data:i,columns:b,idKey:"id",hasHover:!0})]})}},a={render:()=>{const[e,t]=d.useState([{field:"genre",operator:"is",value:{type:"enum",value:"sci-fi"}}]),{config:l,applyFilters:s}=m(f,"Books"),i=s(e,g);return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[r.jsx(u,{config:l,filters:e,onChange:n=>t([...n]),placeholder:"Filter books...",resultCount:i.length}),r.jsx(h,{data:i,columns:b,idKey:"id",hasHover:!0,isStriped:!0})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [filters, setFilters] = useState<PowerSearchFilter[]>([]);
    const {
      config,
      applyFilters
    } = usePowerSearchConfig(fieldDefs, 'Books');
    const filteredBooks = applyFilters(filters, books);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <PowerSearch config={config} filters={filters} onChange={newFilters => setFilters([...newFilters])} placeholder="Filter books by title, author, year, genre..." resultCount={filteredBooks.length} />
        <Table data={filteredBooks} columns={columns} idKey="id" hasHover />
      </div>;
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [filters, setFilters] = useState<PowerSearchFilter[]>([{
      field: 'genre',
      operator: 'is',
      value: {
        type: 'enum',
        value: 'sci-fi'
      }
    }]);
    const {
      config,
      applyFilters
    } = usePowerSearchConfig(fieldDefs, 'Books');
    const filteredBooks = applyFilters(filters, books);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <PowerSearch config={config} filters={filters} onChange={newFilters => setFilters([...newFilters])} placeholder="Filter books..." resultCount={filteredBooks.length} />
        <Table data={filteredBooks} columns={columns} idKey="id" hasHover isStriped />
      </div>;
  }
}`,...a.parameters?.docs?.source}}};const de=["Default","WithPresetFilters"];export{o as Default,a as WithPresetFilters,de as __namedExportsOrder,ce as default};
