const scene=document.querySelector(".scene"),steps=[...document.querySelectorAll(".step")],progress=document.getElementById("progress"),caption=document.getElementById("caption"),play=document.getElementById("play");
const captions=["Уплотнение устанавливается на соединительную часть бетонного кольца","Следующее бетонное кольцо плавно опускается сверху","Уплотнение сжимается между кольцами и создаёт герметичное соединение"];
let current=0,playing=true,timer;
function setStep(n){current=n;scene.classList.remove("step1","step2");if(n===1)scene.classList.add("step1");if(n===2)scene.classList.add("step2");steps.forEach((b,i)=>b.classList.toggle("active",i===n));progress.style.width=((n+1)/3*100)+"%";caption.textContent=captions[n]}
function start(){clearInterval(timer);timer=setInterval(()=>setStep((current+1)%3),2600)}
steps.forEach(b=>b.addEventListener("click",()=>{setStep(+b.dataset.step);if(playing)start()}));
play.addEventListener("click",()=>{playing=!playing;play.textContent=playing?"Ⅱ":"▶";if(playing)start();else clearInterval(timer)});
setStep(0);start();