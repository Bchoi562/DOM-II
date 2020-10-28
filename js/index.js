// Your code goes here




//(1&2)mouseover & mouseout green & stopPropagation
const navbar = document.querySelector('.nav');
const navbarBlog = document.querySelector('.nav-link:nth-of-type(3)');

navbar.addEventListener('mouseover', (event) => {
    event.target.style.color = 'green';
})

navbar.addEventListener('mouseout', (event) => {
    event.target.style.color = 'black';
})

navbarBlog.addEventListener('mouseover',(event)=>{
    event.target.style.color = 'red';
    event.stopPropagation();
})

navbarBlog.addEventListener('mouseout',(event)=>{
    event.target.style.color = 'black';
    event.stopPropagation();
})


// (3)double click message

const bigimg = document.querySelectorAll('img');
const medimg = document.querySelector('.intro img');

bigimg.forEach(img => {
    img.addEventListener('dblclick', (event) => {
        alert('You clicked on this photo');
        
    })
})

medimg.addEventListener('dblclick', (event) =>{
    alert('You clicked on th is photo');
    event.target.style.border = '1px solid black';
    event.stopPropagation();
})


//(4) keydown event 

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        alert("This is an alert");
    }
})


//(5) Click event
const linkclick = document.querySelectorAll('.btn');
let clickCount = 0;

linkclick.forEach(link => {
    link.addEventListener('click', (event) => {
        clickCount = clickCount + 1;
        link.innerHTML = `Click count : ${clickCount}`;
        console.log(event.detail);
        console.log(clickCount);
    })
})

linkclick.forEach(link => {
    link.addEventListener('mouseover', (event) => {
        link.innerHTML = `Click count : ${clickCount}`;
    })
})

linkclick.forEach(link => {
    link.addEventListener('mouseout', (event) => {
        link.textContent = "Sign Me Up!";
    })
})


//(6) Load event

window.addEventListener('load', (event)=>{
    alert('page is fully loaded');
})



//(7) Copy Event

const paragraphs = document.querySelectorAll('p')
paragraphs.forEach(item => {
    item.addEventListener('copy', (event) => {
    alert('Please do not try to copy me!')
})
})

//(8) Drag Event

const text = document.querySelectorAll('img');

text.forEach(item => {
    item.addEventListener('drag', (event)=>{
        console.log('Please do not drag me');
    })
})

//(9 & 10) Mouse enter and Mouse leave event

const mouseEnt = document.querySelectorAll('p');

mouseEnt.forEach(item =>{
    item.addEventListener('mouseenter',(event)=>{
        event.target.style.border = '1px solid black';
    })
})

mouseEnt.forEach(item=>{
    item.addEventListener('mouseleave',(event)=>{
        event.target.style.border = '0px solid black';
    })
})


//preventdefault
const navLinks = document.querySelectorAll('.nav');

navLinks.forEach((link)=> {
    link.addEventListener("click", function (event) {
      console.log(
        `disrupting the default behavior of "${event.target.textContent}" link`
      );
      event.preventDefault();
    });
  });

