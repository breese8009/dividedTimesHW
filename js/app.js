  $(document).ready(function(){
    //click function for menu
    $("#primary-nav li").on("click",function(event){
      event.preventDefault();

  //var for links
      var newHref=$(this).find("a").attr("href");
      //if/else statements 
      if ($(this).hasClass("active")) {

       
        $("#primary-nav li").removeClass("active");
        $("#slide-down").slideUp();
        

      } else {

        $(newHref).show();
        $(newHref).siblings().hide();

        $("#primary-nav li").removeClass("active");
      $("#slide-down").slideDown();
      $(this).addClass("active");

      }


    });

    $("p").on("mouseenter",function(){

      $("p").css("background-color","yellow");
    });

    $("p").on("mouseleave",function(){

      $("p").css("background-color","white");
    });

    $("h1").on("click",function(){

  $("h1").animate({"opacity":".25"});


    });

  });