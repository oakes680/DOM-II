// Your code goes here
//  mouseover
    let mouseOver = document.querySelector(".logo-heading");

    mouseOver.addEventListener('mouseover', () => {
      mouseOver.style.color = "red";
    })

    mouseOver.addEventListener('mouseleave', () => {
      mouseOver.style.color = "black";
    })

    //****************************************** */
 



//  wheel
let wheel  = document.querySelector(".text-content h2");
wheel.addEventListener('wheel', () => {
  wheel.style.fontSize= "80px";
})


//  drag / drop

function dragStart(event) {
  event.dataTransfer.setData("Text", event.target.id);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));

}

//  load

window.addEventListener('load', (event) => {
  alert('page is fully loaded');
});

//  focus
const focus = document.querySelector('input[type="password"]')
focus.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';
})

//  resize
window.addEventListener('resize', (event) => {
  alert('Why are you messing with the window size?')
});
//  scroll

const scroll1 = document.querySelector('.pic7')
window.addEventListener('scroll', (e) => {
  scroll1.style.transform = "scale(1.2)";
  scroll1.style.transition = "transform 0.5s";
})

//  select
const select = document.querySelector(".intro h2")
select.addEventListener('select', function(e) {
  window.alert('you selected som text');
});
//  dblclick

const pic = document.querySelector(".intro h2")

pic.addEventListener('dblclick', function(e) {
  //pic.classList.toggle('large');
  gsap.to(pic, {
     duration: 1.5,
     rotateX: 360,
     ease: "slow(0.7, 0.7, false)"
     //event.stopPropagation();
    })
    event.stopPropagation();
})

// pic.addEventListener('dblclick', (e) => {
//   pic.classList.toggle('large');
// })


// keydown

const island = document.querySelector(".destination .hi")
document.addEventListener('keydown', ()  => {
  island.classList.toggle('large')
})






// document.addEventListener('keydown', logKey)
// function logKey() {
//   island.classList.toggle('large')
// }



const body = document.querySelector('body');

// body.addEventListener("click", () => {
//   body.style.backgroundColor="papayawhip";
//   console.log("me last!")
// })

const footp = document.querySelector(".footer p");
footp.addEventListener('click', () => {
  footp.style.color= "red";
  console.log("me second!");
  event.stopPropagation();
})


const btn = document.querySelector('#button')
var dots = new TimelineMax({paused:true,repeat:10, repeatDelay:0.5})
.to("#button",0.3,{text:"loading ."})
.to("#button",0.3,{text:"loading .."})
.to("#button",0.3,{text:"loading ..."})

btn.addEventListener('click', function(){
  TweenMax.set("#button",{text:"loading", background:"red", color:"white"});
  dots.play();
});





document.addEventListener("keyup", log);
document.addEventListener("keypress", log);
document.addEventListener("keydown", log);
function log(event){
  console.log(event.type);
}