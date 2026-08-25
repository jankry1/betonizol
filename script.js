const modal=document.getElementById("modal");
const tag=document.getElementById("modalTag");
const title=document.getElementById("modalTitle");
const text=document.getElementById("modalText");
const caption=document.getElementById("stageCaption");
const ksAnim=document.querySelector(".ks-animation");
const fbsAnim=document.querySelector(".fbs-animation");
const stageButtons=[...document.querySelectorAll(".modal-steps button")];
let product="ks",stage=0,timer;

const content={
 ks:{
   tag:"КС",
   title:"Установка круглого уплотнения КС",
   text:"Уплотнение располагается по периметру соединения стеновых колец.",
   captions:[
     "1. Круглое уплотнение устанавливается на соединительную часть нижнего кольца.",
     "2. Следующее кольцо опускается сверху и прижимает уплотнение.",
     "3. Уплотнение сжимается и закрывает зазор между бетонными элементами."
   ]
 },
 fbs:{
   tag:"ФБС",
   title:"Установка прямоугольного уплотнения ФБС",
   text:"Полоса пористой резины располагается между сопрягаемыми бетонными поверхностями.",
   captions:[
     "1. Уплотнение размещается по линии стыка бетонных блоков.",
     "2. Верхний бетонный элемент устанавливается на уплотнение.",
     "3. Резина сжимается между поверхностями и создаёт герметичный стык."
   ]
 }
};

function setStage(n){
 stage=n;
 modal.classList.remove("stage1","stage2");
 if(n===1)modal.classList.add("stage1");
 if(n===2)modal.classList.add("stage2");
 stageButtons.forEach((b,i)=>b.classList.toggle("active",i===n));
 caption.textContent=content[product].captions[n];
}
function autoplay(){clearInterval(timer);timer=setInterval(()=>setStage((stage+1)%3),2300)}
function openModal(type){
 product=type;
 const c=content[type];
 tag.textContent=c.tag;title.textContent=c.title;text.textContent=c.text;
 ksAnim.classList.toggle("active",type==="ks");
 fbsAnim.classList.toggle("active",type==="fbs");
 modal.classList.add("open");modal.setAttribute("aria-hidden","false");
 document.body.style.overflow="hidden";
 setStage(0);autoplay();
}
function closeModal(){
 modal.classList.remove("open");modal.setAttribute("aria-hidden","true");
 document.body.style.overflow="";clearInterval(timer);
}
document.querySelectorAll(".product-card").forEach(card=>card.addEventListener("click",()=>openModal(card.dataset.product)));
document.querySelectorAll("[data-close]").forEach(el=>el.addEventListener("click",closeModal));
stageButtons.forEach((b,i)=>b.addEventListener("click",()=>{setStage(i);autoplay()}));
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});