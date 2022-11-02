const hourElement=document.getElementById("hour");
const minuteElement=document.getElementById("minutes");
const secondElement=document.getElementById("seconds");
const periodElement=document.getElementById("period");

function time(){
    let date = new Date();
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();   
    let period="AM" 
    if(h>=12){
        h = h-12
        period= "PM"
    }
    h=(h<10) ? "0" + h : h;
    m=(m<10) ? "0" + m : m;
    s=(s<10) ? "0" + s : s;


hourElement.innerText=h;
minuteElement.innerText=m;
secondElement.innerText=s;
periodElement.innerText=period;

setTimeout(time,1000);
}
time()