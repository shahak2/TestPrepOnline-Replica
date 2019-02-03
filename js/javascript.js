$(document).ready(function() /* navbar submenu */
{
  $('.dropdown-submenu a.sub').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
});

$( window ).on( "load", function() { //managing the picture's sizes on page load
    var $window = this;
    if($window.innerWidth<550)
         {
             $("#image").children().css("height", "100px");
             $("#row2").children().css("text-align", "center");
         }
    if(this.innerWidth<550) //managing the picture's sizes on window  resize
         {
             $(".longList").show();
             $(".shortList").hide();

         }    
});
    
$(window).bind('resize', function () { //managing the picture's sizes on window  resize

     if(this.innerWidth<550)
         {
             $("#image").children().css("height", "100px");
             $("#row2").children().css("text-align", "center");
         }
        else
         {
             $("#image").children().css("height", "200px");
             $("#row2").children().css("text-align", "left");
         }
    
    if(this.innerWidth<550) 
         {
             $(".longList").show();
             $(".shortList").hide();

         }
        else
         {
             $(".shortList").show();
             $(".longList").hide();

         }
 
});

$(document).ready(function(){
    var packs = $( "#packselector" ).next().children();    /* filtering packs*/
    packs.click(function() {
            $("#removeFilter").removeClass("hidden");
            var selected = packs.index(this)+1;
            for(var i=1;i<9;i++)
                {
                    $( "#pack"+i ).hide();
                }
            $( "#pack"+selected ).fadeIn();
    });
    
    
    $("#removeFilter").click(function()
    {
        for(var i=1;i<9;i++)
            {
                $( "#pack"+i ).fadeIn();
            }
        $("#removeFilter").addClass("hidden");
    });
    

    var current;  /* prev/next review buttons */
    
    $( "#next" ).on("click", function()
        {
            current = $("#page").children(".active").index();
            setTimeout(function(){
                switch(current)
                    {
                        case 1: 
                        case 2: 
                                current++;
                                $("#page").children(":eq("+current+")").children().click();
                                break;
                        default: $("#page").children(":eq(3)").children().click();
                        current = 3;

                    }
            },100);
        });
    $( "#prev" ).on("click", function()
    {
    var current = $("#page").children(".active").index();
        setTimeout(function(){
            switch(current)
                {
                    case 2:
                    case 3: 
                        current--;
                        $("#page").children(":eq("+current+")").children().click();
                        break;
                    default: $("#page").children(":eq(1)").children().click();
                             current = 1;
                }
        },100);
    });
    
    /*  ---------------navbar functions ---------*/
    
    $( "#browse" ).hover(
    function() {
        $( ".nav_box" ).children(".dropdown-menu").slideToggle(450); 
        $( "#browse" ).css("background-color","#e8e8e8");
    }, function() {
        $( "#browse" ).css("background-color","white");
        $( "#browse" ).find(".dropdown-menu").slideUp(350); 
    });
    
    $( ".sub" ).parent().hover(
    function() {
        $(this).children("ul").show();
    }, function() {
        $(this).children("ul").hide();
    });

    /*  ---------------Mobile navbar functions ---------*/
    var search_bar_status = 'closed';
    var menu_status = 'closed';
    
    $("#mobile_search").click(function()
    {
        search_bar_status = 'open';
        $(".search_filter").css({"left":"100%"});
        $(".search_filter").css({"display": "block"});
        $(".search_filter").animate({"left":"-=100%"},300);   
        $("#page-cover").css("opacity",0.6).fadeIn(300);
        setTimeout(function(){
                $(".search_filter").children("input").focus();
            },350);
        
        if(menu_status === 'open')
                {
                    $("#phone_menu").animate({"left":"-=100%"},400);   

                    setTimeout(function(){
                            $("#phone_menu").css({"display": "none"});
                        },400);

                    menu_status = 'closed';
                }
    });
    
    $("#page-cover").click(function()
           {
                $("#page-cover").css("opacity",0.6).fadeOut(300); 
        
                if(menu_status === 'open')
                {   
                    $("#phone_menu").animate({"left":"-=100%"},300);   

                    setTimeout(function(){
                            $("#phone_menu").css({"display": "none"});
                        },150);

                    menu_status = 'closed';
                }

                if(search_bar_status = 'open')
                    {
                        search_bar_status = 'closed';
                        
                        $(".search_filter").animate({"left":"+=100%"},500);
                        
                   
                        setTimeout(function(){
                            $(".search_filter").css({"display": "none"});
                        },550);
                    } 
            });
    
    $("#exit_search").click(function()
            {
                $("#page-cover").css("opacity",0.6).fadeOut(300); 
                $(".search_filter").animate({"left":"+=100%"},400);   
                setTimeout(function(){
                        $(".search_filter").css({"display": "none"});
                    },550);
        
                search_bar_status = 'closed';
            });
    
    
    
    
    $("#menu").click(function(){
        if(menu_status === 'closed')
            {
                $("#phone_menu").css({"display": "block"});
                $("#phone_menu").animate({"left":"+=100%"},400);   
                $("#page-cover").css("opacity",0.6).fadeIn(300);

                menu_status = 'open';
            }
        else if(menu_status === 'open')
            {
                $("#phone_menu").animate({"left":"-=100%"},200);   
                $("#page-cover").css("opacity",0.6).fadeOut(300);
                               
                setTimeout(function(){
                        $("#phone_menu").css({"display": "none"});
                    },250);

                menu_status = 'closed';
            }        
        
        });
 });


