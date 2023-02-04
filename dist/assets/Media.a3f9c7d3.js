import{_ as d,o as n,c as l,b as e,t as o,F as u,r as c,d as r,n as f}from"./index.dd95902f.js";import{C as b}from"./Carousel.d919f7f8.js";import{a as p}from"./getCardContent.8436701e.js";const y={props:{modalId:String,imgUrl:String,altText:String,title:String,date:String,position:String,content:String}},v=["id"],w=["for"],S={class:"modal-box relative w-11/12 max-w-4xl"},U={class:"grid grid-cols-1 place-items-center"},I={class:"row-start-1 flex flex-wrap w-full items-center mb-4"},T={key:0,class:"badge badge-primary uppercase"},C={key:1,class:"badge badge-secondary uppercase"},k={key:2,class:"badge badge-accent uppercase"},M={class:"text-2xl font-bold grow text-center"},j={class:"float-right grow-0 mr-4"},L=["for"],N={class:"my-1 row-start-2 w-full"},B=["src","alt"],F={class:"prose row-start-3 justify-self-start p-4"},J=["innerHTML"];function O(a,m,t,_,s,g){return n(),l(u,null,[e("input",{type:"checkbox",id:t.modalId,class:"modal-toggle"},null,8,v),e("label",{for:t.modalId,class:"modal cursor-pointer"},[e("label",S,[e("div",U,[e("div",I,[t.position==="patch"?(n(),l("span",T,o(t.position),1)):t.position==="event"?(n(),l("span",C,o(t.position),1)):(n(),l("span",k,o(t.position),1)),e("h3",M,o(t.title),1),e("p",j,o(t.date),1),e("label",{for:t.modalId,class:"btn btn-sm btn-circle btn-ghost absolute right-2 top-2"},"\u2715",8,L)]),e("figure",N,[e("img",{class:"w-full h-auto",src:t.imgUrl,alt:t.altText},null,8,B)]),e("article",F,[e("div",{innerHTML:t.content},null,8,J)])])])],8,w)],64)}const E=d(y,[["render",O]]),H={props:{modalId:String,imgUrl:String,altText:String,title:String,date:String,position:String,content:String},components:{Modal:E}},V=["for"],z={class:"card card-compact max-w-fit min-w-[100px] mx-2 bg-base-100 shadow-xl hover:cursor-pointer"},D={class:"my-1"},q=["src","alt"],A={class:"card-body items-center"},G={key:0,class:"badge badge-primary uppercase m-0 relative -top-8"},K={key:1,class:"badge badge-secondary uppercase m-0 relative -top-8"},P={key:2,class:"badge badge-accent uppercase m-0 relative -top-8"},Q={class:"card-title -mt-6 w-fit text-sm md:text-lg text-center"};function R(a,m,t,_,s,g){const i=c("Modal");return n(),l("label",{for:t.modalId},[e("div",z,[e("figure",D,[e("img",{src:t.imgUrl,alt:t.altText},null,8,q)]),e("div",A,[t.position==="patch"?(n(),l("span",G,o(t.position),1)):t.position==="event"?(n(),l("span",K,o(t.position),1)):(n(),l("span",P,o(t.position),1)),e("h2",Q,o(t.title),1),e("p",null,o(t.date),1),r(i,{imgUrl:t.imgUrl,altText:t.altText,modalId:t.modalId,position:t.position,title:t.title,date:t.date,content:t.content},null,8,["imgUrl","altText","modalId","position","title","date","content"])])])],8,V)}const W=d(H,[["render",R]]),X="https://astroLT.b-cdn.net/lt-slider-misc.jpg",Y="https://astroLT.b-cdn.net/lt_arrow.png",h=p();if(h.length!==3)throw new Error("not exactly 3 creators");const Z={data(){return{bgSliderUrl:X,bgUnderLineUrl:Y,creators:h}},components:{CreatorCard:W,Carousel:b}},$={class:"flex flex-col justify-center"},tt=e("h1",{class:"text-3xl md:text-5xl text-center font-extrabold text-black"},"Media",-1),et={class:"w-32 md:w-44 mt-1"},st=["src","alt"],ot={class:"mt-5 w-full grid place-items-center justify-center overflow-x-hidden gap-4 grid-cols-[minmax(0,_100px)_minmax(auto,_80rem)_minmax(0,_100px)]"},nt=e("div",{class:"text-2xl md:text-4xl font-extrabold justify-self-start self-center col-start-2 row-start-1 w-full"},[e("h1",null,"Featured Creators"),e("div",{class:"divider"})],-1),lt={class:"row-start-2 col-start-2 pb-8 flex place-content-center"},it=e("div",{class:"text-2xl md:text-4xl font-extrabold justify-self-start self-center col-start-2 row-start-3 w-full"},[e("h1",null,"Media"),e("div",{class:"divider"})],-1),rt={class:"col-start-2 row-start-4 mb-16"};function at(a,m,t,_,s,g){const i=c("CreatorCard"),x=c("Carousel");return n(),l("div",null,[e("div",{class:"hero h-24 md:h-32 bg-cover relative",style:f(`background-image: url(${s.bgSliderUrl});`)},[e("div",$,[tt,e("figure",et,[e("img",{src:s.bgUnderLineUrl,alt:a.altText},null,8,st)])])],4),e("div",ot,[nt,e("div",lt,[r(i,{altText:"test",position:"1",imgUrl:s.creators[0].img,modalId:JSON.stringify(s.creators[0]),title:s.creators[0].name,content:s.creators[0].body},null,8,["imgUrl","modalId","title","content"]),r(i,{altText:"test",position:"2",imgUrl:s.creators[1].img,modalId:JSON.stringify(s.creators[1]),title:s.creators[1].name,content:s.creators[1].body},null,8,["imgUrl","modalId","title","content"]),r(i,{class:"hidden sm:block",altText:"test",position:"3",imgUrl:s.creators[2].img,modalId:JSON.stringify(s.creators[2]),title:s.creators[2].name,content:s.creators[2].body},null,8,["imgUrl","modalId","title","content"])]),it,e("div",rt,[r(x)])])])}const _t=d(Z,[["render",at]]);export{_t as default};
