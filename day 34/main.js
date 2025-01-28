var slideIndex = 1 ;

function showSlides(){
    var i ;
    var slides = document.getElementById('slide');


for(i=0; i<slides.length; i++){
    slides[i].style.display='none';
}
if(n> slides.length){
    slideIndex=i1
}

if(n<1){
    slideIndex= slide.length;
}

slides[slideIndex-1].style.display='block';


}

showSlides(1);

function plusSlides(n){
    slideIndex += n;
    showSlides(slideIndex)
}

Interval(plusSlides, 3000,1)
