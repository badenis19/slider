let images = [
    "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1581293738311-c1e14c2513dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1581337204873-ef36aa186caa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1038&q=80"
]

let previous = document.querySelector("#previous");
let next = document.querySelector("#next");
let slider = document.querySelector("#slider");

let number = 0;


// to go to next image
next.addEventListener(("click"), () => {
    if (number > images.length - 2){
        number = 0 ;
        slider.src = images[number];
    } else {
        number++;
        slider.src = images[number];
    }
})

// to go to previous image
previous.addEventListener(("click"), () => {
    if (number < 1){
        number = 0 ;
        slider.src = images[number];
    } else {
        number--;
        slider.src = images[number];
    }
})

// function that will be called every 2 seconds for the carousel / slideshow
const nextImageFunction = () => {
    if (number > images.length - 2){
        number = 0 ;
        slider.src = images[number];
    } else {
        number++;
        slider.src = images[number];
    }
}

// for the image to change every 2s
// setInterval repeats the execution of the function continuously.
setInterval(nextImageFunction, 2000);
