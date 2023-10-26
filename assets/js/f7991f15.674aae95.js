"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7029],{3905:(o,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>k});var e=t(7294);function a(o,r,t){return r in o?Object.defineProperty(o,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[r]=t,o}function i(o,r){var t=Object.keys(o);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(o);r&&(e=e.filter((function(r){return Object.getOwnPropertyDescriptor(o,r).enumerable}))),t.push.apply(t,e)}return t}function c(o){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(o,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(t,r))}))}return o}function d(o,r){if(null==o)return{};var t,e,a=function(o,r){if(null==o)return{};var t,e,a={},i=Object.keys(o);for(e=0;e<i.length;e++)t=i[e],r.indexOf(t)>=0||(a[t]=o[t]);return a}(o,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(o);for(e=0;e<i.length;e++)t=i[e],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(o,t)&&(a[t]=o[t])}return a}var n=e.createContext({}),p=function(o){var r=e.useContext(n),t=r;return o&&(t="function"==typeof o?o(r):c(c({},r),o)),t},s=function(o){var r=p(o.components);return e.createElement(n.Provider,{value:r},o.children)},u="mdxType",l={inlineCode:"code",wrapper:function(o){var r=o.children;return e.createElement(e.Fragment,{},r)}},m=e.forwardRef((function(o,r){var t=o.components,a=o.mdxType,i=o.originalType,n=o.parentName,s=d(o,["components","mdxType","originalType","parentName"]),u=p(t),m=a,k=u["".concat(n,".").concat(m)]||u[m]||l[m]||i;return t?e.createElement(k,c(c({ref:r},s),{},{components:t})):e.createElement(k,c({ref:r},s))}));function k(o,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof o||a){var i=t.length,c=new Array(i);c[0]=m;var d={};for(var n in r)hasOwnProperty.call(r,n)&&(d[n]=r[n]);d.originalType=o,d[u]="string"==typeof o?o:a,c[1]=d;for(var p=2;p<i;p++)c[p]=t[p];return e.createElement.apply(null,c)}return e.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8673:(o,r,t)=>{t.r(r),t.d(r,{assets:()=>n,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var e=t(7462),a=(t(7294),t(3905));const i={sidebar_label:"Radxa ROCK 3 Model A",sidebar_position:1,sidebar_custom_props:{string_url:"rock3a",banner_flag:!1,product_name:"ROCK 3A",product_full_name:"Radxa ROCK 3A",product_code:"rs117",product_line:"product",product_feature_zh:"\u4e00\u53f0\u5177\u6709\u4e30\u5bcc\u63a5\u53e3\u7684\u4fe1\u7528\u5361\u5927\u5c0f\u7684SBC",product_feature_en:"A Credit Card Sized SBC with Rich Interfaces",sub_feature_zh:["\u4e00\u4e2a\u56db\u6838 Arm Cortex A55","\u652f\u63014K\u89c6\u9891\u89e3\u7801\u3001MIPI DSI\u3001HDMI\u663e\u793a\u7b49\u591a\u79cd\u529f\u80fd","\u591a\u79cd\u5185\u5b58\u9009\u62e9"],sub_feature_en:["A Quad-Core Arm Cortex A55","Support 4K video decoding, MIPI DSI, HDMI display and many other functions","Various memory options"],product_introduction_zh:"ROCK3A \u662f\u4e00\u6b3e\u7d27\u51d1\u800c\u7ecf\u6d4e\u7684\u5355\u677f\u8ba1\u7b97\u673a,\u5177\u6709\u9ad8\u6027\u80fd\u548c\u4f4e\u529f\u8017\u3002\u5b83\u662f\u7269\u8054\u7f51\u3001\u4eba\u5de5\u667a\u80fd\u548c\u667a\u80fd\u5bb6\u5c45\u9886\u57df\u4e13\u4e1a\u4eba\u58eb\u7684\u7406\u60f3\u9009\u62e9,\u63d0\u4f9b\u51fa\u8272\u7684\u6027\u80fd\u548c\u53ef\u6269\u5c55\u6027\u3002",product_introduction_en:"ROCK3A is a compact and cost-effective single board computer with high performance and low power consumption. It's ideal for professionals in IoT, AI, and smart home, providing excellent performance and scalability.",thumbnail_picture:"/rock3/rock_3a/thumb_rock3a.webp",banner_picture:"/rock3/rock_3a/banner_rock3a.webp",spec_pictures:["/rock3/rock_3a/spec_rock3a_01.webp","/rock3/rock_3a/spec_rock3a_02.webp","/rock3/rock_3a/spec_rock3a_03.webp"],marked_picture:["/rock3/rock_3a/mark_rock3a.webp"],parameter:{SoC:["Rockchip RK3568"],CPU:["Quad\u2011core Arm\xae Cortex\u2122\u2011A55 (Armv8) 64\u2011bit @ 2.0GHz"],GPU:["Arm\xae Mali\u2122 G52 GPU","- OpenGL\xae ES 1.1 / 2.0 / 3.2","- OpenCL\u2122 2.0","- Vulkan\xae 1.1"],NPU:["1 TOPs @ INT8 / INT16 / FP16 / BFP16 MAC hybrid operation","Support deep-learning frameworks: TensorFlow, TF-lite, Pytorch, Caffe, ONNX, MXNet, Keras, Darknet"],Multimedia:["H.265 / H.264 / VP9 video decoder up to 4K@60fps","H.264 / H.265 video encodecoder up to 1080@60fps"],RAM:["2 / 4 / 8GB 32bits LPDDR4"],Storage:["1x eMMC connector","1x M.2 M Key (2\u2011lane PCIe 3.0) supporting NVMe SSD","1x Micro SD(TF) card slot"],Display:["1x Standard HDMI 2.0 supporting displays up to 4Kp60 resolution","1x 2\u2011lane MIPI DSI supporting displays up to 2Kp60 resolution"],Camera:["1x 2-lane MIPI CSI for camera"],Ethernet:["1x Gigabit Ethernet port supports PoE with PoE HAT"],USB:["1x USB3.0 HOST port","1x USB3.0  OTG/HOST port","2x USB2.0 HOST ports"],Audio:["1x 4\u2011ring 3.5mm Headphone Jack"],Connectivity:["40x color GPIO","- 5 x UART","- 1 x SPI bus","- 2 x I2C bus","- 1 x CAN","- 6 x PWM","- 1 x ADC","- 6 x GPIO","- 2 x 5V DC power in","- 1 x 3.3V power pin"],Software:["Debian/Ubuntu Linux support","Android 11 support"],"Power Requirements":["Supports various power supply technologies including smart power adapter as well as fixed voltage:","- USB Type\u2011C\xae PD V2.0 supporting 9V/2A, 12V/2A, 15V/2A and 20V/2A.","- Qualcomm\xae Quick Charge\u2122 2.0 QC3.0/2.0 adapter 9V/2A and 12V/1.5A.","- Power adapter with fixed voltage in 6V to 24V range on the USB Type\u2011C\xae port","- 5V Power applied to the GPIO PIN 2 & 4"],"Operating Conditions":["Recommended operating temperature: 0 ~ 50\xb0C","Radxa ROCK 3A has a temperature limit of 80\xb0C, beyond which it throttles clock speeds for reliability","For continuous high-performance use, external cooling methods like heat sinks or fans can maintain maximum clock speed below the 80\xb0C limit"],Dimension:["85 mm x 56 mm"],"Compliance Certification":["FCC / CE"]},product_docs:[{title:"Getting Started",info:"Getting Started with your ROCK 3A",url:"https://docs.radxa.com/en/rock3/rock3a/getting-started"},{title:"Radxa OS",info:"Download the offcial operating system from Radxa",url:"https://docs.radxa.com/en/rock3/images"},{title:"Configuration",info:"Configuring your ROCK 3A setting",url:"https://docs.radxa.com/en/radxa-os"}],product_downloads:{"Official Images":{downloads:[{title:"Debian OS",info:"Download the official OS for ROCK 3A",logo:"/support/debian-logo.webp",url:"https://github.com/radxa-build/rock-3a/releases",more_introduction:""},{title:"Ubuntu Server",info:"Download Ubuntu Server for ROCK 3A",logo:"/support/ubuntu-logo.webp",url:"https://github.com/radxa-build/rock-3a/releases",more_introduction:""},{title:"Android",info:"Download Android for ROCK 3A",logo:"/support/android-logo.webp",url:"https://dl.radxa.com/rock3/images/android/rock3a-android11-20220408_1204-gpt.img.xz",more_introduction:""}]},"Product Information":{downloads:[{title:"Product Brief",info:"Download Radxa ROCK 3A Product Brief",logo:"/support/pdf-logo.webp",url:"https://dl.radxa.com/rock3/docs/hw/3a/radxa_rock3a_product_brief_Revision_1.5.pdf",more_introduction:""},{title:"Schematic",info:"Download Radxa ROCK 3A Schematic V1.3",logo:"/support/pdf-logo.webp",url:"https://dl.radxa.com/rock3/docs/hw/3a/ROCK-3A-V1.3-SCH.pdf"},{title:"Components Placement Map",info:"Download Radxa ROCK 3A SMD V1.3",logo:"/support/pdf-logo.webp",url:"https://dl.radxa.com/rock3/docs/hw/3a/ROCK-3A-V1.3-SMD.pdf"}]}},buy:[{name:"OKdo",logo:"/okdo_logo.svg",url:"https://www.okdo.com/p/okdo-rock-3-model-c-1gb-single-board-computer-rockchip-rk3566-arm-cortex-a55/"},{name:"ALLnet",logo:"/allnet_logo.svg",url:"https://shop.allnetchina.cn/collections/frontpage/products/rock3-model-c"},{name:"3LOGIC",logo:"/3logic_logo.svg",url:"https://3logic.ru/"}],related_products:["ap002","ra004","ra015","va003","va001"],distributors:[{id:"radxa_distributors_us1",product_url:"https://www.okdo.com/p/okdo-rock-3-model-a-2gb-single-board-computer-rockchip-rk3568-arm-cortex-a55/"},{id:"radxa_distributors_uk1",product_url:"https://www.okdo.com/p/okdo-rock-3-model-a-2gb-single-board-computer-rockchip-rk3568-arm-cortex-a55/"},{id:"radxa_distributors_nl1",product_url:"https://www.okdo.com/p/okdo-rock-3-model-a-2gb-single-board-computer-rockchip-rk3568-arm-cortex-a55/"},{id:"radxa_distributors_it1",product_url:"https://www.okdo.com/p/okdo-rock-3-model-a-2gb-single-board-computer-rockchip-rk3568-arm-cortex-a55/"},{id:"radxa_distributors_de1",product_url:"https://www.okdo.com/p/okdo-rock-3-model-a-2gb-single-board-computer-rockchip-rk3568-arm-cortex-a55/"},{id:"radxa_distributors_fr1",product_url:"https://www.okdo.com/p/okdo-rock-3-model-a-2gb-single-board-computer-rockchip-rk3568-arm-cortex-a55/"},{id:"radxa_distributors_global1",product_url:"https://shop.allnetchina.cn/collections/frontpage/products/rock-3a"},{id:"radxa_distributors_cn1",product_url:"https://item.taobao.com/item.htm?spm=a1z10.1-c-s.w4004-24821197631.22.70b42379KGJuzY&id=658247277515"},{id:"radxa_distributors_global5",product_url:"https://shop.sb-components.co.uk/collections/rock/products/rock-3-model-a-2gb"},{id:"radxa_distributors_kr1",product_url:"https://www.muwonkorea.com/sale/detail/M843895000000"},{id:"radxa_distributors_kr2",product_url:"https://smartstore.naver.com/keytronic/products/8598934407"},{id:"radxa_distributors_global4",product_url:"https://www.okdo.com/p/okdo-rock-3-model-a-2gb-single-board-computer-rockchip-rk3568-arm-cortex-a55/"}],metadata:{title:"Radxa ROCK 3A",description:"ROCK 3A is equipped with Rockchip RK3568 processor, provides a variety of memory options, supports 4K display and provides rich open source data support.",keywords:"ROCK 3A, RK3568, 4K"}}},c=void 0,d={unversionedId:"products/rock3/rs117",id:"products/rock3/rs117",title:"rs117",description:"",source:"@site/docs/products/rock3/rs117.md",sourceDirName:"products/rock3",slug:"/products/rock3/rs117",permalink:"/docs/products/rock3/rs117",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Radxa ROCK 3 Model A",sidebar_position:1,sidebar_custom_props:{string_url:"rock3a",banner_flag:!1,product_name:"ROCK 3A",product_full_name:"Radxa ROCK 3A",product_code:"rs117",product_line:"product",product_feature_zh:"\u4e00\u53f0\u5177\u6709\u4e30\u5bcc\u63a5\u53e3\u7684\u4fe1\u7528\u5361\u5927\u5c0f\u7684SBC",product_feature_en:"A Credit Card Sized SBC with Rich Interfaces",sub_feature_zh:["\u4e00\u4e2a\u56db\u6838 Arm Cortex A55","\u652f\u63014K\u89c6\u9891\u89e3\u7801\u3001MIPI DSI\u3001HDMI\u663e\u793a\u7b49\u591a\u79cd\u529f\u80fd","\u591a\u79cd\u5185\u5b58\u9009\u62e9"],sub_feature_en:["A Quad-Core Arm Cortex A55","Support 4K video decoding, MIPI DSI, HDMI display and many other functions","Various memory options"],product_introduction_zh:"ROCK3A \u662f\u4e00\u6b3e\u7d27\u51d1\u800c\u7ecf\u6d4e\u7684\u5355\u677f\u8ba1\u7b97\u673a,\u5177\u6709\u9ad8\u6027\u80fd\u548c\u4f4e\u529f\u8017\u3002\u5b83\u662f\u7269\u8054\u7f51\u3001\u4eba\u5de5\u667a\u80fd\u548c\u667a\u80fd\u5bb6\u5c45\u9886\u57df\u4e13\u4e1a\u4eba\u58eb\u7684\u7406\u60f3\u9009\u62e9,\u63d0\u4f9b\u51fa\u8272\u7684\u6027\u80fd\u548c\u53ef\u6269\u5c55\u6027\u3002",product_introduction_en:"ROCK3A is a compact and cost-effective single board computer with high performance and low power consumption. It's ideal for professionals in IoT, AI, and smart home, providing excellent performance and scalability.",thumbnail_picture:"/rock3/rock_3a/thumb_rock3a.webp",banner_picture:"/rock3/rock_3a/banner_rock3a.webp",spec_pictures:["/rock3/rock_3a/spec_rock3a_01.webp","/rock3/rock_3a/spec_rock3a_02.webp","/rock3/rock_3a/spec_rock3a_03.webp"],marked_picture:["/rock3/rock_3a/mark_rock3a.webp"],parameter:{SoC:["Rockchip RK3568"],CPU:["Quad\u2011core Arm\xae Cortex\u2122\u2011A55 (Armv8) 64\u2011bit @ 2.0GHz"],GPU:["Arm\xae Mali\u2122 G52 GPU","- OpenGL\xae ES 1.1 / 2.0 / 3.2","- OpenCL\u2122 2.0","- Vulkan\xae 1.1"],NPU:["1 TOPs @ INT8 / INT16 / FP16 / BFP16 MAC hybrid operation","Support deep-learning frameworks: TensorFlow, TF-lite, Pytorch, Caffe, ONNX, MXNet, Keras, Darknet"],Multimedia:["H.265 / H.264 / VP9 video decoder up to 4K@60fps","H.264 / H.265 video encodecoder up to 1080@60fps"],RAM:["2 / 4 / 8GB 32bits LPDDR4"],Storage:["1x eMMC connector","1x M.2 M Key (2\u2011lane PCIe 3.0) supporting NVMe SSD","1x Micro SD(TF) card slot"],Display:["1x Standard HDMI 2.0 supporting displays up to 4Kp60 resolution","1x 2\u2011lane MIPI DSI supporting displays up to 2Kp60 resolution"],Camera:["1x 2-lane MIPI CSI for camera"],Ethernet:["1x Gigabit Ethernet port supports PoE with PoE HAT"],USB:["1x USB3.0 HOST port","1x USB3.0  OTG/HOST port","2x USB2.0 HOST ports"],Audio:["1x 4\u2011ring 3.5mm Headphone Jack"],Connectivity:["40x color GPIO","- 5 x UART","- 1 x SPI bus","- 2 x I2C bus","- 1 x CAN","- 6 x PWM","- 1 x ADC","- 6 x GPIO","- 2 x 5V DC power in","- 1 x 3.3V power pin"],Software:["Debian/Ubuntu Linux support","Android 11 support"],"Power Requirements":["Supports various power supply technologies including smart power adapter as well as fixed voltage:","- USB Type\u2011C\xae PD V2.0 supporting 9V/2A, 12V/2A, 15V/2A and 20V/2A.","- Qualcomm\xae Quick Charge\u2122 2.0 QC3.0/2.0 adapter 9V/2A and 12V/1.5A.","- Power adapter with fixed voltage in 6V to 24V range on the USB Type\u2011C\xae port","- 5V Power applied to the GPIO PIN 2 & 4"],"Operating Conditions":["Recommended operating temperature: 0 ~ 50\xb0C","Radxa ROCK 3A has a temperature limit of 80\xb0C, beyond which it throttles clock speeds for reliability","For continuous high-performance use, external cooling methods like heat sinks or fans can maintain maximum clock speed below the 80\xb0C limit"],Dimension:["85 mm x 56 mm"],"Compliance Certification":["FCC / CE"]},product_docs:[{title:"Getting Started",info:"Getting Started with your ROCK 3A",url:"https://docs.radxa.com/en/rock3/rock3a/getting-started"},{title:"Radxa OS",info:"Download the offcial operating system from Radxa",url:"https://docs.radxa.com/en/rock3/images"},{title:"Configuration",info:"Configuring your ROCK 3A setting",url:"https://docs.radxa.com/en/radxa-os"}],product_downloads:{"Official Images":{downloads:[{title:"Debian OS",info:"Download the official OS for ROCK 3A",logo:"/support/debian-logo.webp",url:"https://github.com/radxa-build/rock-3a/releases",more_introduction:""},{title:"Ubuntu Server",info:"Download Ubuntu Server for ROCK 3A",logo:"/support/ubuntu-logo.webp",url:"https://github.com/radxa-build/rock-3a/releases",more_introduction:""},{title:"Android",info:"Download Android for ROCK 3A",logo:"/support/android-logo.webp",url:"https://dl.radxa.com/rock3/images/android/rock3a-android11-20220408_1204-gpt.img.xz",more_introduction:""}]},"Product Information":{downloads:[{title:"Product Brief",info:"Download Radxa ROCK 3A Product Brief",logo:"/support/pdf-logo.webp",url:"https://dl.radxa.com/rock3/docs/hw/3a/radxa_rock3a_product_brief_Revision_1.5.pdf",more_introduction:""},{title:"Schematic",info:"Download Radxa ROCK 3A Schematic V1.3",logo:"/support/pdf-logo.webp",url:"https://dl.radxa.com/rock3/docs/hw/3a/ROCK-3A-V1.3-SCH.pdf"},{title:"Components Placement Map",info:"Download Radxa ROCK 3A SMD V1.3",logo:"/support/pdf-logo.webp",url:"https://dl.radxa.com/rock3/docs/hw/3a/ROCK-3A-V1.3-SMD.pdf"}]}},buy:[{name:"OKdo",logo:"/okdo_logo.svg",url:"https://www.okdo.com/p/okdo-rock-3-model-c-1gb-single-board-computer-rockchip-rk3566-arm-cortex-a55/"},{name:"ALLnet",logo:"/allnet_logo.svg",url:"https://shop.allnetchina.cn/collections/frontpage/products/rock3-model-c"},{name:"3LOGIC",logo:"/3logic_logo.svg",url:"https://3logic.ru/"}],related_products:["ap002","ra004","ra015","va003","va001"],distributors:[{id:"radxa_distributors_us1",product_url:"https://www.okdo.com/p/okdo-rock-3-model-a-2gb-single-board-computer-rockchip-rk3568-arm-cortex-a55/"},{id:"radxa_distributors_uk1",product_url:"https://www.okdo.com/p/okdo-rock-3-model-a-2gb-single-board-computer-rockchip-rk3568-arm-cortex-a55/"},{id:"radxa_distributors_nl1",product_url:"https://www.okdo.com/p/okdo-rock-3-model-a-2gb-single-board-computer-rockchip-rk3568-arm-cortex-a55/"},{id:"radxa_distributors_it1",product_url:"https://www.okdo.com/p/okdo-rock-3-model-a-2gb-single-board-computer-rockchip-rk3568-arm-cortex-a55/"},{id:"radxa_distributors_de1",product_url:"https://www.okdo.com/p/okdo-rock-3-model-a-2gb-single-board-computer-rockchip-rk3568-arm-cortex-a55/"},{id:"radxa_distributors_fr1",product_url:"https://www.okdo.com/p/okdo-rock-3-model-a-2gb-single-board-computer-rockchip-rk3568-arm-cortex-a55/"},{id:"radxa_distributors_global1",product_url:"https://shop.allnetchina.cn/collections/frontpage/products/rock-3a"},{id:"radxa_distributors_cn1",product_url:"https://item.taobao.com/item.htm?spm=a1z10.1-c-s.w4004-24821197631.22.70b42379KGJuzY&id=658247277515"},{id:"radxa_distributors_global5",product_url:"https://shop.sb-components.co.uk/collections/rock/products/rock-3-model-a-2gb"},{id:"radxa_distributors_kr1",product_url:"https://www.muwonkorea.com/sale/detail/M843895000000"},{id:"radxa_distributors_kr2",product_url:"https://smartstore.naver.com/keytronic/products/8598934407"},{id:"radxa_distributors_global4",product_url:"https://www.okdo.com/p/okdo-rock-3-model-a-2gb-single-board-computer-rockchip-rk3568-arm-cortex-a55/"}],metadata:{title:"Radxa ROCK 3A",description:"ROCK 3A is equipped with Rockchip RK3568 processor, provides a variety of memory options, supports 4K display and provides rich open source data support.",keywords:"ROCK 3A, RK3568, 4K"}}}},n={},p=[],s={toc:p},u="wrapper";function l(o){let{components:r,...t}=o;return(0,a.kt)(u,(0,e.Z)({},s,t,{components:r,mdxType:"MDXLayout"}))}l.isMDXComponent=!0}}]);