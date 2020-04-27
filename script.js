// Slide to be shown
var slideIndex = 1;
// Show the selected slide
showSlides(slideIndex);

// Function that moves to previous or next slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function that changes to the slide selected in thumbnail
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    // Select all slides
    var slides = document.getElementsByClassName("mySlides");
    // Select all thumnails
    var thumbnails = document.getElementsByClassName("thumbnail");
    // Select the slide caption
    var captionText = document.getElementById("caption");

    // If on last slide and going forward then go to first slide
    if(n > slides.length) {
        slideIndex = 1;
    }
    // If on first slide and going backwards then go to last slide
    else if(n < 1) {
        slideIndex = slides.length;
    }

    // Hide each slide 
    for(i=0;i< slides.length;i++) {
       slides[i].style.display = "none";
    }
    // Hide each thumbnail
    for(i=0;i< thumbnails.length;i++) {
        thumbnails[i].className = thumbnails[i].className.replace(" active", "");
    }

    // Show the current slide
    slides[slideIndex-1].style.display = "block";
    // Show the current slide's thumnail 
    thumbnails[slideIndex-1].className += " active";
    // Set the caption to the image's alt text
    captionText.innerHTML = thumbnails[slideIndex-1].alt;
}

