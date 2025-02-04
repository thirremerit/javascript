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

$('#btn3').click(function(){
    
})


