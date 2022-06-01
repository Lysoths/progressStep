const round = document.querySelectorAll(".round");
const line = document.querySelector(".line");
const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");


// btnNext.addEventListener("click",() => {     
//     if(round[0].classList.length == 1) {
//         round[0].classList.add("active");                  
//     }else if(round[1].classList.length == 1) {
//         round[1].classList.add("active");
//         line.style="width:180px";         
//     }else if(round[2].classList.length == 1) {
//         round[2].classList.add("active");
//         line.style="width:340px;"                 
//     }else {
//         round[3].classList.add("active");       
//         line.style="width:460px;" 
//         btnPrev.style="background-color:#0081a7; text-decoration:none;"
//         btnNext.style="background-color:#6c757d;  text-decoration:line-through 4px; cursor:no-drop;"
//         btnNext.setAttribute("disabled","false");
//         btnPrev.removeAttribute("disabled");       
//     }    
// })
// btnPrev.addEventListener("click",() => {
//     if(round[3].classList.length == 2) {
//         round[3].classList.remove("active"); 
//         line.style="width:340px;"                  
//     }else if(round[2].classList.length == 2) {
//         round[2].classList.remove("active");
//         line.style="width:180px";         
//     }else if(round[1].classList.length == 2) {
//         round[1].classList.remove("active");
//         line.style="width:0px";                
//     }else {
//         round[0].classList.remove("active");        
//         btnNext.style="background-color:#0081a7; text-decoration:none;"
//         btnPrev.style="background-color:#6c757d;  text-decoration:line-through 4px; cursor:no-drop;"
//         btnPrev.setAttribute("disabled","false");
//         btnNext.removeAttribute("disabled");       
//     }     
// })
var order = 0;
btnNext.addEventListener("click",()=> {
    btnPrev.removeAttribute("disabled");
   console.log(round[order]);
   if(order == 0) {        
       round[order+1].classList.add("active"); 
       line.style.width="180px"; 
        order++  
        btnPrev.style="background-color:#0081a7;" 
        btnPrev.style="background-color:#0081a7;  text-decoration:none; cursor:pointer;"  
        btnNext.removeAttribute("disabled")        
   }else if (order==1){
    round[order+1].classList.add("active"); 
    line.style.width="340px"; 
     order++
   }else if (order==2){
    round[order+1].classList.add("active"); 
    line.style.width="460px"; 
     order++
     btnNext.style="background-color:#6c757d;  text-decoration:line-through 4px; cursor:no-drop;"
   }
})

btnPrev.addEventListener("click", ()=> {    
    if(order==1){
        line.style.width="0px";        
        round[order].classList.remove("active");
        btnPrev.style="background-color:#6c757d;  text-decoration:line-through 4px; cursor:no-drop;"
        btnNext.style="background-color:#0081a7;  text-decoration:none cursor:pointer;"
        order--
    }else if (order==2){
        line.style.width="180px";        
        round[order].classList.remove("active");
        order--
    }else if (order==3){
        line.style.width="340px";        
        round[order].classList.remove("active");        
        order--
    }
})