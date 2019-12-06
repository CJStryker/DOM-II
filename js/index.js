// Your code goes here

// Change to red mouse over
let logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseover', (event) => {
    event.target.style.color = 'red';
    event.target.style.cursor = 'pointer';
})

// Change it back
logoHeading.addEventListener('mouseout', (event) => {
    event.target.style.color = 'black';
})

// Please sub on clicking logo
logoHeading.addEventListener('click', (event) => {
    alert('Please subscribe for updates!');
})

// Change button to purple
// Change text
let button1 = document.querySelectorAll('.destination .btn')[0]
button1.addEventListener('click', (event) => {
    button1.style.background = 'purple'
    button1.innerHTML = 'Smash!'
})

// Change button to blue
let button2 = document.querySelectorAll('.destination .btn')[1]
button2.addEventListener('dblclick', (event) => {
    button2.style.background = 'blue'
    button2.innerHTML = 'Double Click!'
})

// Change button to orange
let button3 = document.querySelectorAll('.destination .btn')[2]
button3.addEventListener('mouseenter', (event) => {
    button3.style.background = 'orange'
    button3.innerHTML = 'Orange Version'
})

// Change the text back
button3.addEventListener('mouseleave', (event) => {
    button3.style.background = '#17A2B8'
    button3.innerHTML = 'Sign Me Up!'
})

// Change home link to blue on mouseover
const linksin = document.querySelectorAll('a');
for (var i = 0; i < linksin.length; i++) {
    linksin[i].addEventListener('mouseover', (event) => {
        event.target.style.color = 'blue'
        // console.log("target:", event.target);
    });
}


// Change it back
const linksout = document.querySelectorAll('a');
for (var i = 0; i < linksout.length; i++) {
    linksout[i].addEventListener('mouseout', (event) => {
        event.target.style.color = 'black'
        // console.log("target:", event.target);
    });
}


// Page loaded
window.addEventListener('load', (event) => {
    alert("The Page Loaded");
});


// Change home link background to pink
const formChange = document.querySelector('a');
formChange.addEventListener('focus', (event) => {
    event.target.style.background = 'pink';
});


// Change it back
formChange.addEventListener('blur', (event) => {
    event.target.style.background = 'white';
});


// Prevent default for nav items
const links = document.querySelectorAll('a');
for (var i = 0; i < links.length; i++) {
    linksin[i].addEventListener('click', (event) => {
        event.preventDefault();
        // prevent default refresh on anchors
    });
}


// Contact form key position
let inputFields = document.querySelectorAll('.form-contact input');
for (let i = 0; i < inputFields.length; i++) {
    inputFields[i].addEventListener('keyup', (event) => {
        console.log('keyup: ', event.target.value);
        inputFields[i].addEventListener('keydown', (event) => {
            console.log('keydown: ', event.target.value)
            inputFields[i].addEventListener('input', (event) => {
                console.log('input: ', event.target.value)
            })
        })
    })
}

// Stop propagation
const textContent = document.querySelector('.text-content');
textContent.addEventListener('click', (event) => {
    event.target.style.background = 'blue';
})
const textContentParagraph = document.querySelector('.text-content p');
textContentParagraph.addEventListener('click', (event) => {
    event.stopPropagation();
    event.target.style.color = 'white';
});

const imageContent = document.querySelector('.img-content');
imageContent.addEventListener('click', (event) => {
    alert('Image Div');
})

const imageContent2 = document.querySelector('.img-content img');
imageContent2.addEventListener('click', (event) => {
    event.stopPropagation();
    alert('Image');
});