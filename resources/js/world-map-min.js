$(function(){let t=$(".tooltip"),e=$("[data-tooltip]"),i=$("#tabs_slider");e.hover(function(){$("[data-tooltip]").removeClass("selected"),$(this).addClass("selected");var e=$(this).data("shiftx")?$(this).data("shiftx"):0,i=$(this).data("shifty")?$(this).data("shifty"):0,s=this.getBBox(),o=s.y-26+i,a=s.x+s.width+9+e;t.find("text").text($(this).data("tooltip"));let n=t.find("text")[0].getBBox().width;t.find("rect").attr({width:n+54}),t.attr({transform:"translate("+a+","+o+")"}).show()},function(){}),e.on("click",function(){let t=$(this).data("id");if(i.length){let e=$("header.header"),s=e.length?e.outerHeight(!0):0,o=i.find("#"+t);if(o.length&&i.has(".slick-initialized")){let t=o.closest(".slick-slide").data("slick-index");""!==t&&$.when(i.slick("slickGoTo",t)).then(function(){$("html,body").animate({scrollTop:o.offset().top-s,easing:"easeOutQuart"},1500)})}}}),$(".slick-dots li").on("click",function(){if(i.length){let t=$("header.header"),e=t.length?t.outerHeight(!0):0;$("html,body").animate({scrollTop:i.offset().top-e,easing:"easeOutQuart"},500)}});let s=jQuery(document.getElementsByClassName("locations__slider"));s.length&&(s.not(document.getElementsByClassName("slick-initialized")).slick({slide:".other-locations__item",infinite:!1,dots:!0,arrows:!1,fade:!1,speed:800,mobileFirst:!0,responsive:[{breakpoint:659,settings:"unslick"},{breakpoint:480,settings:{slidesToShow:1}}]}),$(window).on("orientationchange resize",function(){s.slick("resize")}))});