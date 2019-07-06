$(document).ready(function () {
    $(".close-res").click(function()
    {
        
        $(".gray").css("display","none");
        $(".menu-res-body").css("display","none");
        $(".menu-res-body").css("left","-300px");
        $(".menu-res").attr("data-toggle", "close");

    })
    $(".menu-res").click(function () {
        let toggle = $(".menu-res").attr("data-toggle");
        
        if (toggle == "close") 
        {
            $(".gray").css("display","block");
           $(".menu-res-body").css("display","block");
         //$(".menu-res-body").animate({left:0},500);

           $(".menu-res-body").css("left","0px")
            $(".menu-res").attr("data-toggle", "open");
        } else {
            $(".gray").css("display","none");
            $(".menu-res-body").css("display","none");
            $(".menu-res-body").css("left","-300px");
            $(".menu-res").attr("data-toggle", "close");
        }
    })

})