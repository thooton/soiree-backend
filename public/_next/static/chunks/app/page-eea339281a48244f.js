(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4110:function(e,t,s){Promise.resolve().then(s.bind(s,3561))},3561:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return o}});var n=s(7437);function i(e){return(0,n.jsxs)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,n.jsx)("path",{d:"M8 2v4"}),(0,n.jsx)("path",{d:"M16 2v4"}),(0,n.jsx)("rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}),(0,n.jsx)("path",{d:"M3 10h18"})]})}function r(e){return(0,n.jsxs)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,n.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,n.jsx)("polyline",{points:"12 6 12 12 16 14"})]})}async function a(){let e=await fetch("/api/events");if(!e.ok)throw Error("Failed to fetch soirees");return(await e.json()).map(e=>({title:e.Title||"",image:e.Image||"",start:new Date(1e3*e.Date),venue:e.Venue||"",link:e.Link||""}))}var l=s(2265);function o(){let[e,t]=(0,l.useState)([]);return(0,l.useEffect)(()=>{let e=!1;(async function(){if(!e){e=!0;try{let e=await a();t(e)}catch(e){console.error("Failed to fetch soirees:",e)}finally{e=!1}}})()},[]),(0,n.jsx)("div",{className:"grid gap-6 p-4 sm:p-6 md:p-8",children:(0,n.jsx)("div",{className:"grid gap-6",children:e.map((e,t)=>{let s=new Date(e.start);return(0,n.jsxs)("div",{className:"grid grid-cols-1 gap-4 items-center rounded-lg bg-muted p-4 sm:p-6 sm:grid-cols-[auto_1fr]",children:[(0,n.jsx)("div",{className:"rounded-md overflow-hidden sm:w-[200px] sm:h-[150px]",children:(0,n.jsx)("img",{src:e.image,alt:"Event Image",width:200,height:150,className:"object-cover w-full h-full",style:{aspectRatio:"200/150",objectFit:"cover"}})}),(0,n.jsxs)("div",{className:"grid gap-2",children:[(0,n.jsx)("div",{className:"flex items-center gap-2",children:(0,n.jsx)("h3",{className:"text-xl font-semibold",children:(0,n.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:"hover:underline",children:e.title})})}),(0,n.jsxs)("div",{className:"flex items-center gap-4 text-sm text-muted-foreground",children:[(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsx)(i,{className:"h-4 w-4"}),(0,n.jsx)("span",{children:s.toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric",timeZone:"America/Phoenix"})})]}),(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsx)(r,{className:"h-4 w-4"}),(0,n.jsx)("span",{children:s.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",hour12:!1,timeZone:"America/Phoenix"})})]})]}),(0,n.jsx)("div",{className:"text-sm text-muted-foreground",children:(0,n.jsxs)("span",{children:["Venue: ",e.venue]})})]})]},t)})})})}}},function(e){e.O(0,[971,23,744],function(){return e(e.s=4110)}),_N_E=e.O()}]);