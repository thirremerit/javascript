//$(window).ready(function(){
//    alert("its working!")
//})
$('li').click(function(){
    alert("click")
})
$('#btn').click(function(){
    $("#h1").text("i like it");
    $("#h1").append(" a lot");
})
$('#btn2').on('click',function(){
    console.log('btn 2 is clicket')
})
$('#mydiv').click(function(){
    $(this).addClass('clicked');
})

.find('span')
.attr('title','Hover over me')

$('#btn3').click(function(){
    $(".hidden").show('slow');
    
})

$('#btn4').click(function(){
    $(".hidden").hide();
    
});

$('#square').click(function(){
    $("#square").animate({
        'width':'200px',
        'height':'200px',
    });
})

$('.testing').click(function(){
    $(".testing").animate({
        'left':'+=50px',
        'fontsize':'30px',
        'opacity':0.25
    },300,
    function(){
        console.log('animation is completed')
    }
);
})

