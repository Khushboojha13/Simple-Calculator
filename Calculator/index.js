//let result=document.querySelector(".resultbar");
let btn=document.querySelectorAll("button");
let arr= Array.from(btn);

let string="";
arr.forEach(e=>{
    let result=document.querySelector(".resultbar");
    e.addEventListener("click",e1=>{

    if(e1.target.innerHTML=="AC"){
        string="";
        result.innerHTML=string;
    }
    else if(e1.target.innerHTML=="="){
        string= eval(string);
        result.innerHTML=string;
    }
   else{
    string+=e1.target.innerHTML;
    console.log(string);
    result.innerHTML=string;

   }
})

});



