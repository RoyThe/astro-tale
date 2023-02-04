import{N as p}from"./NewsCard.ef19cb7d.js";import{b as u}from"./getCardContent.8436701e.js";import{_,r as x,o as l,c as r,b as t,n as f,d as i,F as g,f as h,g as d}from"./index.dd95902f.js";const w="https://astroLT.b-cdn.net/lt-slider-misc.jpg",b="https://astroLT.b-cdn.net/lt_arrow.png",v=3,c=u();if(c.length<1)throw new Error("not enough updates");const y={data(){return{bgSliderUrl:w,bgUnderLineUrl:b,cardLimit:v,updates:c}},components:{NewsCard:p}},U={class:"flex flex-col justify-center"},L=t("h1",{class:"text-3xl md:text-5xl text-center font-extrabold text-black"},"Updates",-1),N={class:"w-32 md:w-44 mt-1"},k=["src","alt"],T={class:"mt-5 w-full grid place-items-center justify-center overflow-x-hidden gap-4 grid-cols-[minmax(0,_100px)_minmax(auto,_80rem)_minmax(0,_100px)]"},C=t("div",{class:"col-start-2 row-start-1 justify-self-start w-full"},[t("h1",{class:"text-2xl md:text-4xl font-extrabold"},"Latest Release"),t("div",{class:"divider"})],-1),S=t("div",{class:"text-2xl md:text-4xl font-extrabold justify-self-start col-start-2 row-start-3 w-full"},[t("h1",null,"Past Releases"),t("div",{class:"divider"})],-1),j={class:"row-start-4 col-start-2 flex flex-wrap place-content-center gap-y-4"},I={class:"max-w-[250px]"},B={key:0},V=t("div",{class:"row-start-6 col-start-2 h-16"},null,-1);function E(m,o,F,J,e,O){const n=x("NewsCard");return l(),r("div",null,[t("div",{class:"hero h-24 md:h-32 bg-cover relative",style:f(`background-image: url(${e.bgSliderUrl});`)},[t("div",U,[L,t("figure",N,[t("img",{src:e.bgUnderLineUrl,alt:m.altText},null,8,k)])])],4),t("div",T,[C,i(n,{class:"row-start-2 col-start-2 pb-8",altText:"test",newsType:"update",imgUrl:e.updates[0].img,modalId:JSON.stringify(e.updates[0]),title:e.updates[0].title,date:e.updates[0].date,content:e.updates[0].body},null,8,["imgUrl","modalId","title","date","content"]),S,t("div",j,[(l(!0),r(g,null,h(e.updates.slice(1).entries(),([a,s])=>(l(),r("div",I,[a<e.cardLimit?(l(),r("div",B,[i(n,{altText:"test",newsType:"update",imgUrl:s.img,modalId:JSON.stringify(s),title:s.title,date:s.date,content:s.body},null,8,["imgUrl","modalId","title","date","content"])])):d("",!0)]))),256))]),e.cardLimit<e.updates.length-1?(l(),r("button",{key:0,onClick:o[0]||(o[0]=a=>e.cardLimit+=3),class:"btn btn-outline row-start-5 col-start-2 mt-4"}," Show More ")):d("",!0),V])])}const P=_(y,[["render",E]]);export{P as default};
