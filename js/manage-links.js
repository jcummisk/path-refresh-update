   $(document).ready(function(){   
var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);
var darkColor = rootStyles.getPropertyValue('--dark-color');
   $( "li.has-children" ).click( function() {
            var act = $(this).siblings();
            $(this).addClass( "active" );
            $(this).siblings().removeClass( "active" );
            $(this).children("ul").addClass("child-active" );
            $("ul.child-active li:first-child").children("a").addClass( "child-active" );
       
       if ($("li.has-children").is("active")){
           $(this).children().removeClass("child-active");
       }
});
       $("#mobile-btn").click( function() {
        $("ul#mobile-switch").toggleClass("mobile-false").toggleClass("mobile-true");
        $("div.content-wrapper").css("width","96%");
        $("div.content-wrapper").css("background-position","80px 8px");
        $("nav.cd-side-nav").css("width","53px");
        $("div.breadcrumbs").css("width","96%");
        $("div.scrolling-container").css("width","57px");
        $("#desktop").toggleClass("off");
        $("li.action-btn").toggleClass("hidden");
   });
//  $("ul#mobile-switch").mouseenter( function() {
//     $(this).toggleClass("mobile-false").toggleClass("mobile-true");
//        $("#desktop").toggleClass("off");
//        $("div.content-wrapper").css("width","1036px");
//        $("div.content-wrapper").css("background-position","0px 8px");
//        $("nav.cd-side-nav").css("width","214px");
//        $("div.breadcrumbs").css("width","1036px");
//        $("div.scrolling-container").css("width","440px");
//        $("li.action-btn").toggleClass("hidden");
//  });
   $( "div.content-wrapper" ).click( function() {
       if( $(this).is(".reports") ){
       $("li.drilldown").addClass("drilldown-visible");  
        $("div.content-wrapper").addClass("drilldown");  } 
    });
     $("li.has-children").click( function(){
        if( $(this).not(".notifications.active")){
        $("li.drilldown").removeClass("drilldown-visible");
        }
});
       $("#click-drilldown").click(function() {
        $("li.drilldown").removeClass("drilldown-visible");
        $("div.content-wrapper").removeClass("drilldown");
});

     
   $( "a.cd-logo" ).click( function() {
    if( $(this).is('.active-tab') ) {
        $(this).removeClass( "active-tab" );
    }
    else {
        $( "a.cd-logo" ).removeClass( "active-tab" );
        $(this).addClass( "active-tab" );
    }
});
$("#admin").click( function(){
   if( $(this).is('.active-tab') ) { 
    $("ul.manage-links").css("margin-top","54px");
    $("div.overlay").css("display","none");
}
});
$("#switch-accounts").click( function(){
    $("ul.manage-links").css("margin-top","140px");
    $("div.overlay").css("display","block");
});
$("li.action-btn").click( function(){
       $(this).toggleClass("manage-on");
           });
$("li.action-btn").click( function(){
    if( $("ul.manage-links").is(".ui-sortable")){
        $("ul.manage-links").removeAttr("id","sortable");
        $("ul.manage-links").removeClass("ui-sortable");
        $("ul.manage-links").sortable("disable");
        $( "li.active" ).removeClass( "active" );
//        $(".cd-scrolling-container").css("overflow","hidden");
    }
    else {
        $("li.has-children").removeClass("active");
        $("ul.manage-links").attr("id","sortable");
        $("ul.manage-links").removeClass("ui-sortable-disabled");
        $("ul.manage-links").addClass("ui-sortable");
        $("#sortable, #sortable2").sortable({
                connectWith: ".connectedSortable",
                items: "li:not(.ui-state-disabled)",
                dropOnEmpty: true
            }).disableSelection();
//        $("#sortable").disableSelection();
//        $(".cd-scrolling-container").css("overflow","visible");
    }
            $("ul.hidden-links").toggleClass("show-links");
          $("#sortable2").sortable();
});
    $("button#light-on").click( function(){
       $("body").toggleClass("light");
       $("body").toggleClass("flat");
    });
       $("ul.manage-links").mouseover( function(){
           $("ul#sortable2").addClass("show");
       });
        $("ul#sortable2").mouseover( function(){
           $(this).removeClass("show");
       });
    
    $("li.has-children > a").click( function(){
    var ID = $(this).attr('id');
    var className=$('div.content-wrapper').attr('class').split(' ')[1];
    if( $( className ).not(ID)){
        $("div.content-wrapper").removeClass( className );
        $("div.content-wrapper").addClass( ID );
        }
    });
       $("li.has-children > a").click( function(){
        if($("div.content-wrapper").is(".dashboard")){
          $("div#system-widget").css("display","inline-block");
      } else
      if( $("div.content-wrapper").not(".dashboard")){
          $("div#system-widget").css("display","none");
      }
       });
});