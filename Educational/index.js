let signUp=document.querySelector(".sign-up")
let logIn=document.querySelector(".log-in")
let Login=document.querySelector(".login")
let List=document.getElementById("list")
let Circle=document.getElementById("circle")
List.addEventListener("click",()=>{
    console.log("hello")
    logIn.classList.toggle('active');
    Login.classList.toggle('active');
    

})
Circle.addEventListener("click",()=>{
    Login.classList.toggle('active');
    signUp.classList.toggle('active')
    
})
window.onscroll =()=>{
    logIn.classList.remove('active');
    signUp.classList.remove('active');
    Login.classList.remove('active')
}
windows