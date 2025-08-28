
let btn=document.querySelector("#generateBtn")
btn.addEventListener("click",function(){
    let numm
    let h=document.getElementsByName("skills")
    h.forEach((ele)=>{
        if(ele.checked){
            numm=Number(ele.value)
        }
    })
    s=""
    let num="1234567890"
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let smbl="!@#$%^&*()"
    let rndm="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()"
    
    s=s+num[Math.floor(Math.random()*num.length)]
    s=s+chars[Math.floor(Math.random()*chars.length)]
    s=s+smbl[Math.floor(Math.random()*smbl.length)]


    while(s.length<numm){
        s=s+rndm[Math.floor(Math.random()*rndm.length)]
    }
    document.getElementById("password").value=s
})

document.querySelector("#copyBtn").addEventListener("click",()=>{
    document.getElementById("password").select()
    document.execCommand("copy")
})