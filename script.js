const  Burger = document.querySelector(".burger")
const  Burgr = document.querySelector("#burger")
const  Hambur = document.querySelector(".hambur")
const   Span1  = document.querySelector("#span1")
const   Span2  = document.querySelector("#span2")
const   Span3  = document.querySelector("#span3")
const   Logo  = document.querySelector(".logo")



Burger.addEventListener("click", () => {
  if(Burgr.checked){
    Hambur.style.top="0px"
    Burger.style.zIndex ="1"
    Span1.style.background ="black"
    Span2.style.background ="black"
    Span3.style.background ="black"
    Logo.style.opacity ="0"
    Hambur.style.opacity ="1"
  }
  else{
    Hambur.style.top="-400px"
    Span1.style.background ="white"
    Span2.style.background ="white"
    Span3.style.background ="white"
    Logo.style.opacity ="1"
    Hambur.style.opacity ="0"

  }
})




// modal
// Get the modal
var modal = document.getElementById("myModal");


var Body = document.querySelector("body")
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
// Body.style.overflowY = "hidden";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  Body.style.overflowY = "scroll";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



// sliderrrrr


const slider = document.querySelector(".phases")

let isDown = false

let startX;

let scrollLeft;


slider.addEventListener('mousedown' ,(e) => {
isDown = true
slider.classList.add('active')
startX  = e.pageX - slider.offsetLeft;
scrollLeft = slider.scrollLeft
})
slider.addEventListener('mouseLeave', () => {
  isDown = false
  slider.classList.remove('active')


})
slider.addEventListener('mouseup' ,() => {
  isDown = false  
  slider.classList.remove('active')


})
slider.addEventListener('mousemove' ,(e) => {
if(!isDown)return
e.preventDefault()
const x = e.pageX - slider.offsetLeft
console.log(x,startX)
const walk = x - startX
slider.scrollLeft = scrollLeft- walk
})


let Starter =document.getElementById("starter")
let Lunch =document.getElementById("lunch")
let Dinner =document.getElementById("dinner")
let Drinks =document.getElementById("drinks")
let Border =document.getElementById("border")
let List1 = document.querySelectorAll('.list1')
let List2 = document.querySelectorAll('.list2')

let Remove = document.getElementById("remove")
let Removes = document.getElementById("removes")

let Button = [Starter,Lunch,Dinner,Drinks,Border]

let Titles =["title1","title2","title3","title4","title5","title6","title7","title8"]
let Des=["des1","des2","des3","des4","des5","des6","des7","des8"]
let Prize=["prize1","prize2","prize3","prize4","prize5","prize6","prize7","prize8"]

Starter.addEventListener("click", () => {
for (let i=0; i<Button.length;i++){
  Button[i].classList.remove("active")
}
Starter.classList.add("active")
Removes.style.display ="block"
Removes.style.display ="flex"
Remove.style.display ="block"
Remove.style.display ="flex"
 getJson("starter.json")
})

Lunch.addEventListener("click", () => {
for (let i=0; i<Button.length;i++){
  Button[i].classList.remove("active")
}

Lunch.classList.add("active")
Removes.style.display ="block"
Removes.style.display ="flex"
Remove.style.display ="block"
Remove.style.display ="flex"
getJson("lunch.json")
})

Dinner.addEventListener("click", () => {
for (let i=0; i<Button.length;i++){
  Button[i].classList.remove("active")
}
Dinner.classList.add("active")
Removes.style.display ="none"
Remove.style.display ="none"

getJson("dinner.json")
})

Drinks.addEventListener("click", () => {
for (let i=0; i<Button.length;i++){
  Button[i].classList.remove("active")
}
  Drinks.classList.add("active")
  Removes.style.display ="none"
Remove.style.display ="none"
getJson("drinks.json")
})

Border.addEventListener("click", () => {
for (let i=0; i<Button.length;i++){
  Button[i].classList.remove("active")
}
  Border.classList.add("active")
  Removes.style.display ="none"
Remove.style.display ="none"
getJson("desert.json")
})


async function getJson(fname){
  let response =await fetch(fname)
  let data = await response.json()
  for (let i = 0; i < data.length; i++){
  document.getElementById(Titles[i]).innerHTML=data[i].name
  document.getElementById(Des[i]).innerHTML=data[i].description
  document.getElementById(Prize[i]).innerHTML=data[i].prize
  } 

}

// nav active section

let Home = document.getElementById("H")
let About = document.getElementById("A")
let Menu = document.getElementById("M")
let Review = document.getElementById("R")
let Contact= document.getElementById("C")


let Buttonn =[Home,About,Menu,Review,Contact]


Home.addEventListener("click", () => {
  for (let i=0; i<Button.length;i++){
    Buttonn[i].classList.remove("actived")
  }
  
  Home.classList.add("actived")
  })


About.addEventListener("click  ", () => {
  for (let i=0; i<Button.length;i++){
    Buttonn[i].classList.remove("actived")
  }
  
  About.classList.add("actived")
  })


  
  let sections = document.querySelectorAll("section")
  let navLink = document.querySelectorAll("nav ul li a") 

  window.onscroll =() =>{
    sections.forEach(sec=>{
      let top = window.scrollY;
      let offset = sec.offsetTop - 100;
      let height =sec.offsetHeight;
      let id = sec.getAttribute('id')

if(top >= offset && top < offset + height){
  navLink.forEach(links =>{ 
    links.classList.remove('actived');
    document.querySelector('nav ul li a[href*='+ id + ']').classList.add("actived")
  })
  sec.classList.add('show-animate')
}else{
  sec.classList.remove('show-animate')
}

    })
    
  }









// nav scrolled

let Actived = document.querySelector(".actived")

document.addEventListener('scroll', () => {
  const Nav = document.getElementsByTagName('nav')[0]
  if(window.scrollY > 0){
    Nav.classList.add('scrolled')
    

    Nav.style.transition = "all 1s ease-in-out";
document.getElementById("log").src="images/logo-black.png"
  }else{
    Nav.classList.remove('scrolled')
    Nav.style.transition = "all 1s ease-in-out";
    document.getElementById("log").src="images/logo1.png"

  }

})

function scrollToTop(){
  window.scroll(0, 0)
}


