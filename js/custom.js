$(document).ready(function(){
    
    
   
    $(".gnb >li").mouseenter(function(){
        
//        $(this).children("ul").stop().show();
          $(".gnb > li").children("ul").stop().show();
          $(".gnbWrap").stop().show();
    });

    $(".gnb >li").mouseleave(function(){
        
//        $(this).children("ul").stop().hide();
        $(".gnb > li").children("ul").stop().hide();
        $(".gnbWrap").stop().hide();
    });

    $(".txt > li").mouseenter(function(){
        
        $(".txt > li").removeClass("on");
        $(this).addClass("on");
        
    });
    
    $(".tab_menu li").mouseenter(function(){
        
        var list = $(this).index();
        
        $(".tab_menu li").removeClass("on");
        $(".tab_menu li").eq(list).addClass("on");
        
    });
    $(".tab_menu li").click(function(){
        
        var list = $(this).index();
        
        $(".tab_menu li").removeClass("on");
        $(".tab_menu li").eq(list).addClass("on");
        
        $(".tab_box > div").stop().hide();
        $(".tab_box > div").eq(list).stop().show();
        
        
    });
    

    

});