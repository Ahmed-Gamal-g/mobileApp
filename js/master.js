$(document).ready(function(){

 $(".lef").click(function(){

    $(".cont3").slideDown(2000)
    $(".cont4").slideDown(2000)


    $(".cont3").css({
        "display" : "flex",
    })

    $(".cont4").css({
        "display" : "flex",
    })

    $(".lef").hide(2000)
    $(".leef").show(2000)

    
    

   

 })

 $(".leef").click(function(){

    $(".cont3").slideUp(2000)
    $(".cont4").slideUp(2000)


    $(".cont3").css({
        "display" : "flex",
    })

    $(".cont4").css({
        "display" : "flex",
    })

    $(".leef").hide(2000)
    $(".lef").show(2000)

    


   

 })


})