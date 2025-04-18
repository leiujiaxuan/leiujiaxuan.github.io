// This function runs whenever viewport is changed
function updatecontentsize(img1,img2,img3,overlay1,overlay2,overlay3)  {
    var vpwidth = window.innerWidth;
    updateoverlay_width(img1,overlay1);
    updateoverlay_width(img2,overlay2);
    updateoverlay_width(img3,overlay3);

    // below changing maximum width of every image with class=.img in the webpage based on currect viewport width
    if (vpwidth < 1200){
        // change every images maxwidth to be the same as textbox width
        let descriptionbox = document.querySelector('.description');
        let textwidth= descriptionbox.offsetWidth;
        let image = document.querySelectorAll('.img');

        // Apply styles to each '.img' element, changing the width
        image.forEach(image => {
            let newrule = textwidth + "px";
            image.style.maxWidth = newrule; // Update max-width
        });
    }
    else {
        // change every image maxwidth to 400px
        let image = document.querySelectorAll('.img');

        // Apply styles to each '.img' element
        image.forEach(image => {
            image.style.maxWidth = "400px"; // Update max-width
        });
    }
}

// This function change image's overlay text width to be same as textbox
function updateoverlay_width(imgnameID,overlayID){
    var picture, width, overlay;
    picture = document.getElementById(imgnameID);
    width = picture.width;
    overlay = document.getElementById(overlayID);
    let str = width + "px";
    overlay.style.width=str;
}

// ******* script for checking whether content is in viewport and update the classes when 
//          the content is in viewport 
//     e.g: class="container"  -->  class="container in-view-slide-left"
//     added classes will be remove when content is not in viewport
//     e.g: class="container in-view-slide-left" --> class="container"

    document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('container')){
                entry.target.classList.add('in-view-slide-left');
                entry.target.classList.remove('fade-out');
                return;
            }
            if (entry.target.classList.contains('container-reverse')){
                entry.target.classList.add('in-view-slide-right');
                entry.target.classList.remove('fade-out');
                return;
            }
        }
        entry.target.classList.add('fade-out');
        entry.target.classList.remove('in-view-slide-left');
        entry.target.classList.remove('in-view-slide-right');
       
    });
    },{ threshold: [0.25] });


    // select classes: .container, .container-reverse
    const allAnimatedElements1 = document.querySelectorAll('.container');
    const allAnimatedElements2 = document.querySelectorAll('.container-reverse');

    // Add the observer to each of those elements
    allAnimatedElements1.forEach((element) => observer.observe(element));
    allAnimatedElements2.forEach((element) => observer.observe(element));
    }); 

    // listen to resizing browser, run updatecontentsize() when browser is resized
    window.addEventListener("resize", () => updatecontentsize(img1id,img2id,img3id,overlay1,overlay2,overlay3));

    // update all content's size inside webpage
    updatecontentsize(img1id,img2id,img3id,overlay1,overlay2,overlay3);
    // this function is run to fix incorrect width of image overlay text when page loaded
    setInterval(()=>{
        updatecontentsize(img1id,img2id,img3id,overlay1,overlay2,overlay3);
    },1000);
    


// code below is not being used 

// ******* select all .img element and add eventlistener to the .img class.
//  Whenver image with class ='.img' is clicked, it will toggle the overlay text opacity (1 or 0)

    // let queryimg = document.querySelectorAll('.img');
    // queryimg.forEach(element => {
    //     element.addEventListener('click',function(){
    //         console.log("image is clicked");
    //         let queryoverlay = document.querySelectorAll('.overlay');
    //         queryoverlay.forEach(element => {
    //             // Toggle opacity between 1  and 0 
    //             element.style.opacity = element.style.opacity === '1' ? '0' : '1';
    //         });
    //     });
    // });
