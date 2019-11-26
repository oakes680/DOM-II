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


//  select
const select = document.querySelector(".intro h2")
select.addEventListener('select', function(e) {
  window.alert('you selected som text');
});
//  dblclick

const pic = document.querySelector(".intro h2")

pic.addEventListener('dblclick', function(e) {
  pic.classList.toggle('large');
})

// pic.addEventListener('dblclick', (e) => {
//   pic.classList.toggle('large');
// })


// keydown

const island = document.querySelector(".destination .hi")

document.addEventListener('keydown', logKey)

function logKey() {
  island.classList.toggle('large')
}
