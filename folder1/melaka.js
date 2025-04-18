const image1arr = [
    "MelakaImg/red_church.jpg",
    "MelakaImg/red_building.jpg",
    "MelakaImg/victoria_fountain.jpg"
];

const image2arr = [
    "MelakaImg/st-paul_church.jpg",
    "MelakaImg/statue.jpg",
    "MelakaImg/grave.jpg"
];

const image3arr = [
    "MelakaImg/A Famosa.jpg",
    "MelakaImg/man.jpg"
];

const overlay1arr = [
    "Christ Church Melaka",
    "Stadthuys",
    "Queen Victoria's Fountain"
];

const overlay2arr = [
    "Saint Paul's Church",
    "Statue of Francis Xavier",
    "Open grave"
];

const overlay3arr = [
    "A Famosa",
    "Stree Performer"
];

let index1 = 1;
let index2 = 1;
let index3 = 1;

// below function change melaka.html contents' images and texts to the image and text specified in the array above.
function changeImage1(){

    let img = document.getElementById(img1id);
    let overlay = document.getElementById(overlay1);
    // Fade out the image
    img.classList.remove("fade-in");
    img.classList.add("fade-out");
    overlay.classList.remove("fade-in");
    overlay.classList.add("fade-out");
   
    // After the fade-out completes (1 second), change the content and fade in
    setTimeout(()=>{
        overlay.innerHTML = overlay1arr[index1];
        img.src = '';
        img.src = image1arr[index1];
        index1 = index1 + 1;
        if(index1 == image1arr.length)
            index1 = 0;

    // Fade in the updated content
    img.classList.remove("fade-out");
    img.classList.add("fade-in");
    overlay.classList.remove("fade-out");
    overlay.classList.add("fade-in");

    },1000);
}

function changeImage2(){
    let img = document.getElementById(img2id);
    let overlay = document.getElementById(overlay2);
    // Fade out the image
    img.classList.remove("fade-in");
    img.classList.add("fade-out");
    overlay.classList.remove("fade-in");
    overlay.classList.add("fade-out");
    // After the fade-out completes (1 second), change the content and fade in
    setTimeout(()=>{
    overlay.innerHTML = overlay2arr[index2];
    img.src = '';
    img.src = image2arr[index2];
    index2 = index2 + 1;
    if(index2 == image2arr.length)
        index2 = 0;
    // Fade in the updated content
    img.classList.remove("fade-out");
    img.classList.add("fade-in");
    overlay.classList.remove("fade-out");
    overlay.classList.add("fade-in");
    },1000);
}

function changeImage3(){
    let img = document.getElementById(img3id);
    let overlay = document.getElementById(overlay3);
    // Fade out the image
    img.classList.remove("fade-in");
    img.classList.add("fade-out");
    overlay.classList.remove("fade-in");
    overlay.classList.add("fade-out");
    // After the fade-out completes (1 second), change the content and fade in
    setTimeout(()=>{
    overlay.innerHTML = overlay3arr[index3];
    img.src = '';
    img.src = image3arr[index3];
    index3 = index3 + 1;
    if(index3 == image3arr.length)
        index3 = 0;
    // Fade in the updated content
    img.classList.remove("fade-out");
    img.classList.add("fade-in");
    overlay.classList.remove("fade-out");
    overlay.classList.add("fade-in");
    },1000);
}

setInterval(changeImage1,5000);
setInterval(changeImage2,5000);
setInterval(changeImage3,5000);