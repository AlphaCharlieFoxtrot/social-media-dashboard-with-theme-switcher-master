//const body = document.querySelector('body');
//const toggle = document.getElementById('toggle');
//toggle.onclick = function() {
//    toggle.classList.toggle('active')
//    body.classList.toggle('active')
//}


const box = document.getElementsByClassName("box");
const body = document.getElementsByTagName('body')[0];
const main = document.getElementsByTagName('main')[0];
const toggle = document.getElementById('toggle');

toggle.onclick = function() {
  for (let i = 0; i < box.length; i++) {
    box[i].classList.toggle('active');
  }
  toggle.classList.toggle('active');
  body.classList.toggle('active');
  main.classList.toggle('active');
}
