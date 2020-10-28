// Your code goes here




//(1&2)mouseover & mouseout green
const navbar = document.querySelector('.nav');

navbar.addEventListener('mouseover', (event) => {
    event.target.style.color = 'green';
})

navbar.addEventListener('mouseout', (event) => {
    event.target.style.color = 'black';
})

// (3)double click message

const bigimg = document.querySelectorAll('img');


bigimg.forEach(img => {
    img.addEventListener('dblclick', () => {
        alert('You clicked on this photo');
    })
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



//(7) Select Event

const input = document.querySelector('.footer p');

input.addEventListener('select',(event)=>{
    console.log(`You selected ${input.textContent}`);
})