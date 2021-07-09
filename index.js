console.log("reached JS");
$(document).ready(function () {
    $("#instruct").hide();



    console.log("reached animation stage");
    //fade out welcome
    $("#welcome").animate({
        opacity: 0,
    }, 3000, function(){
        $("#instruct").show(); 


        //flashing code for instructions

            function loop() {
                $('#instruct').animate({
                    opacity: 0.1
                }, 500).animate({
                    opacity: 0.9
                }, 500, loop);
            }
            loop();




        //fade in code
        $("div.fade").hover(function(){

            var div = $("> div", this);
            div.fadeIn(250);
            $("body").animate({
                backgroundColor: "#5a92d9",
                
            }, 250);
        }, function(){
            //after fade in image go here
        });
      //after welcome sign go here  
    });

    //begin left box move and fade
    $("#boxleft").animate({
        left: ($(window).width() / 2) - 50,

    }, 1000,function(){

        $("#boxleft").animate({
            opacity:0,
        }, 2000);

    });

    //begin right box move and fade
    $("#boxright").animate({
        right: ($(window).width() / 2) - 50,

    }, 1000, function(){
        $("#boxright").animate({
            opacity:0,
        }, 2000);
    });
    
});


   

