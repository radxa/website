"use strict";(self.webpackChunkradxa_web=self.webpackChunkradxa_web||[]).push([[5288],{11568:(e,t,r)=>{r.r(t),r.d(t,{default:()=>x});var s=r(96540),i=r(92303),n=r(78383),l=r(34164),a=r(28774);const o={centent:"centent_A2bV",title:"title_XOql",select_pr:"select_pr_yiGF",select_input:"select_input_ZGkd",select_icon:"select_icon_JHOC",boxes:"boxes_pq5e",select_options:"select_options_SPFB",filter_main:"filter_main_YTX3",filter_module:"filter_module_k_CB",filterBy:"filterBy_hsyv",pr_list_module:"pr_list_module_NGMA",check_module:"check_module_iy__",check_module_none:"check_module_none_B3Zk",target_list:"target_list_K45D",trans_svg:"trans_svg_BAje",radio_option:"radio_option_Uq4V",radio_item:"radio_item_Ze2H",radio_option_height_index:"radio_option_height_index_W9sY",radio_option_height:"radio_option_height_H2ZH",img_view:"img_view_b8HO",text_view:"text_view_hqhq",bottom:"bottom_SwE7",check1_input:"check1_input_sU7B",check_btn:"check_btn_a85o",check_options:"check_options_bYcI",candidate:"candidate_aSpU",not_page:"not_page_BLRF"};var c=r(18678),d=r(74848);const h=r(83746),p=r(37243),u=r(87471),_=r(39899),m={...p,..._},x=()=>{if(!(0,i.A)())return(0,d.jsx)(d.Fragment,{});const e=(0,c.U2)(),t=(0,c.d$)(e,"products"),r=["SBC","Compute Module","Embedded Computer","Accessory"],x={SBC:{product_data:h,json:p},"Compute Module":{product_data:u,json:_}},[C,g]=(0,s.useState)(JSON.parse(localStorage.getItem("radxa_filter"))||{}),y=(0,s.useRef)([]),S=Array.from({length:Object.keys(m).length},((e,t)=>{const r=Object.keys(m)[t];if(Array.isArray(m[r])){for(let e=0;e<m[r].length;e++)if(void 0!==C[r]&&C[r].includes(m[r][e]))return(0,s.useState)(!0);return(0,s.useState)(!1)}return m[r],void 0!==C[r]&&JSON.stringify(C[r])===JSON.stringify(m[r])||"boolean"==typeof C[r]?(0,s.useState)(!0):(0,s.useState)(!1)})),[j,f]=(0,s.useState)(JSON.parse(localStorage.getItem("radxa_selectSeries"))||null),B=(0,s.useRef)(null),[A,k]=(0,s.useState)([]),[D,M]=(0,s.useState)([]),[v,P]=(0,s.useState)([]),[N,U]=(0,s.useState)(JSON.parse(localStorage.getItem("radxa_checkItems"))||[]),b="M10 15L20 25L30 15";(0,s.useEffect)((()=>{let e=[...new Set(A)];if(A.length>0){let r=e.map((e=>t.filter((t=>t.product_code===e)))).flat();M(r)}else M([])}),[A]),(0,s.useEffect)((()=>{if(localStorage.setItem("radxa_filter",JSON.stringify(C)),!j)return;if(0===Object.keys(C).length){let e=Object.keys(x[j].product_data).map((e=>t.filter((t=>t.product_code===e)))).flat();return void M(e)}let e=[];for(let t in x[j].product_data){let r=!0;for(let e in C)Array.isArray(x[j].product_data[t][e])?-1===x[j].product_data[t][e].indexOf(C[e])&&(r=!1):C[e]!==x[j].product_data[t][e]&&(r=!1);r&&e.push(t),k(e)}}),[C,j]);const I=e=>{const t=e.target.value;e.target.checked?N.length>1?U((e=>[...e.slice(1),t])):U([...N,t]):U(N.filter((e=>e!==t)))};return(0,s.useEffect)((()=>{if(localStorage.setItem("radxa_checkItems",JSON.stringify(N)),N.length>0){let e=N.map((e=>t.filter((t=>t.product_code===e))[0]));P(e)}else P([])}),[N]),(0,d.jsx)(n.A,{children:(0,d.jsxs)("div",{className:o.centent,children:[(0,d.jsxs)("div",{className:o.title,children:[(0,d.jsx)("p",{children:"Help me"}),(0,d.jsx)("h2",{children:"find a suitable product"})]}),(0,d.jsxs)("div",{className:o.select_pr,children:[(0,d.jsx)("h3",{children:"\u4f60\u4f18\u5148\u9009\u62e9\u7684\u4ea7\u54c1\u7c7b\u522b\u662f?"}),(0,d.jsxs)("div",{className:o.boxes,onMouseLeave:()=>{B.current.style.height="0px"},children:[(0,d.jsxs)("div",{className:o.select_input,id:"select_input",onMouseMove:()=>{let e=document.getElementById("select_input").clientHeight/2,t=document.getElementsByClassName("_sele")[0].offsetHeight*r.length+e+"px";B.current.style.height=t},children:[(0,d.jsx)("p",{children:j||"\u8bf7\u9009\u62e9\u4f60\u7684\u7cfb\u5217"}),(0,d.jsx)("svg",{width:"40",height:"41",viewBox:"0 0 40 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,d.jsx)("path",{d:"M10 15.5L20 25.5L30 15.5",strokeWidth:"3",strokeLinejoin:"round",className:o.select_icon})})]}),(0,d.jsx)("div",{className:o.select_options,ref:B,onMouseLeave:()=>{B.current.style.height="0px"},children:r.map(((e,t)=>(0,d.jsx)("p",{className:"_sele",style:{color:""+(e===j?"#74BC1F":"#323232")},onClick:()=>{e!==j&&(f(e),U([]),g({}),localStorage.setItem("radxa_selectSeries",JSON.stringify(e)),B.current.style.height="0px")},children:e},t)))})]})]}),(0,d.jsxs)("div",{className:o.filter_main,style:{display:""+(j?"flex":"none")},children:[(0,d.jsxs)("div",{className:o.filter_module,children:[(0,d.jsxs)("div",{className:o.filterBy,children:[(0,d.jsx)("p",{children:"Filter by"}),(0,d.jsx)("p",{onClick:()=>{U([]),g({});try{y.current.length>0&&y.current.map((e=>{e.current&&(e.current.style.height="0px")})),S.length>0&&S.map((e=>{e[1](!1)}))}catch(e){}},children:"reset"})]}),(0,d.jsx)("ul",{className:o.target_list,children:j?Object.keys(x[j].json).map(((e,t)=>{y.current[t]=s.createRef();let r=null;r=Array.isArray(x[j].json[e])?x[j].json[e].map(((t,r)=>(0,d.jsxs)("label",{className:o.radio_item,children:[(0,d.jsx)("input",{type:"radio",name:e,value:t,onChange:()=>{g({...C,[e]:t})},onClick:t=>{if(t.target.checked){t.target.checked=!1;const{[e]:r,...s}=C;g(s)}},checked:C[e]===t}),(0,d.jsx)("span",{children:t})]},r))):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("label",{className:o.radio_item,children:[(0,d.jsx)("input",{type:"radio",name:e,value:!0,checked:!0===C[e],onChange:()=>{g({...C,[e]:!0})},onClick:t=>{if(t.target.checked){t.target.checked=!1;const{[e]:r,...s}=C;g(s)}}}),(0,d.jsx)("span",{children:"Yes"})]}),(0,d.jsxs)("label",{className:o.radio_item,children:[(0,d.jsx)("input",{type:"radio",name:e,value:!1,checked:!1===C[e],onChange:()=>{g({...C,[e]:!1})},onClick:t=>{if(t.target.checked){t.target.checked=!1;const{[e]:r,...s}=C;g(s)}}}),(0,d.jsx)("span",{children:"No"})]})]});let i=S[t][0]?b:"M15 30L25 20L15 10";return S[t][0]&&(i=b),(0,d.jsxs)("li",{children:[(0,d.jsxs)("div",{className:o.trans_svg,onClick:()=>{S[t][0]?y.current[t].current.style.height="0px":y.current[t].current.style.height="auto",S[t][1]((e=>!e))},children:[(0,d.jsx)("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,d.jsx)("path",{d:i,stroke:"#171717",strokeWidth:"1.5",strokeLinejoin:"round"})}),(0,d.jsx)("p",{children:e})]}),(0,d.jsx)("div",{className:(0,l.A)(o.radio_option,S[t][0]?o.radio_option_height_index:o.radio_option_height),ref:y.current[t],children:r})]},t)})):null})]}),(0,d.jsx)("ul",{className:o.pr_list_module,children:D.length>0?D.map(((e,t)=>(0,d.jsxs)("li",{children:[(0,d.jsx)("div",{className:o.img_view,children:(0,d.jsx)(a.A,{to:e.string_url,children:(0,d.jsx)("img",{src:e.thumbnail_picture,alt:e.product_full_name})})}),(0,d.jsxs)("div",{className:o.text_view,children:[(0,d.jsx)(a.A,{to:e.string_url,children:e.product_full_name}),(0,d.jsx)("p",{children:e.product_feature_en})]}),(0,d.jsxs)("div",{className:o.bottom,children:[(0,d.jsx)(a.A,{to:e.string_url,children:"learn more"}),(0,d.jsxs)("label",{className:o.radio_item,style:{margin:"0"},children:[(0,d.jsx)("input",{type:"checkbox",name:"compare",value:e.product_code,checked:N.includes(e.product_code),onChange:I}),(0,d.jsx)("span",{children:"Compare"})]})]})]},t))):(0,d.jsxs)("div",{className:o.not_page,children:[(0,d.jsx)("img",{src:"/components/not-pr.webp",alt:"No Products"}),(0,d.jsx)("p",{children:"There are no products that match your criteria, please change the filter or refresh."})]})}),(0,d.jsxs)("div",{className:(0,l.A)(o.check_module,0===v.length?o.check_module_none:null),style:{width:""+(v.length>0?"18%":"0px")},children:[v.length>0?v.map(((e,t)=>(0,d.jsxs)("div",{className:o.check_1,children:[(0,d.jsx)("p",{children:"Product :"}),(0,d.jsx)("div",{className:o.check1_input,children:(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{children:e.product_full_name}),(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",onClick:()=>{U((t=>t.filter((t=>t!==e.product_code))))},children:[(0,d.jsxs)("g",{clipPath:"url(#clip0_15603_60268)",children:[(0,d.jsx)("path",{d:"M9.74719 1.62891C14.4284 1.62891 18.2366 5.43703 18.2366 10.1177C18.2366 14.7983 14.4278 18.607 9.74719 18.607C5.06656 18.607 1.25781 14.7983 1.25781 10.1177C1.25781 5.43703 5.06656 1.62891 9.74719 1.62891ZM9.74719 19.857C15.1172 19.857 19.4866 15.4877 19.4866 10.1177C19.4866 4.74766 15.1178 0.378906 9.74719 0.378906C4.37719 0.378906 0.0078125 4.74766 0.0078125 10.1177C0.0078125 15.4877 4.37719 19.857 9.74719 19.857Z",fill:"#B8B8B8"}),(0,d.jsx)("path",{d:"M5.4456 13.758H5.44497C5.3869 13.8161 5.34083 13.885 5.30939 13.9608C5.27795 14.0366 5.26175 14.1179 5.26172 14.2C5.26169 14.2821 5.27783 14.3634 5.30922 14.4392C5.34061 14.5151 5.38663 14.584 5.44466 14.6421C5.50269 14.7002 5.57158 14.7462 5.64742 14.7777C5.72325 14.8091 5.80453 14.8253 5.88662 14.8253C5.96872 14.8254 6.05001 14.8092 6.12587 14.7778C6.20172 14.7465 6.27065 14.7004 6.32872 14.6424L9.97122 10.9987L13.6143 14.6424C13.7315 14.7596 13.8905 14.8254 14.0562 14.8254C14.222 14.8254 14.3809 14.7596 14.4981 14.6424C14.6153 14.5252 14.6811 14.3663 14.6811 14.2005C14.6811 14.0348 14.6153 13.8758 14.4981 13.7587L14.4975 13.758L10.8556 10.1155L14.4975 6.47366L14.4981 6.47303C14.5561 6.415 14.6022 6.34611 14.6336 6.2703C14.665 6.19448 14.6811 6.11322 14.6811 6.03116C14.6811 5.94909 14.665 5.86783 14.6336 5.79201C14.6022 5.7162 14.5561 5.64731 14.4981 5.58928C14.4401 5.53125 14.3712 5.48522 14.2954 5.45382C14.2195 5.42241 14.1383 5.40625 14.0562 5.40625C13.9742 5.40625 13.8929 5.42241 13.8171 5.45382C13.7413 5.48522 13.6724 5.53125 13.6143 5.58928L9.97122 9.23178L6.32872 5.58928C6.27069 5.53129 6.20181 5.4853 6.12601 5.45394C6.05021 5.42257 5.96897 5.40644 5.88694 5.40647C5.8049 5.4065 5.72368 5.42269 5.6479 5.45411C5.57212 5.48553 5.50327 5.53157 5.44528 5.58959C5.3873 5.64762 5.34131 5.7165 5.30994 5.7923C5.27857 5.8681 5.26244 5.94934 5.26247 6.03138C5.26253 6.19705 5.3284 6.35592 5.4456 6.47303L9.08747 10.1149L5.4456 13.7574V13.758Z",fill:"#B8B8B8"})]}),(0,d.jsx)("defs",{children:(0,d.jsx)("clipPath",{id:"clip0_15603_60268",children:(0,d.jsx)("rect",{width:"20",height:"20",fill:"white"})})})]})]})})]},t))):null,v.length>1?(0,d.jsx)(a.A,{to:"/compare",className:o.check_btn,children:"Check"}):null]})]})]})})}},39899:e=>{e.exports=JSON.parse('{"CPU":["A35","A53","A55","A72","A73","A76"],"GPU":"boolean","NPU":"boolean","RAM Version":["DDR3","LPDDR3","DDR4","LPDDR4","LPDDR4x","LPDDR5"]}')},87471:e=>{e.exports=JSON.parse('{"rm116":{"CPU":["A76"]},"rm117":{"CPU":["A55"]},"rm118":{"CPU":["A55"]},"rm120":{"CPU":["A55"]},"rm121":{"CPU":["A76","A55"]}}')},83746:e=>{e.exports=JSON.parse('{"rs119":{"CPU":["A76","A55"],"GPU":true,"NPU":true,"RAM":{"RAM Version":"LPDDR4x","RAM Capacity":["4GB","8GB","16GB","32GB"]},"Storage":["eMMC Connector","SPI Flash","M.2 M Key Connector","SATA","Micro SD Card Slot"],"Audio":["Headphone Jack","HDMI"],"Display":[{"Display Type":"HDMI TX","Display Resolution":["8K","4K"]},{"Display Type":"DP","Display Resolution":"4K"},{"Display Type":"MIPI DSI","Display Resolution":"1080P"}],"Video Input":[{"Type":"MIPI CSI","Quantity":1},{"Type":"HDMI RX","Quantity":1}],"Ethernet":[{"Type":"2.5Gbps","Quantity":1}],"USB":[{"USB Type":"Standard-A","USB Version":"USB 2.0","Quantity":2,"USB Function":["HOST Interface"]},{"USB Type":"Standard-A","USB Version":"USB 3.1","Quantity":2,"USB Function":["HOST Interface","OTG Interface"]},{"USB Type":"Type-C","USB Version":"USB 3.1","Quantity":2,"USB Function":["HOST Interface","OTG Interface","PD Protocol","Video Output"]}],"Wireless":"M.2 E Key Connector","Bluetooth":"M.2 E Key Connector","Fan Header":true,"RTC Battery Seat":true,"Button":["Power","Recovery","User"],"LED":true},"rs120":{"CPU":["A76","A55","A53"]},"rs114a":{"CPU":["A55"]},"rs114ap":{"CPU":["A55"]}}')},37243:e=>{e.exports=JSON.parse('{"CPU":["A35","A53","A55","A72","A73","A76"],"GPU":"boolean","NPU":"boolean","RAM Version":["DDR3","LPDDR3","DDR4","LPDDR4","LPDDR4x","LPDDR5"],"RAM Capacity":["256MB","512MB","1GB","2GB","4GB","8GB","16GB","32GB"],"Storage":["Onboard UFS","UFS Connector","eMMC Connector","Onboard eMMC","SPI Flash","SPI Flash Module","M.2 M Key Connector","SATA","Micro SD Card Slot"],"Audio":["Headphone Jack","HDMI","USB Type-C"],"Display Type":["HDMI TX","DP","MIPI DSI","eDP without Touch","eDP with Touch","VGA"],"Display Resolution":["1080P","4K","8K"],"Video Input":["HDMI RX","MIPI CSI"],"USB Type":["Standard-A","Micro-B","Type-C"],"USB Version":["USB 2.0","USB 3.0","USB 3.1","USB3.2"],"USB Function":["OTG Interface","HOST Interface","Power Supply","PD Protocol","Video Output","Audio Output"],"Ethernet":["100Mbps","1000Mbps","2.5Gbps"],"Wireless":["WiFi5","WiFi6","M.2 E Key Connector"],"Bluetooth":["BT5.0","BT5.2","BT5.4","M.2 E Key Connector"],"Cellular Network":["4G","5G","M.2 B Key Connector","Mini PCIe Interface"],"Fan Header":"boolean","RTC Battery Seat":"boolean","Button":["Power","Recovery","User","Maskrom"],"LED":[]}')}}]);