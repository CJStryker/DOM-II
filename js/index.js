// Your code goes here
/**
// #1 Single click to change background color / color of text
const subHeader1 = document.querySelector("h2");

subHeader1.addEventListener("click", e => {
    e.target.style.backgroundColor = "green";
    e.target.style.color = "yellow";
});

// #2 Double click body for new background color
const bodyOfPage = document.querySelector("body");

bodyOfPage.addEventListener("dblclick", e => {
    e.target.style.backgroundColor = "yellow";
});

// #3 Mouse Over first paragraph to increase fontSize
const firstParagraph = document.querySelector("p");
firstParagraph.addEventListener("mouseover", e => {
    e.target.style.fontSize = "2.5rem";
});

// #4 Mouse enter to change button styling
const botButtons = document.getElementsByClassName("btn");
botButtons[0].addEventListener("mouseenter", e => {
    e.target.style.color = "yellow";
    e.target.style.backgroundColor = "green";
});

botButtons[1].addEventListener("mouseenter", e => {
    e.target.style.color = "red";
    e.target.style.backgroundColor = "blue";
});

botButtons[2].addEventListener("mouseenter", e => {
    e.target.style.color = "black";
    e.target.style.backgroundColor = "white";
});

// #5 Mouse Leave to change font style of buttons
botButtons[0].addEventListener("mouseleave", e => {
    e.target.style.fontFamily = "verdana";
});
botButtons[1].addEventListener("mouseleave", e => {
    e.target.style.fontFamily = "Candara";
});
botButtons[2].addEventListener("mouseleave", e => {
    e.target.style.fontFamily = "Futara";
});

// #6 Mouse move to make first img disappear
const pageImg = document.getElementsByTagName("img");
pageImg[0].addEventListener("mousemove", e => {
    e.target.style.display = "none";
});

// #7 mouse leave to make second image disappear
pageImg[1].addEventListener("mouseleave", e => {
    e.target.style.display = "none";
});

// #8 Keypress to change background color
bodyOfPage.addEventListener("keypress", e => {
    e.target.style.backgroundColor = "red";
});

// #9 Wheel Event to change font of the body
bodyOfPage.addEventListener("wheel", e => {
    e.stopPropagation(); // Stop propogation stops whole page -> bg yellow
    e.target.style.backgroundColor = "orange";
});

// #10 Copy to clipboard alerts
bodyOfPage.addEventListener("copy", e => {
    e.target.style.fontSize = "5.8rem";
});

// preventDefault to make the links not refresh page

const navLinks = document.querySelectorAll("a");
navLinks[0].addEventListener("click", e => {
    e.preventDefault();
});
navLinks[1].addEventListener("click", e => {
    e.preventDefault();
});
navLinks[2].addEventListener("click", e => {
    e.preventDefault();
});
navLinks[3].addEventListener("click", e => {
    e.preventDefault();
}); */

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
 